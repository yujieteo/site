// Physical limits for the Fermi check of a bet: the most ever built or made in a year, from the named
// documents. research/bets/limits.tsv holds each figure with its file, SHA-256, page and quote.
export interface Limit {
  value: number;
  unit: string;
  year: number;
  by: string;
  url: string;
}

export const LIMITS: Record<string, Limit> = {
  nuclear_world_gw_year_peak: { value: 31.129, unit: "GW of nuclear connected to grids worldwide in a year", year: 1985, by: "IAEA, Nuclear Power Reactors in the World 2025, Table 7", url: "https://www-pub.iaea.org/MTCD/Publications/PDF/RDS-2-45_web.pdf" },
  nuclear_world_reactors_connected_peak: { value: 33, unit: "reactors connected to grids worldwide in a year", year: 1985, by: "IAEA, Nuclear Power Reactors in the World 2025, Table 7", url: "https://www-pub.iaea.org/MTCD/Publications/PDF/RDS-2-45_web.pdf" },
  nuclear_world_construction_starts_gw_year_peak: { value: 41.845, unit: "GW of nuclear starting construction worldwide in a year", year: 1976, by: "IAEA, Nuclear Power Reactors in the World 2025, Table 7", url: "https://www-pub.iaea.org/MTCD/Publications/PDF/RDS-2-45_web.pdf" },
  us_solar_gw_year_peak: { value: 31.168, unit: "GW of US utility-scale solar added in a year", year: 2024, by: "EIA Form 860M, September 2026", url: "https://www.eia.gov/electricity/data/eia860m/xls/september_generator2026.xlsx" },
  us_wind_gw_year_peak: { value: 14.895, unit: "GW of US wind added in a year", year: 2020, by: "EIA Form 860M, September 2026", url: "https://www.eia.gov/electricity/data/eia860m/xls/september_generator2026.xlsx" },
  us_batteries_gw_year_peak: { value: 16.372, unit: "GW of US battery storage added in a year", year: 2025, by: "EIA Form 860M, September 2026", url: "https://www.eia.gov/electricity/data/eia860m/xls/september_generator2026.xlsx" },
  us_gas_gw_year_peak: { value: 68.586, unit: "GW of US natural gas plants added in a year", year: 2002, by: "EIA Form 860M, September 2026", url: "https://www.eia.gov/electricity/data/eia860m/xls/september_generator2026.xlsx" },
  us_nuclear_gw_year_peak: { value: 10.368, unit: "GW of US nuclear added in a year", year: 1974, by: "EIA Form 860M, September 2026", url: "https://www.eia.gov/electricity/data/eia860m/xls/september_generator2026.xlsx" },
  us_all_tech_gw_year_peak: { value: 70.149, unit: "GW of US generating capacity added in a year", year: 2002, by: "EIA Form 860M, September 2026", url: "https://www.eia.gov/electricity/data/eia860m/xls/september_generator2026.xlsx" },
  world_solar_gw_year_net_peak: { value: 448.994, unit: "GW of world solar added in a year", year: 2024, by: "EIA international data", url: "https://www.eia.gov/opendata/bulk/INTL.zip" },
  world_wind_gw_year_net_peak: { value: 116.41, unit: "GW of world wind added in a year", year: 2023, by: "EIA international data", url: "https://www.eia.gov/opendata/bulk/INTL.zip" },
  world_all_capacity_gw_year_net_peak: { value: 676.07, unit: "GW of world generating capacity added in a year", year: 2024, by: "EIA international data", url: "https://www.eia.gov/opendata/bulk/INTL.zip" },
};
