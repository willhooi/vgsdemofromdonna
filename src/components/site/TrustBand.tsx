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
      <div className="bg-background py-14 md:py-20">
        <div className="container-tight">
          <div className="grid gap-5 md:grid-cols-2">
            {stats.map((s) => (
              <StatCard key={s.eyebrow} {...s} />
            ))}
          </div>
        </div>
      </div>

      {/* Dark green certification band */}
      <div
        className="relative overflow-hidden py-14 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, hsl(145 100% 16%) 0%, hsl(145 100% 22%) 50%, hsl(145 100% 18%) 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(hsl(0 0% 100% / 0.18) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
        <div className="container-tight relative">
          {/* Certifications — separate row, each badge in its own frame */}
          <div className="mt-10 md:mt-12">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--accent))]/40 bg-[hsl(var(--accent))]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--accent))]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Certifications & Licences
              </span>
              <p className="text-sm text-white/70">
                Issued by international and Vietnamese authorities.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:mt-8 md:grid-cols-4">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="group flex flex-col rounded-2xl border border-white/15 bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-1 hover:border-[hsl(var(--accent))] hover:shadow-[0_12px_40px_-12px_hsl(var(--accent)/0.5)]"
                >
                  <div className="flex h-24 items-center justify-center px-5 pt-5 md:h-28">
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="max-h-full w-auto max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex-1 rounded-b-2xl bg-foreground px-4 py-3 text-center">
                    <p className="text-xs font-bold leading-tight text-background md:text-sm">
                      {c.name}
                    </p>
                    <p className="mt-1 text-[10px] leading-snug text-background/65 md:text-[11px]">
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
