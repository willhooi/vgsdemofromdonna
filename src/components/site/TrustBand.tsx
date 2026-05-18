import { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import isoLogo from "@/assets/certs/iso-27001-v2.png";
import vncertLogo from "@/assets/certs/vncert-new.jpg";
import vntaLogo from "@/assets/certs/vnta-new.png";
import zaloTrophy from "@/assets/certs/zalo-trophy.png";
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
    label: "enterprise brands trust VietGuys.",
  },
  {
    eyebrow: "Daily volume",
    target: 5,
    suffix: "M+",
    label: "SMS, Zalo & email delivered daily.",
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
];

// Brand logos rendered in full color via Clearbit Logo API.
// To add a brand, append { name, domain }. Domain should be the company's primary website.
type Brand = { name: string; domain: string };

const BRANDS_ROW_1: Brand[] = [
  { name: "Vietcombank", domain: "vietcombank.com.vn" },
  { name: "Techcombank", domain: "techcombank.com.vn" },
  { name: "VPBank", domain: "vpbank.com.vn" },
  { name: "BIDV", domain: "bidv.com.vn" },
  { name: "ACB", domain: "acb.com.vn" },
  { name: "Sacombank", domain: "sacombank.com.vn" },
  { name: "MB Bank", domain: "mbbank.com.vn" },
  { name: "TPBank", domain: "tpb.vn" },
  { name: "HDBank", domain: "hdbank.com.vn" },
  { name: "VIB", domain: "vib.com.vn" },
];
const BRANDS_ROW_2: Brand[] = [
  { name: "Vietnam Airlines", domain: "vietnamairlines.com" },
  { name: "Vietjet", domain: "vietjetair.com" },
  { name: "Bamboo Airways", domain: "bambooairways.com" },
  { name: "Saigon Co.op", domain: "saigonco-op.com.vn" },
  { name: "Thế Giới Di Động", domain: "thegioididong.com" },
  { name: "FPT", domain: "fpt.com" },
  { name: "Viettel", domain: "viettel.com.vn" },
  { name: "Lotte", domain: "lotte.vn" },
  { name: "AEON", domain: "aeon.com.vn" },
  { name: "Grab", domain: "grab.com" },
];

export const TrustBand = () => {
  return (
    <section className="relative">
      {/* Combined Accrete + Certifications band */}
      <div
        className="relative overflow-hidden py-12 md:py-16"
        style={{
          background:
            "linear-gradient(135deg, hsl(128 55% 95%) 0%, hsl(132 60% 90%) 50%, hsl(128 55% 93%) 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(hsl(128 55% 25% / 0.10) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
        <div className="container-tight relative">
          <div className="flex flex-col items-center gap-2 text-center mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(128_45%_30%)]/30 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[hsl(128_55%_22%)]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Backing & Certifications
            </span>
          </div>

          <div className="mx-auto max-w-6xl rounded-[20px] bg-white p-5 sm:p-6 md:p-8 shadow-[0_10px_40px_-15px_rgba(20,80,30,0.2)]">
            <div className="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
              {/* LEFT: Accrete branding + stats */}
              <div className="flex flex-col">
                <h2 className="heading-display flex flex-wrap items-baseline gap-x-4 gap-y-2 text-3xl md:text-4xl lg:text-5xl">
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
                      className="inline-block h-10 w-auto md:h-14 lg:h-16"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                </h2>
                <p className="mt-5 text-sm md:text-base leading-relaxed text-muted-foreground">
                  Backed by Japan's leading SMS gateway group, recognized by{" "}
                  <span className="font-semibold text-foreground">Forbes Asia</span> among Asia's{" "}
                  <span className="font-semibold text-foreground">"Best Under A Billion"</span> companies —
                  empowering VietGuys with global expertise and scalable enterprise messaging capabilities.
                </p>

                {/* Stats — red-bar style */}
                <div className="mt-auto grid grid-cols-2 gap-5 pt-7">
                  {stats.map((s) => (
                    <StatCard key={s.eyebrow} {...s} />
                  ))}
                </div>
              </div>

              {/* RIGHT: Trophy + 3 cert cards */}
              <div className="flex flex-col gap-2.5">
                {/* Trophy */}
                <div className="overflow-hidden rounded-[14px] border border-[#e0e0e0] bg-[#f7f7f7] flex flex-row sm:flex-row h-[160px] sm:h-[180px]">
                  <div className="h-full w-[42%] sm:w-[40%] overflow-hidden flex-shrink-0">
                    <img
                      src={zaloTrophy}
                      alt="Zalo Business Solutions 2025 Trusted Partner trophy awarded to VietGuys"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: "center 10%" }}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 bg-white px-4 py-3 border-l border-[#efefef] flex flex-col justify-center">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full" style={{ background: "#ff9b17" }} />
                      <span className="text-[9px] uppercase tracking-wider text-[#888]">
                        2025 · Official Award
                      </span>
                      <span className="h-1 w-1 rounded-full" style={{ background: "#39b44a" }} />
                    </div>
                    <p className="mt-1 text-[13px] font-semibold text-[#1a1a1a] leading-tight">
                      Zalo Business Solutions Trusted Partner
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#888]">
                      In appreciation of VietGuys
                    </p>
                  </div>
                </div>

                {/* Cert cards */}
                {certifications.map((c) => (
                  <div
                    key={c.name}
                    className="flex overflow-hidden rounded-[12px]"
                    style={{ background: "#1e5c2a" }}
                  >
                    <div style={{ width: 4, background: c.accent, flexShrink: 0 }} />
                    <div
                      className="flex w-[70px] md:w-[90px] shrink-0 items-center justify-center bg-white p-2"
                      style={{ borderRight: "0.5px solid rgba(0,0,0,0.06)" }}
                    >
                      <img
                        src={c.logo}
                        alt={c.name}
                        className="max-h-12 w-auto max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[3px] px-4 py-3">
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
                      <p className="text-[13px] font-medium text-white leading-tight">
                        {c.name}
                      </p>
                      <p className="text-[11px] leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>
                        {c.description}
                      </p>
                      <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                        {c.issuer}
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
          <span
            key={`${b.name}-${i}`}
            title={b.name}
            className="inline-flex h-16 w-40 shrink-0 items-center justify-center rounded-2xl border border-border bg-card px-5 py-3 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)]"
          >
            <img
              src={`https://logo.clearbit.com/${b.domain}`}
              alt={b.name}
              loading="lazy"
              decoding="async"
              className="max-h-10 w-auto max-w-full object-contain"
              onError={(e) => {
                const el = e.currentTarget;
                el.style.display = "none";
                const parent = el.parentElement;
                if (parent && !parent.querySelector("[data-fallback]")) {
                  const span = document.createElement("span");
                  span.dataset.fallback = "true";
                  span.className =
                    "font-display text-base font-bold tracking-tight text-muted-foreground";
                  span.textContent = b.name;
                  parent.appendChild(span);
                }
              }}
            />
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
      <span className="grid h-8 w-8 md:h-11 md:w-11 place-items-center rounded-xl md:rounded-2xl bg-[#04da7a]/10 text-[#04da7a]">
        <Icon className="h-4 w-4 md:h-5 md:w-5" />
      </span>
      <p className="mt-3 md:mt-5 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] md:tracking-[0.22em] text-foreground">
        {eyebrow}
      </p>
      <p className="mt-1 md:mt-2 font-display text-2xl sm:text-3xl md:text-5xl font-extrabold leading-none text-foreground tabular-nums">
        {display}
        <span className="text-foreground">{suffix}</span>
      </p>
      <p className="mt-2 md:mt-3 text-xs md:text-sm leading-relaxed text-foreground/80">
        {label}
      </p>
    </div>
  );
};
