import { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import isoLogo from "@/assets/certs/iso-27001-v2.png";
import vncertLogo from "@/assets/certs/vncert-new.jpg";
import vntaLogo from "@/assets/certs/vnta-new.png";
import zaloLogo from "@/assets/certs/zalo-trusted-v3.png";
import accreteLogo from "@/assets/brand/accrete-logo.png";

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
    eyebrow: "Since 2007",
    target: 5000,
    suffix: "+",
    label: "Enterprise brands trust VietGuys to power their customer conversations.",
  },
  {
    eyebrow: "Daily volume",
    target: 5000000,
    suffix: "+",
    label: "SMS, Zalo & email messages delivered every single day across Vietnam",
  },
];

// Certifications — easy to extend: just append a new entry.
const certifications = [
  {
    logo: isoLogo,
    name: "ISO/IEC 27001:2022",
    description: "Enterprise-grade data security, BSI-certified, ANAB-accredited.",
    issuer: "Bureau Veritas · Renewed 2024",
    tag: "Gold standard",
    accent: "#ff9b17",
    tagBg: "rgba(255,155,23,0.2)",
    tagColor: "#ffbe6a",
    tagBorder: "rgba(255,155,23,0.5)",
  },
  {
    logo: vntaLogo,
    name: "Non-Facility-Based Telecom License",
    description: "Legal foundation for Enterprise SMS, licensed by VNTA · Decision No. 39/GP-CVT.",
    issuer: "Ministry of Information · Since 2007",
    tag: "Gov. issued",
    accent: "#8fdc60",
    tagBg: "rgba(143,220,96,0.15)",
    tagColor: "#8fdc60",
    tagBorder: "rgba(143,220,96,0.5)",
  },
  {
    logo: vncertLogo,
    name: "VNCERT Certification",
    description: "Exceptional security capabilities with rigorous information security compliance.",
    issuer: "Vietnam Cybersecurity Authority",
    tag: "Cyber security",
    accent: "rgba(255,255,255,0.35)",
    tagBg: "rgba(255,255,255,0.12)",
    tagColor: "rgba(255,255,255,0.7)",
    tagBorder: "rgba(255,255,255,0.2)",
  },
  {
    logo: zaloLogo,
    name: "Zalo Trusted Partner",
    description: "Recognized for stable and compliant enterprise messaging within the Zalo ecosystem.",
    issuer: "Zalo · Awarded 2025",
    tag: "Trusted partner",
    accent: "#0068ff",
    tagBg: "rgba(0,104,255,0.2)",
    tagColor: "#6aa9ff",
    tagBorder: "rgba(0,104,255,0.5)",
  },
];

// Brand logos rendered in full color via Clearbit Logo API.
// To add a brand, append { name, domain } to the relevant industry group.
type Brand = { name: string; domain: string };
type IndustryGroup = { id: string; name: string; brands: Brand[] };

const INDUSTRIES: IndustryGroup[] = [
  {
    id: "finance",
    name: "Finance & Banking",
    brands: [
      { name: "Vietcombank", domain: "vietcombank.com.vn" },
      { name: "Techcombank", domain: "techcombank.com.vn" },
      { name: "VPBank", domain: "vpbank.com.vn" },
      { name: "BIDV", domain: "bidv.com.vn" },
      { name: "MB Bank", domain: "mbbank.com.vn" },
      { name: "ACB", domain: "acb.com.vn" },
      { name: "TPBank", domain: "tpb.vn" },
      { name: "HDBank", domain: "hdbank.com.vn" },
      { name: "VIB", domain: "vib.com.vn" },
      { name: "Sacombank", domain: "sacombank.com.vn" },
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    brands: [
      { name: "Tiki", domain: "tiki.vn" },
      { name: "Shopee", domain: "shopee.vn" },
      { name: "Lazada", domain: "lazada.vn" },
      { name: "Sendo", domain: "sendo.vn" },
      { name: "Adayroi", domain: "adayroi.com" },
    ],
  },
  {
    id: "retail",
    name: "Retail",
    brands: [
      { name: "Saigon Co.op", domain: "saigonco-op.com.vn" },
      { name: "Thế Giới Di Động", domain: "thegioididong.com" },
      { name: "AEON", domain: "aeon.com.vn" },
      { name: "Lotte", domain: "lotte.vn" },
      { name: "Nguyễn Kim", domain: "nguyenkim.com" },
    ],
  },
  {
    id: "fmcg",
    name: "FMCG",
    brands: [
      { name: "Vinamilk", domain: "vinamilk.com.vn" },
      { name: "Masan", domain: "masangroup.com" },
      { name: "Unilever", domain: "unilever.com" },
      { name: "Nestlé", domain: "nestle.com.vn" },
      { name: "Suntory PepsiCo", domain: "suntorypepsico.vn" },
    ],
  },
  {
    id: "fashion",
    name: "Fashion & Beauty",
    brands: [
      { name: "Routine", domain: "routine.vn" },
      { name: "Canifa", domain: "canifa.com" },
      { name: "L'Oréal", domain: "loreal.com" },
      { name: "Sociolla", domain: "sociolla.vn" },
      { name: "Juno", domain: "juno.vn" },
    ],
  },
  {
    id: "pharma",
    name: "Medicine & Pharmacy",
    brands: [
      { name: "Pharmacity", domain: "pharmacity.vn" },
      { name: "Long Châu", domain: "nhathuoclongchau.com.vn" },
      { name: "An Khang", domain: "nhathuocankhang.com" },
      { name: "Hapacol", domain: "hapacol.vn" },
      { name: "Sanofi", domain: "sanofi.com" },
    ],
  },
  {
    id: "hospitality",
    name: "Hospitality",
    brands: [
      { name: "Vietnam Airlines", domain: "vietnamairlines.com" },
      { name: "Vietjet", domain: "vietjetair.com" },
      { name: "Bamboo Airways", domain: "bambooairways.com" },
      { name: "Mường Thanh", domain: "muongthanh.com" },
      { name: "Vinpearl", domain: "vinpearl.com" },
    ],
  },
  {
    id: "education",
    name: "Education",
    brands: [
      { name: "FPT Education", domain: "fpt.edu.vn" },
      { name: "VUS", domain: "vus.edu.vn" },
      { name: "ILA", domain: "ila.edu.vn" },
      { name: "Topica", domain: "topica.edu.vn" },
      { name: "Apollo", domain: "apollo.edu.vn" },
    ],
  },
];

export const TrustBand = () => {
  return (
    <section className="relative">
      {/* Combined Accrete + Certifications band */}
      <div
        className="relative overflow-hidden py-12 md:py-16"
        style={{
          background:
            "linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(128 45% 97%) 35%, hsl(128 50% 93%) 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(hsl(128 55% 25% / 0.10) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse at center bottom, black 40%, transparent 80%)",
          }}
        />
        <div className="container-tight relative">
          <div className="flex flex-col items-center gap-2 text-center mb-6">
            <span className="shimmer-chip inline-flex items-center gap-2 rounded-full border border-[hsl(128_45%_30%)]/30 bg-gradient-to-r from-white via-[hsl(128_40%_96%)] to-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[hsl(128_55%_22%)] shadow-[0_2px_10px_-4px_rgba(20,80,30,0.25)]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Corporate Strength & Certifications
            </span>
          </div>

          <div className="mx-auto max-w-6xl rounded-[20px] bg-white p-4 sm:p-6 md:p-8 shadow-[0_10px_40px_-15px_rgba(20,80,30,0.2)]">
            {/* Heading block — full width, centered */}
            <div className="mx-auto max-w-3xl text-center mb-6 md:mb-10">
              <h2 className="heading-display flex flex-wrap items-baseline justify-center gap-x-3 sm:gap-x-4 gap-y-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                <span>A member of</span>
                <a
                  href="https://www.accrete-inc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Accrete Inc. (opens in new tab)"
                  className="inline-flex items-center transition-opacity hover:opacity-80"
                >
                  <img
                    src={accreteLogo}
                    alt="Accrete Inc."
                    className="inline-block h-8 sm:h-10 w-auto md:h-14 lg:h-16"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </h2>
              <p className="mt-4 md:mt-5 text-[13px] sm:text-sm leading-relaxed text-muted-foreground md:text-sm">
                Backed by Japan’s leading SMS gateway group, recognized by <span className="font-semibold text-foreground">Forbes Asia</span> among Asia’s <span className="font-semibold text-foreground">Best Under A Billion</span> companies, empowering VietGuys with global expertise and scalable enterprise messaging capabilities
              </p>
            </div>

            {/* 3-column grid: stats | trophy | certs */}
            <div className="grid gap-5 md:gap-6 grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] items-stretch">
              {/* Col 1 — Stats stacked on mobile + desktop, side-by-side on tablet */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5 justify-center content-center">
                {stats.map((s) => (
                  <StatCard key={s.eyebrow} {...s} />
                ))}
              </div>

              {/* Col 2 — 4 cert cards in 2x2 grid */}
              <div className="grid gap-2.5 grid-cols-1 sm:grid-cols-2">
                {certifications.map((c) => (
                  <div
                    key={c.name}
                    className="flex flex-1 overflow-hidden rounded-[12px]"
                    style={{ background: "#1e5c2a" }}
                  >
                    <div style={{ width: 4, background: c.accent, flexShrink: 0 }} />
                    <div
                      className="flex w-[84px] sm:w-[100px] md:w-[120px] shrink-0 items-center justify-center bg-white p-2 sm:p-2.5"
                      style={{ borderRight: "0.5px solid rgba(0,0,0,0.06)" }}
                    >
                      <img
                        src={c.logo}
                        alt={c.name}
                        className="max-h-12 sm:max-h-16 w-auto max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center gap-[3px] px-2.5 sm:px-3 py-2 sm:py-2.5 min-w-0">
                      <span
                        className="self-start rounded-[4px] border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
                        style={{
                          background: c.tagBg,
                          color: c.tagColor,
                          borderColor: c.tagBorder,
                        }}
                      >
                        {c.tag}
                      </span>
                      <p className="text-[12px] font-medium text-white leading-tight">
                        {c.name}
                      </p>
                      <p className="text-[10px] leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>
                        {c.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
  brands: Brand[];
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
          <BrandLogo key={`${b.name}-${i}`} brand={b} />
        ))}
      </div>
    </div>
  );
};

const BrandLogo = ({ brand }: { brand: Brand }) => {
  const [failed, setFailed] = useState(false);
  return (
    <span
      title={brand.name}
      className="inline-flex h-16 w-40 shrink-0 items-center justify-center rounded-2xl border border-border bg-card px-5 py-3 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)]"
    >
      {failed ? (
        <span className="font-display text-base font-bold tracking-tight text-muted-foreground">
          {brand.name}
        </span>
      ) : (
        <img
          src={`https://logo.clearbit.com/${brand.domain}`}
          alt={brand.name}
          loading="lazy"
          decoding="async"
          className="max-h-10 w-auto max-w-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
};

type StatCardProps = {
  eyebrow: string;
  target: number;
  suffix: string;
  label: string;
};

const StatCard = ({ eyebrow, target, suffix, label }: StatCardProps) => {
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
    <div ref={ref} className="flex gap-3 min-w-0">
      <span
        aria-hidden
        className="shrink-0 self-stretch rounded-full"
        style={{ width: 2, background: "#ff9b17" }}
      />
      <div className="flex flex-col min-w-0 flex-1">
        {eyebrow.toLowerCase().includes("since") ? (
          <span className="legacy-badge self-start inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#ff9b17] to-[#ffb84d] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]" />
            {eyebrow.toUpperCase()}
          </span>
        ) : (
          <span className="self-start inline-flex items-center gap-1.5 rounded-full bg-[hsl(128_55%_22%)]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(128_55%_22%)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(128_55%_22%)]" />
            {eyebrow.toUpperCase()}
          </span>
        )}
        <p className="mt-2 font-display text-[22px] sm:text-3xl md:text-4xl font-extrabold leading-none tabular-nums break-all" style={{ color: "#ff9b17" }}>
          {display}
          <span>{suffix}</span>
        </p>
        <p className="mt-2 text-xs md:text-sm leading-relaxed text-muted-foreground">
          {label}
        </p>
      </div>
    </div>
  );
};
