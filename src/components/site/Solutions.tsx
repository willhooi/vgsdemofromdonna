import { useState } from "react";
import { MessageSquare, Database, Brain, Target, ArrowUpRight } from "lucide-react";

const tiers = [
  {
    icon: MessageSquare,
    tag: "Tier 01 · Foundation",
    title: "Core Messaging",
    desc: "SMS Brandname, Zalo OA, ZNS, Viber, Email — enterprise-grade, compliant, and reliable at scale.",
    points: ["SMS Brandname", "Zalo OA & ZNS", "Viber Business", "Email & OTT"],
  },
  {
    icon: Database,
    tag: "Tier 02 · Growth",
    title: "Intelligence & Data",
    desc: "PangoCDP and AI Campaign Services to segment smarter, act faster, and prove ROI.",
    points: ["PangoCDP", "Audience segmentation", "Campaign automation", "Attribution & ROI"],
  },
  {
    icon: Brain,
    tag: "Tier 03 · Differentiator",
    title: "Behavioural AI",
    desc: "Deeper customer insight powered by AI — predict intent and personalise omnichannel delivery.",
    points: ["Intent prediction", "Personalisation engine", "Next-best-message", "Omnichannel routing"],
  },
  {
    icon: Target,
    tag: "Tier 04 · Methodology",
    title: "Account Intelligence",
    desc: "SHARP methodology embedded into every account — structured, data-driven growth.",
    points: ["Strategic account research", "ROI-led pitching", "Tiered governance", "Long-term partnership"],
  },
];

export const Solutions = () => {
  const [active, setActive] = useState(0);
  return (
    <section id="solutions" className="py-24 md:py-32">
      <div className="container-tight">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">The Service Engine</span>
            <h2 className="heading-section mt-4 text-balance">
              A 4-tier ecosystem, not a list of channels.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Each tier is a deliberate building block — from compliant infrastructure to behavioural
            AI — composed to fit your enterprise outcome.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {tiers.map((t, i) => {
            const Icon = t.icon;
            const open = i === active;
            return (
              <button
                key={t.title}
                onClick={() => setActive(i)}
                className={`group relative overflow-hidden rounded-3xl border bg-background p-7 text-left transition-all duration-500 hover:-translate-y-1 ${
                  open
                    ? "border-primary/40 shadow-[var(--shadow-glow)]"
                    : "border-border shadow-[var(--shadow-soft)] hover:border-primary/30"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl transition-colors ${
                        open
                          ? "bg-primary text-primary-foreground"
                          : "bg-[hsl(var(--primary-soft))] text-[hsl(var(--primary-deep))]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        {t.tag}
                      </div>
                      <h3 className="mt-1 text-xl font-bold tracking-tight text-foreground">{t.title}</h3>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>

                <div
                  className={`grid grid-cols-2 gap-2 overflow-hidden transition-all duration-500 ${
                    open ? "mt-5 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0"
                  }`}
                >
                  {t.points.map((p) => (
                    <div
                      key={p}
                      className="flex items-center gap-2 rounded-xl bg-[hsl(var(--primary-soft))]/50 px-3 py-2 text-xs font-semibold text-[hsl(var(--primary-deep))]"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary" /> {p}
                    </div>
                  ))}
                </div>

                <span className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-[hsl(var(--accent))]/0 blur-3xl transition-all duration-500 group-hover:bg-[hsl(var(--accent))]/10" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
