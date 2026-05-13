import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n";
import { SignalWave, SignalGrid } from "@/components/brand/SignalArt";
import { en } from "@/locales/en";
import { vi } from "@/locales/vi";

type Item = { year: string; title: string; body: string; stat: string };

export const Timeline = () => {
  const { t, lang } = useT();
  const items = (lang === "vi" ? vi.timeline.items : en.timeline.items) as Item[];

  const [active, setActive] = useState<number>(0);
  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setActive(idx);
          }
        });
      },
      { threshold: 0.6 },
    );
    cardRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="timeline" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-tight">
        <div className="max-w-2xl">
          <span className="chapter-eyebrow">{t("timeline.eyebrow")}</span>
          <h2 className="heading-section mt-4 text-balance">{t("timeline.title")}</h2>
          <p className="mt-4 text-base text-muted-foreground">{t("timeline.sub")}</p>
        </div>
      </div>

      {/* Horizontal rail */}
      <div
        ref={railRef}
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 scrollbar-thin lg:px-8"
        style={{ scrollPaddingLeft: 24 }}
      >
        {items.map((it, i) => {
          const dense = i >= 3;
          const isActive = i === active;
          return (
            <div
              key={it.year}
              data-idx={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`relative shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-background p-7 shadow-[var(--shadow-soft)] transition-all duration-500 ${
                isActive ? "-translate-y-1 shadow-[var(--shadow-glow)]" : ""
              }`}
              style={{ width: "min(86vw, 360px)", minHeight: 280 }}
            >
              {/* Background artwork */}
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]">
                {dense ? (
                  <SignalGrid cols={22} rows={12} tone="brand" />
                ) : (
                  <SignalWave intensity={(i + 1) as 1 | 2 | 3} tone="brand" origin="left" />
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-extrabold tracking-tight text-[hsl(var(--primary-deep))]">
                  {it.year}
                </span>
                <span
                  className={`rounded-full bg-[hsl(var(--accent))]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--accent-deep))] ${
                    isActive ? "heart-pulse" : ""
                  }`}
                >
                  {it.stat}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-bold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </div>
          );
        })}
        <div className="shrink-0 pr-2" />
      </div>
    </section>
  );
};
