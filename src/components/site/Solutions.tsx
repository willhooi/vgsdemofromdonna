import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
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
      className="relative overflow-hidden pt-16 md:pt-24 pb-8 md:pb-12"
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

        {/* Stage + Right column (99% + CDP) */}
        <div className="relative mx-auto mt-8 md:mt-12 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,42%)_1fr] lg:gap-6 items-stretch">
            <div className="flex justify-center lg:justify-start lg:translate-x-[55px]">
              <OutcomeStage visible={visible} />
            </div>
            <CDPSupportStrip visible={visible} />
          </div>
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
    className="relative mx-auto w-full max-w-[380px] lg:mx-0"
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
      className="relative mx-auto aspect-square w-full max-w-[360px] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.12)]"
    />

    {/* Floating pop-ups */}
    <Popup
      className="absolute left-[-8%] top-[10%] scale-[0.85]"
      delay={300}
      visible={visible}
    >
      <div className="flex items-center gap-1.5">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-3 w-3 fill-[#ff9b17] text-[#ff9b17]"
            />
          ))}
        </div>
        <span className="text-[10px] font-semibold text-foreground">5.0</span>
      </div>
      <p className="mt-0.5 text-[10px] text-muted-foreground">
        "Thanks for your feedback!"
      </p>
    </Popup>

    <Popup
      className="absolute left-[-10%] top-[44%] scale-[0.85]"
      delay={500}
      visible={visible}
      accent="primary"
    >
      <div className="text-[9px] font-bold uppercase tracking-wider text-[hsl(var(--primary-deep))]">
        ORDER STATUS
      </div>
      <div className="mt-0.5 flex items-center gap-1.5">
        <PackageCheck className="h-3 w-3 text-[hsl(var(--primary))]" />
        <span className="text-[11px] font-semibold text-foreground">
          Confirmed
        </span>
      </div>
    </Popup>

    <Popup
      className="absolute left-[-8%] top-[74%] scale-[0.85]"
      delay={700}
      visible={visible}
      accent="accent"
    >
      <div className="text-[9px] font-bold uppercase tracking-wider text-[hsl(35_100%_45%)] text-center">
        your otp code
      </div>
      <div className="mt-0.5 font-mono text-[13px] font-extrabold tracking-[0.18em] text-foreground text-center">
        371 235
      </div>
    </Popup>

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
      className={`rounded-[28px] bg-white/95 px-3.5 py-2 shadow-[0_12px_30px_-14px_rgba(0,0,0,0.25)] backdrop-blur ring-1 ${ring} ${className}`}
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
      className="relative w-full overflow-hidden rounded-2xl border border-[hsl(var(--primary))]/20 bg-[hsl(var(--primary))] bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-deep))] px-4 py-3 text-white shadow-[0_18px_36px_-18px_hsl(128_52%_40%/0.45)]"
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
      <div className="relative flex items-center gap-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 backdrop-blur">
          <Zap className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-[32px] font-extrabold leading-none tabular-nums">
              {n}%
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/90">
              Delivery Rate
            </span>
          </div>
          <p className="mt-1 text-[12px] leading-[1.5] text-white/70">
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

const CDPSupportStrip = ({ visible }: { visible: boolean }) => {
  const n = useCountUp(visible ? 99 : 0, 1400);
  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl border border-[hsl(var(--primary))]/15 bg-white px-5 py-3.5 flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 600ms ease-out 200ms, transform 600ms ease-out 200ms",
      }}
    >
      <div className="relative z-10 flex h-full flex-col gap-3">
        {/* Header */}
        <div className="min-w-0">
          <div className="text-[20px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary-deep))]">
            CDP Solution
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] font-semibold leading-tight text-foreground">
            <span className="text-muted-foreground font-normal">Strategic partnership with</span>
            <img
              src={bytetechLogo}
              alt="ByteTech"
              className="inline-block h-5 w-auto shrink-0 align-middle"
              loading="lazy"
            />
          </div>
        </div>

        {/* Animated illustration — sits above the divider line */}
        <div className="relative w-full flex-1 min-h-[130px]">
          <CDPWave />
        </div>

        {/* Bullets + Badge row */}
        <div className="flex items-center gap-4 border-t border-[hsl(var(--primary))]/10 pt-3">
          <ul className="flex flex-1 flex-col gap-1.5 text-base">
            {CDP_BULLETS.map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-2 leading-snug text-muted-foreground text-xs"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]"
                />
                {t}
              </li>
            ))}
          </ul>

          {/* 99% Delivery Rate — refined light badge */}
          <div
            className="relative z-20 w-[370px] shrink-0 overflow-hidden rounded-2xl border border-[hsl(145_45%_70%)]/50 bg-[hsl(145_55%_94%)] px-[18px] py-[8px] shadow-[0_8px_20px_-12px_hsl(145_45%_35%/0.25)]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 600ms ease-out 280ms, transform 600ms ease-out 280ms",
            }}
          >
            <div className="relative flex items-center gap-2.5">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[hsl(145_55%_85%)]">
                <Zap className="h-4 w-4 text-[hsl(145_60%_28%)]" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[28px] font-black leading-none tabular-nums text-[hsl(145_60%_25%)]">
                    {n}%
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[hsl(145_55%_30%)]">
                    Delivery Rate
                  </span>
                </div>
                <p className="mt-1 text-[12px] leading-[1.5] text-slate-600">
                  Built-in messaging failover ensures uninterrupted customer communications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Animated CDP illustration ---------- */

const CDPWave = () => {
  // 4 white Lucide-style icons: Store, CreditCard, Globe, Search
  const iconPaths = [
    // Store
    <g key="s" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M4 9v11h16V9" />
      <path d="M9 20v-6h6v6" />
    </g>,
    // CreditCard
    <g key="cc" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M2.5 10h19" />
      <path d="M6 15h3" />
    </g>,
    // Globe
    <g key="g" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4c3 3 3 13 0 16M12 4c-3 3-3 13 0 16" />
    </g>,
    // Search
    <g key="se" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="M14.5 14.5l5 5" />
    </g>,
  ];

  // Loosely scattered (not grid) — varying sizes for depth
  const badges = [
    { left: "28%", top: "20%", size: 44 },
    { left: "68%", top: "30%", size: 36 },
    { left: "26%", top: "62%", size: 40 },
    { left: "66%", top: "76%", size: 32 },
  ];

  // Decorative dots
  const dots = [
    { left: "55%", top: "12%" },
    { left: "18%", top: "44%" },
    { left: "82%", top: "55%" },
    { left: "48%", top: "90%" },
  ];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-xl"
      style={{
        background:
          "radial-gradient(ellipse at center, #E8F8EE 0%, rgba(232,248,238,0) 70%)",
        perspective: "900px",
      }}
    >
      <style>{`
        @keyframes cdp-badge-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        @keyframes cdp-dot-twinkle { 0%,100% { opacity: 0.2; } 50% { opacity: 0.65; } }
        @keyframes cdp-glow-pulse { 0%,100% { transform: scale(1); opacity: var(--o,0.15); } 50% { transform: scale(1.08); opacity: calc(var(--o,0.15) * 1.6); } }
        @keyframes cdp-dash { to { stroke-dashoffset: -24; } }
        @keyframes cdp-sheen { 0% { transform: translateX(-120%) skewX(-20deg); } 100% { transform: translateX(220%) skewX(-20deg); } }
        @keyframes cdp-orb-breathe {
          0%,100% { box-shadow: 0 0 0 2px rgba(57,180,74,0.25), 0 8px 28px rgba(57,180,74,0.40), inset 0 -6px 14px rgba(0,0,0,0.28), inset 2px 4px 10px rgba(255,255,255,0.18); }
          50%     { box-shadow: 0 0 0 2px rgba(57,180,74,0.30), 0 10px 34px rgba(57,180,74,0.55), inset 0 -6px 14px rgba(0,0,0,0.28), inset 2px 4px 10px rgba(255,255,255,0.18); }
        }
        @keyframes cdp-band-spin { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }
        @keyframes cdp-ripple {
          0% { transform: translate(-50%,-50%) scale(0.85); opacity: 0.55; }
          100% { transform: translate(-50%,-50%) scale(1); opacity: 0; }
        }
        .cdp-orb::after {
          content: ""; position: absolute; width: 26px; height: 16px;
          background: radial-gradient(ellipse, rgba(255,255,255,0.55), transparent 70%);
          border-radius: 50%; top: 16px; left: 18px; transform: rotate(-25deg);
          pointer-events: none; z-index: 3;
        }
        .cdp-orb::before {
          content: ""; position: absolute; width: 120%; height: 18px;
          background: rgba(255,255,255,0.055); border-radius: 50%;
          top: 50%; left: -10%; transform: translateY(-50%) rotate(-15deg);
          pointer-events: none; z-index: 2;
        }
      `}</style>

      {/* LEFT — 3D dark-green slab */}
      <div
        className="absolute"
        style={{
          left: "6%",
          top: "50%",
          width: "26%",
          height: "70%",
          transform: "translateY(-50%) perspective(600px) rotateY(-20deg) rotateX(5deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)",
            borderRadius: "18px",
            boxShadow:
              "-8px 12px 32px rgba(0,0,0,0.18), 4px -4px 12px rgba(255,255,255,0.06), inset -6px -8px 0 rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* glass sheen */}
          <div
            className="absolute"
            style={{
              top: 0,
              left: 0,
              width: "40%",
              height: "100%",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0) 100%)",
              animation: "cdp-sheen 5s ease-in-out infinite",
            }}
          />

          {/* coral icon badges — scattered */}
          {badges.map((b, i) => (
            <div
              key={i}
              className="absolute grid place-items-center rounded-full"
              style={{
                left: b.left,
                top: b.top,
                width: b.size,
                height: b.size,
                marginLeft: -b.size / 2,
                marginTop: -b.size / 2,
                background: "#E8503A",
                boxShadow:
                  "0 4px 12px rgba(232,80,58,0.4), inset 0 1px 2px rgba(255,255,255,0.25), inset 0 -2px 3px rgba(0,0,0,0.18)",
                animation: `cdp-badge-float 3s ease-in-out ${i * 0.4}s infinite`,
              }}
            >
              <svg viewBox="0 0 24 24" width={b.size * 0.5} height={b.size * 0.5}>
                {iconPaths[i]}
              </svg>
            </div>
          ))}

          {/* decorative white dots */}
          {dots.map((d, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: d.left,
                top: d.top,
                width: 4,
                height: 4,
                marginLeft: -2,
                marginTop: -2,
                background: "white",
                opacity: 0.4,
                animation: `cdp-dot-twinkle 2.4s ease-in-out ${i * 0.5}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* CENTER — connector with arrowheads, anchor dots, traveling dots */}
      <svg
        className="absolute"
        style={{ left: "33%", top: "50%", transform: "translateY(-50%)", width: "44%", height: "60%", overflow: "visible" }}
        viewBox="0 0 150 140"
        preserveAspectRatio="none"
      >
        <defs>
          <marker id="arrGreen" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M2 2L10 6L2 10" fill="none" stroke="#39B44A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
          <marker id="arrOrange" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M2 2L10 6L2 10" fill="none" stroke="#FF9B17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {/* anchor dots on slab edge */}
        <circle cx="8" cy="44" r="3.5" fill="#39B44A" opacity="0.9" />
        <circle cx="8" cy="96" r="3.5" fill="#FF9B17" opacity="0.9" />

        {/* top path — green */}
        <path
          id="cdp-path-top"
          d="M 8 44 C 50 44, 90 60, 138 68"
          fill="none"
          stroke="#39B44A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="5 4"
          markerEnd="url(#arrGreen)"
          style={{ animation: "cdp-dash 1.6s linear infinite" }}
        />
        {/* bottom path — orange */}
        <path
          id="cdp-path-bot"
          d="M 8 96 C 50 96, 90 80, 138 72"
          fill="none"
          stroke="#FF9B17"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="5 4"
          markerEnd="url(#arrOrange)"
          style={{ animation: "cdp-dash 1.6s linear infinite" }}
        />

        {/* traveling dots on top path */}
        {[0, 0.9].map((b, i) => (
          <circle key={`t${i}`} r="2.6" fill="#39B44A">
            <animateMotion dur="1.8s" repeatCount="indefinite" begin={`${b}s`}>
              <mpath href="#cdp-path-top" />
            </animateMotion>
          </circle>
        ))}
        {/* traveling dots on bottom path */}
        {[0, 0.9].map((b, i) => (
          <circle key={`b${i}`} r="2.6" fill="#FF9B17">
            <animateMotion dur="1.8s" repeatCount="indefinite" begin={`${b}s`}>
              <mpath href="#cdp-path-bot" />
            </animateMotion>
          </circle>
        ))}

        {/* merge point pulse */}
        <circle cx="142" cy="70" r="5" fill="#39B44A" opacity="0.15">
          <animate attributeName="r" values="4;8;4" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.18;0.04;0.18" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* RIGHT — CDP 3D sphere */}
      <div
        className="absolute"
        style={{ left: "82%", top: "50%", width: 0, height: 0 }}
      >
        {/* ripple rings */}
        {[
          { size: 100, delay: 0 },
          { size: 124, delay: 0.85 },
          { size: 148, delay: 1.7 },
        ].map((r, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: 0,
              top: 0,
              width: r.size,
              height: r.size,
              border: "1px solid rgba(57,180,74,0.28)",
              transform: "translate(-50%,-50%)",
              animation: `cdp-ripple 2.6s ease-out ${r.delay}s infinite`,
            }}
          />
        ))}

        {/* sphere */}
        <div
          className="cdp-orb absolute grid place-items-center"
          style={{
            left: -42,
            top: -42,
            width: 84,
            height: 84,
            borderRadius: "50%",
            overflow: "hidden",
            background:
              "radial-gradient(circle at 32% 28%, #7FE08F 0%, #39B44A 40%, #1a6b2a 75%, #0d3d18 100%)",
            boxShadow:
              "0 0 0 2px rgba(57,180,74,0.25), 0 8px 28px rgba(57,180,74,0.40), inset 0 -6px 14px rgba(0,0,0,0.28), inset 2px 4px 10px rgba(255,255,255,0.18)",
            animation: "cdp-orb-breathe 8s ease-in-out infinite",
          }}
        >
          {/* rotating bands overlay */}
          <div
            className="absolute"
            style={{ left: 0, top: 0, width: 84, height: 84, borderRadius: "50%", overflow: "hidden", zIndex: 1 }}
          >
            {[
              { top: "28%", delay: "0s" },
              { top: "50%", delay: "-2.7s" },
              { top: "68%", delay: "-5.3s" },
            ].map((b, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: b.top,
                  left: 0,
                  width: "200%",
                  height: 6,
                  background: "rgba(255,255,255,0.065)",
                  borderRadius: 3,
                  animation: `cdp-band-spin 8s linear ${b.delay} infinite`,
                }}
              />
            ))}
          </div>

          <span
            style={{
              position: "relative",
              zIndex: 4,
              fontWeight: 900,
              fontSize: 17,
              letterSpacing: "1px",
              color: "#fff",
              textShadow: "0 1px 4px rgba(0,0,0,0.4)",
            }}
          >
            CDP
          </span>
        </div>
      </div>
    </div>
  );
};




