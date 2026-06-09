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
  Database,
  Store,
  Globe,
  ThumbsUp,
  Award,
  Megaphone,
  User as UserIcon,
  BarChart3,
  Users,
  GitBranch,
  Brain,
  Tag,
  CheckCircle2,
  ShoppingBag,
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

        {/* Unified flow card: INPUT → HUB → OUTPUT → Outcome (girl + popups) */}
        <div className="relative mx-auto mt-8 md:mt-10 w-full max-w-[1760px]">
          <AIPlatformCard visible={visible} />
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

const OutcomeStage = ({ visible, className = "" }: { visible: boolean; className?: string }) => (
  <div
    className={`relative mx-auto w-full max-w-[340px] ${className}`}
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

    {/* Floating pop-ups (Customer Experience outcomes) */}
    <Popup className="absolute left-[-14%] top-[4%] scale-[0.7] origin-top-left" delay={250} visible={visible} accent="accent">
      <div className="flex items-start gap-1.5">
        <Tag className="mt-0.5 h-3 w-3 text-[hsl(35_100%_50%)]" />
        <div>
          <div className="text-[9px] font-semibold text-muted-foreground">Personalized Offer</div>
          <div className="text-[11px] font-bold text-foreground">15% OFF for you!</div>
        </div>
      </div>
    </Popup>

    <Popup className="absolute left-[-14%] top-[26%] scale-[0.7] origin-top-left" delay={400} visible={visible} accent="primary">
      <div className="flex items-start gap-1.5">
        <CheckCircle2 className="mt-0.5 h-3 w-3 text-[hsl(var(--primary))]" />
        <div>
          <div className="text-[9px] font-semibold text-muted-foreground">Order Confirmed</div>
          <div className="text-[11px] font-bold text-foreground">#VG123456</div>
        </div>
      </div>
    </Popup>

    <Popup className="absolute left-[-14%] top-[48%] scale-[0.7] origin-top-left" delay={550} visible={visible} accent="accent">
      <div className="flex items-start gap-1.5">
        <Gift className="mt-0.5 h-3 w-3 text-[hsl(35_100%_50%)]" />
        <div>
          <div className="text-[9px] font-semibold text-muted-foreground">Birthday Reward</div>
          <div className="text-[11px] font-bold text-foreground">100 points earned!</div>
        </div>
      </div>
    </Popup>

    <Popup className="absolute left-[-14%] top-[70%] scale-[0.7] origin-top-left" delay={700} visible={visible} accent="primary">
      <div className="flex items-start gap-1.5">
        <ShoppingBag className="mt-0.5 h-3 w-3 text-[hsl(var(--primary))]" />
        <div>
          <div className="text-[9px] font-semibold text-muted-foreground">Recommended for you</div>
          <div className="text-[11px] font-bold text-foreground">Check this out!</div>
        </div>
      </div>
    </Popup>

    {/* Review bubble bottom */}
    <div
      className="absolute -bottom-2 left-1/2 -translate-x-1/2 scale-[0.78] origin-bottom rounded-2xl bg-white/95 px-3 py-1.5 shadow-[0_12px_30px_-14px_rgba(0,0,0,0.25)] ring-1 ring-border backdrop-blur whitespace-nowrap"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(-50%) scale(0.78) translateY(0)" : "translateX(-50%) scale(0.78) translateY(8px)",
        transition: "opacity 600ms ease-out 850ms, transform 600ms ease-out 850ms",
      }}
    >
      <div className="flex items-center gap-1.5">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-[#ff9b17] text-[#ff9b17]" />
          ))}
        </div>
        <span className="text-[10px] font-semibold text-foreground">5.0</span>
        <span className="text-[9.5px] text-muted-foreground">"Thanks!"</span>
      </div>
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

/* Scales the fixed 1600x640 infographic down to fit narrower viewports without overflow */
const DesktopInfographicScaler = ({ children }: { children: React.ReactNode }) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    if (!wrapRef.current) return;
    const el = wrapRef.current;
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      setScale(Math.min(1.35, w / 1790));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={wrapRef} className="relative w-full" style={{ height: 640 * scale }}>
      <div
        style={{
          width: 1790,
          height: 640,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>);
};



/* ===================== DESKTOP ABSOLUTE INFOGRAPHIC ===================== */
/* Fixed pixel layout — applies at lg (≥1024px) breakpoint via parent. */

const DS_ROWS = [
  { Icon: Database, name: "ERP", sub: "Business systems" },
  { Icon: Store, name: "POS", sub: "In-store transactions" },
  { Icon: Globe, name: "Website / App", sub: "Behavior & analytics" },
  { Icon: ThumbsUp, name: "Social Channels", sub: "Facebook, Instagram, TikTok" },
  { Icon: MessageCircle, name: "Zalo OA", sub: "Messages & interactions" },
  { Icon: Award, name: "Loyalty Program", sub: "Points & Membership" },
  { Icon: Megaphone, name: "Campaign / Ads", sub: "Ads & promotions" },
];

const BI_CARDS = [
  { Icon: BarChart3, name: "Business Reports", sub: "Real-time dashboards and analytics" },
  { Icon: Users, name: "Audience Segmentation", sub: "Smart segments for better targeting" },
  { Icon: GitBranch, name: "Automated Journeys", sub: "Trigger personalized journeys at scale" },
  { Icon: MessageSquare, name: "Omnichannel Engagement", sub: "Engage customers on their favorite channels" },
];

const CX_CARDS = [
  { Icon: Tag, title: "Personalized Offer", body: "15% OFF for you!", accent: "orange" as const },
  { Icon: CheckCircle2, title: "Order Confirmed", body: "#VG123456", accent: "green" as const },
  { Icon: Gift, title: "Birthday Reward", body: "100 points earned!", accent: "orange" as const },
  { Icon: ShoppingBag, title: "Recommended for you", body: "Check this out!", accent: "green" as const },
];

/* Orbit nodes around Customer Profile (Col2 inner coords; profile center 200,250, r=78) */
const ORBIT = [
  { label: "Purchase\nHistory", x: 200, y: 130 },
  { label: "Interests\n& Behavior", x: 320, y: 200 },
  { label: "Channel\nPreference", x: 320, y: 320 },
  { label: "Lifetime\nValue", x: 80,  y: 360 },
  { label: "Loyalty\nTier", x: 80,  y: 200 },
];

const DesktopInfographic = ({ visible }: { visible: boolean }) => {
  // Balanced grid: 40 | 360 | 70 | 400 | 70 | 360 | 70 | 380 | 40 = 1790
  // Col tops at y=40, height 560.

  // Col1 — 7 Data Source cards. top:92 + i*66, height 54 → center = 92 + i*66 + 27
  const DS_CENTERS = DS_ROWS.map((_, i) => 40 + 92 + i * 66 + 27);
  const DS_RIGHT_X = 40 + 360 - 14; // right edge of card minus inner padding

  // Col3 — 4 Business Impact cards. tops relative 108,220,332,444, height 92 → centers
  const BI_TOPS_REL = [108, 220, 332, 444];
  const BI_CENTERS = BI_TOPS_REL.map((t) => 40 + t + 46);
  const BI_LEFT_X = 940 + 22;        // card left edge absolute
  const BI_RIGHT_X = 940 + 22 + 316; // card right edge absolute

  // Col4 — 4 CX cards. tops relative: 108,196,284,372, height 66
  const CX_TOPS_REL = [108, 196, 284, 372];
  const CX_CENTERS = CX_TOPS_REL.map((t) => 40 + t + 33);
  const CX_LEFT_X = 1370 + 22;

  // Hubs (absolute page coords) — sit in the 70px gaps between columns
  const HUB_ORANGE  = { x: 435, y: 320 };
  const HUB_GREEN_A = { x: 905, y: 320 };
  const HUB_GREEN_B = { x: 1335, y: 320 };

  // Customer Profile center (absolute) — Col2 starts at left 470, inner cx=200
  const PROFILE_C = { x: 470 + 200, y: 40 + 250, r: 78 };
  const PROFILE_LEFT = { x: PROFILE_C.x - PROFILE_C.r, y: PROFILE_C.y };
  const PROFILE_RIGHT = { x: PROFILE_C.x + PROFILE_C.r, y: PROFILE_C.y };

  return (
    <div
      className="relative mx-auto"
      style={{
        width: "100%",
        maxWidth: 1790,
        height: 640,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 600ms ease-out 200ms, transform 600ms ease-out 200ms",
      }}
    >
      {/* ===== SVG connector overlay (full section, on top of background, beneath cards) ===== */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0"
        viewBox="0 0 1790 640"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100%", overflow: "visible", zIndex: 1 }}
      >
        {/* Orange: Data Source cards → orange hub */}
        {DS_CENTERS.map((cy, i) => (
          <path
            key={`ds-${i}`}
            d={`M ${DS_RIGHT_X} ${cy} C ${DS_RIGHT_X + 30} ${cy}, ${HUB_ORANGE.x - 30} ${HUB_ORANGE.y}, ${HUB_ORANGE.x} ${HUB_ORANGE.y}`}
            stroke="hsl(22 85% 55%)"
            strokeWidth="2"
            strokeDasharray="5 7"
            fill="none"
            className={`flow-dash flow-${(i % 6) + 1}`}
            opacity="0.85"
          />
        ))}
        {/* Orange hub → Customer Profile left */}
        <path
          d={`M ${HUB_ORANGE.x} ${HUB_ORANGE.y} L ${PROFILE_LEFT.x} ${PROFILE_LEFT.y}`}
          stroke="hsl(22 85% 55%)"
          strokeWidth="2"
          strokeDasharray="5 7"
          fill="none"
          className="flow-dash flow-2"
          opacity="0.85"
        />
        <circle cx={HUB_ORANGE.x} cy={HUB_ORANGE.y} r="5" fill="hsl(22 85% 55%)" />

        {/* Green: Customer Profile right → green hub A */}
        <path
          d={`M ${PROFILE_RIGHT.x} ${PROFILE_RIGHT.y} C ${PROFILE_RIGHT.x + 50} ${PROFILE_RIGHT.y}, ${HUB_GREEN_A.x - 50} ${HUB_GREEN_A.y}, ${HUB_GREEN_A.x} ${HUB_GREEN_A.y}`}
          stroke="hsl(145 55% 42%)"
          strokeWidth="2"
          strokeDasharray="5 7"
          fill="none"
          className="flow-dash flow-3"
          opacity="0.85"
        />
        {/* Green hub A → 4 Business Impact cards (left edge) */}
        {BI_CENTERS.map((cy, i) => (
          <path
            key={`bi-in-${i}`}
            d={`M ${HUB_GREEN_A.x} ${HUB_GREEN_A.y} C ${HUB_GREEN_A.x + 30} ${HUB_GREEN_A.y}, ${BI_LEFT_X - 30} ${cy}, ${BI_LEFT_X} ${cy}`}
            stroke="hsl(145 55% 42%)"
            strokeWidth="2"
            strokeDasharray="5 7"
            fill="none"
            className={`flow-dash flow-${(i % 4) + 4}`}
            opacity="0.85"
          />
        ))}
        <circle cx={HUB_GREEN_A.x} cy={HUB_GREEN_A.y} r="5" fill="hsl(145 55% 42%)" />

        {/* Green: Business Impact right → green hub B */}
        {BI_CENTERS.map((cy, i) => (
          <path
            key={`bi-out-${i}`}
            d={`M ${BI_RIGHT_X} ${cy} C ${BI_RIGHT_X + 30} ${cy}, ${HUB_GREEN_B.x - 30} ${HUB_GREEN_B.y}, ${HUB_GREEN_B.x} ${HUB_GREEN_B.y}`}
            stroke="hsl(145 55% 42%)"
            strokeWidth="2"
            strokeDasharray="5 7"
            fill="none"
            className={`flow-dash flow-${(i % 4) + 5}`}
            opacity="0.85"
          />
        ))}
        {/* Green hub B → 4 CX cards (left edge) */}
        {CX_CENTERS.map((cy, i) => (
          <path
            key={`cx-in-${i}`}
            d={`M ${HUB_GREEN_B.x} ${HUB_GREEN_B.y} C ${HUB_GREEN_B.x + 12} ${HUB_GREEN_B.y}, ${CX_LEFT_X - 18} ${cy}, ${CX_LEFT_X} ${cy}`}
            stroke="hsl(145 55% 42%)"
            strokeWidth="2"
            strokeDasharray="5 7"
            fill="none"
            className={`flow-dash flow-${(i % 4) + 7}`}
            opacity="0.85"
          />
        ))}
        <circle cx={HUB_GREEN_B.x} cy={HUB_GREEN_B.y} r="5" fill="hsl(145 55% 42%)" />
      </svg>

      {/* ===== Column 1 — DATA SOURCES ===== */}
      <div
        className="absolute rounded-xl border border-[hsl(22_85%_85%)]/60 bg-gradient-to-b from-[hsl(22_100%_98%)] to-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
        style={{ left: 40, top: 40, width: 360, height: 560, zIndex: 2 }}
      >
        <DesktopColumnHeader index={1} accent="orange" title="DATA SOURCES" subtitle="Collect data from every touchpoint" />
        {DS_ROWS.map((it, i) => (
          <div
            key={it.name}
            className="absolute flex items-center gap-2 rounded-lg border border-[hsl(22_95%_85%)]/60 bg-white px-3 py-2 shadow-[0_1px_3px_rgba(255,138,114,0.08)]"
            style={{ left: 14, right: 14, top: 92 + i * 66, height: 54 }}
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[hsl(22_100%_96%)] text-[hsl(22_85%_50%)]">
              <it.Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-[15.5px] font-semibold leading-tight text-foreground">{it.name}</div>
              <div className="text-[13px] leading-tight text-muted-foreground">{it.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Column 2 — AI CUSTOMER BRAIN ===== */}
      <div
        className="absolute rounded-xl border border-[hsl(145_55%_80%)]/50 bg-gradient-to-b from-[hsl(145_60%_98%)] to-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
        style={{ left: 470, top: 40, width: 400, height: 560, zIndex: 2 }}
      >
        <DesktopColumnHeader index={2} accent="green" title="AI CUSTOMER BRAIN" subtitle="Unify, understand and predict" centered />

        {/* Flow lines + animated orbit connecting Customer Profile 360° with orbit nodes + pills */}
        <svg
          className="pointer-events-none absolute inset-0"
          viewBox="0 0 400 560"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%", overflow: "visible", zIndex: 1 }}
          aria-hidden
        >
          <defs>
            <marker id="brain-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="hsl(145 55% 45%)" />
            </marker>
            {/* Circular orbit path (used for both visible orbit + animateMotion particles) */}
            <path
              id="brain-orbit"
              d="M 200,140 A 110,110 0 1 1 199.99,140 Z"
            />
          </defs>

          {/* Visible dotted orbit */}
          <use
            href="#brain-orbit"
            fill="none"
            stroke="#53C46B"
            strokeWidth={1.5}
            strokeDasharray="4 7"
            opacity={0.45}
            className="brain-orbit-path"
          />

          {/* Static connector lines to orbit nodes */}
          {ORBIT.map((s) => {
            const cx = 200, cy = 250, r = 78;
            const dx = s.x - cx, dy = s.y - cy;
            const len = Math.hypot(dx, dy) || 1;
            const ux = dx / len, uy = dy / len;
            const x1 = cx + ux * r;
            const y1 = cy + uy * r;
            const x2 = s.x - ux * 14;
            const y2 = s.y - uy * 14;
            return (
              <line
                key={s.label}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="hsl(145 55% 45%)"
                strokeWidth={1.5}
                strokeDasharray="4 5"
                strokeLinecap="round"
              />
            );
          })}

          {/* Signal particles travelling along orbit (clockwise) */}
          {[0, 2.2, 4.4, 6.6].map((delay, i) => (
            <circle key={i} r={3.2} fill="#35B96B" className="brain-particle">
              <animateMotion
                dur="9s"
                begin={`-${delay}s`}
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#brain-orbit" />
              </animateMotion>
            </circle>
          ))}

          {/* Vertical dotted signal line from profile down through pills */}
          <line
            x1={200} y1={328} x2={200} y2={575}
            stroke="#53C46B"
            strokeWidth={1.5}
            strokeDasharray="4 7"
            opacity={0.55}
            className="brain-down-path"
          />
          {/* Arrow head pointing at first pill */}
          <line
            x1={200} y1={328} x2={200} y2={420}
            stroke="transparent"
            markerEnd="url(#brain-arrow)"
          />
          {/* Downward signal particle */}
          <circle r={3} fill="#35B96B" className="brain-particle">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 200,328 L 200,575" />
          </circle>

        </svg>


        {/* Breathing glow behind Customer Profile 360° */}
        <span
          className="brain-glow"
          style={{ left: 200, top: 250, width: 230, height: 230, zIndex: 1 }}
          aria-hidden
        />

        {/* Orbit nodes */}
        {ORBIT.map((s, i) => (
          <div
            key={s.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-pre-line text-center text-[14px] font-semibold leading-[1.2] text-[hsl(145_45%_25%)]"
            style={{ left: s.x, top: s.y, zIndex: 3 }}
          >
            <span
              className="brain-node-dot mx-auto mb-1 block h-2 w-2 rounded-full bg-[hsl(145_55%_45%)]"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
            {s.label}
          </div>
        ))}

        {/* Customer Profile 360° — center 200,250, size 156 */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center rounded-full bg-white text-center shadow-[0_10px_28px_rgba(57,180,74,0.3)] ring-2 ring-[hsl(145_55%_45%)]/40"
          style={{ left: 200, top: 250, width: 156, height: 156, zIndex: 3 }}
        >
          <UserIcon className="h-8 w-8 text-[hsl(145_50%_35%)]" />
          <div className="mt-1 text-[16.5px] font-bold leading-tight text-[hsl(145_50%_22%)]">
            Customer<br />Profile 360°
          </div>
        </div>

        {/* Capability pills bottom */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col gap-2" style={{ top: 430, width: 280, zIndex: 3 }}>
          {[
            { Icon: Database, label: "Data Collected" },
            { Icon: Users, label: "AI Segmentation" },
            { Icon: BarChart3, label: "Predictive Insights" },
            { Icon: GitBranch, label: "Journey Automation" },
          ].map((p, i) => (
            <div
              key={p.label}
              className="brain-pill flex items-center justify-center gap-2 rounded-full border border-[hsl(145_45%_75%)]/50 bg-[hsl(145_60%_97%)] px-3 py-1.5"
              style={{ animationDelay: `${i * 0.75}s` }}
            >
              <p.Icon className="h-4 w-4 shrink-0 text-[hsl(145_50%_35%)]" />
              <span className="text-[15px] font-semibold leading-none text-[hsl(145_50%_25%)]">{p.label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* ===== Column 3 — BUSINESS IMPACT ===== */}
      <div
        className="absolute rounded-xl border border-[hsl(145_55%_80%)]/50 bg-gradient-to-b from-[hsl(145_60%_98%)] to-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
        style={{ left: 940, top: 40, width: 360, height: 560, zIndex: 2 }}
      >
        <DesktopColumnHeader index={3} accent="green" title="BUSINESS IMPACT" subtitle="Turn insights into measurable results" />
        {BI_CARDS.map((it, i) => (
          <div
            key={it.name}
            className="absolute flex items-start gap-3 rounded-lg border border-[hsl(145_45%_80%)]/50 bg-white px-3 py-2.5 shadow-[0_1px_3px_rgba(57,180,74,0.08)]"
            style={{ left: 22, width: 316, height: 92, top: BI_TOPS_REL[i] }}
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-[hsl(145_60%_95%)] text-[hsl(145_50%_35%)]">
              <it.Icon className="h-[18px] w-[18px]" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-[16.5px] font-semibold leading-tight text-[hsl(145_50%_28%)]">{it.name}</div>
              <div className="mt-1 text-[14px] leading-snug text-muted-foreground">{it.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Column 4 — CUSTOMER EXPERIENCE ===== */}
      <div
        className="absolute rounded-xl border border-[hsl(145_55%_80%)]/50 bg-gradient-to-b from-[hsl(145_60%_98%)] to-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
        style={{ left: 1370, top: 40, width: 380, height: 560, zIndex: 2, overflow: "visible" }}
      >
        <DesktopColumnHeader index={4} accent="green" title="CUSTOMER EXPERIENCE" subtitle="Deliver personalized experiences that customers love" />

        {/* Soft green glow behind girl */}
        <div
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{
            right: -10, bottom: 30, width: 280, height: 330,
            background: "radial-gradient(circle, rgba(43,196,105,0.22), rgba(43,196,105,0.04), transparent)",
            zIndex: 0,
          }}
        />

        {/* Customer image — hero visual */}
        <img
          src={shopperImg}
          alt="Happy customer receiving personalized offers"
          loading="lazy"
          className="absolute object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.18)]"
          style={{ right: 0, bottom: 24, width: 220, maxWidth: "58%", height: "auto", zIndex: 2 }}
        />

        {/* Engagement cards (floating, left side) */}
        {CX_CARDS.map((p, i) => {
          const isOrange = p.accent === "orange";
          const iconBg = isOrange ? "bg-[hsl(35_100%_94%)] text-[hsl(35_100%_45%)]" : "bg-[hsl(145_60%_95%)] text-[hsl(145_50%_35%)]";
          const ring = isOrange ? "border-[hsl(35_100%_85%)]/70" : "border-[hsl(145_55%_80%)]/60";
          return (
            <div
              key={p.title}
              className={`absolute flex items-center gap-2 rounded-xl border ${ring} bg-white px-2.5 py-2 shadow-[0_4px_10px_rgba(0,0,0,0.08)]`}
              style={{ left: 22, width: 220, height: 66, top: CX_TOPS_REL[i], zIndex: 3 }}
            >
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-md ${iconBg}`}>
                <p.Icon className="h-[18px] w-[18px]" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[14px] font-semibold leading-tight text-muted-foreground line-clamp-2">{p.title}</div>
                <div className="text-[15.5px] font-bold leading-tight text-foreground line-clamp-2">{p.body}</div>
              </div>
            </div>
          );
        })}

        {/* Rating card */}
        <div
          className="absolute rounded-2xl bg-white px-3 py-2 shadow-[0_8px_20px_-10px_rgba(0,0,0,0.25)] ring-1 ring-border"
          style={{ left: 22, bottom: 28, width: 230, height: 72, zIndex: 3 }}
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[#ff9b17] text-[#ff9b17]" />
            ))}
            <span className="ml-1 text-[16.5px] font-bold text-foreground">5.0</span>
          </div>
          <div className="mt-1 text-[14.5px] italic text-muted-foreground">"Thanks for your feedback!"</div>
        </div>
      </div>
    </div>
  );
};

const DesktopColumnHeader = ({
  index, accent, title, subtitle, centered,
}: { index: number; accent: "orange" | "green"; title: string; subtitle: string; centered?: boolean }) => {
  const isOrange = accent === "orange";
  const numBg = isOrange ? "bg-[hsl(22_85%_55%)]" : "bg-[hsl(145_55%_42%)]";
  const titleColor = isOrange ? "text-[hsl(22_85%_45%)]" : "text-[hsl(145_55%_30%)]";
  return (
    <div className={`absolute left-4 right-4 top-4 flex items-start gap-2 ${centered ? "justify-center" : ""}`}>
      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${numBg} text-[15px] font-bold text-white shadow-sm`}>
        {index}
      </span>
      <div className={`min-w-0 ${centered ? "text-center" : ""}`}>
        <div className={`text-[17.5px] font-extrabold uppercase tracking-wider ${titleColor} leading-tight`}>
          {title}
        </div>
        <div className="mt-0.5 text-[14px] leading-tight text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  );
};



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
      particles = Array.from({ length: 36 }, () => ({
        cx: Math.random() * W,
        cy: Math.random() * H,
        r: 14 + Math.random() * 38,
        a: Math.random() * Math.PI * 2,
        spd: (0.12 + Math.random() * 0.18) * (Math.random() > 0.5 ? 1 : -1),
        size: 1.0 + Math.random() * 1.6,
        baseOp: 0.14 + Math.random() * 0.24,
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
      className="relative w-full rounded-2xl border border-[hsl(var(--primary))]/15 bg-white px-3 py-5 sm:px-6 sm:py-7 lg:px-4 lg:py-6 xl:px-6 xl:py-8 overflow-hidden"
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

      <div className="relative z-10">

        {/* ============ DESKTOP (≥1024px): fixed absolute infographic ============ */}
        <div className="hidden lg:block">
          <DesktopInfographicScaler>
            <DesktopInfographic visible={visible} />
          </DesktopInfographicScaler>
        </div>

        {/* ============ TABLET / MOBILE: responsive stacked layout ============ */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:gap-5">
            <StepDataSources visible={visible} />
            <StepAIBrain visible={visible} />
            <StepBusinessImpact visible={visible} />
            <StepCustomerExperience visible={visible} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes step-pulse-orange { 0%,100% { opacity: 0.3; } 50% { opacity: 0.9; } }
        @keyframes step-pulse-green { 0%,100% { opacity: 0.3; } 50% { opacity: 0.9; } }
        @keyframes brain-orb-glow { 0%,100% { transform: scale(1); opacity: 0.55; } 50% { transform: scale(1.08); opacity: 1; } }
        @keyframes brain-ring-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes step-row-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
        @keyframes flow-dash-move { to { stroke-dashoffset: -24; } }
        .flow-dash { animation: flow-dash-move 1.8s linear infinite; }
        .flow-1 { animation-delay: 0s; }
        .flow-2 { animation-delay: 0.15s; }
        .flow-3 { animation-delay: 0.3s; }
        .flow-4 { animation-delay: 0.45s; }
        .flow-5 { animation-delay: 0.6s; }
        .flow-6 { animation-delay: 0.75s; }
        .flow-7 { animation-delay: 0.9s; }
        .flow-8 { animation-delay: 1.05s; }
        .flow-9 { animation-delay: 1.2s; }
        .flow-10 { animation-delay: 1.35s; }
        @media (prefers-reduced-motion: reduce) {
          .step-anim, .flow-dash { animation: none !important; }
        }
      `}</style>

    </div>
  );
};

/* ---------- Step 1: Data Sources ---------- */

const DATA_SOURCES = [
  { Icon: Database, name: "ERP", sub: "Business systems" },
  { Icon: Store, name: "POS", sub: "In-store transactions" },
  { Icon: Globe, name: "Website / App", sub: "Behavior & analytics" },
  { Icon: ThumbsUp, name: "Social Channels", sub: "Facebook, Instagram, TikTok" },
  { Icon: MessageCircle, name: "Zalo OA", sub: "Messages & interactions" },
  { Icon: Award, name: "Loyalty Program", sub: "Points & Membership" },
  { Icon: Megaphone, name: "Campaign / Ads", sub: "Ads & promotions" },
];

const StepDataSources = ({ visible }: { visible: boolean }) => (
  <StepCard
    index={1}
    accent="orange"
    title="DATA SOURCES"
    subtitle="Collect data from every touchpoint"
    visible={visible}
    delay={0}
  >
    <div className="flex flex-col gap-1.5">
      {DATA_SOURCES.map((it, i) => (
        <div
          key={it.name}
          className="step-anim flex items-start gap-2 rounded-lg border border-[hsl(22_95%_85%)]/60 bg-white px-2.5 py-1.5 shadow-[0_1px_3px_rgba(255,138,114,0.08)]"
          style={{ animation: `step-row-float 4s ease-in-out ${i * 0.3}s infinite` }}
        >
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[hsl(22_100%_96%)] text-[hsl(22_85%_50%)]">
            <it.Icon className="h-3.5 w-3.5" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-semibold leading-tight text-foreground">{it.name}</div>
            <div className="text-[9.5px] leading-tight text-muted-foreground line-clamp-2">{it.sub}</div>
          </div>
        </div>
      ))}
    </div>
  </StepCard>
);

/* ---------- Step 2: AI Customer Brain ---------- */

const BRAIN_SATELLITES = [
  { label: "Purchase\nHistory", angle: -90 },
  { label: "Interests\n& Behavior", angle: -22 },
  { label: "Channel\nPreference", angle: 45 },
  { label: "Lifetime\nValue", angle: 135 },
  { label: "Loyalty\nTier", angle: -158 },
];

const BRAIN_PILLS = [
  { Icon: Database, label: "Data Collected" },
  { Icon: Users, label: "AI Segmentation" },
  { Icon: BarChart3, label: "Predictive Insights" },
  { Icon: GitBranch, label: "Journey Automation" },
];

const StepAIBrain = ({ visible }: { visible: boolean }) => (
  <StepCard
    index={2}
    accent="green"
    title="AI CUSTOMER BRAIN"
    subtitle="Unify, understand and predict"
    visible={visible}
    delay={120}
  >
    {/* Orbit core */}
    <div className="relative mx-auto aspect-square w-full max-w-[240px]">
      {/* Glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(145 70% 70% / 0.45), transparent 70%)",
          animation: "brain-orb-glow 3.5s ease-in-out infinite",
        }}
      />
      {/* Dashed ring */}
      <div
        className="step-anim absolute inset-[10%] rounded-full border border-dashed border-[hsl(145_45%_55%)]/40"
        style={{ animation: "brain-ring-cw 30s linear infinite" }}
      />
      {/* Satellites — plain labels like reference */}
      {BRAIN_SATELLITES.map((s) => {
        const rad = (s.angle * Math.PI) / 180;
        const r = 48;
        const x = 50 + r * Math.cos(rad);
        const y = 50 + r * Math.sin(rad);
        return (
          <div
            key={s.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-center text-[8.5px] font-semibold leading-[1.15] text-[hsl(145_45%_25%)] whitespace-pre-line"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span className="mb-0.5 mx-auto block h-1.5 w-1.5 rounded-full bg-[hsl(145_55%_45%)]" />
            {s.label}
          </div>
        );
      })}
      {/* Center core */}
      <div className="absolute left-1/2 top-1/2 flex aspect-square w-[48%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white text-center shadow-[0_8px_22px_rgba(57,180,74,0.28)] ring-2 ring-[hsl(145_55%_45%)]/35">
        <UserIcon className="h-5 w-5 text-[hsl(145_50%_35%)]" />
        <div className="mt-1 text-[10.5px] font-bold leading-tight text-[hsl(145_50%_22%)]">
          Customer<br />Profile 360°
        </div>
      </div>
    </div>

    {/* Capability pills */}
    <div className="mt-3 flex flex-col gap-1.5">
      {BRAIN_PILLS.map((p) => (
        <div
          key={p.label}
          className="flex items-center justify-center gap-2 rounded-full border border-[hsl(145_45%_75%)]/50 bg-[hsl(145_60%_97%)] px-3 py-1"
        >
          <p.Icon className="h-3 w-3 shrink-0 text-[hsl(145_50%_35%)]" />
          <span className="text-[10.5px] font-semibold leading-none text-[hsl(145_50%_25%)]">{p.label}</span>
        </div>
      ))}
    </div>
  </StepCard>
);

/* ---------- Step 3: Business Impact ---------- */

const BUSINESS_IMPACT = [
  { Icon: BarChart3, name: "Business Reports", sub: "Real-time dashboards and analytics" },
  { Icon: Users, name: "Audience Segmentation", sub: "Smart segments for better targeting" },
  { Icon: GitBranch, name: "Automated Journeys", sub: "Trigger personalized journeys at scale" },
  { Icon: MessageSquare, name: "Omnichannel Engagement", sub: "Engage customers on their favorite channels" },
];

const StepBusinessImpact = ({ visible }: { visible: boolean }) => (
  <StepCard
    index={3}
    accent="green"
    title="BUSINESS IMPACT"
    subtitle="Turn insights into measurable results"
    visible={visible}
    delay={240}
  >
    <div className="flex flex-col gap-2">
      {BUSINESS_IMPACT.map((it, i) => (
        <div
          key={it.name}
          className="step-anim flex items-start gap-2 rounded-lg border border-[hsl(145_45%_80%)]/50 bg-white px-2.5 py-2 shadow-[0_1px_3px_rgba(57,180,74,0.08)]"
          style={{ animation: `step-row-float 4s ease-in-out ${i * 0.35}s infinite` }}
        >
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[hsl(145_60%_95%)] text-[hsl(145_50%_35%)]">
            <it.Icon className="h-4 w-4" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-[11.5px] font-semibold leading-tight text-[hsl(145_50%_28%)]">{it.name}</div>
            <div className="mt-0.5 text-[9.5px] leading-snug text-muted-foreground">{it.sub}</div>
          </div>
        </div>
      ))}
    </div>
  </StepCard>
);

/* ---------- Step 4: Customer Experience ---------- */

const CX_POPUPS = [
  { Icon: Tag, title: "Personalized Offer", body: "15% OFF for you!", tone: "accent" as const },
  { Icon: CheckCircle2, title: "Order Confirmed", body: "#VG123456", tone: "primary" as const },
  { Icon: Gift, title: "Birthday Reward", body: "100 points earned!", tone: "accent" as const },
  { Icon: ShoppingBag, title: "Recommended for you", body: "Check this out!", tone: "primary" as const },
];

const StepCustomerExperience = ({ visible }: { visible: boolean }) => (
  <StepCard
    index={4}
    accent="green"
    title="CUSTOMER EXPERIENCE"
    subtitle="Deliver personalized experiences that customers love"
    visible={visible}
    delay={360}
  >
    <div className="relative min-h-[340px]">
      {/* Soft green glow behind girl */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] bottom-[10%] -z-0 h-[70%] w-[70%] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 60% 50%, hsl(145 65% 78% / 0.65) 0%, hsl(145 65% 70% / 0.35) 50%, transparent 75%)",
        }}
      />

      {/* Girl image — bottom-right inside column */}
      <img
        src={shopperImg}
        alt="Happy customer receiving personalized offers"
        loading="lazy"
        className="pointer-events-none absolute bottom-0 right-[-6%] z-0 h-auto w-[46%] max-w-[170px] object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.14)]"
      />

      {/* Popups column — left side, wraps ~60% width */}
      <div className="relative z-10 flex flex-col gap-1.5 pr-[44%]">
        {CX_POPUPS.map((p, i) => {
          const isAccent = p.tone === "accent";
          const iconBg = isAccent ? "bg-[hsl(35_100%_94%)] text-[hsl(35_100%_45%)]" : "bg-[hsl(145_60%_95%)] text-[hsl(145_50%_35%)]";
          const ring = isAccent ? "border-[hsl(35_100%_85%)]/60" : "border-[hsl(145_55%_80%)]/50";
          return (
            <div
              key={p.title}
              className={`step-anim flex items-start gap-2 rounded-lg border ${ring} bg-white px-2 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.05)]`}
              style={{ animation: `step-row-float 4s ease-in-out ${i * 0.3 + 0.15}s infinite` }}
            >
              <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-md ${iconBg}`}>
                <p.Icon className="h-3.5 w-3.5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[9.5px] font-semibold leading-tight text-muted-foreground">{p.title}</div>
                <div className="text-[10.5px] font-bold leading-tight text-foreground line-clamp-2">{p.body}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Review badge — bottom-left under popups */}
      <div className="relative z-10 mt-2 inline-block rounded-2xl bg-white px-3 py-1.5 shadow-[0_8px_20px_-12px_rgba(0,0,0,0.2)] ring-1 ring-border">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-[#ff9b17] text-[#ff9b17]" />
          ))}
          <span className="ml-1 text-[11px] font-bold text-foreground">5.0</span>
        </div>
        <div className="mt-0.5 text-[9.5px] italic text-muted-foreground">"Thanks for your feedback!"</div>
      </div>
    </div>
  </StepCard>
);


/* ---------- Reusable Step Card ---------- */

const StepCard = ({
  index,
  accent,
  title,
  subtitle,
  visible,
  delay,
  children,
}: {
  index: number;
  accent: "orange" | "green";
  title: string;
  subtitle: string;
  visible: boolean;
  delay: number;
  children: React.ReactNode;
}) => {
  const isOrange = accent === "orange";
  const numBg = isOrange ? "bg-[hsl(22_85%_55%)]" : "bg-[hsl(145_55%_42%)]";
  const titleColor = isOrange ? "text-[hsl(22_85%_45%)]" : "text-[hsl(145_55%_30%)]";
  const borderColor = isOrange
    ? "border-[hsl(22_85%_85%)]/60"
    : "border-[hsl(145_55%_80%)]/50";
  const bgTint = isOrange
    ? "bg-gradient-to-b from-[hsl(22_100%_98%)] to-white"
    : "bg-gradient-to-b from-[hsl(145_60%_98%)] to-white";

  return (
    <div
      className={`relative rounded-xl border ${borderColor} ${bgTint} p-3 sm:p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] md:min-h-[420px]`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-2">
        <span
          className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${numBg} text-[11px] font-bold text-white shadow-sm`}
        >
          {index}
        </span>
        <div className="min-w-0">
          <div className={`text-[12px] sm:text-[13px] font-extrabold uppercase tracking-wider ${titleColor} leading-tight`}>
            {title}
          </div>
          <div className="text-[10px] leading-tight text-muted-foreground mt-0.5">{subtitle}</div>
        </div>
      </div>
      {children}
    </div>
  );
};






