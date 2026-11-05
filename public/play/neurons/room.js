// The rooms: a share link opens a room on the relay of teoyujie.org, and
// 2 to 5 people see the same view and the same notes (README.md, Rooms).
// The page polls the relay once each second, with one request at a time.

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

// The id of a room (16 bytes, 22 characters) or of a member (9 bytes, 12
// characters), in base64url.
export function newId(bytes = 16) {
  assert(Number.isInteger(bytes) && bytes > 0, "an id has bytes");
  assert(bytes <= 1024, "an id is short");
  const b = crypto.getRandomValues(new Uint8Array(bytes));
  return btoa(String.fromCharCode(...b)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export const roomOfHash = (hash) => {
  assert(typeof hash === "string", "a hash is text");
  assert(hash.length < 4096, "a hash is short");
  return /^#room=([A-Za-z0-9_-]{22})$/.exec(hash)?.[1] ?? null;
};

// The fields that each operation sends, after op, room, member, name and since.
const FIELDS = { create: [], poll: [], leave: [], view: ["view"], note: ["neuron", "text", "base"] };

export class KeyError extends Error {
  constructor() {
    super("This looks like an OpenRouter key. The page does not send keys to the room.");
    assert(this.message.length > 0, "the error has a message");
  }
}

// The body of one request. Only the fields of the protocol go in. A body that
// holds the visitor's key, or text like an OpenRouter key, is refused.
export function body(op, room, member, name, since, fields, secret) {
  assert(FIELDS[op] !== undefined, "an operation is known");
  assert(typeof fields === "object" && fields !== null, "the fields are an object");
  const msg = { op, room, member, name, since };
  for (const f of FIELDS[op]) msg[f] = fields[f];
  const text = JSON.stringify(msg);
  if (/sk-or-/i.test(text) || (secret && secret.length >= 8 && text.includes(secret))) throw new KeyError();
  assert(typeof text === "string", "a body is text");
  return text;
}

function schedule(r, ms) {
  assert(ms >= 0, "a delay is not negative");
  assert(typeof r.url === "string", "the room has a relay");
  clearTimeout(r.timer);
  if (!r.stopped) r.timer = setTimeout(() => step(r), ms);
}

// A reply that is not a transport failure: the state of the room, or its refusal.
function handleReply(r, op, fields, res, data) {
  assert(r.inFlight === false, "the request is done");
  assert(data !== null && typeof data === "object", "a reply is an object");
  assert(typeof op === "string", "an operation is a name");
  assert(typeof res.ok === "boolean", "a reply is ok or not");
  if (res.ok || data.error === "conflict") {
    if (op === "create") r.create = false;
    if (data.notes) r.since = data.seq;
    r.onState(data);
    if (data.error === "conflict") r.onConflict(fields.neuron, fields.text, data);
    schedule(r, r.view !== null || r.notes.length ? 0 : r.interval);
  } else {
    r.onError({ ...data, op, fields });
    if (data.error === "gone" || data.error === "full" || data.error === "exists") r.stopped = true;
    else schedule(r, res.status === 429 ? 10 * r.interval : r.interval);
  }
}

async function step(r) {
  assert(typeof r.interval === "number", "the room has an interval");
  assert(typeof r.fetch === "function", "the room can fetch");
  assert(Array.isArray(r.notes), "the notes are a list");
  r.timer = null;
  if (r.stopped || r.inFlight) return;
  let op = r.create ? "create" : "poll", fields = {};
  if (!r.create && r.view !== null) { op = "view"; fields = { view: r.view }; r.view = null; }
  else if (!r.create && r.notes.length) { op = "note"; fields = r.notes.shift(); }
  let text;
  try { text = body(op, r.room, r.member, r.name(), r.since, fields, r.secret()); } catch (e) {
    r.onError({ error: "key", message: e.message, op, fields });
    schedule(r, op === "poll" || op === "create" ? r.interval : 0);
    return;
  }
  assert(typeof text === "string", "a body is text");
  r.inFlight = true;
  let res, data;
  try {
    res = await r.fetch(r.url, { method: "POST", headers: { "Content-Type": "application/json" }, body: text });
    data = await res.json();
  } catch {
    r.inFlight = false;
    if (op === "view" && r.view === null) r.view = fields.view;
    if (op === "note") r.notes.unshift(fields);
    r.onError({ error: "net", message: "The page cannot reach the room. It tries again." });
    schedule(r, 5 * r.interval);
    return;
  }
  r.inFlight = false;
  if (r.stopped) return;
  handleReply(r, op, fields, res, data);
}

// Joins room, or makes it first when create is true. The callbacks:
// onState(state) after each reply, onConflict(neuron, text, state) when a note
// changed before the save of this member came, and onError({ error, message, op, fields })
// with the fields of the operation that failed.
// name() and secret() give the name of the member and the visitor's key now.
export function joinRoom({ url, room, member, name, secret, create = false, onState, onConflict, onError,
  fetch = globalThis.fetch, interval = 1000 }) {
  assert(typeof url === "string", "the relay is an address");
  assert(typeof name === "function" && typeof secret === "function", "name and secret are functions");
  const r = {
    url, room, member, name, secret, create, onState, onConflict, onError, fetch, interval,
    since: -1, stopped: false, timer: null, inFlight: false,
    view: null,               // the latest view that is not sent yet
    notes: [],                // the notes that are not sent yet, in sequence
  };
  assert(Number.isFinite(interval) && interval > 0, "the interval is positive");
  const kick = () => {
    assert(typeof r.stopped === "boolean", "stopped is a flag");
    assert(Array.isArray(r.notes), "the notes are a list");
    if (!r.inFlight) schedule(r, 0);
  };
  schedule(r, 0);
  return {
    // A view that waits to go out is newer than the view in a reply.
    viewPending: () => {
      assert(r.view === null || typeof r.view === "string", "a view is text or nothing");
      assert(Array.isArray(r.notes), "the notes are a list");
      return r.view !== null;
    },
    setView(v) {
      assert(v !== undefined, "a view is given");
      assert(typeof r.stopped === "boolean", "stopped is a flag");
      r.view = JSON.stringify(v); kick();
    },
    note(neuron, text, base) {
      assert(typeof text === "string", "a note is text");
      assert(Array.isArray(r.notes), "the notes are a list");
      r.notes.push({ neuron, text, base }); kick();
    },
    leave(beacon = globalThis.navigator?.sendBeacon?.bind(globalThis.navigator)) {
      assert(beacon === undefined || typeof beacon === "function", "the beacon is a function or nothing");
      assert(typeof r.url === "string", "the room has a relay");
      r.stopped = true;
      clearTimeout(r.timer);
      try { beacon?.(url, body("leave", room, member, name(), r.since, {}, secret())); } catch { /* a key in the name */ }
    },
  };
}
