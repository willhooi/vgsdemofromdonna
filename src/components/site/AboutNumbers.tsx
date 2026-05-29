import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/use-count-up";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  hint: string;
  decimals?: number;
};

const stats: Stat[] = [
  { value: 17, suffix: "+", label: "Years in market", hint: "Since 2007" },
  { value: 500, suffix: "+", label: "Enterprise brands", hint: "Banking · Retail · Airlines" },
  { value: 99.95, suffix: "%", label: "Platform uptime", hint: "SLA-backed", decimals: 2 },
  { value: 2, suffix: "B+", label: "Messages / year", hint: "SMS · Zalo · Viber · Email" },
];

const StatCard = ({ stat, active, delay }: { stat: Stat; active: boolean; delay: number }) => {
  const raw = useCountUp(active ? stat.value : 0, 1800);
  const display = stat.decimals
    ? raw.toFixed(stat.decimals)
    : Math.round(raw).toLocaleString();

  return (
    <div
      className="relative rounded-3xl border border-border bg-background p-7 shadow-[var(--shadow-soft)] animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
        {stat.prefix}
        {display}
        <span className="text-[hsl(var(--accent))]">{stat.suffix}</span>
      </div>
      <div className="mt-3 text-sm font-semibold text-foreground">{stat.label}</div>
      <div className="mt-1 text-xs text-muted-foreground">{stat.hint}</div>
    </div>
  );
};

export const AboutNumbers = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(true)),
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="border-y border-border bg-secondary/30 py-16 md:py-20">
      <div ref={ref} className="container-tight">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} active={active} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
};
