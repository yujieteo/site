---
title: "SSH Setup Guide"
date: ""
summary: "Practical steps for GitHub SSH authentication and key-based Mac-to-server access."
category: "Systems"
tags: "ssh, github, macos, server, security"
---
## SSH for GitHub

### Step 1 — Check for existing SSH keys

Run `ls -al ~/.ssh`. If you see files like `id_ed25519` and `id_ed25519.pub` you already have a key pair; the `.pub` file is the public key. If not, generate a key pair in the next step.

### Step 2 — Generate an Ed25519 SSH key pair

Run `ssh-keygen -t ed25519 -C "your_email@example.com"`. Accept the default file path by pressing Enter (creates `~/.ssh/id_ed25519` and `~/.ssh/id_ed25519.pub`). Optionally add a passphrase for extra security. Ed25519 is modern, short, and secure.

### Step 3 — Start the SSH agent and add your private key

Start the agent: `eval "$(ssh-agent -s)"`. Then add your key: `ssh-add ~/.ssh/id_ed25519`. The agent holds the unlocked key in memory so you don't retype the passphrase each SSH session.

### Step 4 — Copy the public key to GitHub

Show the public key with `cat ~/.ssh/id_ed25519.pub` and copy the entire single-line string starting with `ssh-ed25519`. In GitHub go to **Settings → SSH and GPG keys → New SSH key**, paste the key, give it a descriptive title, and save. This tells GitHub to trust signatures from your private key.

### Step 5 — Test GitHub SSH authentication

Run `ssh -T git@github.com`. Expected reply: *Hi USERNAME! You've successfully authenticated, but GitHub does not provide shell access.* That confirms authentication is working.

### Step 6 — Use SSH URLs for Git operations

Clone repos with the SSH form: `git clone git@github.com:username/repo.git`. To switch an existing repo from HTTPS to SSH: `git remote set-url origin git@github.com:username/repo.git`. This avoids HTTPS credential prompts.

### Step 7 — Useful GitHub SSH troubleshooting checklist

- Ensure the public key on GitHub exactly matches `~/.ssh/id_ed25519.pub`.
- Check `ssh-add -l` lists your key (agent has it).
- Verbose SSH output: `ssh -vT git@github.com` shows which key is used and any errors.
- File permissions: `chmod 700 ~/.ssh` and `chmod 600 ~/.ssh/id_ed25519`.

### Key-points summary — GitHub SSH

- Public key on GitHub = lock; private key on your machine = key.
- SSH agent caches unlocked private key for sessions.
- Use SSH remote URLs so git uses your key-based auth automatically.

## SSH for MacBook

### Step 1 — Goal & model

Goal: set up SSH from your MacBook to your own server so you can log in securely without typing a password. Model: generate a key pair locally; put the public key in the server user's `~/.ssh/authorized_keys` with correct permissions.

### Step 2 — Check for existing keys on your Mac

Run `ls -al ~/.ssh`. If keys exist (e.g. `id_ed25519` and `id_ed25519.pub`) you can reuse them; otherwise generate a new key in the next step.

### Step 3 — Generate an Ed25519 key pair on the Mac

Run `ssh-keygen -t ed25519 -C "yourname@macbook"`. Accept default path (`~/.ssh/id_ed25519`). Optionally add a passphrase. This produces a private key (`id_ed25519`) and public key (`id_ed25519.pub`).

### Step 4 — Copy the public key to the server (easy method)

If password-based SSH is enabled on the server, run `ssh-copy-id username@server_ip`. This appends your public key to the server's `~/.ssh/authorized_keys` and sets correct permissions.

### Step 5 — Copy the public key to the server (manual fallback)

If `ssh-copy-id` is not available, run:

```sh
cat ~/.ssh/id_ed25519.pub | ssh username@server_ip "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
```

This creates `~/.ssh` if missing, appends the key, and sets secure permissions (critical for SSH to accept keys).

### Step 6 — Test the SSH login

Now run `ssh username@server_ip`. If keys and permissions are correct you will log in without a password. If it still asks for a password, check `~/.ssh/authorized_keys` on the server contains the exact public-key line and permissions (`700` for `~/.ssh`, `600` for `authorized_keys`).

### Step 7 — Debugging remote key problems

- On the client, run `ssh -v username@server_ip` to see which key is offered and server responses.
- On the server, inspect `/var/log/auth.log` (or `/var/log/secure`) for SSHD messages about key acceptance.
- Make sure server's `/etc/ssh/sshd_config` allows `PubkeyAuthentication yes` and that `PasswordAuthentication` is `yes` only during setup; you can disable it later for hardening.

### Step 8 — Optional

Create an SSH config entry for convenience: 

Edit `~/.ssh/config` (create if missing) and add:

```sh
Host myserver HostName 203.0.113.45 User username IdentityFile ~/.ssh/id_ed25519 IdentitiesOnly yes
```

Then connect simply with `ssh myserver`. `IdentitiesOnly yes` ensures the client presents only the specified key, avoiding server rejections due to too many offered keys.

### Step 9 — Optional

Disable password authentication (hardening): 

After confirming key logins work, on the server edit `/etc/ssh/sshd_config` and set `PasswordAuthentication no` and `ChallengeResponseAuthentication no`, then restart SSH (`sudo systemctl restart sshd`). This prevents password-based logins; keep a fallback access method (console, cloud provider serial) in case keys fail.

### Key-points summary — Mac → Server SSH

- Private key stays on Mac; public key goes in the server's `~/.ssh/authorized_keys`.
- Correct file permissions are mandatory: `~/.ssh` = `700`, `authorized_keys` = `600`.
- Use `ssh -v` to debug; check server logs if needed.
- Only disable password auth after verifying key-based logins and ensuring a recovery path.
