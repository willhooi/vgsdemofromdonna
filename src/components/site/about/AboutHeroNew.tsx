import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ParticleField } from "./ParticleField";
import aboutHeroBanner from "@/assets/about-hero-banner.jpg.asset.json";

const stats = [
  { num: 19, suffix: "", label: "Years of Operation" },
  { num: 6000, suffix: "+", label: "Brands Served", display: (v: number) => v.toLocaleString() },
  { num: 8, suffix: "M+", label: "Messages a Day" },
  { num: 10, suffix: "+", label: "INDUSTRIES SERVED" },
];

const CountUp = ({ target, suffix, format }: { target: number; suffix: string; format?: (v: number) => string }) => {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const start = () => {
      if (started.current) return;
      started.current = true;
      const t0 = performance.now();
      const dur = 1600;
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setV(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) start();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          start();
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0 });
    io.observe(el);
    const fallback = window.setTimeout(start, 1800);
    return () => { io.disconnect(); window.clearTimeout(fallback); };
  }, [target]);

  return (
    <span ref={ref}>
      {format ? format(v) : v}
      {suffix}
    </span>
  );
};

export const AboutHeroNew = () => (
  <section className="relative overflow-hidden bg-background pt-28 pb-4 md:pt-36 md:pb-6">
    <ParticleField
      dotColor="rgba(58,168,79,0.5)"
      lineColor="rgba(58,168,79,0.22)"
      count={55}
    />
    <div className="container-tight relative">
      <div className="grid grid-cols-1 gap-12 lg:gap-20 items-start">
        {/* Full-Width Headline Area */}
        <div className="max-w-5xl">
          <Reveal variant="fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8" style={{ backgroundColor: "hsl(var(--primary))" }}></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: "hsl(var(--primary-deep))" }}>
                Since 2007 · A MEMBER OF ACCRETE INC. FROM JAPAN
              </span>
            </div>
          </Reveal>
          
          <Reveal variant="fade-up" delay={120}>
            <h1
              className="font-display font-extrabold leading-[1.05] text-foreground tracking-tight"
              style={{ fontSize: "clamp(42px, 7vw, 86px)" }}
            >
              Intelligence in every{" "}
              <span style={{ color: "hsl(var(--primary))" }}>conversation.</span>
            </h1>
          </Reveal>
        </div>

        {/* Body: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal variant="fade-up" delay={240}>
              <div className="space-y-6 border-l border-border pl-8 lg:pl-12 relative">
                {/* Vertical Decorative Bar Top */}
                <div 
                  className="absolute left-[-2px] top-0 w-[3px] h-16 rounded-full" 
                  style={{ backgroundColor: "hsl(var(--primary))" }}
                ></div>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  For nearly <span className="text-foreground font-semibold">two decades</span>, VietGuys has been a trusted engagement partner for <span className="text-foreground font-semibold">6,000+ brands</span> across banking, aviation, retail, healthcare, FMCG, and technology.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Backed by Japan's <span className="text-foreground font-semibold">Accrete Inc.</span>, a Tokyo-listed Japanese technology group and a leading international messaging provider, we combine <span className="italic" style={{ color: "hsl(var(--primary))" }}>AI, data, and omnichannel communications</span> to help businesses build stronger customer relationships.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Accrete Highlight Cards */}
          <div className="lg:col-span-5">
            <Reveal variant="fade-up" delay={360}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="p-6 rounded-2xl bg-muted/50 border border-border/50">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(var(--primary))" }}>Reliability</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">Enterprise grade infrastructure and international standards.</p>
                </div>
                <div className="p-6 rounded-2xl bg-muted/50 border border-border/50">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(var(--primary))" }}>Innovation</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">The advantage of AI specifically built for the Vietnamese market.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal variant="scale-soft" delay={200}>
        <div className="mx-auto mt-14 max-w-6xl">
          <div className="relative h-[300px] overflow-hidden rounded-[24px] md:h-[480px]">
            <img
              src={aboutHeroBanner.url}
              alt="VietGuys × Japan partnership — enterprise engagement bridging Vietnam and Japan"
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Reveal>

      {/* Floating stats card — overlaps banner via negative margin (mockup behavior) */}
      <div className="relative z-[4] mx-auto -mt-16 max-w-5xl px-4 md:-mt-[86px] md:px-6">
        <Reveal variant="fade-up" delay={400}>
          <div
            className="rounded-[20px] bg-background px-4 py-7 shadow-[0_24px_70px_rgba(0,0,0,0.12),0_12px_36px_rgba(0,0,0,0.22),0_4px_10px_rgba(0,0,0,0.08)] md:px-6 md:py-10"
          >
            <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0">
              {stats.map((s, i) => {
                const mobileLeftBorder = i % 2 === 1;
                const mobileBottomBorder = i < 2;
                const desktopLeftBorder = i > 0;
                return (
                  <div
                    key={s.label}
                    className={[
                      "flex flex-col items-center text-center md:px-3",
                      mobileBottomBorder ? "border-b border-border pb-8 md:border-b-0 md:pb-0" : "",
                      mobileLeftBorder ? "border-l border-border" : "",
                      desktopLeftBorder ? "md:border-l md:border-border" : "md:border-l-0",
                    ].join(" ")}
                  >
                    <dt
                      className="bg-clip-text font-extrabold leading-none text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-deep)))",
                        fontSize: "clamp(34px, 3.6vw, 48px)",
                      }}
                    >
                      <CountUp target={s.num} suffix={s.suffix} format={s.display} />
                    </dt>
                    <span
                      aria-hidden
                      className="mt-3 block h-[3px] w-[28px] rounded-full"
                      style={{ background: "hsl(var(--accent))" }}
                    />
                    <dd className="mt-3 text-[11px] font-bold uppercase leading-tight tracking-[0.16em] text-muted-foreground">
                      {s.label}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
