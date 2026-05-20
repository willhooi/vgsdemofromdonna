import { Landmark, Plane, ShoppingCart, Truck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { VWatermark } from "@/components/brand/VWatermark";

const sectors = [
  {
    icon: Landmark,
    title: "Banking & Finance",
    desc: "OTP, fraud alerts and customer notifications.",
  },
  {
    icon: Plane,
    title: "Airlines & Travel",
    desc: "Flight updates, bookings and loyalty messaging.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    desc: "Promotions, order updates and cart recovery.",
  },
  {
    icon: Truck,
    title: "Logistics & Enterprise",
    desc: "Delivery alerts and operational broadcasts.",
  },
];

type CaseStudy = {
  slug: string;
  industry: string;
  client: string;
  monogram: string;
  brandColor: string; // hex for monogram tint
  metric: string;
  metricLabel: string;
  result: string;
  channels: string[];
};

const caseStudies: CaseStudy[] = [
  {
    slug: "banking-card-activation",
    industry: "Banking & Finance",
    client: "Top Vietnamese commercial bank",
    monogram: "VCB",
    brandColor: "#0a4d8c",
    metric: "+38%",
    metricLabel: "Activation rate",
    result: "Credit card activation lifted with multi-channel fallback messaging.",
    channels: ["SMS", "Zalo", "Viber"],
  },
  {
    slug: "retail-pangocdp",
    industry: "Retail & E-commerce",
    client: "Top 3 electronics retail chain",
    monogram: "DMX",
    brandColor: "#e11d48",
    metric: "+27%",
    metricLabel: "Revenue / campaign",
    result: "Personalized CSKH powered by PangoCDP and behavioural AI.",
    channels: ["Zalo ZNS", "SMS", "Email"],
  },
  {
    slug: "fmcg-loyalty-zalo",
    industry: "FMCG & Hospitality",
    client: "Multinational F&B brand",
    monogram: "F&B",
    brandColor: "#16a34a",
    metric: "+52%",
    metricLabel: "Return rate",
    result: "Loyalty 360° on Zalo Mini App with OTP and rewards built in.",
    channels: ["Zalo Mini App", "OTP", "Rewards"],
  },
  {
    slug: "airlines-realtime-alerts",
    industry: "Airlines & Travel",
    client: "Regional full-service carrier",
    monogram: "VNA",
    brandColor: "#0c2340",
    metric: "1.5M+",
    metricLabel: "Passengers reached",
    result: "Real-time flight and booking alerts across SMS and Email.",
    channels: ["SMS Brandname", "Email"],
  },
  {
    slug: "insurance-support-deflection",
    industry: "Insurance",
    client: "Leading life insurer",
    monogram: "INS",
    brandColor: "#7c3aed",
    metric: "−41%",
    metricLabel: "Support call volume",
    result: "Proactive policy updates cut inbound calls without hurting CSAT.",
    channels: ["Zalo ZNS", "Voice"],
  },
  {
    slug: "logistics-otp-delivery",
    industry: "Logistics",
    client: "National courier network",
    monogram: "LOG",
    brandColor: "#f59e0b",
    metric: "99.95%",
    metricLabel: "OTP delivery < 2s",
    result: "Authentication that lands first time, with built-in fallback.",
    channels: ["OTP", "SMS", "Zalo"],
  },
];

export const Industries = () => {
  return (
    <section
      id="industries"
      className="relative overflow-hidden py-16 md:py-20"
      style={{ background: "hsl(var(--accent-soft) / 0.4)" }}
    >
      <VWatermark
        tone="orange"
        className="absolute -right-16 bottom-12 h-[360px] w-[360px] opacity-[0.05]"
      />
      <div className="container-tight relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-section text-balance">
            Built for Vietnam's leading sectors
          </h2>
        </div>

        {/* Sector tiles — concise, non-interactive */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[hsl(var(--accent-soft))] text-[hsl(var(--accent-deep))]">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-[14px] font-bold leading-tight text-foreground">{title}</h3>
                <p className="mt-1 text-[12px] leading-snug text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Showcase wall */}
        <div className="mt-14 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent-deep))]">
            Case studies
          </span>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            What brands achieve with VietGuys
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Hover any brand to reveal the outcome.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <CaseTile key={c.slug} c={c} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-base font-medium text-foreground">
            Need a tailored solution?
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))] px-6 py-3 text-sm font-semibold text-[hsl(var(--accent-foreground))] shadow-[0_12px_30px_-12px_hsl(35_100%_50%/0.55)] transition-transform hover:-translate-y-0.5"
          >
            Talk to us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const CaseTile = ({ c }: { c: CaseStudy }) => (
  <Link
    to={`/case-studies/${c.slug}`}
    className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white shadow-[0_4px_14px_-10px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 hover:border-[hsl(var(--primary))]/30 hover:shadow-[0_22px_44px_-22px_hsl(128_52%_30%/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))]/40"
  >
    {/* Front face — monogram */}
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0 motion-reduce:transition-none">
      <span
        className="font-display text-[44px] font-extrabold tracking-tight md:text-[52px]"
        style={{ color: c.brandColor }}
      >
        {c.monogram}
      </span>
      <span className="mt-3 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {c.industry}
      </span>
    </div>

    {/* Back face — achievement */}
    <div
      className="absolute inset-0 flex flex-col justify-between p-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--primary-deep)) 0%, hsl(145 70% 18%) 100%)",
      }}
    >
      <div>
        <div className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/70">
          {c.industry}
        </div>
        <div className="mt-1 text-[11px] font-medium text-white/85">{c.client}</div>
      </div>

      <div>
        <div className="font-display text-[34px] font-extrabold leading-none tracking-tight md:text-[40px]">
          {c.metric}
        </div>
        <div className="mt-1 text-[11.5px] font-semibold uppercase tracking-wider text-[hsl(35_100%_70%)]">
          {c.metricLabel}
        </div>
        <p className="mt-2 text-[12.5px] leading-snug text-white/85">{c.result}</p>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {c.channels.map((ch) => (
            <span
              key={ch}
              className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/90 ring-1 ring-white/15"
            >
              {ch}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-white">
          Read <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  </Link>
);
