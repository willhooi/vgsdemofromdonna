import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  PackageCheck,
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

        {/* Top highlight row — 99% (left) + CDP partnership (right) */}
        <div className="relative mx-auto mt-8 md:mt-10 max-w-6xl">
          <div className="grid gap-4 md:gap-5 md:grid-cols-[0.95fr_1.05fr] items-stretch">
            <DeliveryRateCard visible={visible} />
            <CDPSupportStrip visible={visible} />
          </div>
        </div>

        {/* Stage — girl centered, popups on the left, channel chips arc on the right */}
        <div className="relative mx-auto mt-8 md:mt-12 max-w-6xl">
          <OutcomeStage visible={visible} />
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

    {/* Floating pop-ups around the shopper */}
    <Popup
      className="absolute left-[2%] top-[14%]"
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
      className="absolute right-[2%] top-[22%]"
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
      className="absolute left-[4%] bottom-[10%]"
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
      className="relative overflow-hidden rounded-2xl border border-[hsl(var(--primary))]/20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-deep))] p-4 md:p-5 text-white shadow-[0_18px_36px_-18px_hsl(128_52%_40%/0.45)]"
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
        <div className="shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-white/15 backdrop-blur">
          <Zap className="h-6 w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-[32px] font-extrabold leading-none tabular-nums">
              {n}%
            </span>
            <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-white/85">
              Delivery Rate
            </span>
          </div>
          <p className="mt-1.5 text-[12px] leading-snug text-white/85">
            Built-in messaging failover ensures uninterrupted customer communications.
          </p>
        </div>
      </div>
    </div>
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



