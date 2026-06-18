export const CATEGORIES = [
  {
    slug: "messaging-channels",
    title: "CUSTOMER ENGAGEMENT & CX",
    description:
      "How SMS Brandname, Zalo ZNS, Viber, OTP and email actually perform in Vietnam — benchmarks, costs and routing decisions.",
  },
  {
    slug: "customer-engagement",
    title: "Customer Engagement & CX",
    description:
      "Chat-first CX, lifecycle programmes, retention and the operating models behind owned-audience growth.",
  },
  {
    slug: "data-ai-martech",
    title: "Data, AI & MarTech",
    description:
      "CDP, first-party data, AI campaign optimisation and the marketing stack for Vietnamese enterprises.",
  },
  {
    slug: "industry-playbooks",
    title: "INDUSTRY PLAYBOOK",
    description:
      "Sector-specific plays for banking, FMCG, retail, F&B, beauty, logistics and mobile-first businesses.",
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export const getCategory = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug);
