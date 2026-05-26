import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  PackageCheck,
  ShieldCheck,
  Gift,
  Sparkles,
  MessageCircle,
  MessageSquare,
  Mail,
  Phone,
  Smartphone,
  Wallet,
  PhoneCall,
  LayoutGrid,
  Layers,
  Zap,
} from "lucide-react";
import bytetechLogo from "@/assets/brand/bytetech.svg";
import shopperImg from "@/assets/channels-girl.png";
import { useCountUp } from "@/hooks/use-count-up";

/**
 * Solutions — Outcome-first storytelling
 *
 * Hero key message: "where customer conversations become business growth."
 * Stage: happy shopper + live conversation pop-ups.
 * Right column: ByteTech CDP strip → 99% Delivery Rate highlight → 8-service bento.
 */

export const Solutions = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.15 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="solutions"
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, hsl(145 60% 96%) 0%, hsl(0 0% 100%) 60%)",
      }}
    >
      {/* Subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(145 30% 88%) 1px, transparent 1px), linear-gradient(90deg, hsl(145 30% 88%) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 25%, transparent 75%)",
        }}
      />

      <div className="container-tight relative">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-display text-balance text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] text-foreground">
            Every conversation,{" "}
            <span className="text-[hsl(var(--primary))]">a moment of growth</span>.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            From SMS to Zalo, Voice to Email — VietGuys connects your brand to every
            customer, across every touchpoint, with built-in reliability at scale.
          </p>
        </div>

        {/* Stage + Right column (99% above + CDP below) */}
        <div className="relative mx-auto mt-8 md:mt-12 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 items-stretch">
            <OutcomeStage visible={visible} />
            <div className="grid grid-cols-1 grid-rows-2 gap-4 md:gap-5 h-full">
              <DeliveryRateCard visible={visible} />
              <CDPSupportStrip visible={visible} />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/solutions"
            className="vg-cta-slant vg-cta-slant--brand inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--primary))] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Explore Our Solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};


/* ---------- Stage (left) ---------- */

const CHANNEL_CHIPS = [
  { id: "sms-brandname", label: "SMS Brandname", dot: "#39b44a", Icon: MessageSquare },
  { id: "zalo-zbs", label: "Zalo ZBS", dot: "#0068ff", Icon: Smartphone },
  { id: "viber", label: "Viber Message", dot: "#7360f2", Icon: MessageCircle },
  { id: "email", label: "Email Marketing", dot: "#ff9b17", Icon: Mail },
  { id: "topup", label: "Mobile Topup", dot: "#06b6d4", Icon: Wallet },
  { id: "sms-shortcode", label: "SMS Short Code", dot: "#e11d48", Icon: Phone },
  { id: "voice", label: "Voice Brandname", dot: "#8b5cf6", Icon: PhoneCall },
  { id: "custom", label: "Customized Solution", dot: "#f59e0b", Icon: LayoutGrid },
] as const;

const OutcomeStage = ({ visible }: { visible: boolean }) => (
  <div
    className="relative mx-auto w-full max-w-[480px] lg:max-w-none"
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(12px)",
      transition: "opacity 700ms ease-out, transform 700ms ease-out",
    }}
  >
    {/* Soft blob backdrop */}
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, hsl(145 65% 78%) 0%, hsl(145 65% 70%) 55%, hsl(145 65% 60% / 0) 75%)",
      }}
    />
    <div
      aria-hidden
      className="pointer-events-none absolute right-[6%] top-[12%] -z-10 h-24 w-24 rounded-full opacity-70 blur-2xl"
      style={{ background: "hsl(35 100% 65%)" }}
    />

    {/* Shopper photo */}
    <img
      src={shopperImg}
      alt="Vietnamese customer joyfully receiving order updates and rewards from VietGuys-powered brands"
      width={896}
      height={1024}
      loading="lazy"
      className="relative mx-auto aspect-square w-full max-w-[460px] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.12)]"
    />

    {/* Floating pop-ups */}
    <Popup
      className="absolute left-[2%] top-[12%]"
      delay={300}
      visible={visible}
    >
      <div className="flex items-center gap-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-[#ff9b17] text-[#ff9b17]"
            />
          ))}
        </div>
        <span className="text-[11px] font-semibold text-foreground">5.0</span>
      </div>
      <p className="mt-1 text-[11px] text-muted-foreground">
        "Thanks for your feedback!"
      </p>
    </Popup>

    <Popup
      className="absolute left-[0%] top-[44%]"
      delay={500}
      visible={visible}
      accent="primary"
    >
      <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--primary-deep))]">
        ORDER STATUS
      </div>
      <div className="mt-1 flex items-center gap-1.5">
        <PackageCheck className="h-3.5 w-3.5 text-[hsl(var(--primary))]" />
        <span className="text-[12px] font-semibold text-foreground">
          Confirmed
        </span>
      </div>
    </Popup>

    <Popup
      className="absolute left-[2%] top-[74%]"
      delay={700}
      visible={visible}
      accent="accent"
    >
      <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(35_100%_45%)] text-center">
        your otp code
      </div>
      <div className="mt-1 font-mono text-[15px] font-extrabold tracking-[0.18em] text-foreground text-center">
        371 235
      </div>
    </Popup>

    {/* Channel orbit chips — right-side arc, hidden on small screens */}
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {CHANNEL_CHIPS.map((c, i) => {
        const n = CHANNEL_CHIPS.length;
        // Arc from -82° (top) to +82° (bottom) on the right side
        const startDeg = -82;
        const endDeg = 82;
        const deg = startDeg + (i * (endDeg - startDeg)) / (n - 1);
        const rad = (deg * Math.PI) / 180;
        const radiusX = 53; // % horizontal
        const radiusY = 48; // % vertical
        // Per-chip nudges (% units) to avoid overlapping the shopper
        const nudges: Array<{ dx: number; dy: number }> = [
          { dx: 2, dy: -6 },   // 0 SMS Brandname — lift above head
          { dx: 3, dy: -2 },   // 1 Zalo ZBS
          { dx: 4, dy: 0 },    // 2 Viber Message
          { dx: 5, dy: 0 },    // 3 Email Marketing
          { dx: 5, dy: 0 },    // 4 Mobile Topup
          { dx: 4, dy: 1 },    // 5 SMS Short Code
          { dx: 7, dy: 2 },    // 6 Voice Brandname — push right of shopper
          { dx: 6, dy: 5 },    // 7 Customized Solution — down & right
        ];
        const n0 = nudges[i] ?? { dx: 0, dy: 0 };
        const left = 50 + Math.cos(rad) * radiusX + n0.dx;
        const top = 50 + Math.sin(rad) * radiusY + n0.dy;
        return (
          <div
            key={c.id}
            className="absolute pointer-events-auto -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              opacity: visible ? 1 : 0,
              transform: `translate(-50%, -50%) scale(${visible ? 1 : 0.85})`,
              transition: `opacity 500ms ease-out ${500 + i * 70}ms, transform 500ms ease-out ${500 + i * 70}ms`,
            }}
          >
            <div className="group flex items-center gap-1.5 rounded-full border border-border bg-white/95 px-2.5 py-1 shadow-[0_6px_18px_-8px_rgba(0,0,0,0.18)] backdrop-blur transition-transform hover:-translate-y-0.5">
              <span className="relative grid h-2 w-2 place-items-center">
                <span
                  className="absolute inset-0 rounded-full opacity-60"
                  style={{
                    background: c.dot,
                    animation: "signal-pulse 2.4s ease-out infinite",
                  }}
                />
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: c.dot }}
                />
              </span>
              <span className="text-[10.5px] font-semibold text-foreground">
                {c.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const Popup = ({
  children,
  className = "",
  delay = 0,
  visible,
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  visible: boolean;
  accent?: "primary" | "accent";
}) => {
  const ring =
    accent === "primary"
      ? "ring-[hsl(var(--primary))]/30"
      : accent === "accent"
        ? "ring-[hsl(35_100%_55%)]/30"
        : "ring-border";
  return (
    <div
      className={`rounded-xl bg-white/95 px-3 py-2 shadow-[0_12px_30px_-14px_rgba(0,0,0,0.25)] backdrop-blur ring-1 ${ring} ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* ---------- 99% Delivery Rate highlight ---------- */

const DeliveryRateCard = ({ visible }: { visible: boolean }) => {
  const n = useCountUp(visible ? 99 : 0, 1400);
  return (
    <div
      className="relative aspect-square overflow-hidden rounded-2xl border border-[hsl(var(--primary))]/20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-deep))] p-5 text-white shadow-[0_18px_36px_-18px_hsl(128_52%_40%/0.45)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 600ms ease-out 280ms, transform 600ms ease-out 280ms",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"
      />
      <div className="relative flex h-full flex-col">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 backdrop-blur">
          <Zap className="h-6 w-6" />
        </div>
        <div className="mt-auto">
          <div className="font-display text-[44px] font-extrabold leading-none tabular-nums">
            {n}%
          </div>
          <div className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/85">
            Delivery Rate
          </div>
          <p className="mt-2 text-[12px] leading-snug text-white/85">
            Built-in messaging failover ensures uninterrupted customer communications.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ---------- Services bento ---------- */

type Service = {
  id: string;
  name: string;
  Icon: typeof Star;
  body: string;
  featured?: boolean;
};

// Intentionally jumbled order — core tiles mixed in with smaller ones
const SERVICES: Service[] = [
  {
    id: "sms",
    name: "SMS Brandname",
    Icon: MessageSquare,
    body: "Authenticated sender ID with nationwide carrier coverage.",
    featured: true,
  },
  {
    id: "viber",
    name: "Viber",
    Icon: MessageCircle,
    body: "Rich branded messaging with two-way conversations.",
  },
  {
    id: "zalo",
    name: "Zalo",
    Icon: Smartphone,
    body: "Official Account & ZNS template messages on Vietnam's #1 chat app.",
    featured: true,
  },
  {
    id: "email",
    name: "Email",
    Icon: Mail,
    body: "Transactional and marketing email orchestration.",
  },
  {
    id: "ott",
    name: "OTT Multi Service",
    Icon: Layers,
    body: "One API, every OTT channel — smart fallback built in.",
    featured: true,
  },
  {
    id: "voice",
    name: "Voice",
    Icon: PhoneCall,
    body: "Automated voice calls and IVR at scale.",
  },
  {
    id: "topup",
    name: "Mobile Top-up",
    Icon: Wallet,
    body: "Instantly deliver mobile top-ups in any quantity.",
    featured: true,
  },
  {
    id: "warranty",
    name: "Smart Warranty",
    Icon: ShieldCheck,
    body: "Digital warranty activation right inside customer chats.",
  },
];

const ServicesBento = ({ visible }: { visible: boolean }) => (
  <div
    className="flex flex-wrap gap-2 sm:gap-2.5"
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(10px)",
      transition: "opacity 600ms ease-out 360ms, transform 600ms ease-out 360ms",
    }}
  >
    {SERVICES.map((s, i) => (
      <ServiceTile key={s.id} s={s} index={i} />
    ))}
  </div>
);

const ServiceTile = ({ s, index }: { s: Service; index: number }) => {
  const Icon = s.Icon;

  // Non-core (phụ) → giữ pill tròn nhẹ nhàng
  if (!s.featured) {
    return (
      <Link
        to="/solutions"
        className="group relative inline-flex h-9 items-center gap-2 overflow-hidden rounded-full border border-border bg-white pl-3 pr-3.5 text-[12px] shadow-[0_4px_14px_-8px_rgba(0,0,0,0.08)] transition-[transform,box-shadow,background-color,border-color,max-width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[hsl(var(--primary))]/40 hover:bg-[hsl(var(--primary-soft))]/40 hover:shadow-[0_18px_36px_-18px_hsl(128_52%_40%/0.35)] sm:h-10 sm:pl-3.5 sm:pr-4 sm:text-[12.5px]"
        style={{ transitionDelay: `${index * 25}ms` }}
        title={s.body}
      >
        <span className="grid h-5 w-5 shrink-0 place-items-center text-[hsl(var(--primary-deep))]">
          <Icon className="h-4 w-4" />
        </span>
        <span className="shrink-0 font-semibold leading-none text-foreground whitespace-nowrap">
          {s.name}
        </span>
        <span
          aria-hidden
          className="pointer-events-none flex max-w-0 items-center gap-1.5 overflow-hidden whitespace-nowrap text-[11px] font-normal text-muted-foreground opacity-0 transition-[max-width,opacity,margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:ml-1 group-hover:max-w-[420px] group-hover:opacity-100 sm:text-[11.5px]"
        >
          <span className="h-3 w-px shrink-0 bg-border" />
          <span>{s.body}</span>
          <ArrowUpRight className="h-3 w-3 shrink-0 text-[hsl(var(--primary-deep))]" />
        </span>
      </Link>
    );
  }

  // Core tile — signature VG shape: chamfered tag (rest) → V-notch right (hover).
  // Clip-path uses identical point count in both states → smooth morph.
  return (
    <Link
      to="/solutions"
      className="vg-core-tile group relative inline-flex h-11 items-center gap-2 bg-white pl-5 pr-4 text-[13px] transition-[transform,padding,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[hsl(var(--primary-soft))]/50 hover:pr-6 sm:h-12 sm:pl-6 sm:pr-5 sm:text-[14px] sm:hover:pr-7"
      style={{ transitionDelay: `${index * 25}ms` }}
      title={s.body}
    >
      <span className="grid h-6 w-6 shrink-0 place-items-center text-[hsl(var(--primary-deep))]">
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <span className="shrink-0 font-semibold leading-none text-foreground whitespace-nowrap">
        {s.name}
      </span>
      <span
        aria-hidden
        className="pointer-events-none flex max-w-0 items-center gap-1.5 overflow-hidden whitespace-nowrap text-[11.5px] font-normal text-muted-foreground opacity-0 transition-[max-width,opacity,margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:ml-1 group-hover:max-w-[420px] group-hover:opacity-100 sm:text-[12px]"
      >
        <span className="h-3 w-px shrink-0 bg-[hsl(var(--primary))]/40" />
        <span>{s.body}</span>
        <ArrowUpRight className="h-3 w-3 shrink-0 text-[hsl(var(--primary-deep))]" />
      </span>
    </Link>
  );
};


/* ---------- Support strip — CDP × ByteTech ---------- */

const CDP_BULLETS = [
  "Drive personalized customer experiences",
  "Maximize conversion rates",
  "Optimize costs",
];

const CDPSupportStrip = ({ visible }: { visible: boolean }) => (
  <div
    className="relative aspect-square overflow-hidden rounded-2xl border border-[hsl(var(--primary))]/15 bg-gradient-to-br from-[hsl(145_55%_98%)] to-white p-5"
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(10px)",
      transition: "opacity 600ms ease-out 200ms, transform 600ms ease-out 200ms",
    }}
  >
    <CDPWave />
    <div className="relative z-10 flex h-full flex-col">
      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--primary-deep))]">
        CDP Solution
      </div>
      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] font-semibold leading-tight text-foreground">
        <span>Strategic partnership with</span>
        <img
          src={bytetechLogo}
          alt="ByteTech"
          className="inline-block h-6 w-auto shrink-0 align-middle"
          loading="lazy"
        />
      </div>

      <ul className="mt-auto grid gap-1.5 border-t border-[hsl(var(--primary))]/10 pt-3">
        {CDP_BULLETS.map((t) => (
          <li
            key={t}
            className="flex items-start gap-2 text-[11.5px] leading-snug text-foreground/90"
          >
            <span
              aria-hidden
              className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]"
            />
            {t}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/* ---------- Decorative wave behind CDP strip ---------- */

const CDPWave = () => {
  const paths = [
    // Upper strand — crosses center at the "waists" (x=200, 600, 1000) and bulges down/up between
    "M0,20 C100,20 150,70 200,70 C250,70 350,120 400,120 C450,120 550,70 600,70 C650,70 750,20 800,20 C850,20 950,70 1000,70 C1050,70 1150,120 1200,120",
    // Lower strand — mirror of the upper strand, producing clear intersections at the waists
    "M0,120 C100,120 150,70 200,70 C250,70 350,20 400,20 C450,20 550,70 600,70 C650,70 750,120 800,120 C850,120 950,70 1000,70 C1050,70 1150,20 1200,20",
    // Spine — gentle ripple through the center
    "M0,70 C150,55 250,85 400,70 C550,55 650,85 800,70 C950,55 1050,85 1200,70",
  ];
  const dur = 9;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 opacity-50 motion-reduce:opacity-30"
    >
      <svg
        viewBox="0 0 1200 140"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="cdp-wave-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#39b44a" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ff9b17" stopOpacity="0.22" />
          </linearGradient>
          {paths.map((d, i) => (
            <path key={`p-${i}`} id={`cdp-wave-path-${i}`} d={d} />
          ))}
        </defs>
        {paths.map((_, i) => (
          <use
            key={`u-${i}`}
            href={`#cdp-wave-path-${i}`}
            fill="none"
            stroke="url(#cdp-wave-grad)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {CHANNEL_CHIPS.map((c, i) => {
          const pathIdx = i % paths.length;
          const begin = -((i * dur) / CHANNEL_CHIPS.length);
          return (
            <circle key={c.id} r="2.8" fill={c.dot} opacity="0.7">
              <animateMotion
                dur={`${dur}s`}
                repeatCount="indefinite"
                rotate="0"
                begin={`${begin}s`}
                className="motion-reduce:hidden"
              >
                <mpath href={`#cdp-wave-path-${pathIdx}`} />
              </animateMotion>
            </circle>
          );
        })}
      </svg>
    </div>
  );
};



