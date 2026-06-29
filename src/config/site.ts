export const siteConfig = {
  name: "New Path Walker",
  shortName: "NPW",
  tagline: "Faith - Direction - Purpose",
  url: "https://thejoshidesigns.github.io/npwcodex",
  description:
    "A secure, faith-centered community platform for people experiencing major life transitions.",
  supportEmail: "support@newpathwalker.com",
} as const;

export type SiteConfig = typeof siteConfig;
