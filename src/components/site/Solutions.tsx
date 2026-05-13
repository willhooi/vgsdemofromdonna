import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { useT } from "@/lib/i18n";

type NodeKey = "sms" | "zalo" | "viber" | "email" | "otp" | "ai";

const NODES: { key: NodeKey; href: string; angle: number }[] = [
  { key: "sms",   href: "/solutions/sms-brandname", angle: -90 },
  { key: "zalo",  href: "/solutions/zalo-zbs",       angle: -30 },
  { key: "ai",    href: "/solutions/ai-campaigns",   angle:  30 },
  { key: "otp",   href: "/solutions/otp-alerts",     angle:  90 },
  { key: "email", href: "/solutions",                angle: 150 },
  { key: "viber", href: "/solutions",                angle: 210 },
];

export const Solutions = () => {
  const { t } = useT();
  const [open, setOpen] = useState<NodeKey | null>("zalo");

  const R = 38; // % radius from center
  return (
    <section id="solutions" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-tight">
        <div className="max-w-2xl">
          <span className="chapter-eyebrow">{t("solutions.eyebrow")}</span>
          <h2 className="heading-section mt-4 text-balance">{t("solutions.title")}</h2>
          <p className="mt-4 text-base text-muted-foreground">{t("solutions.sub")}</p>
        </div>

        {/* Constellation */}
        <div className="relative mx-auto mt-14 aspect-[5/4] w-full max-w-3xl">
          {/* Connector lines */}
          <svg viewBox="0 0 100 80" className="absolute inset-0 h-full w-full" aria-hidden>
            {NODES.map((n) => {
              const x = 50 + R * Math.cos((n.angle * Math.PI) / 180);
              const y = 40 + R * 0.78 * Math.sin((n.angle * Math.PI) / 180);
              const isOpen = open === n.key;
              return (
                <line
                  key={n.key}
                  x1={50}
                  y1={40}
                  x2={x}
                  y2={y}
                  stroke="hsl(var(--primary))"
                  strokeOpacity={isOpen ? 0.9 : 0.35}
                  strokeWidth={0.35}
                  strokeDasharray="1.2 1.6"
                  className="animate-dash-flow"
                />
              );
            })}
          </svg>

          {/* Center hex — VietGuys */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hex active>
              <span className="font-display text-xl font-extrabold tracking-tight">VG</span>
            </Hex>
          </div>

          {/* Channel hexes */}
          {NODES.map((n) => {
            const x = 50 + R * Math.cos((n.angle * Math.PI) / 180);
            const y = 50 + R * 0.78 * Math.sin((n.angle * Math.PI) / 180);
            const isOpen = open === n.key;
            const node = t(`solutions.nodes.${n.key}.name`);
            return (
              <button
                key={n.key}
                onClick={() => setOpen((cur) => (cur === n.key ? null : n.key))}
                aria-expanded={isOpen}
                className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-105"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <Hex active={isOpen}>
                  <span className="px-2 text-center text-[11px] font-bold leading-tight md:text-xs">{node}</span>
                </Hex>
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        {open && (
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-background p-7 shadow-[var(--shadow-card)] animate-fade-up">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--accent-deep))]">
                  {t("solutions.eyebrow")}
                </div>
                <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">
                  {t(`solutions.nodes.${open}.name`)}
                </h3>
              </div>
              <Link
                to={NODES.find((n) => n.key === open)!.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                {t("solutions.learnMore")} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-4 text-base text-muted-foreground">{t(`solutions.nodes.${open}.value`)}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-3">
              {(["b1", "b2", "b3"] as const).map((b) => (
                <li key={b} className="inline-flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {t(`solutions.nodes.${open}.${b}`)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

const Hex = ({ children, active = false }: { children: React.ReactNode; active?: boolean }) => (
  <span
    className={`grid h-20 w-20 place-items-center text-center md:h-24 md:w-24 ${
      active ? "text-primary-foreground" : "text-foreground"
    }`}
    style={{
      clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
      background: active
        ? "var(--gradient-brand)"
        : "hsl(var(--background))",
      boxShadow: active
        ? "var(--shadow-glow)"
        : "0 0 0 1px hsl(var(--border)), var(--shadow-soft)",
      transition: "all 0.3s var(--ease-smooth)",
    }}
  >
    {children}
  </span>
);
