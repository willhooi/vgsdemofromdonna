import { Landmark, Plane, ShoppingCart, Truck, ArrowUpRight, ArrowRight, TrendingUp, Zap, Users, ShieldCheck } from "lucide-react";
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
  title: string;
  metric: { icon: typeof TrendingUp; value: string; label: string };
  accent: "primary" | "accent";
};

const caseStudies: CaseStudy[] = [
  {
    slug: "banking-card-activation",
    industry: "Banking & Finance",
    client: "Top Vietnamese commercial bank",
    title: "Credit card activation via SMS → Zalo → Viber fallback",
    metric: { icon: TrendingUp, value: "+38%", label: "Activation rate" },
    accent: "primary",
  },
  {
    slug: "retail-pangocdp",
    industry: "Retail & E-commerce",
    client: "Top 3 electronics retail chain",
    title: "Personalized CSKH powered by PangoCDP & Behavioural AI",
    metric: { icon: Zap, value: "+27%", label: "Revenue per campaign" },
    accent: "accent",
  },
  {
    slug: "fmcg-loyalty-zalo",
    industry: "FMCG & Hospitality",
    client: "Multinational F&B brand",
    title: "Loyalty 360° on Zalo Mini App with OTP & Rewards",
    metric: { icon: Users, value: "+52%", label: "Return rate" },
    accent: "primary",
  },
  {
    slug: "airlines-realtime-alerts",
    industry: "Airlines & Travel",
    client: "Regional full-service carrier",
    title: "Real-time flight & booking alerts across SMS and Email",
    metric: { icon: ShieldCheck, value: "1.5M+", label: "Passengers reached" },
    accent: "accent",
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
          <span className="eyebrow justify-center text-[hsl(var(--accent-deep))]">Industries</span>
          <h2 className="heading-section mt-4 text-balance">
            Built for Vietnam's leading sectors
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Industry-specific use cases, distilled from 19 years serving enterprise.
          </p>
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

        {/* Featured case studies */}
        <div className="mt-14 flex items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent-deep))]">
              Case studies
            </span>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Featured outcomes from enterprise leaders
            </h3>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((c) => {
            const MetricIcon = c.metric.icon;
            const accentColor =
              c.accent === "accent" ? "text-[hsl(var(--accent-deep))]" : "text-primary";
            const dotBg = c.accent === "accent" ? "bg-accent" : "bg-primary";
            return (
              <article
                key={c.slug}
                className="group flex flex-col rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center gap-2">
                  <span className={`inline-block h-1.5 w-1.5 rounded-full ${dotBg}`} />
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {c.industry}
                  </span>
                </div>
                <h4 className="mt-3 text-[15px] font-bold leading-snug text-foreground">
                  {c.title}
                </h4>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {c.client}
                </p>

                <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
                  <MetricIcon className={`h-4 w-4 ${accentColor}`} />
                  <div>
                    <div className="text-lg font-extrabold leading-none tracking-tight text-foreground">
                      {c.metric.value}
                    </div>
                    <div className="mt-1 text-[10.5px] leading-tight text-muted-foreground">
                      {c.metric.label}
                    </div>
                  </div>
                </div>

                <Link
                  to={`/case-studies/${c.slug}`}
                  className={`mt-5 inline-flex items-center gap-1.5 self-start text-[12.5px] font-semibold ${accentColor} hover:underline`}
                >
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Don't see your sector? Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
