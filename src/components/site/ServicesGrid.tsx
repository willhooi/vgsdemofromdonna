import { useEffect, useRef, useState } from "react";
import mountainsImg from "@/assets/services-mountains.png";
import {
  MessageSquare,
  MessageCircle,
  Smartphone,
  Mail,
  CreditCard,
  Hash,
  PhoneCall,
  Settings2,
  Key,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Hand,
  type LucideIcon,
} from "lucide-react";

type Stat = { value: string; label: string };
type Service = {
  name: string;
  icon: LucideIcon;
  tag: string;
  short: string;
  desc: string;
  stats: Stat[];
  cta: string;
  comingSoon?: boolean;
};

const SERVICES: Service[] = [
  {
    name: "SMS Brandname",
    icon: MessageSquare,
    tag: "Brand-name messaging at speed — OTP, CRM & campaign-ready.",
    short: "Brand-name messaging at speed — OTP, CRM & campaign-ready.",
    desc: "Send SMS under your brand name instead of an unknown number. Covers all Vietnamese carriers. Supports API & webtool integration with real-time delivery reports.",
    stats: [
      { value: "98%", label: "Open rate within 3 min" },
      { value: "API & Webtool", label: "Flexible integration" },
    ],
    cta: "Learn about SMS Brandname",
  },
  {
    name: "Zalo ZBS",
    icon: MessageCircle,
    tag: "Rich media messaging on Zalo OA — images, CTA buttons & vouchers.",
    short: "Rich media messaging on Zalo OA — images, CTA buttons & vouchers.",
    desc: "Send multimedia content (images, CTA buttons, mini-apps) via Zalo Official Account. Drives O2O engagement with SMS failover built in. Top 3 Zalo provider in Vietnam.",
    stats: [
      { value: "80M+", label: "Zalo users in Vietnam" },
      { value: "3× CTR", label: "vs standard SMS" },
    ],
    cta: "Learn about Zalo ZBS",
  },
  {
    name: "Viber Message",
    icon: Smartphone,
    tag: "Branded messages with images & action buttons, reaching global users.",
    short: "Branded messages with images & action buttons, reaching global users.",
    desc: "Send branded stickers, images, and CTA buttons via Viber. Auto SMS failover ensures 100% delivery. Reaches premium & international audiences. VietGuys holds 60% of Vietnam's Viber ad market.",
    stats: [
      { value: "1B+", label: "Global users" },
      { value: "60%", label: "Viber Ads market share VN" },
    ],
    cta: "Learn about Viber Message",
  },
  {
    name: "Email Marketing",
    icon: Mail,
    tag: "Personalized emails with automation journeys & A/B testing.",
    short: "Personalized emails with automation journeys & A/B testing.",
    desc: "Trigger emails based on customer behavior, run A/B tests, and automate full journeys — seamlessly integrated into VietGuys' multichannel ecosystem.",
    stats: [
      { value: "A/B Testing", label: "Content optimization" },
      { value: "Auto Journey", label: "Behavior-triggered flows" },
    ],
    cta: "Learn about Email Marketing",
  },
  {
    name: "Mobile Topup",
    icon: CreditCard,
    tag: "Instant airtime top-up as loyalty rewards — fully automated.",
    short: "Instant airtime top-up as loyalty rewards — fully automated.",
    desc: "Reward customers with direct top-ups or scratch card codes across all carriers. Eliminates physical card risks. Auto failover delivers card codes via SMS if top-up fails.",
    stats: [
      { value: "All Carriers", label: "Full Vietnam coverage" },
      { value: "API", label: "System integration" },
    ],
    cta: "Learn about Mobile Topup",
  },
  {
    name: "SMS Short Code",
    icon: Hash,
    tag: "Two-way SMS via short code — minigames, polls & instant vouchers.",
    short: "Two-way SMS via short code — minigames, polls & instant vouchers.",
    desc: "Customers text a keyword to shortcode 6067; the system auto-replies based on your scenario. Full message history and reporting included.",
    stats: [
      { value: "2-way SMS", label: "Interactive messaging" },
      { value: "Auto-reply", label: "Instant response" },
    ],
    cta: "Learn about SMS Short Code",
  },
  {
    name: "Voice Brandname",
    icon: PhoneCall,
    tag: "Auto calls displaying your brand name — higher answer rates guaranteed.",
    short: "Auto calls displaying your brand name — higher answer rates guaranteed.",
    desc: "Outbound calls show your brand name instead of an unknown number. Use for OTP by voice, order confirmations, debt reminders, and surveys. Charged only on answered calls.",
    stats: [
      { value: "Brand Caller ID", label: "Displayed on every call" },
      { value: "Pay per answer", label: "No charge for missed calls" },
    ],
    cta: "Learn about Voice Brandname",
  },
  {
    name: "Customized Solution",
    icon: Settings2,
    tag: "100% tailored — API, white-label platform & CDP/CRM integration.",
    short: "100% tailored — API, white-label platform & CDP/CRM integration.",
    desc: "Build a solution that fits your exact needs: custom API integration, white-label platform, CDP/CRM data connection, and multichannel orchestration under one ecosystem.",
    stats: [
      { value: "White-label", label: "Your own platform" },
      { value: "CDP / CRM", label: "Data integration" },
    ],
    cta: "Learn about Customized Solution",
  },
  {
    name: "OTP Multichannel",
    icon: Key,
    tag: "Deliver OTP via SMS, Zalo, Viber & Voice — all on one API.",
    short: "Deliver OTP via SMS, Zalo, Viber & Voice — all on one API.",
    desc: "Route OTP across prioritized channels with automatic failover if delivery fails. End-users choose their preferred channel — maximizing verification success while minimizing cost.",
    stats: [
      { value: "Automatic failover", label: "Failover mechanism" },
      { value: "99%", label: "Delivery Rate" },
    ],
    cta: "Learn about OTP Multichannel",
  },
];

const GREEN = "#39B44A";
const GREEN_DEEP = "#008134";
const GREEN_BG = "#F0FBF1";
const ORANGE = "#FF9B17";
const BORDER = "0.5px solid #E5E5E5";
const BORDER_ACTIVE = "1.5px solid #39B44A";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const check = () => setM(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return m;
}

function ComingSoonForm() {
  return (
    <div className="mt-4">
      <span
        className="inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
        style={{ background: ORANGE }}
      >
        Coming Soon
      </span>
      <p className="mt-3 text-[12px] leading-[1.7] text-muted-foreground">
        Register to get notified as soon as OTP Multichannel goes live.
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
        <input
          type="email"
          required
          placeholder="email@company.com"
          className="min-w-0 flex-1 rounded-[9px] border border-border bg-background px-3 py-2 text-[12px] outline-none focus:border-foreground"
        />
        <button
          type="submit"
          className="rounded-[9px] px-4 text-[12px] font-bold text-white transition-opacity hover:opacity-90"
          style={{ background: ORANGE }}
        >
          Notify me
        </button>
      </form>
    </div>
  );
}

function DesktopCard({
  svc,
  open,
  onEnter,
  onLeave,
  onToggle,
}: {
  svc: Service;
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onToggle: () => void;
}) {
  const Icon = svc.icon;
  return (
    <article
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onToggle}
      className="group relative flex cursor-pointer flex-col self-start overflow-hidden rounded-[14px] p-5 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: open ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.06)",
        backdropFilter: open ? "blur(14px) saturate(140%)" : "blur(6px) saturate(120%)",
        WebkitBackdropFilter: open ? "blur(14px) saturate(140%)" : "blur(6px) saturate(120%)",
        border: open ? "1.5px solid rgba(57,180,74,0.9)" : "1px solid rgba(255,255,255,0.22)",
        boxShadow: open
          ? "0 18px 40px -14px rgba(57,180,74,0.35)"
          : "0 2px 10px -6px rgba(0,0,0,0.12)",
        height: open ? 360 : 140,
      }}
    >
      <header className="flex items-start justify-between gap-3">
        <div
          className="flex items-center justify-center rounded-[8px] transition-all"
          style={{
            width: open ? 42 : 36,
            height: open ? 42 : 36,
            background: open ? GREEN : "rgba(57,180,74,0.10)",
            borderRadius: open ? 10 : 8,
          }}
        >
          <Icon size={open ? 22 : 18} color={open ? "#fff" : GREEN} />
        </div>
        {svc.comingSoon && !open && (
          <span
            className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white"
            style={{ background: ORANGE }}
          >
            SOON
          </span>
        )}
        {!open && (
          <ArrowUpRight
            size={16}
            className="opacity-0 transition-opacity group-hover:opacity-60"
          />
        )}
      </header>

      <div className="mt-3">
        <h3
          className="font-bold transition-all"
          style={{
            fontSize: open ? 16 : 13,
            color: open ? GREEN_DEEP : "hsl(var(--foreground))",
            fontWeight: open ? 900 : 700,
          }}
        >
          {svc.name}
        </h3>
        {svc.short && (
          <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-muted-foreground">
            {svc.short}
          </p>
        )}
      </div>

      {/* Smooth accordion drop using grid-template-rows trick */}
      <div
        className="grid transition-[grid-template-rows,opacity] duration-400 ease-out"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
          transitionDuration: "400ms",
        }}
      >
        <div className="overflow-hidden">
          <div className="pt-2">
            <p className="text-[12px] leading-[1.6] text-muted-foreground">
              {svc.desc}
            </p>

            {svc.comingSoon ? (
              <ComingSoonForm />
            ) : (
              <>
                <div className="mt-3 grid grid-cols-2 gap-1.5">
                  {svc.stats.map((s) => (
                    <div key={s.label} className="rounded-[10px] py-2 px-2.5" style={{ background: "rgba(255,255,255,0.6)" }}>
                      <div
                        className="font-black leading-none"
                        style={{ color: GREEN, whiteSpace: "nowrap", fontSize: "clamp(11px, 1.6vw, 15px)" }}
                      >
                        {s.value}
                      </div>
                      <div className="mt-0.5 text-[11px] text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={(e) => e.stopPropagation()}
                  className="mt-3 rounded-[9px] px-4 py-2 text-[12px] font-bold text-white transition-opacity hover:opacity-90"
                  style={{ background: GREEN }}
                >
                  {svc.cta}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function MobileCard({ svc }: { svc: Service }) {
  const Icon = svc.icon;
  return (
    <div
      className="flex h-full w-full flex-col rounded-[16px] bg-background p-6"
      style={{ border: BORDER }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex items-center justify-center rounded-[12px]"
          style={{ width: 48, height: 48, background: GREEN }}
        >
          <Icon size={24} color="#fff" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[17px] font-black leading-tight text-foreground">
            {svc.name}
          </h3>
          <div className="mt-1 text-[11px] font-bold" style={{ color: GREEN }}>
            {svc.tag}
          </div>
        </div>
      </div>
      <p className="mt-4 text-[13px] leading-[1.7] text-muted-foreground">
        {svc.desc}
      </p>

      {svc.comingSoon ? (
        <ComingSoonForm />
      ) : (
        <>
          <div className="mt-5 grid grid-cols-2 gap-2">
            {svc.stats.map((s) => (
              <div key={s.label} className="rounded-[10px] bg-secondary p-3">
                <div
                  className="text-[20px] font-black leading-none"
                  style={{ color: GREEN }}
                >
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <button
            className="mt-5 w-full rounded-[9px] py-3 text-[13px] font-bold text-white"
            style={{ background: GREEN }}
          >
            {svc.cta}
          </button>
        </>
      )}
    </div>
  );
}

function MobileSwiper() {
  const [idx, setIdx] = useState(0);
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState(0);
  const n = SERVICES.length;

  const go = (i: number) => setIdx(Math.max(0, Math.min(n - 1, i)));

  const onStart = (x: number) => {
    startX.current = x;
    deltaX.current = 0;
  };
  const onMove = (x: number) => {
    if (startX.current == null) return;
    deltaX.current = x - startX.current;
    setDrag(deltaX.current);
  };
  const onEnd = () => {
    if (Math.abs(deltaX.current) > 50) {
      if (deltaX.current < 0) go(idx + 1);
      else go(idx - 1);
    }
    startX.current = null;
    deltaX.current = 0;
    setDrag(0);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(idx + 1);
      if (e.key === "ArrowLeft") go(idx - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx]);

  return (
    <div className="md:hidden">
      <div className="mb-3 flex items-center justify-center gap-2 text-[12px] text-muted-foreground">
        <Hand size={14} />
        <span>Vuốt để xem dịch vụ tiếp theo</span>
      </div>

      <div
        className="overflow-hidden"
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={onEnd}
        onMouseDown={(e) => onStart(e.clientX)}
        onMouseMove={(e) => {
          if (startX.current != null) onMove(e.clientX);
        }}
        onMouseUp={onEnd}
        onMouseLeave={() => startX.current != null && onEnd()}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{
            transform: `translateX(calc(${-idx * 100}% + ${drag}px))`,
            transition: startX.current == null ? "transform 0.4s cubic-bezier(0.4,0,0.2,1)" : "none",
          }}
        >
          {SERVICES.map((s) => (
            <div key={s.name} className="w-full flex-shrink-0 px-1">
              <MobileCard svc={s} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => go(idx - 1)}
          disabled={idx === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background disabled:opacity-40"
          aria-label="Trước"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="text-[12px] font-bold text-muted-foreground">
          {idx + 1} / {n}
        </div>
        <button
          onClick={() => go(idx + 1)}
          disabled={idx === n - 1}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background disabled:opacity-40"
          aria-label="Sau"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-3 flex justify-center gap-1.5">
        {SERVICES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: i === idx ? 20 : 6,
              background: i === idx ? GREEN : "#E5E5E5",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function ServicesGrid() {
  const isMobile = useIsMobile();
  // One open card per column by default (top row of each column).
  const [openByCol, setOpenByCol] = useState<Record<number, number | null>>({
    0: 0,
    1: 0,
    2: 0,
  });

  const isOpen = (i: number) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    return openByCol[col] === row;
  };

  const openAt = (i: number) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    setOpenByCol((prev) =>
      prev[col] === row ? prev : { ...prev, [col]: row }
    );
  };

  const toggleAt = (i: number) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    setOpenByCol((prev) => ({
      ...prev,
      [col]: prev[col] === row ? null : row,
    }));
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden py-20"
      style={{
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 8%, #F4FBF5 25%, #E8F7EA 50%, #F4FBF5 75%, #FFFFFF 92%, #FFFFFF 100%)",
      }}
    >
      {/* Aurora background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Top arc */}
        <svg
          className="absolute left-0 top-0 h-[55%] w-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <radialGradient id="auroraTop" cx="50%" cy="0%" r="75%">
              <stop offset="0%" stopColor="rgba(57,180,74,0.22)" />
              <stop offset="60%" stopColor="rgba(57,180,74,0.06)" />
              <stop offset="100%" stopColor="rgba(57,180,74,0)" />
            </radialGradient>
          </defs>
          <path
            d="M0,0 L1440,0 L1440,420 C1080,560 360,560 0,420 Z"
            fill="url(#auroraTop)"
          />
        </svg>

        {/* Bottom arc (horizon) */}
        <svg
          className="absolute bottom-0 left-0 h-[45%] w-full"
          viewBox="0 0 1440 500"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <radialGradient id="auroraBottom" cx="50%" cy="100%" r="80%">
              <stop offset="0%" stopColor="rgba(57,180,74,0.32)" />
              <stop offset="55%" stopColor="rgba(57,180,74,0.10)" />
              <stop offset="100%" stopColor="rgba(57,180,74,0)" />
            </radialGradient>
          </defs>
          <path
            d="M0,500 L1440,500 L1440,140 C1080,0 360,0 0,140 Z"
            fill="url(#auroraBottom)"
          />
        </svg>

        {/* Soft blobs */}
        <div
          className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(115,220,140,0.45) 0%, rgba(115,220,140,0) 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -bottom-32 -left-24 h-[480px] w-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(57,180,74,0.35) 0%, rgba(57,180,74,0) 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Animated aurora drift + mountain silhouette backdrop */}
        <AuroraBlobs />
        <MountainBackdrop />

        {/* Side vignette (kept very subtle so plexus stays visible) */}
        <div
          className="absolute inset-y-0 left-0 w-12"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-12"
          style={{
            background:
              "linear-gradient(270deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Top & bottom white fade for smooth blending with adjacent sections */}
        <div
          className="absolute inset-x-0 top-0 h-[180px]"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[200px]"
          style={{
            background:
              "linear-gradient(0deg, #FFFFFF 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>


      <div className="container-tight relative z-10">


        {isMobile ? (
          <MobileSwiper />
        ) : (
          <div className="hidden md:flex md:gap-[14px]">
            {[0, 1, 2].map((col) => (
              <div key={col} className="flex flex-1 flex-col gap-[14px]">
                {[0, 1, 2].map((row) => {
                  const i = row * 3 + col;
                  const s = SERVICES[i];
                  if (!s) return null;
                  return (
                    <DesktopCard
                      key={s.name}
                      svc={s}
                      open={isOpen(i)}
                      onEnter={() => openAt(i)}
                      onLeave={() => {}}
                      onToggle={() => toggleAt(i)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ServicesGrid;

/* ============================ Aurora + Signal Waves ============================ */

const BG_KEYFRAMES = `
@keyframes aurora-drift-a {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  100% { transform: translate3d(60px, -40px, 0) scale(1.12); }
}
@keyframes aurora-drift-b {
  0%   { transform: translate3d(0, 0, 0) scale(1.05); }
  100% { transform: translate3d(-50px, 30px, 0) scale(0.95); }
}
@keyframes aurora-drift-c {
  0%   { transform: translate3d(0, 0, 0) scale(0.95); }
  100% { transform: translate3d(40px, 50px, 0) scale(1.08); }
}
`;

function AuroraBlobs() {
  return (
    <>
      <style>{BG_KEYFRAMES}</style>
      <div
        className="absolute inset-0"
        style={{ mixBlendMode: "screen" }}
        aria-hidden
      >
        <div
          className="absolute left-[6%] top-[8%] h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(57,180,74,0.45) 0%, rgba(57,180,74,0) 70%)",
            filter: "blur(110px)",
            animation: "aurora-drift-a 22s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute right-[4%] top-[28%] h-[600px] w-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(140,220,170,0.5) 0%, rgba(140,220,170,0) 70%)",
            filter: "blur(120px)",
            animation: "aurora-drift-b 26s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute left-[35%] bottom-[6%] h-[560px] w-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(220,245,225,0.55) 0%, rgba(220,245,225,0) 70%)",
            filter: "blur(100px)",
            animation: "aurora-drift-c 24s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute right-[22%] bottom-[14%] h-[420px] w-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(57,180,74,0.32) 0%, rgba(57,180,74,0) 70%)",
            filter: "blur(95px)",
            animation: "aurora-drift-a 28s ease-in-out infinite alternate-reverse",
          }}
        />
      </div>
    </>
  );
}

function MountainBackdrop() {
  return (
    <img
      src={mountainsImg}
      alt=""
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-[-70%] h-[62%] w-full select-none object-cover object-bottom"
      style={{
        opacity: 0.35,
        filter: "blur(2px) saturate(0.55)",
        mixBlendMode: "luminosity",
        WebkitMaskImage:
          "linear-gradient(to top, black 30%, transparent 100%)",
        maskImage:
          "linear-gradient(to top, black 30%, transparent 100%)",
      }}
    />
  );
}



