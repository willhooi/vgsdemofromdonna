/**
 * ConstellationOverlay — visual bridge between the AIPlatformCard (above) and
 * the ServicesGrid (below). Renders a constellation of dashed lines fanning
 * from 4 platform "nodes" (top) into 3 service "nodes" (bottom of bridge),
 * with animated stroke-dashoffset so data appears to stream outward.
 *
 * Pure SVG + CSS, pointer-events: none. Honors prefers-reduced-motion via
 * index.css (.constellation-flow & .star-twinkle).
 *
 * Kept the original component name (PlatformToServicesFlow) so Index.tsx
 * remains untouched.
 */

const PLATFORM_X = [16, 38, 62, 84]; // 4 platform columns
const SERVICE_X = [16, 50, 84]; // 3 service columns

// Background "floating stars" sprinkled across the layer
const STARS: Array<{ x: number; y: number; r: number; delay: number }> = [
  { x: 8, y: 18, r: 1.8, delay: 0.0 },
  { x: 24, y: 62, r: 1.4, delay: 0.8 },
  { x: 48, y: 30, r: 2.2, delay: 1.6 },
  { x: 72, y: 70, r: 1.6, delay: 0.4 },
  { x: 92, y: 24, r: 2.0, delay: 2.1 },
  { x: 33, y: 88, r: 1.4, delay: 1.2 },
  { x: 58, y: 12, r: 1.2, delay: 2.6 },
  { x: 80, y: 52, r: 1.6, delay: 0.6 },
  { x: 12, y: 78, r: 1.2, delay: 2.0 },
  { x: 66, y: 90, r: 1.8, delay: 1.4 },
];

export const PlatformToServicesFlow = () => {
  // Pair each platform node with 1-2 nearest service nodes for fan-out lines
  const LINES: Array<{ x1: number; x2: number; delay: number }> = [];
  PLATFORM_X.forEach((px, pi) => {
    SERVICE_X.forEach((sx, si) => {
      const dist = Math.abs(px - sx);
      if (dist < 30) {
        LINES.push({ x1: px, x2: sx, delay: (pi * 0.4 + si * 0.3) % 3 });
      }
    });
  });

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full overflow-hidden"
    >
      {/* Soft halo right under the AIPlatformCard */}
      <div
        className="absolute left-1/2 h-[220px] w-[78%] -translate-x-1/2"
        style={{
          top: 0,
          background:
            "radial-gradient(ellipse 70% 90% at 50% 0%, hsl(var(--primary) / 0.16) 0%, hsl(var(--primary) / 0.06) 35%, transparent 72%)",
          filter: "blur(2px)",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        aria-hidden
      >
        {/* Fan-out constellation lines (platform → services) */}
        {LINES.map((l, i) => (
          <line
            key={`l-${i}`}
            x1={l.x1}
            y1={0}
            x2={l.x2}
            y2={100}
            stroke="hsl(145 55% 42%)"
            strokeOpacity="0.28"
            strokeWidth="0.18"
            strokeDasharray="0.9 1.6"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            className="constellation-flow"
            style={{ animationDelay: `-${l.delay}s` }}
          />
        ))}

        {/* Horizontal "chòm sao" tether — gently knits the 3 service columns */}
        <line
          x1={SERVICE_X[0]}
          y1={96}
          x2={SERVICE_X[2]}
          y2={96}
          stroke="hsl(145 55% 42%)"
          strokeOpacity="0.18"
          strokeWidth="0.14"
          strokeDasharray="0.7 1.4"
          vectorEffect="non-scaling-stroke"
          className="constellation-flow"
          style={{ animationDelay: "-1.4s" }}
        />

        {/* Anchor nodes — platform (top) */}
        {PLATFORM_X.map((x, i) => (
          <circle
            key={`pn-${i}`}
            cx={x}
            cy={0.6}
            r={0.7}
            fill="hsl(145 55% 42%)"
            className="star-twinkle"
            style={{
              animationDelay: `${i * 0.4}s`,
              filter: "drop-shadow(0 0 3px hsl(145 55% 42% / 0.6))",
            }}
          />
        ))}

        {/* Anchor nodes — services (bottom) */}
        {SERVICE_X.map((x, i) => (
          <circle
            key={`sn-${i}`}
            cx={x}
            cy={99.4}
            r={0.85}
            fill="hsl(145 55% 42%)"
            className="star-twinkle"
            style={{
              animationDelay: `${i * 0.6 + 0.3}s`,
              filter: "drop-shadow(0 0 4px hsl(145 55% 42% / 0.7))",
            }}
          />
        ))}

        {/* Sprinkled background stars */}
        {STARS.map((s, i) => (
          <circle
            key={`st-${i}`}
            cx={s.x}
            cy={s.y}
            r={s.r * 0.35}
            fill="hsl(145 55% 42%)"
            opacity="0.55"
            className="star-twinkle"
            style={{ animationDelay: `${s.delay}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default PlatformToServicesFlow;
