// Hero illustration: Brand → AI hub → Customers across channels.
// Pure brand colors, white background. SVG-driven flow.
import { MessageSquare, Mail, Shield, Database, Sparkles, Building2, Users } from "lucide-react";

type Channel = {
  label: string;
  y: number; // viewBox y (-280..280)
  Icon: React.ComponentType<{ className?: string }>;
  delay: number;
};

const channels: Channel[] = [
  { label: "CDP",   y: -130, Icon: Database,      delay: 0 },
  { label: "SMS",   y: -65,  Icon: MessageSquare, delay: 120 },
  { label: "Zalo",  y: 0,    Icon: MessageSquare, delay: 240 },
  { label: "Email", y: 65,   Icon: Mail,          delay: 360 },
  { label: "OTP",   y: 130,  Icon: Shield,        delay: 480 },
];

export const AICore = () => {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* soft backdrop rings */}
      <div className="absolute inset-6 rounded-full border border-dashed border-primary/20" />
      <div className="absolute inset-20 rounded-full border border-border/60" />

      {/* SVG flow */}
      <svg className="absolute inset-0 h-full w-full" viewBox="-280 -280 560 560" aria-hidden>
        <defs>
          <linearGradient id="brandLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(128 52% 46%)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(128 52% 46%)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="hsl(35 100% 54%)" stopOpacity="0.85" />
          </linearGradient>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(128 52% 46%)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(128 52% 46%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="0" cy="0" r="120" fill="url(#hubGlow)" />

        {/* Brand → Hub trunk */}
        <path
          d="M -220 0 C -140 0, -100 0, -60 0"
          stroke="url(#brandLine)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 6"
          className="animate-dash-flow"
        />

        {/* Hub → channel pills */}
        {channels.map((c) => (
          <path
            key={`l-${c.label}`}
            d={`M 60 0 C 110 0, 130 ${c.y * 0.5}, 170 ${c.y}`}
            stroke="url(#brandLine)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 6"
            className="animate-dash-flow"
            style={{ animationDelay: `${c.delay}ms` }}
          />
        ))}

        {/* Channel → Customers cluster */}
        {channels.map((c) => (
          <path
            key={`r-${c.label}`}
            d={`M 220 ${c.y} C 240 ${c.y * 0.6}, 240 ${c.y * 0.3}, 240 0`}
            stroke="hsl(35 100% 54% / 0.45)"
            strokeWidth="1.25"
            fill="none"
            strokeDasharray="3 5"
            className="animate-dash-flow"
            style={{ animationDelay: `${c.delay + 200}ms` }}
          />
        ))}

        {/* Signal particles flowing along the trunk */}
        <circle r="3" fill="hsl(128 52% 46%)">
          <animateMotion dur="3.2s" repeatCount="indefinite" path="M -220 0 C -140 0, -100 0, -60 0" />
        </circle>
        <circle r="3" fill="hsl(35 100% 54%)">
          <animateMotion dur="3.6s" begin="1s" repeatCount="indefinite" path="M -220 0 C -140 0, -100 0, -60 0" />
        </circle>
      </svg>

      {/* Brand node (left) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-fade-up" style={{ animationDelay: "120ms" }}>
        <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-background/95 px-3 py-2.5 shadow-[var(--shadow-card)] backdrop-blur">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
            <Building2 className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground">Brands</span>
        </div>
      </div>

      {/* AI Hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid h-32 w-32 place-items-center rounded-full bg-[var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
          <div className="absolute inset-0 animate-pulse-ring rounded-full" />
          <div className="text-center">
            <Sparkles className="mx-auto h-4 w-4 opacity-90" />
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] opacity-80">AI Engine</div>
            <div className="text-lg font-extrabold leading-none">VietGuys</div>
          </div>
        </div>
      </div>

      {/* Channel pills */}
      {channels.map((c) => {
        const topPct = 50 + (c.y / 560) * 100;
        return (
          <div
            key={c.label}
            className="absolute animate-fade-up"
            style={{
              left: "62%",
              top: `${topPct}%`,
              transform: "translate(-50%, -50%)",
              animationDelay: `${200 + c.delay}ms`,
            }}
          >
            <div className="flex items-center gap-2 rounded-full border border-border bg-background/95 px-3 py-1.5 text-xs font-semibold text-foreground shadow-[var(--shadow-soft)] backdrop-blur">
              <c.Icon className="h-3.5 w-3.5 text-primary" />
              {c.label}
            </div>
          </div>
        );
      })}

      {/* Customers node (right) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 animate-fade-up" style={{ animationDelay: "640ms" }}>
        <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-background/95 px-3 py-2.5 shadow-[var(--shadow-card)] backdrop-blur">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-[hsl(var(--accent-deep))]">
            <Users className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground">Customers</span>
        </div>
      </div>
    </div>
  );
};
