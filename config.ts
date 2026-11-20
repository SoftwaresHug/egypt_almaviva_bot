// Auto-generated configuration for Almaviva Italy Egypt AutoBot

export const config = {
  botName: "Almaviva Italy Egypt",
  country: "Egypt",
  provider: "Almaviva",
  destination: "Italy",
  loginUrl: "https://egy.almaviva-visa.it/Account/Login",
  centers: [
  "Cairo",
  "Alexandria"
],
  visaCategories: [
  "Tourism",
  "Business",
  "Family Visit",
  "Study",
  "Work",
  "Transit"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
