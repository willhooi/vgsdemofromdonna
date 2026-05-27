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
      className="relative w-full h-full overflow-hidden rounded-2xl border border-[hsl(145_50%_25%)]/60 px-5 py-3.5 flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 600ms ease-out 200ms, transform 600ms ease-out 200ms",
        background: "#0d3b2e",
      }}
    >
      <CDPWave />
      <div className="relative z-10 flex h-full flex-col gap-4">
        {/* Header */}
        <div className="min-w-0">
          <div className="text-[20px] font-bold uppercase tracking-[0.18em] text-[hsl(145_70%_75%)]">
            CDP Solution
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] font-semibold leading-tight text-white">
            <span className="text-white/70 font-normal">Strategic partnership with</span>
            <img
              src={bytetechLogo}
              alt="ByteTech"
              className="inline-block h-5 w-auto shrink-0 align-middle brightness-0 invert"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bullets + Badge row */}
        <div className="mt-auto flex items-center gap-4 border-t border-white/15 pt-3">
          <ul className="flex flex-1 flex-col gap-1.5 text-base">
            {CDP_BULLETS.map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-2 leading-snug text-white/85 text-xs"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(145_70%_60%)]"
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

/* ---------- Animated CDP illustration behind strip ---------- */

const CDPWave = () => {
  const sourceIcons = [
    // store
    <path key="s" d="M3 9l1-5h16l1 5M4 9v11h16V9M4 9h16M9 13h6" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
    // server
    <g key="sv" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round">
      <rect x="4" y="4" width="16" height="6" rx="1.2" />
      <rect x="4" y="14" width="16" height="6" rx="1.2" />
      <circle cx="8" cy="7" r="0.6" fill="white" />
      <circle cx="8" cy="17" r="0.6" fill="white" />
    </g>,
    // globe
    <g key="g" stroke="white" strokeWidth="1.8" fill="none">
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4c3 3 3 13 0 16M12 4c-3 3-3 13 0 16" strokeLinecap="round" />
    </g>,
    // search/click
    <g key="c" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="5" />
      <path d="M14 14l5 5" />
    </g>,
  ];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl"
      style={{ background: "linear-gradient(135deg, #0d3b2e 0%, #0a2e23 100%)" }}
    >
      <style>{`
        @keyframes cdp-bob-0 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes cdp-bob-1 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes cdp-bob-2 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        @keyframes cdp-bob-3 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        @keyframes cdp-blob-morph {
          0%,100% { border-radius: 42% 58% 55% 45% / 50% 45% 55% 50%; transform: translate(-50%,-50%) rotate(0deg); }
          33% { border-radius: 55% 45% 40% 60% / 45% 55% 45% 55%; transform: translate(-50%,-50%) rotate(120deg); }
          66% { border-radius: 48% 52% 60% 40% / 55% 48% 52% 45%; transform: translate(-50%,-50%) rotate(240deg); }
        }
        @keyframes cdp-ripple {
          0% { transform: translate(-50%,-50%) scale(0.6); opacity: 0.55; }
          100% { transform: translate(-50%,-50%) scale(1.8); opacity: 0; }
        }
        @keyframes cdp-arrow-flow {
          0% { offset-distance: 0%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes cdp-dash {
          to { stroke-dashoffset: -24; }
        }
      `}</style>

      {/* LEFT panel */}
      <div
        className="absolute"
        style={{
          left: "4%",
          top: "12%",
          width: "26%",
          height: "76%",
          background: "linear-gradient(160deg, rgba(57,180,74,0.18), rgba(13,59,46,0.4))",
          border: "1px solid rgba(110,220,150,0.35)",
          borderRadius: "14px",
          boxShadow: "0 0 24px rgba(57,180,74,0.15), inset 0 0 18px rgba(57,180,74,0.08)",
          backdropFilter: "blur(2px)",
        }}
      >
        <div className="relative h-full w-full p-2">
          {sourceIcons.map((icon, i) => {
            const positions = [
              { left: "18%", top: "12%" },
              { left: "12%", top: "44%" },
              { left: "48%", top: "30%" },
              { left: "22%", top: "70%" },
            ];
            const sizes = [28, 26, 34, 26];
            return (
              <div
                key={i}
                className="absolute grid place-items-center rounded-full"
                style={{
                  ...positions[i],
                  width: sizes[i],
                  height: sizes[i],
                  background: "linear-gradient(140deg, #ee6a4f, #d44a32)",
                  boxShadow: "0 4px 10px rgba(216,74,50,0.45), inset 0 1px 0 rgba(255,255,255,0.2)",
                  animation: `cdp-bob-${i} ${2.4 + i * 0.3}s ease-in-out ${i * 0.25}s infinite`,
                }}
              >
                <svg viewBox="0 0 24 24" width={sizes[i] * 0.55} height={sizes[i] * 0.55}>
                  {icon}
                </svg>
              </div>
            );
          })}
        </div>
      </div>

      {/* CENTER — arc + flowing chevrons */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
      >
        <defs>
          <path id="cdp-flow-arc" d="M132,100 C180,60 220,140 268,100" fill="none" />
        </defs>
        <use
          href="#cdp-flow-arc"
          stroke="rgba(110,220,150,0.5)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          fill="none"
          style={{ animation: "cdp-dash 1.6s linear infinite" }}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Flowing chevron arrows */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            offsetPath: "path('M132,100 C180,60 220,140 268,100')",
            // @ts-ignore
            offsetRotate: "auto",
            animation: `cdp-arrow-flow 2.2s linear ${i * 0.73}s infinite`,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" style={{ transform: "translate(-50%, -50%)" }}>
            <path d="M5 4l10 8-10 8" fill="none" stroke="#9ef5b8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ))}

      {/* RIGHT — CDP blob with ripples */}
      <div
        className="absolute"
        style={{ left: "78%", top: "50%", width: 0, height: 0 }}
      >
        {/* ripples */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: 0,
              top: 0,
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "1.5px solid rgba(110,220,150,0.55)",
              animation: `cdp-ripple 3.2s ease-out ${i * 0.8}s infinite`,
            }}
          />
        ))}
        {/* blob */}
        <div
          className="absolute grid place-items-center"
          style={{
            left: 0,
            top: 0,
            width: "100px",
            height: "100px",
            background: "radial-gradient(circle at 35% 30%, #7df5b0, #3ddc84 60%, #2bb96b)",
            boxShadow: "0 0 30px rgba(61,220,132,0.55), inset 0 -8px 18px rgba(0,0,0,0.12)",
            animation: "cdp-blob-morph 9s ease-in-out infinite",
          }}
        >
          <span
            style={{
              fontWeight: 900,
              fontSize: "26px",
              letterSpacing: "0.04em",
              color: "#0d3b2e",
              textShadow: "0 1px 0 rgba(255,255,255,0.25)",
            }}
          >
            CDP
          </span>
        </div>
      </div>
    </div>
  );
};



