import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Database,
  Globe,
  Store,
  ShoppingCart,
  MessageSquareText,
  Megaphone,
  Users,
  Layers,
  Workflow,
  Sparkles,
} from "lucide-react";
import bytetechLogo from "@/assets/brand/bytetech.svg";
import { useCountUp } from "@/hooks/use-count-up";

/**
 * Solutions — Enterprise Communication Ecosystem
 *
 * Three-tier architecture diagram: Inputs → CDP Core (ByteTech) → Channels.
 * Positions VietGuys as an enterprise platform, not a vendor list.
 */

type Input = { id: string; label: string; Icon: typeof Database };
type Channel = { id: string; label: string; dot: string };

const INPUTS: Input[] = [
  { id: "crm", label: "CRM", Icon: Database },
  { id: "web", label: "Web & App", Icon: Globe },
  { id: "pos", label: "POS", Icon: Store },
  { id: "ecom", label: "E-commerce", Icon: ShoppingCart },
  { id: "survey", label: "Surveys", Icon: MessageSquareText },
  { id: "ads", label: "Ads & Social", Icon: Megaphone },
];

// Brand-correct dot colors (Tailwind arbitrary values OK in className)
const CHANNELS: Channel[] = [
  { id: "sms", label: "SMS Brandname", dot: "#39b44a" },
  { id: "zalo", label: "Zalo ZNS", dot: "#0068ff" },
  { id: "viber", label: "Viber Business", dot: "#7360f2" },
  { id: "email", label: "Email", dot: "#ff9b17" },
  { id: "otp", label: "OTP & 2FA", dot: "#e11d48" },
  { id: "voice", label: "Voice", dot: "#0ea5e9" },
  { id: "warranty", label: "Smart Warranty", dot: "#14b8a6" },
  { id: "rewards", label: "Rewards", dot: "#f59e0b" },
  { id: "custom", label: "Customized Solutions", dot: "#64748b" },
];

export const Solutions = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.2 },
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
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(145 30% 88%) 1px, transparent 1px), linear-gradient(90deg, hsl(145 30% 88%) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
        }}
      />

      <div className="container-tight relative">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--primary-deep))]">
            <Sparkles className="h-3.5 w-3.5" /> The Platform
          </span>
          <h2 className="heading-display mt-3 text-balance text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] text-foreground">
            One ecosystem.{" "}
            <span className="text-[hsl(var(--primary))]">Every conversation</span>,
            orchestrated.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Data in. Intelligence in the middle. The right message out — at
            enterprise scale.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="relative mx-auto mt-10 md:mt-14 max-w-6xl">
          {/* Desktop connector overlay */}
          <ConnectorSVG visible={visible} />

          <div className="relative grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-[0.9fr_1.5fr_0.9fr] items-stretch">
            {/* Column 1 — Inputs */}
            <Column title="Inputs" subtitle="Data sources" tone="muted">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
                {INPUTS.map((i, idx) => (
                  <InputCard key={i.id} input={i} index={idx} visible={visible} />
                ))}
              </div>
            </Column>

            {/* Column 2 — CDP Core */}
            <CDPCore visible={visible} />

            {/* Column 3 — Channels */}
            <Column title="Channels" subtitle="Outputs" tone="muted" align="right">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
                {CHANNELS.map((c, idx) => (
                  <ChannelPill key={c.id} channel={c} index={idx} visible={visible} />
                ))}
              </div>
            </Column>
          </div>

          {/* Feedback loop caption */}
          <div className="mt-6 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/30" />
            Feedback loop · events, attribution, AI learning
            <span className="h-px w-8 bg-muted-foreground/30" />
          </div>
        </div>

        {/* Footer metrics strip */}
        <MetricsStrip visible={visible} />

        <div className="mt-10 flex justify-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--primary))] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_hsl(128_52%_40%/0.5)] transition-transform hover:-translate-y-0.5"
          >
            Explore the platform <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ---------- Subcomponents ---------- */

const Column = ({
  title,
  subtitle,
  children,
  align = "left",
}: {
  title: string;
  subtitle: string;
  tone?: "muted";
  align?: "left" | "right";
  children: React.ReactNode;
}) => (
  <div className="flex flex-col">
    <div
      className={`mb-3 flex items-baseline gap-2 ${
        align === "right" ? "lg:justify-end" : ""
      }`}
    >
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--primary-deep))]">
        {title}
      </span>
      <span className="text-[11px] text-muted-foreground">{subtitle}</span>
    </div>
    {children}
  </div>
);

const InputCard = ({
  input,
  index,
  visible,
}: {
  input: Input;
  index: number;
  visible: boolean;
}) => {
  const { Icon, label } = input;
  return (
    <div
      className="group flex items-center gap-2.5 rounded-xl border border-border bg-white px-3 py-2.5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.06)] transition-all hover:border-[hsl(var(--primary))]/40 hover:shadow-[0_6px_18px_-8px_hsl(128_52%_40%/0.3)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: `opacity 500ms ease-out ${index * 70}ms, transform 500ms ease-out ${index * 70}ms`,
      }}
    >
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-[hsl(145_60%_94%)] text-[hsl(var(--primary-deep))]">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <span className="text-[12.5px] font-medium text-foreground">{label}</span>
    </div>
  );
};

const ChannelPill = ({
  channel,
  index,
  visible,
}: {
  channel: Channel;
  index: number;
  visible: boolean;
}) => (
  <div
    className="flex items-center gap-2.5 rounded-xl border border-border bg-white px-3 py-2.5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.06)] transition-all hover:border-[hsl(var(--accent))]/50 hover:shadow-[0_6px_18px_-8px_hsl(35_100%_55%/0.4)]"
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(8px)",
      transition: `opacity 500ms ease-out ${index * 60 + 200}ms, transform 500ms ease-out ${index * 60 + 200}ms`,
    }}
  >
    <span
      className="relative grid h-2.5 w-2.5 place-items-center"
      aria-hidden
    >
      <span
        className="absolute inset-0 rounded-full opacity-60"
        style={{
          background: channel.dot,
          animation: "signal-pulse 2.4s ease-out infinite",
        }}
      />
      <span
        className="h-2.5 w-2.5 rounded-full"
        style={{ background: channel.dot }}
      />
    </span>
    <span className="text-[12.5px] font-medium text-foreground">{channel.label}</span>
  </div>
);

const CDPCore = ({ visible }: { visible: boolean }) => {
  return (
    <div
      className="relative flex flex-col rounded-2xl border border-[hsl(var(--primary))]/25 bg-gradient-to-b from-white to-[hsl(145_50%_97%)] p-4 sm:p-5 md:p-6 shadow-[0_24px_60px_-30px_hsl(128_52%_30%/0.45)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.98)",
        transition: "opacity 700ms ease-out 150ms, transform 700ms ease-out 150ms",
      }}
    >
      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, hsl(128 52% 60% / 0.18), transparent 65%)",
        }}
      />

      {/* Header */}
      <div className="relative flex items-center justify-between gap-3">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--primary-deep))]">
            CDP Core · The Brain
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-xl font-extrabold text-foreground sm:text-2xl">
              PangoCDP
            </span>
            <span className="text-[11px] text-muted-foreground">by</span>
            <img
              src={bytetechLogo}
              alt="ByteTech"
              className="h-5 w-auto sm:h-6"
              loading="lazy"
            />
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(145_60%_94%)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[hsl(var(--primary-deep))]">
          <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
          Live
        </span>
      </div>

      {/* Dashboard widgets */}
      <div className="relative mt-4 grid grid-cols-2 gap-2.5">
        <Widget label="Unified profiles" value={2_400_000} suffix="" format="compact" visible={visible} />
        <Widget label="Active segments" value={142} suffix="" visible={visible} />
        <Widget label="Live journeys" value={38} suffix="" visible={visible} />
        <Widget label="AI accuracy" value={89} suffix="%" visible={visible} />
      </div>

      {/* Mini activity bar */}
      <div className="relative mt-4 overflow-hidden rounded-lg border border-border/70 bg-white/70 p-3">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
          <span>Message throughput · last 60s</span>
          <span className="text-[hsl(var(--primary-deep))]">Healthy</span>
        </div>
        <div className="mt-2 flex h-8 items-end gap-[2px]">
          {Array.from({ length: 32 }).map((_, i) => {
            const h = 30 + Math.round(Math.abs(Math.sin(i * 0.7)) * 60 + (i % 5) * 4);
            return (
              <span
                key={i}
                className="flex-1 rounded-[2px]"
                style={{
                  height: `${h}%`,
                  background: "linear-gradient(to top, hsl(128 52% 46%), hsl(128 52% 70%))",
                  opacity: visible ? 1 : 0,
                  transition: `opacity 400ms ease-out ${300 + i * 20}ms`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Capability bullets */}
      <ul className="relative mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-[11.5px] text-muted-foreground">
        {[
          { Icon: Users, t: "Unified profiles" },
          { Icon: Layers, t: "Real-time segments" },
          { Icon: Workflow, t: "Lifecycle journeys" },
          { Icon: Sparkles, t: "AI next-best action" },
        ].map(({ Icon, t }) => (
          <li key={t} className="flex items-center gap-1.5">
            <Icon className="h-3.5 w-3.5 text-[hsl(var(--primary-deep))]" />
            {t}
          </li>
        ))}
      </ul>

      {/* Footer caption */}
      <div className="relative mt-4 border-t border-border/70 pt-3 text-center">
        <a
          href="https://bytetech.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-semibold text-[hsl(var(--primary-deep))] hover:underline"
        >
          Strategic CDP partnership · VietGuys × ByteTech →
        </a>
      </div>
    </div>
  );
};

const Widget = ({
  label,
  value,
  suffix = "",
  format,
  visible,
}: {
  label: string;
  value: number;
  suffix?: string;
  format?: "compact";
  visible: boolean;
}) => {
  const n = useCountUp(visible ? value : 0, 1400);
  const display =
    format === "compact"
      ? `${(n / 1_000_000).toFixed(n >= 1_000_000 ? 1 : 0)}M`
      : n.toLocaleString();
  return (
    <div className="rounded-lg border border-border/70 bg-white px-3 py-2.5">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 font-display text-lg font-extrabold tabular-nums text-foreground sm:text-xl">
        {display}
        {suffix}
      </div>
    </div>
  );
};

const ConnectorSVG = ({ visible }: { visible: boolean }) => (
  <svg
    aria-hidden
    className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
    preserveAspectRatio="none"
    viewBox="0 0 100 100"
  >
    <defs>
      <linearGradient id="flow-in" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="hsl(145 50% 70%)" stopOpacity="0.1" />
        <stop offset="100%" stopColor="hsl(128 52% 46%)" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="flow-out" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="hsl(128 52% 46%)" stopOpacity="0.7" />
        <stop offset="100%" stopColor="hsl(35 100% 60%)" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Inputs → CDP */}
    <line
      x1="22" y1="50" x2="38" y2="50"
      stroke="url(#flow-in)" strokeWidth="0.4"
      strokeDasharray="1 1.4"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 800ms ease-out",
        animation: "line-flow 14s linear infinite",
      }}
    />
    {/* CDP → Channels */}
    <line
      x1="62" y1="50" x2="78" y2="50"
      stroke="url(#flow-out)" strokeWidth="0.4"
      strokeDasharray="1 1.4"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 800ms ease-out 200ms",
        animation: "line-flow 14s linear infinite reverse",
      }}
    />
  </svg>
);

const MetricsStrip = ({ visible }: { visible: boolean }) => {
  const items = [
    { v: 5_000_000, suf: "+", lbl: "Messages / day", compact: true },
    { v: 76, suf: "+", lbl: "Enterprise clients" },
    { v: 99.95, suf: "%", lbl: "Network uptime", decimals: 2 },
    { v: 9, suf: "", lbl: "Channels in one API" },
  ];
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 rounded-2xl border border-border bg-white p-4 md:mt-12 md:grid-cols-4 md:p-5">
      {items.map((it) => (
        <MetricItem key={it.lbl} item={it} visible={visible} />
      ))}
    </div>
  );
};

const MetricItem = ({
  item,
  visible,
}: {
  item: { v: number; suf: string; lbl: string; compact?: boolean; decimals?: number };
  visible: boolean;
}) => {
  const n = useCountUp(visible ? item.v : 0, 1600);
  const display = item.compact
    ? `${(n / 1_000_000).toFixed(n >= 1_000_000 ? 1 : 0)}M`
    : item.decimals
    ? n.toFixed(item.decimals)
    : Math.round(n).toLocaleString();
  return (
    <div className="text-center">
      <div className="font-display text-2xl font-extrabold tabular-nums text-foreground md:text-3xl">
        {display}
        {item.suf}
      </div>
      <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
        {item.lbl}
      </div>
    </div>
  );
};
