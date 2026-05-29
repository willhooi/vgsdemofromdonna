import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { VWatermark } from "@/components/brand/VWatermark";
import { Reveal } from "@/components/motion/Reveal";
import { useCountUp } from "@/hooks/use-count-up";
import { useEffect, useRef, useState } from "react";

const headlineWords = ["Nineteen", "years."];
const accentWords = ["One", "signal."];

const stats = [
  { value: 19, suffix: "+", label: "Years in Market" },
  { value: 5000, suffix: "+", label: "Brands Trusted", format: (n: number) => n.toLocaleString() },
  { value: 5, suffix: "M+", label: "Messages / Day" },
  { value: 15, suffix: "+", label: "Solutions Delivered" },
];

const StatItem = ({
  value,
  suffix,
  label,
  active,
  format,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  format?: (n: number) => string;
}) => {
  const v = useCountUp(active ? value : 0, 1600);
  const display = format ? format(v) : v.toString();
  return (
    <div className="flex flex-col items-start px-4 py-3 md:items-center md:px-6 md:py-0 md:text-center">
      <div
        className="font-display text-3xl font-bold leading-none md:text-5xl"
        style={{
          backgroundImage: "var(--gradient-brand)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {display}
        <span>{suffix}</span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-[11px]">
        {label}
      </div>
    </div>
  );
};

export const AboutHero = () => {
  const stripRef = useRef<HTMLDivElement | null>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const el = stripRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setStatsActive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStatsActive(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
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

        <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
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

          <div className="md:col-span-5 md:pt-10">
            <Reveal variant="fade-up" delay={400}>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg md:text-justify">
                Vietnam&apos;s pioneer in Mobile Marketing Solutions since 2007 —
                now part of{" "}
                <span className="font-semibold text-foreground">Accrete Inc.</span>,
                listed on the Tokyo Stock Exchange. Told in three short chapters.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Hero image + floating stat strip */}
        <Reveal variant="scale-soft" delay={500} className="mt-12 md:mt-16">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] shadow-[var(--shadow-card)]">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=80"
                alt="VietGuys enterprise messaging team collaborating"
                className="ken-burns h-[300px] w-full object-cover md:h-[480px] lg:h-[560px]"
                loading="eager"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, hsl(var(--background) / 0) 50%, hsl(var(--background) / 0.35) 100%)",
                }}
              />
            </div>

            <div
              ref={stripRef}
              className="relative z-10 mx-auto -mt-10 grid w-[calc(100%-1.5rem)] grid-cols-2 gap-x-2 gap-y-3 rounded-2xl border border-border bg-background p-4 shadow-[var(--shadow-card)] md:absolute md:inset-x-6 md:-bottom-12 md:mt-0 md:w-auto md:grid-cols-4 md:gap-0 md:divide-x md:divide-border md:rounded-3xl md:p-6"
            >
              {stats.map((s) => (
                <StatItem
                  key={s.label}
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                  format={s.format}
                  active={statsActive}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Spacer for absolute stat strip on desktop */}
      <div className="hidden md:block md:h-16" />
    </section>
  );
};
