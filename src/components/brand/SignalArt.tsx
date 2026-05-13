import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Tone = "brand" | "accent" | "muted";
const stroke = (tone: Tone) =>
  tone === "accent" ? "hsl(var(--accent))" : tone === "muted" ? "hsl(var(--muted-foreground))" : "hsl(var(--primary))";

/* ============================ SignalWave ============================ */
export const SignalWave = ({
  intensity = 3,
  tone = "brand",
  className,
  origin = "center",
}: {
  intensity?: 1 | 2 | 3 | 4 | 5;
  tone?: Tone;
  className?: string;
  origin?: "center" | "left" | "right";
}) => {
  const cx = origin === "left" ? 30 : origin === "right" ? 270 : 150;
  const cy = 150;
  const rings = Array.from({ length: intensity + 2 });
  const c = stroke(tone);

  return (
    <svg viewBox="0 0 300 300" className={cn("h-full w-full", className)} aria-hidden>
      {rings.map((_, i) => {
        const r = 28 + i * 24;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={c}
            strokeWidth={1.2}
            strokeOpacity={0.55 - i * 0.07}
            style={{
              animation: `signal-ring 3.2s ease-out ${i * 0.35}s infinite`,
              transformOrigin: `${cx}px ${cy}px`,
            }}
          />
        );
      })}
      <circle cx={cx} cy={cy} r={6} fill={c} />
      <circle cx={cx} cy={cy} r={12} fill="none" stroke={c} strokeOpacity={0.6} />
    </svg>
  );
};

/* ============================ SignalGrid ============================ */
export const SignalGrid = ({
  cols = 28,
  rows = 16,
  tone = "brand",
  className,
  bloom = true,
}: {
  cols?: number;
  rows?: number;
  tone?: Tone;
  className?: string;
  bloom?: boolean;
}) => {
  const c = stroke(tone);
  const dots: { x: number; y: number; d: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let i = 0; i < cols; i++) {
      const x = (i + 0.5) * (300 / cols);
      const y = (r + 0.5) * (170 / rows);
      const d = Math.hypot(x - 150, y - 85);
      dots.push({ x, y, d });
    }
  }
  return (
    <svg viewBox="0 0 300 170" className={cn("h-full w-full", className)} aria-hidden>
      {dots.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={1.3}
          fill={c}
          opacity={bloom ? Math.max(0.08, 0.55 - p.d / 220) : 0.25}
          style={bloom ? { animation: `dot-bloom 4s ease-in-out ${(p.d % 40) * 0.04}s infinite` } : undefined}
        />
      ))}
    </svg>
  );
};

/* ============================ SeaPattern ============================ */
export const SeaPattern = ({ className, tone = "brand" }: { className?: string; tone?: Tone }) => {
  const c = stroke(tone);
  return (
    <svg viewBox="0 0 200 200" className={cn("h-full w-full", className)} aria-hidden>
      <defs>
        <pattern id="vg-sea" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20 Q10 0 20 20 T40 20" fill="none" stroke={c} strokeWidth="0.8" opacity="0.5" />
          <path d="M20 0 L30 20 L20 40 L10 20 Z" fill="none" stroke={c} strokeWidth="0.6" opacity="0.35" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#vg-sea)" />
    </svg>
  );
};

/* ============================ TwoWavesBridge ============================ */
export const TwoWavesBridge = ({ className }: { className?: string }) => {
  const [meet, setMeet] = useState(false);
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setMeet(true)),
      { threshold: 0.4 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <svg ref={ref} viewBox="0 0 600 260" className={cn("h-full w-full", className)} aria-hidden>
      <defs>
        <radialGradient id="meet-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
          <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* VN waves (left) */}
      {[0, 1, 2, 3].map((i) => (
        <circle
          key={`l${i}`}
          cx={90}
          cy={130}
          r={30 + i * 36}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeOpacity={0.45 - i * 0.08}
          style={{ animation: `signal-ring 3.6s ease-out ${i * 0.4}s infinite`, transformOrigin: "90px 130px" }}
        />
      ))}
      <circle cx={90} cy={130} r={7} fill="hsl(var(--primary))" />

      {/* JP waves (right) */}
      {[0, 1, 2, 3].map((i) => (
        <circle
          key={`r${i}`}
          cx={510}
          cy={130}
          r={30 + i * 36}
          fill="none"
          stroke="hsl(var(--accent))"
          strokeOpacity={0.45 - i * 0.08}
          style={{ animation: `signal-ring 3.6s ease-out ${i * 0.4 + 0.2}s infinite`, transformOrigin: "510px 130px" }}
        />
      ))}
      <circle cx={510} cy={130} r={7} fill="hsl(var(--accent))" />

      {/* Meeting glow */}
      <circle
        cx={300}
        cy={130}
        r={80}
        fill="url(#meet-glow)"
        style={{
          opacity: meet ? 1 : 0,
          transition: "opacity 1.2s ease-out 0.6s",
        }}
      />
      <circle cx={300} cy={130} r={5} fill="hsl(var(--accent))" style={{ animation: "signal-pulse 2s ease-in-out infinite" }} />

      {/* Labels */}
      <text x={90} y={170} textAnchor="middle" fontSize="11" fontWeight="600" fill="hsl(var(--muted-foreground))">VN</text>
      <text x={510} y={170} textAnchor="middle" fontSize="11" fontWeight="600" fill="hsl(var(--muted-foreground))">JP</text>
    </svg>
  );
};
