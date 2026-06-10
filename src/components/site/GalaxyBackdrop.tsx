/**
 * GalaxyBackdrop — a bright, clean galaxy layer shared across
 * Solutions → SolutionsToServicesBridge → ServicesGrid.
 *
 * Stays light (white → very pale green) but adds depth via:
 * - 2 nebula glows (one near platform, one near services)
 * - slowly rotating concentric orbit rings (SVG, dashed)
 * - a sparse star field with a gentle drift
 *
 * All animations respect prefers-reduced-motion.
 */
export const GalaxyBackdrop = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, hsl(145 60% 98%) 30%, hsl(145 55% 96%) 55%, hsl(145 60% 97%) 80%, #ffffff 100%)",
      }}
    >
      {/* Nebula glow — top (sits behind Solutions / platform) */}
      <div
        className="absolute -top-32 left-1/2 h-[820px] w-[820px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.16) 0%, hsl(var(--primary) / 0.06) 45%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Nebula glow — bottom (sits behind ServicesGrid / orbiting services) */}
      <div
        className="absolute -bottom-40 left-[20%] h-[700px] w-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(145 70% 60% / 0.14) 0%, hsl(145 70% 60% / 0.05) 50%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-[10%] right-[8%] h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.10) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Orbit rings — slowly rotating, centered on the seam between platform & services */}
      <div className="absolute left-1/2 top-1/2 h-[1600px] w-[1600px] -translate-x-1/2 -translate-y-1/2 galaxy-orbit-slow">
        <svg viewBox="0 0 1600 1600" className="h-full w-full" fill="none">
          <defs>
            <linearGradient id="galaxyOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(128 52% 46%)" stopOpacity="0.55" />
              <stop offset="60%" stopColor="hsl(128 52% 46%)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="hsl(128 52% 46%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="800" cy="800" r="380" stroke="url(#galaxyOrbitGrad)" strokeWidth="1" strokeDasharray="4 9" />
          <circle cx="800" cy="800" r="560" stroke="url(#galaxyOrbitGrad)" strokeWidth="1" strokeDasharray="2 12" opacity="0.7" />
          <circle cx="800" cy="800" r="740" stroke="url(#galaxyOrbitGrad)" strokeWidth="1" strokeDasharray="2 14" opacity="0.5" />
        </svg>
      </div>

      {/* Counter-rotating outer orbit for parallax */}
      <div className="absolute left-1/2 top-1/2 h-[2000px] w-[2000px] -translate-x-1/2 -translate-y-1/2 galaxy-orbit-reverse">
        <svg viewBox="0 0 2000 2000" className="h-full w-full" fill="none">
          <circle
            cx="1000"
            cy="1000"
            r="940"
            stroke="hsl(128 52% 46%)"
            strokeOpacity="0.18"
            strokeWidth="1"
            strokeDasharray="3 18"
          />
        </svg>
      </div>

      {/* Sparse star field */}
      <div
        className="absolute inset-0 galaxy-stars opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 14%, hsl(145 60% 35% / 0.55) 1px, transparent 1.5px), radial-gradient(circle at 78% 22%, hsl(145 60% 35% / 0.45) 1px, transparent 1.5px), radial-gradient(circle at 32% 48%, hsl(145 60% 35% / 0.4) 1px, transparent 1.5px), radial-gradient(circle at 88% 62%, hsl(145 60% 35% / 0.5) 1px, transparent 1.5px), radial-gradient(circle at 18% 78%, hsl(145 60% 35% / 0.4) 1px, transparent 1.5px), radial-gradient(circle at 64% 86%, hsl(145 60% 35% / 0.45) 1px, transparent 1.5px), radial-gradient(circle at 48% 32%, hsl(145 60% 35% / 0.35) 1px, transparent 1.5px), radial-gradient(circle at 92% 92%, hsl(145 60% 35% / 0.4) 1px, transparent 1.5px), radial-gradient(circle at 6% 56%, hsl(145 60% 35% / 0.35) 1px, transparent 1.5px), radial-gradient(circle at 56% 68%, hsl(145 60% 35% / 0.4) 1px, transparent 1.5px)",
          backgroundSize: "100% 100%",
        }}
      />
    </div>
  );
};

export default GalaxyBackdrop;
