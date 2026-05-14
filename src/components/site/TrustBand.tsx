import { Send, Calendar, ShieldCheck } from "lucide-react";
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
    headline: "5,000+",
    label: "enterprise brands trust VietGuys to power their customer conversations.",
  },
  {
    icon: Send,
    eyebrow: "Daily volume",
    headline: "5M+",
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
      {/* Dark green stat band */}
      <div
        className="relative overflow-hidden py-14 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, hsl(145 100% 16%) 0%, hsl(145 100% 22%) 50%, hsl(145 100% 18%) 100%)",
        }}
      >
        {/* subtle dot overlay */}
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
          <div className="grid gap-5 md:grid-cols-2">
            {stats.map(({ icon: Icon, eyebrow, headline, label }) => (
              <div
                key={headline}
                className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[hsl(var(--accent))]/50 hover:bg-white/[0.07]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[hsl(var(--accent))]/15 text-[hsl(var(--accent))]">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--accent))]">
                  {eyebrow}
                </p>
                <p className="mt-2 font-display text-4xl font-extrabold leading-none text-white md:text-5xl">
                  {headline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications frame */}
          <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[hsl(var(--accent))]/15 text-[hsl(var(--accent))]">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--accent))]">
                  Certifications & Licences
                </p>
                <p className="mt-2 font-display text-2xl font-extrabold leading-tight text-white md:text-3xl">
                  Recognized & licenced to operate at enterprise scale.
                </p>
              </div>
              <p className="text-sm text-white/60 md:max-w-xs md:text-right">
                Our certifications are issued by international and Vietnamese authorities.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white p-4 text-center transition-all hover:-translate-y-1 hover:border-[hsl(var(--accent))]/60"
                >
                  <div className="flex h-16 w-full items-center justify-center">
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="max-h-16 w-auto max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-3 text-xs font-bold leading-tight text-foreground">
                    {c.name}
                  </p>
                  <p className="mt-1 text-[10px] leading-snug text-muted-foreground">
                    {c.description}
                  </p>
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
