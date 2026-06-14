import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ParticleField } from "./ParticleField";
import aboutHeroBanner from "@/assets/about-hero-banner.jpg.asset.json";

const stats = [
  { num: 19, suffix: "+", label: "Years of Operation" },
  { num: 5000, suffix: "+", label: "Brands Served", display: (v: number) => v.toLocaleString() },
  { num: 5, suffix: "M+", label: "Messages a Day" },
  { num: 15, suffix: "+", label: "Enterprise Solutions" },
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
  <section className="relative overflow-hidden bg-background pt-28 pb-40 md:pt-36 md:pb-48">
    <ParticleField
      dotColor="rgba(58,168,79,0.5)"
      lineColor="rgba(58,168,79,0.22)"
      count={55}
    />
    <div className="container-tight relative">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal variant="fade-up">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: "hsl(var(--primary-deep))" }}>
            Since 2007 — Ho Chi Minh City
          </span>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <h1
            className="mt-5 font-display font-extrabold leading-[1.05] text-foreground"
            style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
          >
            Intelligence in every{" "}
            <span style={{ color: "hsl(var(--primary))" }}>conversation.</span>
          </h1>
        </Reveal>
        <Reveal variant="fade-up" delay={240}>
          <p className="mx-auto mt-6 max-w-[640px] text-base leading-relaxed text-muted-foreground md:text-lg">
            VietGuys is one of Vietnam&apos;s pioneers in enterprise customer engagement —
            trusted by 5,000+ brands. Today we&apos;re evolving into an AI-powered customer
            engagement company: the right person, the right time, the right channel.
          </p>
        </Reveal>
      </div>

      <Reveal variant="scale-soft" delay={200}>
        <div className="relative mx-auto mt-14 max-w-6xl">
          <div className="relative h-[300px] overflow-hidden rounded-[24px] md:h-[480px]">
            <img
              src={aboutHeroBanner.url}
              alt="VietGuys × Japan partnership — enterprise engagement bridging Vietnam and Japan"
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating stats card */}
          <div className="absolute inset-x-4 -bottom-[110px] md:inset-x-10 md:-bottom-[86px]">
            <Reveal variant="fade-up" delay={400}>
              <div
                className="rounded-[20px] bg-background px-4 py-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)] md:px-10 md:py-7"
              >
                <dl className="grid grid-cols-2 gap-y-6 md:grid-cols-4 md:gap-y-0">
                  {stats.map((s, i) => {
                    const mobileLeftBorder = i % 2 === 1;
                    const mobileBottomBorder = i < 2;
                    const desktopLeftBorder = i > 0;
                    return (
                      <div
                        key={s.label}
                        className={[
                          "flex flex-col items-center text-center md:px-4",
                          mobileBottomBorder ? "border-b border-border pb-6 md:border-b-0 md:pb-0" : "",
                          mobileLeftBorder ? "border-l border-border" : "",
                          desktopLeftBorder ? "md:border-l md:border-border" : "md:border-l-0",
                        ].join(" ")}
                      >
                        <dt
                          className="bg-clip-text font-extrabold leading-none text-transparent"
                          style={{
                            backgroundImage:
                              "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-deep)))",
                            fontSize: "clamp(36px, 4vw, 52px)",
                          }}
                        >
                          <CountUp target={s.num} suffix={s.suffix} format={s.display} />
                        </dt>
                        <span
                          aria-hidden
                          className="mt-2 block h-[3px] w-[28px] rounded-full"
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
      </Reveal>
    </div>
  </section>
);
