import { Compass, Target } from "lucide-react";
import { VWatermark } from "@/components/brand/VWatermark";

const items = [
  {
    icon: Compass,
    eyebrow: "Vision",
    title: "The first choice for mobile-first digital transformation.",
    body: "Become the enterprise's first choice for digital transformation marketing — upgraded from mobile platforms, powered by data, customer-behaviour analytics, and a cross-platform ecosystem that compounds with every campaign.",
    tone: "brand" as const,
  },
  {
    icon: Target,
    eyebrow: "Mission",
    title: "Not tools. Outcomes that move your business.",
    body: "Not simply giving marketing tools — providing effective mobile marketing solutions that solve each customer's individual goals, message by message, channel by channel, year after year.",
    tone: "orange" as const,
  },
];

export const AboutVisionMission = () => (
  <section id="vision" className="relative overflow-hidden py-24 md:py-32">
    <VWatermark
      tone="brand"
      className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] opacity-[0.05]"
    />
    <VWatermark
      tone="orange"
      className="pointer-events-none absolute -right-24 bottom-10 h-[420px] w-[420px] opacity-[0.05]"
    />

    <div className="container-tight relative">
      <div className="max-w-2xl">
        <span className="chapter-eyebrow">North star</span>
        <h2 className="heading-section mt-4 text-balance">
          Where we&apos;re going. Why we exist.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {items.map(({ icon: Icon, eyebrow, title, body, tone }) => (
          <article
            key={eyebrow}
            className="group relative overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] motion-reduce:hover:translate-y-0 md:p-10"
          >
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1"
              style={{
                background:
                  tone === "brand"
                    ? "var(--gradient-brand)"
                    : "var(--gradient-accent)",
              }}
            />
            <div
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{
                background:
                  tone === "brand"
                    ? "hsl(var(--primary) / 0.10)"
                    : "hsl(var(--accent) / 0.12)",
                color:
                  tone === "brand"
                    ? "hsl(var(--primary))"
                    : "hsl(var(--accent))",
              }}
            >
              <Icon className="h-6 w-6" />
            </div>
            <span className="eyebrow mt-6 block">{eyebrow}</span>
            <h3 className="mt-3 font-display text-2xl leading-tight text-foreground md:text-3xl">
              {title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {body}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
