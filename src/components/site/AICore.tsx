// Decorative scroll-reactive AI core illustration built in SVG.
// Pure brand colors, white background. Tech tokens orbit + converge into a green core.
export const AICore = () => {
  const tokens = [
    { label: "SMS", angle: 0 },
    { label: "Zalo", angle: 60 },
    { label: "Email", angle: 120 },
    { label: "Viber", angle: 180 },
    { label: "ZNS", angle: 240 },
    { label: "CDP", angle: 300 },
  ];
  const r = 168;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* concentric rings */}
      <div className="absolute inset-0 rounded-full border border-border/70" />
      <div className="absolute inset-8 rounded-full border border-border/60" />
      <div className="absolute inset-16 rounded-full border border-dashed border-primary/30" />

      {/* orbit dots layer */}
      <div className="absolute inset-0 animate-orbit">
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(var(--accent))]" />
        <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary" />
        <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/60" />
      </div>

      {/* tokens */}
      {tokens.map((t, i) => {
        const rad = (t.angle * Math.PI) / 180;
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r;
        return (
          <div
            key={t.label}
            className="absolute left-1/2 top-1/2 animate-fade-up"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              animationDelay: `${i * 80}ms`,
            }}
          >
            <div className="flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-[var(--shadow-soft)] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {t.label}
            </div>
          </div>
        );
      })}

      {/* connector lines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="-260 -260 520 520" aria-hidden>
        {tokens.map((t) => {
          const rad = (t.angle * Math.PI) / 180;
          return (
            <line
              key={t.label}
              x1={0}
              y1={0}
              x2={Math.cos(rad) * 150}
              y2={Math.sin(rad) * 150}
              stroke="hsl(128 52% 46% / 0.25)"
              strokeWidth="1"
              strokeDasharray="3 4"
            />
          );
        })}
      </svg>

      {/* core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid h-32 w-32 place-items-center rounded-full bg-[var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
          <div className="absolute inset-0 animate-pulse-ring rounded-full" />
          <div className="text-center">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-80">AI Core</div>
            <div className="mt-1 text-2xl font-extrabold leading-none">VGs</div>
          </div>
        </div>
      </div>
    </div>
  );
};
