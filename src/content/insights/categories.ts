export const CATEGORIES = [
  {
    slug: "channel-intelligence",
    title: "Channel Intelligence",
    description:
      "How SMS, Zalo ZNS, Viber and Email actually perform in Vietnam — benchmarks, costs, and routing decisions.",
  },
  {
    slug: "engagement-strategy",
    title: "Engagement Strategy",
    description:
      "Lifecycle programmes, chat-first CX, and the operating models behind owned-audience growth.",
  },
  {
    slug: "ai-and-data",
    title: "AI & Data",
    description:
      "CDP, first-party data and AI campaign optimisation for Vietnamese enterprises.",
  },
  {
    slug: "industry-playbooks",
    title: "Industry Playbooks",
    description:
      "Sector-specific plays for retail, FMCG, finance and mobile-first businesses.",
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export const getCategory = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug);
