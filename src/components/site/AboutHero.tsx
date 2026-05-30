import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { VWatermark } from "@/components/brand/VWatermark";
import { Reveal } from "@/components/motion/Reveal";

const headlineWords = ["Nineteen", "years."];
const accentWords = ["One", "signal."];

const stats = [
  { value: "19+", label: ["Years", "Pioneering"] },
  { value: "5,000+", label: ["Brands", "Trusted"] },
  { value: "5M", label: ["Messages", "Per day"] },
  { value: "63/63", label: ["Provinces", "Reached"] },
];

export const AboutHero = () => (
  <section
    className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-20"
    style={{ background: "var(--gradient-hero)" }}
  >
    <VWatermark
      tone="brand"
      className="absolute -right-32 -top-16 h-[560px] w-[560px] opacity-[0.05] md:opacity-[0.06] v-trace"
    />

    <div className="container-tight relative">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-end md:gap-14">
        <div>
          <Reveal variant="fade-up">
            <span className="chapter-eyebrow">Chapter 00 — Since 2007</span>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <p className="mt-3 text-sm italic text-muted-foreground md:text-base">
              Short steps · on a long journey.
            </p>
          </Reveal>

          <Reveal variant="fade" delay={200} className="reveal-words">
            <h1 className="heading-display mt-6 text-[44px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[80px] text-balance">
              {headlineWords.map((w, i) => (
                <span key={i} className="word" style={{ ["--i" as any]: i }}>
                  {w}{" "}
                </span>
              ))}
              <br />
              <span
                className="bg-clip-text text-transparent italic"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                {accentWords.map((w, i) => (
                  <span
                    key={i}
                    className="word"
                    style={{ ["--i" as any]: headlineWords.length + i }}
                  >
                    {w}{" "}
                  </span>
                ))}
              </span>
            </h1>
          </Reveal>
        </div>

        <Reveal variant="fade-up" delay={300}>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Vietnam&apos;s pioneer in Mobile Marketing Solutions since 2007 — now
            part of <span className="font-semibold text-foreground">Accrete Inc.</span>,
            listed on the Tokyo Stock Exchange. A Tokyo-grade backbone with a
            Saigon heartbeat, told in three short chapters.
          </p>
        </Reveal>
      </div>

      {/* Hero image with floating stats card */}
      <div className="relative mt-14 md:mt-20">
        <Reveal variant="scale-soft">
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-card)]">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=80"
              alt="VietGuys enterprise messaging team collaborating in Ho Chi Minh City"
              loading="eager"
              decoding="async"
              className="ken-burns h-[280px] w-full object-cover sm:h-[380px] md:h-[520px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, hsl(var(--background) / 0.45), transparent 40%)",
              }}
            />
          </div>
        </Reveal>

        <Reveal variant="fade-up" delay={200}>
          <div className="relative z-10 mx-auto -mt-12 w-[calc(100%-1.5rem)] rounded-3xl border border-border bg-background/95 px-4 py-5 shadow-[var(--shadow-card)] backdrop-blur md:absolute md:bottom-8 md:left-1/2 md:-mt-0 md:w-auto md:-translate-x-1/2 md:px-10 md:py-7">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 md:gap-x-12">
              {stats.map((s) => (
                <div key={s.value} className="text-center">
                  <dt
                    className="bg-clip-text text-3xl font-extrabold leading-none text-transparent md:text-4xl"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    {s.value}
                  </dt>
                  <dd className="mt-2 text-[11px] font-semibold uppercase leading-tight tracking-[0.14em] text-muted-foreground">
                    {s.label.map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
