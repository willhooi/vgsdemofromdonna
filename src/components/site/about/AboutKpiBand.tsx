import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/use-count-up";

type Kpi = { value: number; suffix?: string; prefix?: string; label: string };

const items: Kpi[] = [
  { value: 19, suffix: "+ Years", label: "In the market" },
  { value: 5, suffix: "M+ Daily", label: "Messages delivered" },
  { value: 76, suffix: "+", label: "Enterprise clients" },
];

const KpiNumber = ({ kpi, active }: { kpi: Kpi; active: boolean }) => {
  const value = useCountUp(active ? kpi.value : 0, 1600);
  return (
    <div className="text-center">
      <div className="font-['Instrument_Serif'] text-4xl md:text-5xl text-foreground mb-1">
        {kpi.prefix}
        {value}
        {kpi.suffix}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
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
    <section ref={ref} className="border-y border-border bg-background py-12">
      <div className="container-tight grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((k) => (
          <KpiNumber key={k.label} kpi={k} active={active} />
        ))}
      </div>
    </section>
  );
};
