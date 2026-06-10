/**
 * GalaxyBackdrop — a single bright, unified galaxy layer shared across
 * Solutions → SolutionsToServicesBridge → ServicesGrid.
 *
 * The two zones (platform on top, services on bottom) receive mirrored
 * "nebula glow + orbit rings" treatment with identical brightness and
 * drift speed, so they read as one continuous cosmic field.
 *
 * All animations respect prefers-reduced-motion.
 */
export const GalaxyBackdrop = () => {
  // Shared parameters — keep both zones perfectly symmetric.
  const NEBULA_SIZE = 760;
  const NEBULA_OPACITY = 0.14;
  const NEBULA_BLUR = 50;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, hsl(145 60% 98%) 25%, hsl(145 55% 96%) 50%, hsl(145 60% 98%) 75%, #ffffff 100%)",
      }}
    >
      {/* ===== Nebula glow — TOP zone (Solutions / platform) ===== */}
      <div
        className="absolute left-1/2 top-[18%] -translate-x-1/2 rounded-full galaxy-nebula-drift"
        style={{
          width: NEBULA_SIZE,
          height: NEBULA_SIZE,
          background: `radial-gradient(circle, hsl(var(--primary) / ${NEBULA_OPACITY}) 0%, hsl(var(--primary) / ${NEBULA_OPACITY * 0.35}) 45%, transparent 72%)`,
          filter: `blur(${NEBULA_BLUR}px)`,
        }}
      />

      {/* ===== Nebula glow — BOTTOM zone (ServicesGrid) ===== */}
      <div
        className="absolute left-1/2 top-[78%] -translate-x-1/2 rounded-full galaxy-nebula-drift"
        style={{
          width: NEBULA_SIZE,
          height: NEBULA_SIZE,
          background: `radial-gradient(circle, hsl(var(--primary) / ${NEBULA_OPACITY}) 0%, hsl(var(--primary) / ${NEBULA_OPACITY * 0.35}) 45%, transparent 72%)`,
          filter: `blur(${NEBULA_BLUR}px)`,
          animationDelay: "-9s", // opposite phase, same speed → unified drift
        }}
      />

      {/* ===== Central seam glow — knits the two zones together ===== */}
      <div
        className="absolute left-1/2 top-1/2 h-[460px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* ===== Orbit rings — slowly rotating, centered on the seam ===== */}
      <div className="absolute left-1/2 top-1/2 h-[1600px] w-[1600px] -translate-x-1/2 -translate-y-1/2 galaxy-orbit-slow">
        <svg viewBox="0 0 1600 1600" className="h-full w-full" fill="none">
          <defs>
            <linearGradient id="galaxyOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(128 52% 46%)" stopOpacity="0.5" />
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

      {/* ===== Star field — evenly distributed across both zones ===== */}
      <div
        className="absolute inset-0 galaxy-stars opacity-60"
        style={{
          backgroundImage:
            // Top-zone stars
            "radial-gradient(circle at 12% 8%, hsl(145 60% 35% / 0.5) 1px, transparent 1.5px)," +
            "radial-gradient(circle at 78% 14%, hsl(145 60% 35% / 0.45) 1px, transparent 1.5px)," +
            "radial-gradient(circle at 32% 22%, hsl(145 60% 35% / 0.4) 1px, transparent 1.5px)," +
            "radial-gradient(circle at 88% 28%, hsl(145 60% 35% / 0.5) 1px, transparent 1.5px)," +
            "radial-gradient(circle at 6% 34%, hsl(145 60% 35% / 0.35) 1px, transparent 1.5px)," +
            "radial-gradient(circle at 56% 38%, hsl(145 60% 35% / 0.4) 1px, transparent 1.5px)," +
            // Mid-seam stars
            "radial-gradient(circle at 22% 50%, hsl(145 60% 35% / 0.4) 1px, transparent 1.5px)," +
            "radial-gradient(circle at 72% 52%, hsl(145 60% 35% / 0.4) 1px, transparent 1.5px)," +
            // Bottom-zone stars (mirrored density)
            "radial-gradient(circle at 14% 66%, hsl(145 60% 35% / 0.45) 1px, transparent 1.5px)," +
            "radial-gradient(circle at 60% 70%, hsl(145 60% 35% / 0.4) 1px, transparent 1.5px)," +
            "radial-gradient(circle at 86% 76%, hsl(145 60% 35% / 0.45) 1px, transparent 1.5px)," +
            "radial-gradient(circle at 30% 82%, hsl(145 60% 35% / 0.5) 1px, transparent 1.5px)," +
            "radial-gradient(circle at 76% 88%, hsl(145 60% 35% / 0.4) 1px, transparent 1.5px)," +
            "radial-gradient(circle at 10% 92%, hsl(145 60% 35% / 0.35) 1px, transparent 1.5px)",
          backgroundSize: "100% 100%",
        }}
      />
    </div>
  );
};

export default GalaxyBackdrop;
