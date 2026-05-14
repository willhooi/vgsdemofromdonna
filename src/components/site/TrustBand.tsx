import { ShieldCheck, Award, Radio, Users, Send, Calendar } from "lucide-react";

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
  {
    icon: ShieldCheck,
    eyebrow: "Certified",
    headline: "ISO 27001",
    label: "Plus VNCERT, MIC telecom licence and Zalo Trusted Partner status.",
  },
];

const certBadges = [
  { icon: ShieldCheck, label: "ISO/IEC 27001:2013" },
  { icon: Award, label: "VNCERT Certified" },
  { icon: Radio, label: "MIC Telecom Licence" },
  { icon: Users, label: "Zalo Trusted Partner" },
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
          <div className="grid gap-5 md:grid-cols-3">
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

          {/* certification chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {certBadges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/85"
              >
                <Icon className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
                {label}
              </span>
            ))}
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
