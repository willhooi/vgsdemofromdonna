import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  PackageCheck,
  ShieldCheck,
  Gift,
  Sparkles,
  MessageCircle,
  Mail,
  Phone,
  Smartphone,
  Wallet,
  PhoneCall,
  LayoutGrid,
} from "lucide-react";
import bytetechLogo from "@/assets/brand/bytetech.svg";
import shopperImg from "@/assets/channels-girl.png";
import { useCountUp } from "@/hooks/use-count-up";

/**
 * Solutions — Outcome-first storytelling
 *
 * Hero key message: "where customer conversations become business growth."
 * Stage: happy shopper + live conversation pop-ups.
 * Outcome rail: 4 service moments, each phrased as a business result.
 * Support strip: PangoCDP × ByteTech (supporting, not lead).
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
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--primary-deep))]">
            <Sparkles className="h-3.5 w-3.5" /> The Outcome
          </span>
          <h2 className="heading-display mt-3 text-balance text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] text-foreground">
            Every conversation,{" "}
            <span className="text-[hsl(var(--primary))]">a moment of growth</span>.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            SMS, Zalo, Viber, Email, OTP — when they land right, customers buy,
            return, and recommend.
          </p>
        </div>

        {/* Stage + Outcome rail */}
        <div className="relative mx-auto mt-10 md:mt-14 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 items-start">
            <OutcomeStage visible={visible} />
            <div className="flex flex-col gap-4">
              <CDPSupportStrip visible={visible} />
              <OutcomeRail visible={visible} />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--primary))] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_hsl(128_52%_40%/0.5)] transition-transform hover:-translate-y-0.5"
          >
            Explore the full stack <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ---------- Stage (left) ---------- */

const CHANNEL_CHIPS = [
  { id: "sms", label: "SMS", dot: "#39b44a", Icon: MessageCircle },
  { id: "zalo", label: "Zalo", dot: "#0068ff", Icon: Smartphone },
  { id: "viber", label: "Viber", dot: "#7360f2", Icon: MessageCircle },
  { id: "email", label: "Email", dot: "#ff9b17", Icon: Mail },
  { id: "otp", label: "OTP", dot: "#e11d48", Icon: Phone },
  { id: "rewards", label: "Rewards", dot: "#f59e0b", Icon: Gift },
  { id: "ewarranty", label: "E-Warranty", dot: "#10b981", Icon: ShieldCheck },
  { id: "voice", label: "Voice", dot: "#8b5cf6", Icon: PhoneCall },
  { id: "topup", label: "Top-up", dot: "#06b6d4", Icon: Wallet },
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
      className="absolute left-[2%] top-[18%] sm:left-[4%]"
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
        "Giao hàng siêu nhanh!"
      </p>
    </Popup>

    <Popup
      className="absolute right-[-2%] top-[6%] sm:right-[0%]"
      delay={500}
      visible={visible}
      accent="primary"
    >
      <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--primary-deep))]">
        Trạng thái đơn hàng
      </div>
      <div className="mt-1 flex items-center gap-1.5">
        <PackageCheck className="h-3.5 w-3.5 text-[hsl(var(--primary))]" />
        <span className="text-[12px] font-semibold text-foreground">
          Đã xác nhận
        </span>
      </div>
    </Popup>

    <Popup
      className="absolute right-[-2%] bottom-[14%] sm:right-[2%]"
      delay={700}
      visible={visible}
      accent="accent"
    >
      <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(35_100%_45%)]">
        Mã xác thực
      </div>
      <div className="mt-1 font-mono text-[15px] font-extrabold tracking-[0.18em] text-foreground">
        371 235
      </div>
    </Popup>

    {/* Channel orbit chips — hidden on small screens */}
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {CHANNEL_CHIPS.map((c, i) => {
        const positions = [
          { left: "-4%", top: "20%" },
          { left: "-2%", top: "52%" },
          { left: "4%", bottom: "18%" },
          { left: "26%", bottom: "-2%" },
          { left: "54%", bottom: "4%" },
          { right: "6%", bottom: "20%" },
          { right: "-4%", top: "52%" },
          { right: "-2%", top: "22%" },
          { right: "18%", top: "-3%" },
          { left: "34%", top: "-4%" },
        ];
        const p = positions[i];
        return (
          <div
            key={c.id}
            className="absolute pointer-events-auto"
            style={{
              ...p,
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.85)",
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

/* ---------- Outcome rail (right) ---------- */

type Outcome = {
  id: string;
  Icon: typeof Star;
  tag: string;
  service: string;
  metric: number;
  suffix: string;
  prefix?: string;
  body: string;
  decimals?: number;
};

const OUTCOMES: Outcome[] = [
  {
    id: "review",
    Icon: Star,
    tag: "5★ Review",
    service: "Zalo ZNS · post-purchase",
    metric: 18,
    suffix: "%",
    prefix: "+",
    body: "Lifted NPS by turning every delivery into a branded touchpoint.",
  },
  {
    id: "order",
    Icon: PackageCheck,
    tag: "Order Confirmed",
    service: "SMS Brandname + Email",
    metric: 42,
    suffix: "%",
    prefix: "−",
    body: "Cut inbound support calls with proactive status updates.",
  },
  {
    id: "otp",
    Icon: ShieldCheck,
    tag: "OTP < 2s",
    service: "OTPBox · multi-channel",
    metric: 99.95,
    suffix: "%",
    decimals: 2,
    body: "Authentication that lands first time, every time — fallback built in.",
  },
  {
    id: "reward",
    Icon: Gift,
    tag: "Reward Unlocked",
    service: "Rewards + Smart Warranty",
    metric: 27,
    suffix: "%",
    prefix: "+",
    body: "Repeat-customer LTV from loyalty journeys customers actually open.",
  },
];

const OutcomeRail = ({ visible }: { visible: boolean }) => (
  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
    {OUTCOMES.map((o, i) => (
      <OutcomeCard key={o.id} o={o} index={i} visible={visible} />
    ))}
  </div>
);

const OutcomeCard = ({
  o,
  index,
  visible,
}: {
  o: Outcome;
  index: number;
  visible: boolean;
}) => {
  const target = o.decimals ? Math.round(o.metric * 100) : o.metric;
  const n = useCountUp(visible ? target : 0, 1400);
  const display = o.decimals ? (n / 100).toFixed(o.decimals) : n.toLocaleString();
  const { Icon } = o;
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-border bg-white p-4 shadow-[0_4px_14px_-8px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-0.5 hover:border-[hsl(var(--primary))]/40 hover:shadow-[0_18px_36px_-18px_hsl(128_52%_40%/0.35)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: `opacity 500ms ease-out ${200 + index * 90}ms, transform 500ms ease-out ${200 + index * 90}ms`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "hsl(128 52% 60% / 0.35)" }}
      />
      <div className="relative flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-[hsl(145_60%_94%)] text-[hsl(var(--primary-deep))]">
          <Icon className="h-3.5 w-3.5" />
        </span>
        <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {o.tag}
        </span>
      </div>
      <div className="relative mt-2 font-display text-[26px] font-extrabold tabular-nums leading-none text-foreground sm:text-[28px]">
        {o.prefix}
        {display}
        {o.suffix}
      </div>
      <div className="relative mt-1 text-[10.5px] font-semibold uppercase tracking-wider text-[hsl(var(--primary-deep))]">
        {o.service}
      </div>
      <p className="relative mt-2 text-[12px] leading-snug text-muted-foreground">
        {o.body}
      </p>
    </article>
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
    className="relative overflow-hidden rounded-2xl border border-[hsl(var(--primary))]/15 bg-gradient-to-br from-[hsl(145_55%_98%)] to-white p-4 md:p-5"
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(10px)",
      transition: "opacity 600ms ease-out 200ms, transform 600ms ease-out 200ms",
    }}
  >
    <CDPWave />
    <div className="relative z-10">
      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--primary-deep))]">
        CDP Solution
      </div>
      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] font-semibold leading-tight text-foreground">
        <span>Strategic partnership with</span>
        <img
          src={bytetechLogo}
          alt="ByteTech"
          className="inline-block h-6 w-auto shrink-0 align-middle md:h-7"
          loading="lazy"
        />
      </div>
    </div>

    <ul className="mt-3 grid gap-2 border-t border-[hsl(var(--primary))]/10 pt-3 sm:grid-cols-3 sm:gap-3">
      {CDP_BULLETS.map((t) => (
        <li
          key={t}
          className="flex items-start gap-2 text-[12px] leading-snug text-foreground/90"
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
);

/* ---------- Decorative wave behind CDP strip ---------- */

const CDPWave = () => {
  const paths = [
    "M0,70 C75,20 150,120 225,70 C300,20 375,120 450,70 C525,20 600,120 600,70",
    "M0,80 C90,40 180,110 270,80 C360,50 450,115 540,80 C570,72 600,78 600,80",
    "M0,60 C100,100 200,30 300,60 C400,90 500,30 600,60",
  ];
  const dur = 9;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 motion-reduce:opacity-50"
    >
      <svg
        viewBox="0 0 600 140"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="cdp-wave-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#39b44a" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ff9b17" stopOpacity="0.35" />
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
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {CHANNEL_CHIPS.map((c, i) => {
          const pathIdx = i % paths.length;
          const begin = -((i * dur) / CHANNEL_CHIPS.length);
          return (
            <circle key={c.id} r="3.2" fill={c.dot}>
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



