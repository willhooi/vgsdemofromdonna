/**
 * Visual continuity layer between the AIPlatformCard (Solutions) and the
 * ServicesGrid. Three dotted "signal rails" carry small green dots from the
 * platform downward, fanning into the 3 service columns.
 *
 * Pure SVG + CSS, pointer-events:none, sits above GalaxyBackdrop and below
 * card content. Animations honor prefers-reduced-motion via index.css.
 */
export const PlatformToServicesFlow = () => {
  // 3 rails at 16% / 50% / 84% horizontally — aligned to the 3 service columns.
  const RAILS = [
    { x: "16%", delays: [0, 1.6, 3.2] },
    { x: "50%", delays: [0.6, 2.2, 3.8] },
    { x: "84%", delays: [1.1, 2.7, 4.3] },
  ];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full overflow-hidden"
    >
      {/* Fan-out glow right under the AIPlatformCard */}
      <div
        className="absolute left-1/2 h-[260px] w-[78%] -translate-x-1/2"
        style={{
          top: "0",
          background:
            "radial-gradient(ellipse 70% 90% at 50% 0%, hsl(var(--primary) / 0.18) 0%, hsl(var(--primary) / 0.08) 35%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />

      {/* Rails + traveling dots */}
      <div className="container-tight relative h-full">
        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          {RAILS.map((r) => (
            <line
              key={r.x}
              x1={r.x}
              x2={r.x}
              y1="0"
              y2="100%"
              stroke="hsl(var(--primary))"
              strokeOpacity="0.32"
              strokeWidth="1.2"
              strokeDasharray="3 7"
              strokeLinecap="round"
            />
          ))}
        </svg>

        {RAILS.map((r) =>
          r.delays.map((d, i) => (
            <span
              key={`${r.x}-${i}`}
              className="signal-drop absolute -translate-x-1/2 rounded-full bg-[hsl(var(--primary))]"
              style={{
                left: r.x,
                top: 0,
                width: 6,
                height: 6,
                boxShadow: "0 0 10px 2px hsl(var(--primary) / 0.5)",
                animationDelay: `${d}s`,
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PlatformToServicesFlow;
