# Verification of limits.tsv

Checked on 2026-11-15. A separate script reopened each downloaded file, checked its sha256 against the TSV, and confirmed each value:

- **PDF rows:** it found the quote on the stated page of the pdftotext output, with whitespace collapsed. It parsed all 71 rows (1954 to 2024) of Table 7 by column position and confirmed that the stated year is the peak.
- **860M rows:** it recomputed each sum from the xlsx and confirmed that the stated year is the peak.
- **INTL rows:** it found both quoted data points in the raw series line of INTL.txt, recomputed the difference and confirmed that the stated year is the largest one-year increase.

All 15 rows passed. "Verified" below means the number is what the document says, or what it gives when summed or differenced as stated. Caveats on what the number means are listed with each row.

The verification scripts ran in a temporary scratch directory with `python3 -I`; the verification output is recorded below.

## IAEA PRIS, Nuclear Power Reactors in the World, RDS-2/45 (2025 edition, data to end of 2024)

- `nuclear_world_gw_year_peak`: verified (31,129 MW(e) in 1985).
  - It is net capacity. Table 7's header only says MW(e). But the summary on PDF p.9 says "72.5 GW(e) (72 reactors) of net capacity" were connected since the start of 2014, and the Table 7 rows for 2014 to 2024 add up to exactly 72,500 MW and 72 units.
  - Uncertain: the table may show each unit's current net capacity rather than its rating at connection.
  - 1984 is almost the same (31,038 MW(e)).
- `nuclear_world_reactors_connected_peak`: verified. 33 reactors, tied in 1984 and 1985; the year column says 1985 because that year also has the highest MW.
- `nuclear_world_gw_year_2024`: verified (6,803 MW(e), 6 reactors). Table 7 and the note on PDF p.18 agree.
  - Uncertain: 2024 is not the most recent full year. 2025 has ended, but this edition (the newest on the IAEA publications server) stops at 2024.
  - The PRIS website (pris.iaea.org, which redirects to pris-stats.iaea.org) is now a Power BI app with no downloadable table or public API, so no 2025 figure was obtained.
- `nuclear_world_reactors_connected_2024`: verified (6). Same 2024 caveat.
- `nuclear_world_construction_starts_gw_year_peak`: verified (41,845 MW(e), 43 units, 1976). Construction starts, not grid connections.
- `nuclear_world_operating_gw_end2024`: verified (377,014 MW(e), 417 reactors, net).

## EIA Form 860M, Preliminary Monthly Electric Generator Inventory, September 2026 (released 2026-10-23)

These six rows are computed sums. No single cell holds the number; the `where` column gives the filter.

Caveats that apply to all six:

- **Preliminary data.**
- **Utility-scale only:** generators of 1 MW and over. Small-scale rooftop solar is not included.
- **50 states and DC only:** the Puerto Rico sheets (Operating_PR, Retired_PR) are excluded.
- **Operating year:** additions are dated by each generator's "Operating Year".
- **Current nameplate:** capacity is today's nameplate, not the rating at commissioning.
- **Retired generators:** the inventory only lists generators that are operating now or retired since 2002. Older years can therefore be undercounted.
- **2026 is partial:** it only runs to September.

Rows:

- `us_solar_gw_year_peak`: verified as computed (31.168 GW nameplate AC in 2024; 2025 was 29.709 GW).
  - Uncertain: nameplate is AC. EIA reports DC separately in column Y, which was not used.
- `us_wind_gw_year_peak`: verified as computed (14.895 GW in 2020).
- `us_batteries_gw_year_peak`: verified as computed (16.372 GW power capacity in 2025; 2026 to September is 12.452 GW).
  - Energy capacity (MWh) was not summed.
- `us_gas_gw_year_peak`: verified as computed (68.586 GW nameplate in 2002; net summer 59.650 GW).
  - Uncertain: the nameplate and net summer figures differ by about 9 GW. Pick the basis that matches the claim being checked.
  - Includes 3.4 GW of 2002 units retired since then. Excludes "Other Natural Gas" (fuel cells and similar).
- `us_nuclear_gw_year_peak`: UNCERTAIN, treat as a lower bound (10.368 GW nameplate, 9.518 GW net summer, 1974).
  - For nuclear, the Retired sheet only goes back to retirements in 2013. Units retired earlier (for example Zion, Trojan, Rancho Seco) are missing, and current nameplates include later uprates.
  - The sum is verified, but the true US peak year and its size may differ.
- `us_all_tech_gw_year_peak`: verified as computed (70.149 GW nameplate in 2002; 2025 is second at 57.796 GW). Same caveats as above.

## EIA International Energy Data, bulk file INTL.zip (no API key; file dated 2026-11-11, capacity series updated 2026-02-24 to 2026-04-01)

- `world_solar_gw_year_net_peak`: verified as computed (448.994 GW, 2024).
  - Uncertain: this is the change in installed capacity between year-ends. It is net of retirements, not gross additions.
  - The series ends in 2024.
  - EIA does not say whether the solar figures are AC or DC; national sources mix the two.
- `world_wind_gw_year_net_peak`: verified as computed (116.410 GW, 2023; 2024 was 114.135 GW). Same net-change caveat.
- `world_all_capacity_gw_year_net_peak`: verified as computed (676.070 GW, 2024). Same net-change caveat.

## SEC EDGAR (TSMC 20-F, Micron or Intel 10-K): NOT OBTAINED

- data.sec.gov accepted the User-Agent `teoyujie-research/1.0 (research use)`. The TSMC submissions index was saved as edgar-tsmc/CIK0001046179.json. It lists the FY2025 20-F (accession 0001628280-26-025362, tsm-20251231.htm) and the FY2024 20-F (0001193125-25-083423, d896993d20f.htm).
- www.sec.gov refused both filing documents with HTTP 403, a page titled "Your Request Originates from an Undeclared Automated Tool". Stopped on EDGAR rather than adding contact details.
- There are no TSMC, Micron or Intel wafer-capacity rows.
