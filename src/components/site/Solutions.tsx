import { useEffect, useMemo, useRef, useState } from "react";
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
  const ambientCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ambientCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, raf = 0;
    type P = {
      cx: number; cy: number; r: number; a: number; spd: number;
      size: number; baseOp: number; opFreq: number; opPhase: number; t: number;
    };
    let particles: P[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      W = canvas.width = rect.width;
      H = canvas.height = rect.height;
      particles = Array.from({ length: 42 }, () => ({
        cx: Math.random() * W,
        cy: Math.random() * H,
        r: 14 + Math.random() * 38,
        a: Math.random() * Math.PI * 2,
        spd: (0.12 + Math.random() * 0.18) * (Math.random() > 0.5 ? 1 : -1),
        size: 1.0 + Math.random() * 1.8,
        baseOp: 0.18 + Math.random() * 0.28,
        opFreq: 0.01 + Math.random() * 0.012,
        opPhase: Math.random() * Math.PI * 2,
        t: Math.random() * 300,
      }));
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const DEG = Math.PI / 180;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.t += 1;
        p.a += p.spd * DEG;
        const px = p.cx + p.r * Math.cos(p.a);
        const py = p.cy + p.r * Math.sin(p.a);
        const op = p.baseOp * (0.5 + 0.5 * Math.sin(p.t * p.opFreq + p.opPhase));
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(57, 180, 74, ${op})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl border border-[hsl(var(--primary))]/15 bg-white px-5 py-3.5 flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 600ms ease-out 200ms, transform 600ms ease-out 200ms",
      }}
    >
      <canvas
        ref={ambientCanvasRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ zIndex: 1 }}
      />
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
  const orbitCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Read brand HSL tokens at runtime so canvas particles stay on-brand
  // (falls back to known values if CSS vars aren't ready yet).
  const brand = useMemo(() => {
    if (typeof window === "undefined")
      return { primary: "128 52% 46%", accent: "35 100% 54%" };
    const cs = getComputedStyle(document.documentElement);
    return {
      primary: cs.getPropertyValue("--primary").trim() || "128 52% 46%",
      accent: cs.getPropertyValue("--accent").trim() || "35 100% 54%",
    };
  }, []);

  useEffect(() => {
    const canvas = orbitCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect reduced motion: skip the orbiting particle field entirely.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const SIZE = 180;
    canvas.width = SIZE * DPR;
    canvas.height = SIZE * DPR;
    canvas.style.width = SIZE + "px";
    canvas.style.height = SIZE + "px";
    ctx.scale(DPR, DPR);

    const CX = SIZE / 2, CY = SIZE / 2;
    const TAU = Math.PI * 2;
    const DEG = Math.PI / 180;

    const particles = Array.from({ length: 22 }, () => ({
      r: 56 + Math.random() * 28,
      a: Math.random() * TAU,
      spd: (0.16 + Math.random() * 0.20) * (Math.random() > 0.5 ? 1 : -1),
      rAmp: 2 + Math.random() * 5,
      rFreq: 0.008 + Math.random() * 0.006,
      rPhase: Math.random() * TAU,
      size: 1.1 + Math.random() * 1.6,
      baseOpacity: 0.20 + Math.random() * 0.45,
      opFreq: 0.012 + Math.random() * 0.01,
      opPhase: Math.random() * TAU,
      t: Math.random() * 300,
    }));

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      for (const p of particles) {
        p.t += 1;
        const rOffset = Math.sin(p.t * p.rFreq + p.rPhase) * p.rAmp;
        const radius = p.r + rOffset;
        p.a += p.spd * DEG;
        const px = CX + radius * Math.cos(p.a);
        const py = CY + radius * Math.sin(p.a);
        const op = p.baseOpacity * (0.5 + 0.5 * Math.sin(p.t * p.opFreq + p.opPhase));

        // Head dot
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, TAU);
        ctx.fillStyle = `hsla(${brand.primary} / ${op})`;
        ctx.fill();

        // Comet tail
        for (let ts = 1; ts <= 3; ts++) {
          const tailAngle = p.a - p.spd * ts * 1.4 * DEG;
          const tx = CX + radius * Math.cos(tailAngle);
          const ty = CY + radius * Math.sin(tailAngle);
          const tr = Math.max(0.1, p.size * (1 - ts * 0.25) * 0.55);
          const to = Math.max(0, op * (1 - ts * 0.28));
          ctx.beginPath();
          ctx.arc(tx, ty, tr, 0, TAU);
          ctx.fillStyle = `hsla(${brand.primary} / ${to})`;
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [brand.primary]);

  // 4 white Lucide-style icons: Store, CreditCard, Globe, Search
  const iconPaths = [
    <g key="s" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M4 9v11h16V9" />
      <path d="M9 20v-6h6v6" />
    </g>,
    <g key="cc" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M2.5 10h19" />
      <path d="M6 15h3" />
    </g>,
    <g key="g" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4c3 3 3 13 0 16M12 4c-3 3-3 13 0 16" />
    </g>,
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
      className="cdp-wave pointer-events-none absolute inset-0 z-0 flex items-center gap-3 overflow-hidden rounded-xl px-[5%]"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(0 0% 100%) 0%, hsl(var(--primary) / 0.04) 55%, hsl(0 0% 100%) 100%)",
        perspective: "1100px",
      }}
    >
      <style>{`
        @keyframes cdp-badge-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        @keyframes cdp-dot-twinkle { 0%,100% { opacity: 0.35; } 50% { opacity: 0.9; } }
        @keyframes cdp-sheen { 0% { transform: translateX(-120%) skewX(-20deg); } 100% { transform: translateX(220%) skewX(-20deg); } }
        @keyframes cdp-dash { to { stroke-dashoffset: -24; } }
        @keyframes cdp-ring-spin { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }
        @keyframes cdp-ring-spin-rev { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(-360deg); } }
        @keyframes cdp-orb-bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        @keyframes cdp-scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(220%); } }
        @keyframes orbPulse {
          0%,100% {
            box-shadow:
              0 0 0 6px hsl(var(--primary) / 0.10),
              0 0 0 14px hsl(var(--primary) / 0.05),
              0 14px 28px -6px hsl(var(--primary-deep) / 0.40),
              0 4px 10px hsl(var(--primary) / 0.28),
              inset 0 -6px 12px rgba(0,0,0,0.26),
              inset 3px 4px 10px rgba(255,255,255,0.30);
          }
          50% {
            box-shadow:
              0 0 0 6px hsl(var(--primary) / 0.16),
              0 0 0 14px hsl(var(--primary) / 0.08),
              0 18px 34px -6px hsl(var(--primary-deep) / 0.50),
              0 6px 14px hsl(var(--primary) / 0.38),
              inset 0 -6px 12px rgba(0,0,0,0.26),
              inset 3px 4px 10px rgba(255,255,255,0.30);
          }
        }
        .cdp-orb-new::before {
          content: ""; position: absolute; width: 26px; height: 16px;
          background: radial-gradient(ellipse, rgba(255,255,255,0.75), transparent 70%);
          border-radius: 50%; top: 12px; left: 16px; transform: rotate(-22deg);
          pointer-events: none; z-index: 1;
        }
        /* Holo grid overlay on the source panel */
        .cdp-holo-grid {
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 14px 14px;
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 85%);
        }
        /* Responsive: tighten artwork on small screens */
        @media (max-width: 640px) {
          .cdp-wave { gap: 6px !important; padding-left: 2% !important; padding-right: 2% !important; }
          .cdp-slab { width: 32% !important; height: 110px !important; transform: perspective(700px) rotateY(10deg) rotateX(-3deg) !important; }
          .cdp-orb-wrap { width: 76px !important; height: 76px !important; }
          .cdp-ring-outer { width: 116px !important; height: 116px !important; }
          .cdp-ring-mid { width: 96px !important; height: 96px !important; }
          .cdp-ring-inner { display: none !important; }
          .cdp-orbit-canvas { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cdp-wave *, .cdp-wave *::before, .cdp-wave *::after {
            animation: none !important;
          }
        }
      `}</style>

      {/* LEFT — 3D glass slab (holo card) */}
      <div
        className="cdp-slab relative shrink-0"
        style={{
          width: "26%",
          height: 136,
          transform: "perspective(700px) rotateY(16deg) rotateX(-4deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Soft ground shadow under the slab */}
        <div
          className="absolute"
          style={{
            left: "8%",
            right: "4%",
            bottom: -10,
            height: 14,
            background:
              "radial-gradient(ellipse at center, hsl(var(--primary-deep) / 0.35), transparent 70%)",
            filter: "blur(6px)",
            borderRadius: "50%",
            zIndex: -1,
          }}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--primary-deep)) 0%, hsl(145 60% 18%) 100%)",
            borderRadius: "20px",
            boxShadow:
              "-10px 16px 36px -8px hsl(var(--primary-deep) / 0.35), 4px -4px 12px rgba(255,255,255,0.5), inset -6px -8px 0 rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.14), inset 0 0 0 1px rgba(255,255,255,0.06)",
          }}
        >
          {/* Holographic grid */}
          <div className="cdp-holo-grid absolute inset-0" aria-hidden />
          {/* Sheen sweep */}
          <div
            className="absolute"
            style={{
              top: 0,
              left: 0,
              width: "40%",
              height: "100%",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0) 100%)",
              animation: "cdp-sheen 5s ease-in-out infinite",
            }}
          />
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
                background:
                  "radial-gradient(circle at 32% 28%, hsl(var(--accent) / 0.95) 0%, hsl(var(--accent)) 55%, hsl(var(--accent-deep)) 100%)",
                boxShadow:
                  "0 6px 14px hsl(var(--accent-deep) / 0.45), inset 0 2px 3px rgba(255,255,255,0.35), inset 0 -3px 4px rgba(0,0,0,0.22)",
                animation: `cdp-badge-float 3s ease-in-out ${i * 0.4}s infinite`,
              }}
            >
              <svg viewBox="0 0 24 24" width={b.size * 0.5} height={b.size * 0.5}>
                {iconPaths[i]}
              </svg>
            </div>
          ))}
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

      {/* CENTER — SVG connector with particle stream */}
      <div className="relative" style={{ flex: 1, height: "100%" }}>
        <svg
          className="absolute inset-0"
          style={{ width: "100%", height: "100%", overflow: "visible" }}
          viewBox="0 0 200 140"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <marker id="arrG" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M1 1.5L8.5 5L1 8.5" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
            <marker id="arrO" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M1 1.5L8.5 5L1 8.5" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
            <path id="pTop" d="M4,38 C70,38 130,70 196,70" />
            <path id="pBot" d="M4,102 C70,102 130,70 196,70" />
          </defs>

          {/* Visible dashed paths */}
          <use
            href="#pTop"
            stroke="hsl(var(--primary))"
            strokeWidth="1.8"
            strokeDasharray="6 4"
            markerEnd="url(#arrG)"
            opacity="0.9"
            style={{ animation: "cdp-dash 1.6s linear infinite" }}
          />
          <use
            href="#pBot"
            stroke="hsl(var(--accent))"
            strokeWidth="1.8"
            strokeDasharray="6 4"
            markerEnd="url(#arrO)"
            opacity="0.9"
            style={{ animation: "cdp-dash 1.6s linear infinite" }}
          />

          {/* Source nodes */}
          <circle cx="4" cy="38" r="4.5" fill="hsl(var(--primary))" opacity="0.95" />
          <circle cx="4" cy="102" r="4.5" fill="hsl(var(--accent))" opacity="0.95" />

          {/* Light-sci-fi particle stream — small glowing dots traveling along each path */}
          {[0, 0.6, 1.2].map((delay, i) => (
            <circle key={`tp-${i}`} r="1.7" fill="hsl(var(--primary))" opacity="0.85">
              <animateMotion dur="2.2s" begin={`${delay}s`} repeatCount="indefinite">
                <mpath href="#pTop" />
              </animateMotion>
              <animate attributeName="opacity" values="0;0.9;0" dur="2.2s" begin={`${delay}s`} repeatCount="indefinite" />
            </circle>
          ))}
          {[0.3, 0.9, 1.5].map((delay, i) => (
            <circle key={`bp-${i}`} r="1.7" fill="hsl(var(--accent))" opacity="0.85">
              <animateMotion dur="2.2s" begin={`${delay}s`} repeatCount="indefinite">
                <mpath href="#pBot" />
              </animateMotion>
              <animate attributeName="opacity" values="0;0.9;0" dur="2.2s" begin={`${delay}s`} repeatCount="indefinite" />
            </circle>
          ))}

          {/* Soft halo where streams converge into the orb */}
          <circle cx="196" cy="70" r="6" fill="hsl(var(--primary))" opacity="0.2">
            <animate attributeName="r" values="5;11;5" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0.04;0.2" dur="2.2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* RIGHT — CDP orb with 3 orbital rings + orbit particles */}
      <div
        className="cdp-orb-wrap relative flex shrink-0 items-center justify-center"
        style={{ width: 88, height: 88, animation: "cdp-orb-bob 4s ease-in-out infinite" }}
      >
        {/* Ground shadow under orb */}
        <div
          aria-hidden
          className="absolute"
          style={{
            left: "10%",
            right: "10%",
            bottom: -12,
            height: 12,
            background:
              "radial-gradient(ellipse at center, hsl(var(--primary-deep) / 0.40), transparent 70%)",
            filter: "blur(4px)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
        {/* Outer dashed ring */}
        <div
          aria-hidden
          className="cdp-ring-outer absolute"
          style={{
            top: "50%",
            left: "50%",
            width: 138,
            height: 138,
            transform: "translate(-50%,-50%) rotate(0deg)",
            animation: "cdp-ring-spin 18s linear infinite",
            borderRadius: "50%",
            border: "1px dashed hsl(var(--primary) / 0.45)",
            transformOrigin: "center",
            zIndex: 1,
          }}
        >
          <span
            style={{
              position: "absolute",
              top: -3,
              left: "50%",
              width: 6,
              height: 6,
              marginLeft: -3,
              borderRadius: "50%",
              background: "hsl(var(--primary))",
              boxShadow: "0 0 8px hsl(var(--primary) / 0.7)",
            }}
          />
        </div>
        {/* Mid ring (counter-rotating) */}
        <div
          aria-hidden
          className="cdp-ring-mid absolute"
          style={{
            top: "50%",
            left: "50%",
            width: 114,
            height: 114,
            transform: "translate(-50%,-50%) rotate(0deg)",
            animation: "cdp-ring-spin-rev 11s linear infinite",
            borderRadius: "50%",
            border: "1px solid hsl(var(--primary) / 0.22)",
            zIndex: 1,
          }}
        >
          <span
            style={{
              position: "absolute",
              bottom: -2.5,
              left: "50%",
              width: 5,
              height: 5,
              marginLeft: -2.5,
              borderRadius: "50%",
              background: "hsl(var(--accent))",
              boxShadow: "0 0 6px hsl(var(--accent) / 0.7)",
            }}
          />
        </div>
        {/* Inner thin ring */}
        <div
          aria-hidden
          className="cdp-ring-inner absolute"
          style={{
            top: "50%",
            left: "50%",
            width: 96,
            height: 96,
            transform: "translate(-50%,-50%)",
            animation: "cdp-ring-spin 26s linear infinite",
            borderRadius: "50%",
            border: "1px dotted hsl(var(--primary) / 0.30)",
            zIndex: 1,
          }}
        />
        {/* Orbit particle canvas */}
        <canvas
          ref={orbitCanvasRef}
          className="cdp-orbit-canvas"
          style={{
            position: "absolute",
            inset: -46,
            width: 180,
            height: 180,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* The orb */}
        <div
          className="cdp-orb-new absolute grid place-items-center overflow-hidden"
          style={{
            inset: 0,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 36% 30%, hsl(128 60% 68%) 0%, hsl(var(--primary)) 48%, hsl(var(--primary-deep)) 100%)",
            boxShadow:
              "0 0 0 6px hsl(var(--primary) / 0.10), 0 0 0 14px hsl(var(--primary) / 0.05), 0 14px 28px -6px hsl(var(--primary-deep) / 0.40), 0 4px 10px hsl(var(--primary) / 0.28), inset 0 -6px 12px rgba(0,0,0,0.26), inset 3px 4px 10px rgba(255,255,255,0.30)",
            animation: "orbPulse 3s ease-in-out infinite",
            zIndex: 3,
          }}
        >
          {/* Subtle scan line — light sci-fi accent */}
          <div
            aria-hidden
            className="absolute left-0 right-0"
            style={{
              height: 2,
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
              animation: "cdp-scan 4s linear infinite",
              opacity: 0.6,
            }}
          />
        </div>
        <span
          style={{
            position: "relative",
            zIndex: 5,
            fontSize: 17,
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "1px",
            textShadow: "0 1px 5px rgba(0,0,0,0.4)",
          }}
        >
          CDP
        </span>
      </div>
    </div>
  );
};




