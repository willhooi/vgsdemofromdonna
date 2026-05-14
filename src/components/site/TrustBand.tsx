import { useEffect, useRef, useState } from "react";
import { Send, Calendar, ShieldCheck } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import isoLogo from "@/assets/certs/iso-27001.svg";
import vncertLogo from "@/assets/certs/vncert.svg";
import vntaLogo from "@/assets/certs/vnta.svg";
import zaloLogo from "@/assets/certs/zalo-trusted.svg";

/**
 * TrustBand — Infobip-style "trust at a glance" strip.
 * 3 dark-green frames with white + orange high-contrast text,
 * followed by 2 rows of marquee brand logos.
 *
 * To add brands, append to BRANDS array (text is rendered as a styled chip
 * since we don't ship raster brand assets).
 */

const stats = [
  {
    icon: Calendar,
    eyebrow: "Since 2007",
    target: 5000,
    suffix: "+",
    label: "enterprise brands trust VietGuys to power their customer conversations.",
  },
  {
    icon: Send,
    eyebrow: "Daily volume",
    target: 5,
    suffix: "M+",
    label: "SMS, Zalo & email messages delivered every single day across Vietnam.",
  },
];

// Certifications — easy to extend: just append a new entry with logo + label + description.
const certifications = [
  {
    logo: isoLogo,
    name: "ISO/IEC 27001:2013",
    description: "Information Security Management",
  },
  {
    logo: vncertLogo,
    name: "VNCERT",
    description: "Vietnam Computer Emergency Response Team",
  },
  {
    logo: vntaLogo,
    name: "VNTA Telecom Licence",
    description: "License to Provide Telecommunication Services Without Network Infrastructure",
  },
  {
    logo: zaloLogo,
    name: "Zalo Trusted Partner",
    description: "Official ZNS Provider",
  },
];

const BRANDS_ROW_1 = [
  "Vietcombank", "Techcombank", "VPBank", "BIDV", "ACB", "Sacombank",
  "MB Bank", "TPBank", "HDBank", "VIB",
];
const BRANDS_ROW_2 = [
  "Vietnam Airlines", "Vietjet", "Bamboo Airways", "Saigon Co.op", "Thế Giới Di Động",
  "FPT", "Viettel", "Lotte", "AEON", "Grab",
];

export const TrustBand = () => {
  return (
    <section className="relative">
      {/* Light stats band — matches AccreteBacking */}
      <div className="bg-background pt-2 pb-10 md:pt-4 md:pb-16">
        <div className="container-tight">
          <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-2">
            {stats.map((s) => (
              <StatCard key={s.eyebrow} {...s} />
            ))}
          </div>
        </div>
      </div>

      {/* Light blue certification band */}
      <div
        className="relative overflow-hidden py-12 md:py-16"
        style={{
          background:
            "linear-gradient(135deg, hsl(210 60% 96%) 0%, hsl(205 70% 92%) 50%, hsl(200 65% 94%) 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(hsl(210 60% 30% / 0.10) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
        <div className="container-tight relative">
          <div>
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(210_80%_30%)]/30 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[hsl(210_80%_25%)]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Certifications & Licences
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:mt-8 md:grid-cols-4">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="group flex flex-col rounded-2xl border border-white bg-white shadow-[0_8px_30px_-12px_rgba(15,40,80,0.25)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_40px_-12px_rgba(15,40,80,0.4)]"
                >
                  <div className="flex h-24 items-center justify-center px-5 pt-5 md:h-28">
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="max-h-full w-auto max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="mt-3 flex-1 rounded-b-2xl px-4 py-3 text-center"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(215 80% 18%) 0%, hsl(220 75% 26%) 100%)",
                    }}
                  >
                    <p className="text-xs font-bold leading-tight text-white md:text-sm">
                      {c.name}
                    </p>
                    <p className="mt-1 text-[10px] leading-snug text-white/70 md:text-[11px]">
                      {c.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brand marquee */}
      <div className="border-b border-border bg-background py-10 md:py-12">
        <div className="container-tight">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Trusted by Vietnam's enterprise leaders
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <BrandRow brands={BRANDS_ROW_1} direction="left" />
          <BrandRow brands={BRANDS_ROW_2} direction="right" />
        </div>
      </div>
    </section>
  );
};

const BrandRow = ({
  brands,
  direction,
}: {
  brands: string[];
  direction: "left" | "right";
}) => {
  // duplicate for seamless loop
  const items = [...brands, ...brands];
  return (
    <div className="group relative overflow-hidden">
      <div
        className="flex w-max gap-4 will-change-transform"
        style={{
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} 38s linear infinite`,
        }}
      >
        {items.map((b, i) => (
          <span
            key={`${b}-${i}`}
            className="inline-flex shrink-0 items-center rounded-2xl border border-border bg-card px-5 py-3 font-display text-base font-bold tracking-tight text-muted-foreground transition-colors hover:text-foreground"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
};

type StatCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  target: number;
  suffix: string;
  label: string;
};

const StatCard = ({ icon: Icon, eyebrow, target, suffix, label }: StatCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [inView]);

  const value = useCountUp(target, 1800, inView);
  const display = target >= 1000 ? value.toLocaleString() : value.toString();

  return (
    <div
      ref={ref}
      className="group relative flex flex-col rounded-2xl border border-border bg-card p-4 sm:p-5 md:p-7 transition-all hover:-translate-y-1 hover:border-[hsl(var(--accent))]/60 hover:shadow-[0_18px_50px_-20px_hsl(var(--accent)/0.45)]"
    >
      <span className="grid h-8 w-8 md:h-11 md:w-11 place-items-center rounded-xl md:rounded-2xl bg-[hsl(var(--accent))]/15 text-[hsl(var(--accent))]">
        <Icon className="h-4 w-4 md:h-5 md:w-5" />
      </span>
      <p className="mt-3 md:mt-5 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] md:tracking-[0.22em] text-[hsl(var(--accent))]">
        {eyebrow}
      </p>
      <p className="mt-1 md:mt-2 font-display text-2xl sm:text-3xl md:text-5xl font-extrabold leading-none text-foreground tabular-nums">
        {display}
        <span className="text-[hsl(var(--accent))]">{suffix}</span>
      </p>
      <p className="mt-2 md:mt-3 text-xs md:text-sm leading-relaxed text-muted-foreground">
        {label}
      </p>
    </div>
  );
};
