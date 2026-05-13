import { useEffect, useRef, useState } from "react";
import { ShieldCheck, BadgeCheck, Radio } from "lucide-react";
import { useT } from "@/lib/i18n";
import { en } from "@/locales/en";
import { vi } from "@/locales/vi";

export const TrustMap = () => {
  const { t, lang } = useT();
  const certs = (lang === "vi" ? vi.trust.certs : en.trust.certs) as readonly { name: string; body: string }[];

  const ref = useRef<SVGSVGElement>(null);
  const [lit, setLit] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setLit(true)),
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  // Stylized VN silhouette mask + dot grid
  const dots: { x: number; y: number; on: boolean; delay: number }[] = [];
  for (let y = 0; y < 60; y++) {
    for (let x = 0; x < 24; x++) {
      // crude S-curve mask resembling Vietnam
      const cx = 12 + Math.sin(y / 9) * 6 + (y > 40 ? 4 : 0);
      const w = y < 10 ? 4 : y < 35 ? 6 - y * 0.05 : y < 50 ? 8 : 10;
      if (Math.abs(x - cx) <= w) {
        dots.push({ x, y, on: true, delay: y * 16 + x * 4 });
      }
    }
  }
  const certIcons = [ShieldCheck, BadgeCheck, Radio];

  return (
    <section id="trust" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-tight grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="chapter-eyebrow">{t("trust.eyebrow")}</span>
          <h2 className="heading-section mt-4 text-balance">{t("trust.title")}</h2>
          <p className="mt-4 text-base text-muted-foreground">{t("trust.sub")}</p>
          <p className="mt-6 text-sm font-semibold text-foreground">{t("trust.coverage")}</p>

          <ul className="mt-8 space-y-4">
            {certs.map((c, i) => {
              const Icon = certIcons[i] ?? ShieldCheck;
              return (
                <li key={c.name} className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4 shadow-[var(--shadow-soft)]">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[hsl(var(--primary-soft))] text-[hsl(var(--primary-deep))]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-foreground">{c.name}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{c.body}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[420px] rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-card)]">
            <svg ref={ref} viewBox="0 0 24 60" className="h-full w-full" aria-hidden>
              {dots.map((d, i) => (
                <circle
                  key={i}
                  cx={d.x + 0.5}
                  cy={d.y + 0.5}
                  r={0.28}
                  fill="hsl(var(--primary))"
                  style={{
                    opacity: lit ? 0.85 : 0.05,
                    transition: `opacity 800ms ease-out ${d.delay}ms`,
                  }}
                />
              ))}
            </svg>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-[var(--shadow-soft)] backdrop-blur">
              Vietnam · 63 provinces
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
