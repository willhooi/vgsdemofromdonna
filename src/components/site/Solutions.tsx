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
} from "lucide-react";
import bytetechLogo from "@/assets/brand/bytetech.svg";
import cnvLogo from "@/assets/brand/cnv.png";
import cxgenieLogo from "@/assets/brand/cxgenie.svg";
import shopperImg from "@/assets/channels-girl.png";

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
          <h2 className="heading-display text-balance text-[24px] sm:text-[28px] md:text-[38px] lg:text-[46px] text-foreground leading-tight">
            Every conversation,{" "}
            <span className="text-[hsl(var(--primary))]">a moment of growth</span>.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Unify customer data, personalize every interaction, and turn conversations into meaningful engagement through AI, CDP, and omnichannel messaging
          </p>
        </div>

        {/* Strategic partnership strip */}
        <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <span className="text-[13px] text-muted-foreground">Strategic partnership with</span>
          <img src={bytetechLogo} alt="ByteTech" className="h-5 w-auto" loading="lazy" />
          <img src={cnvLogo} alt="CNV CDP" className="h-5 w-auto" loading="lazy" />
          <img src={cxgenieLogo} alt="CX Genie" className="h-5 w-auto" loading="lazy" />
        </div>

        {/* Animation flow (left) + OutcomeStage (right) */}
        <div className="relative mx-auto mt-8 md:mt-10 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,38%)] lg:gap-6 items-stretch">
            <AIPlatformCard visible={visible} />
            <div className="flex justify-center lg:justify-end">
              <OutcomeStage visible={visible} />
            </div>
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


/* ---------- AI Customer Engagement Platform card ---------- */

const AIPlatformCard = ({ visible }: { visible: boolean }) => {
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
      className="relative w-full h-full overflow-hidden rounded-2xl border border-[hsl(var(--primary))]/15 bg-white px-5 py-4 flex flex-col"
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
        {/* Label */}
        <div className="text-center uppercase tracking-[0.18em] text-[hsl(var(--primary-deep))] text-lg sm:text-xl md:text-2xl font-extrabold">
          AI Customer Engagement Platform
        </div>

        {/* Animated illustration */}
        <div className="relative w-full flex-1 min-h-[260px]">
          <CDPWave />
        </div>
      </div>
    </div>
  );
};


/* ---------- Animated AI Customer Engagement flow ---------- */

const CDPWave = () => {
  type InKey = "erp" | "pos" | "web" | "loyalty" | "social" | "mkt";
  type OutKey = "sms" | "zalo" | "email" | "voice" | "report" | "retarget";

  const InIcon = ({ name }: { name: InKey }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff8a72" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {name === "erp" && (<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 14h3M8 17h6" /></>)}
      {name === "pos" && (<><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20h8M12 16v4" /></>)}
      {name === "web" && (<><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="9" ry="4" /><path d="M12 3v18" /></>)}
      {name === "loyalty" && (<><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" /></>)}
      {name === "social" && (<><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="12" cy="18" r="2.5" /><path d="M8 7l8 0M7 8l4 8M17 8l-4 8" /></>)}
      {name === "mkt" && (<><path d="M3 11l16-7v16L3 13z" /><path d="M9 13v5" /></>)}
    </svg>
  );

  const OutIcon = ({ name }: { name: OutKey }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#39B44A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {name === "sms" && (<><path d="M4 5h16v11H8l-4 4z" /></>)}
      {name === "zalo" && (<><path d="M4 5h16v11H8l-4 4z" /><path d="M9 10h6M9 13h4" /></>)}
      {name === "email" && (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></>)}
      {name === "voice" && (<><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></>)}
      {name === "report" && (<><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 17V11M12 17V7M16 17v-4" /></>)}
      {name === "retarget" && (<><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></>)}
    </svg>
  );

  const inputs: { key: InKey; label: string }[] = [
    { key: "erp", label: "ERP" },
    { key: "loyalty", label: "Loyalty App" },
    { key: "pos", label: "POS" },
    { key: "web", label: "Ecom Web" },
    { key: "social", label: "Social" },
    { key: "mkt", label: "MKT Campaign" },
  ];

  const outputs: { key: OutKey; label: string }[] = [
    { key: "sms", label: "SMS" },
    { key: "zalo", label: "Zalo" },
    { key: "email", label: "Email" },
    { key: "voice", label: "Voice" },
    { key: "report", label: "Report" },
    { key: "retarget", label: "Retarget" },
  ];

  return (
    <div
      role="img"
      aria-label="AI Customer Engagement Platform flow: input data sources to AI hub to output channels"
      className="cdp-stage absolute inset-0 flex items-center justify-center gap-3 overflow-hidden rounded-xl px-2"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, rgba(57,180,74,0.05), transparent 65%), #ffffff",
      }}
    >
      <style>{`
        @keyframes cdp-src-float { 0%,100% { transform: perspective(700px) rotateY(10deg) translateY(0); } 50% { transform: perspective(700px) rotateY(10deg) translateY(-4px); } }
        @keyframes cdp-out-float { 0%,100% { transform: perspective(700px) rotateY(-10deg) translateY(0); } 50% { transform: perspective(700px) rotateY(-10deg) translateY(-4px); } }
        @keyframes cdp-dot-blink { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
        @keyframes cdp-badge-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }

        @keyframes cdp-ring-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes cdp-ring-ccw { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes cdp-node-orbit { from { transform: rotate(0deg) translateX(48px) rotate(0deg); } to { transform: rotate(360deg) translateX(48px) rotate(-360deg); } }
        @keyframes cdp-orb-glow { 0%,100% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(1.06); opacity: 1; } }
        @keyframes cdp-orb-bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }

        .cdp-src, .cdp-out {
          position: relative;
          width: 170px;
          flex-shrink: 0;
          padding: 10px;
          border-radius: 14px;
          background: #ffffff;
          overflow: hidden;
        }
        .cdp-src {
          border: 1px solid rgba(255,138,114,0.30);
          box-shadow: 0 2px 16px rgba(255,138,114,0.12);
          transform: perspective(700px) rotateY(10deg);
          transform-origin: right center;
          animation: cdp-src-float 6s ease-in-out infinite;
        }
        .cdp-out {
          border: 1px solid rgba(57,180,74,0.25);
          box-shadow: 0 2px 16px rgba(57,180,74,0.12);
          transform: perspective(700px) rotateY(-10deg);
          transform-origin: left center;
          animation: cdp-out-float 6s ease-in-out infinite;
        }
        .cdp-src::before, .cdp-out::before {
          content: ""; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(57,180,74,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57,180,74,0.05) 1px, transparent 1px);
          background-size: 18px 18px;
          pointer-events: none;
          border-radius: inherit;
        }
        .cdp-src-head, .cdp-out-head {
          display: flex; align-items: center; gap: 5px;
          font-size: 9px; font-weight: 700;
          letter-spacing: 0.14em;
          margin-bottom: 8px; position: relative; z-index: 1;
        }
        .cdp-src-head { color: #ff7a5e; justify-content: flex-start; }
        .cdp-out-head { color: #2a8038; justify-content: flex-end; }
        .cdp-src-head .dot, .cdp-out-head .dot {
          width: 5px; height: 5px; border-radius: 50%;
          animation: cdp-dot-blink 2s ease-in-out infinite;
        }
        .cdp-src-head .dot { background: #ff8a72; }
        .cdp-out-head .dot { background: #39B44A; }
        .cdp-src-grid, .cdp-out-grid {
          position: relative; z-index: 1;
          display: grid; grid-template-columns: 1fr 1fr; gap: 6px;
        }
        .cdp-badge, .cdp-badge-out {
          display: flex; align-items: center; gap: 5px;
          padding: 7px 6px; border-radius: 10px;
          animation: cdp-badge-float 4s ease-in-out infinite;
        }
        .cdp-badge { background: #fff3ef; border: 1px solid rgba(255,138,114,0.30); }
        .cdp-badge-out { background: #f0faf2; border: 1px solid rgba(57,180,74,0.25); }
        .cdp-badge-label {
          font-size: 9px; font-weight: 500; white-space: nowrap;
        }
        .cdp-badge .cdp-badge-label { color: #b14b32; }
        .cdp-badge-out .cdp-badge-label { color: #2a8038; }

        .cdp-connector { display: flex; flex-direction: column; align-items: center; gap: 4px; flex-shrink: 0; }

        .cdp-orb-wrap2 {
          position: relative; flex-shrink: 0;
          width: clamp(90px, 12vw, 130px);
          aspect-ratio: 1 / 1;
          animation: cdp-orb-bob 4s ease-in-out infinite;
        }
        .cdp-ring { position: absolute; border-radius: 50%; pointer-events: none; }
        .cdp-ring-3 { inset: -18px; border: 1px dashed rgba(57,180,74,0.15); animation: cdp-ring-cw 28s linear infinite; }
        .cdp-ring-2 { inset: -6px;  border: 1px solid rgba(57,180,74,0.22); animation: cdp-ring-ccw 18s linear infinite; }
        .cdp-ring-1 { inset: 4px;   border: 1.5px dashed rgba(57,180,74,0.35); animation: cdp-ring-cw 12s linear infinite; }
        .cdp-node {
          position: absolute; top: 50%; left: 50%;
          width: 8px; height: 8px; margin: -4px 0 0 -4px;
          border-radius: 50%;
          transform-origin: 4px 4px;
        }
        .cdp-node-g { background: #39B44A; animation: cdp-node-orbit 6s linear infinite; }
        .cdp-node-o { background: #ff8a72; animation: cdp-node-orbit 4s linear infinite; animation-delay: -2s; }
        .cdp-orb-pulse {
          position: absolute; inset: -2px; border-radius: 50%;
          border: 2px solid rgba(57,180,74,0.18);
          animation: cdp-orb-glow 3s ease-in-out infinite;
          pointer-events: none;
        }
        .cdp-core {
          position: absolute; inset: 14px; border-radius: 50%;
          background: #39B44A;
          border: 2px solid rgba(255,255,255,0.6);
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
          overflow: hidden;
        }
        .cdp-gloss {
          position: absolute; top: 22%; left: 22%;
          width: 32%; height: 22%;
          background: rgba(255,255,255,0.30);
          border-radius: 50%;
          transform: rotate(-30deg);
          pointer-events: none;
        }
        .cdp-core-label { font-size: 13px; font-weight: 800; color: #fff; letter-spacing: 0.06em; z-index: 2; }
        .cdp-core-sub   { font-size: 7px; color: rgba(255,255,255,0.78); letter-spacing: 0.14em; z-index: 2; }

        @media (max-width: 1199px) {
          .cdp-src, .cdp-out { width: 145px; padding: 8px; }
          .cdp-badge-label { font-size: 8px; }
          .cdp-ring-3 { display: none; }
          .cdp-particle-extra { display: none; }
        }
        @media (max-width: 767px) {
          .cdp-stage { flex-direction: column; gap: 10px; padding: 8px; }
          .cdp-src, .cdp-out { width: 100%; max-width: 280px; transform: none; animation: none; transform-origin: center; }
          .cdp-connector svg { transform: rotate(90deg); }
          .cdp-particle, .cdp-particle-extra { display: none; }
          .cdp-ring-3, .cdp-ring-2 { display: none; }
          .cdp-node { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cdp-src, .cdp-out, .cdp-orb-wrap2, .cdp-orb-pulse,
          .cdp-ring-1, .cdp-ring-2, .cdp-ring-3,
          .cdp-badge, .cdp-badge-out, .cdp-node, .cdp-particle, .cdp-particle-extra,
          .cdp-core, .cdp-core-label, .cdp-core-sub {
            animation: none !important;
          }
        }
      `}</style>

      {/* ============ INPUT PANEL ============ */}
      <div className="cdp-src">
        <div className="cdp-src-head">
          <span className="dot" />
          INPUT
        </div>
        <div className="cdp-src-grid">
          {inputs.map((b, i) => (
            <div key={b.key} className="cdp-badge" style={{ animationDelay: `${i * 0.5}s` }}>
              <InIcon name={b.key} />
              <span className="cdp-badge-label">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ============ INPUT → HUB CONNECTOR ============ */}
      <div className="cdp-connector">
        <svg width="64" height="64" viewBox="0 0 64 64" style={{ overflow: "visible" }} fill="none" aria-hidden>
          <defs>
            <path id="cdpTop" d="M 0,20 C 22,20 44,32 64,32" />
            <path id="cdpBot" d="M 0,44 C 22,44 44,32 64,32" />
          </defs>
          <use href="#cdpTop" stroke="#ff8a72" strokeWidth="1" opacity="0.15" />
          <use href="#cdpBot" stroke="#ff8a72" strokeWidth="1" opacity="0.15" />
          <circle className="cdp-particle" r="3" fill="#ff8a72">
            <animateMotion dur="2.2s" begin="0s" repeatCount="indefinite"><mpath href="#cdpTop" /></animateMotion>
          </circle>
          <circle className="cdp-particle" r="2.2" fill="#ff8a72">
            <animateMotion dur="2.2s" begin="0.7s" repeatCount="indefinite"><mpath href="#cdpTop" /></animateMotion>
          </circle>
          <circle className="cdp-particle" r="2.8" fill="#ff8a72">
            <animateMotion dur="2.8s" begin="0.35s" repeatCount="indefinite"><mpath href="#cdpBot" /></animateMotion>
          </circle>
          <circle className="cdp-particle-extra" r="1.8" fill="#ff8a72">
            <animateMotion dur="2.8s" begin="1.2s" repeatCount="indefinite"><mpath href="#cdpBot" /></animateMotion>
          </circle>
        </svg>
      </div>

      {/* ============ AI HUB ORB ============ */}
      <div className="cdp-orb-wrap2">
        <div className="cdp-ring cdp-ring-3" aria-hidden />
        <div className="cdp-ring cdp-ring-2" aria-hidden />
        <div className="cdp-ring cdp-ring-1" aria-hidden />
        <div className="cdp-node cdp-node-g" aria-hidden />
        <div className="cdp-node cdp-node-o" aria-hidden />
        <div className="cdp-orb-pulse" aria-hidden />
        <div className="cdp-core">
          <div className="cdp-gloss" aria-hidden />
          <span className="cdp-core-label">AI HUB</span>
          <span className="cdp-core-sub">ENGAGEMENT</span>
        </div>
      </div>

      {/* ============ HUB → OUTPUT CONNECTOR ============ */}
      <div className="cdp-connector">
        <svg width="64" height="64" viewBox="0 0 64 64" style={{ overflow: "visible" }} fill="none" aria-hidden>
          <defs>
            <path id="cdpOutTop" d="M 0,32 C 20,32 42,20 64,20" />
            <path id="cdpOutBot" d="M 0,32 C 20,32 42,44 64,44" />
          </defs>
          <use href="#cdpOutTop" stroke="#39B44A" strokeWidth="1" opacity="0.18" />
          <use href="#cdpOutBot" stroke="#39B44A" strokeWidth="1" opacity="0.18" />
          <circle className="cdp-particle" r="3" fill="#39B44A">
            <animateMotion dur="2.2s" begin="0s" repeatCount="indefinite"><mpath href="#cdpOutTop" /></animateMotion>
          </circle>
          <circle className="cdp-particle" r="2.2" fill="#39B44A">
            <animateMotion dur="2.2s" begin="0.7s" repeatCount="indefinite"><mpath href="#cdpOutTop" /></animateMotion>
          </circle>
          <circle className="cdp-particle" r="2.8" fill="#39B44A">
            <animateMotion dur="2.8s" begin="0.35s" repeatCount="indefinite"><mpath href="#cdpOutBot" /></animateMotion>
          </circle>
          <circle className="cdp-particle-extra" r="1.8" fill="#39B44A">
            <animateMotion dur="2.8s" begin="1.2s" repeatCount="indefinite"><mpath href="#cdpOutBot" /></animateMotion>
          </circle>
        </svg>
      </div>

      {/* ============ OUTPUT PANEL ============ */}
      <div className="cdp-out">
        <div className="cdp-out-head">
          OUTPUT
          <span className="dot" />
        </div>
        <div className="cdp-out-grid">
          {outputs.map((b, i) => (
            <div key={b.key} className="cdp-badge-out" style={{ animationDelay: `${i * 0.5}s` }}>
              <OutIcon name={b.key} />
              <span className="cdp-badge-label">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};





