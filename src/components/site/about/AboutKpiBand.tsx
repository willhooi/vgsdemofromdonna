import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/use-count-up";

type Kpi = { value: number; suffix?: string; label: string };

const items: Kpi[] = [
  { value: 19, suffix: "+", label: "Years in the market" },
  { value: 5, suffix: "M+", label: "Messages delivered daily" },
  { value: 76, suffix: "", label: "Enterprise clients" },
  { value: 5000, suffix: "+", label: "Brands trusted" },
];

const formatNumber = (n: number) => n.toLocaleString("en-US");

const KpiNumber = ({ kpi, active }: { kpi: Kpi; active: boolean }) => {
  const value = useCountUp(active ? kpi.value : 0, 1800);
  return (
    <div className="text-center md:text-left">
      <div className="font-display text-5xl md:text-6xl font-extrabold text-primary-foreground tracking-tight leading-none">
        {formatNumber(value)}
        {kpi.suffix}
      </div>
      <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-primary-foreground/75 font-semibold">
        {kpi.label}
      </div>
    </div>
  );
};

export const AboutKpiBand = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 md:py-24"
      style={{ background: "var(--gradient-brand)" }}
    >
      <div className="container-tight relative">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {items.map((k) => (
            <KpiNumber key={k.label} kpi={k} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
};
