import { Users, ShieldCheck, BadgeCheck, Scale, Sparkles, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

type Value = { icon: LucideIcon; kicker: string; title: string; body: string };

const values: Value[] = [
  { icon: Users, kicker: "01 · People First", title: "People first.", body: "Every voice in the room matters — colleagues, customers, the communities we serve." },
  { icon: ShieldCheck, kicker: "02 · Quality", title: "Quality, never optional.", body: "Carrier-grade routing, ISO/IEC 27001 controls, 99.95% SLA — message by message." },
  { icon: BadgeCheck, kicker: "03 · Integrity & Honesty", title: "Integrity & honesty.", body: "What we promise, we deliver. What we can't, we say upfront — no surprises." },
  { icon: Scale, kicker: "04 · Accountability", title: "Owned, end-to-end.", body: "From routing decision to delivery report — someone on our team owns the outcome." },
  { icon: Sparkles, kicker: "05 · Creativity", title: "Built for the next campaign.", body: "We borrow nothing, copy nothing — we engineer for the brief we just heard." },
  { icon: Rocket, kicker: "06 · Innovation", title: "Constantly improved.", body: "Every quarter, the platform ships something the previous quarter couldn't do." },
];

export const AboutStoryPillars = () => (
  <section className="py-20 md:py-28">
    <div className="container-tight">
      <Reveal variant="fade-up" className="max-w-2xl">
        <span className="chapter-eyebrow">Core values</span>
        <h2 className="heading-section mt-4 text-balance">
          Six values that have outlasted every trend.
        </h2>
        <p className="mt-5 text-muted-foreground">
          Tools change. Channels change. The reasons we built VietGuys haven&apos;t.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <Reveal key={v.title} variant="fade-up" delay={i * 70}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-background p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
                  style={{ background: "var(--gradient-brand)" }}
                />
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    background: "hsl(var(--primary) / 0.10)",
                    color: "hsl(var(--primary))",
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span className="mt-5 block text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                  {v.kicker}
                </span>
                <h3 className="mt-2 font-display text-xl text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
