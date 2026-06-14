/**
 * ServicesPlexusBackdrop — evenly-tiled triangle-mesh plexus background
 * for the ServicesGrid section. Sits above GalaxyBackdrop, below cards.
 *
 * Implementation: a single 200×200 SVG <pattern> repeats across the section
 * with five nodes + connecting dashed segments per tile, giving a uniform
 * triangle network. Slow drift + dash-offset shimmer simulate data flow.
 * Respects prefers-reduced-motion.
 */
export const ServicesPlexusBackdrop = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 opacity-30 md:opacity-40"
    >
      <style>{`
        @keyframes services-plexus-drift {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50%      { transform: translate3d(-10px, -10px, 0); }
        }
        @keyframes services-plexus-flow {
          to { stroke-dashoffset: -60; }
        }
        .services-plexus-rect { animation: services-plexus-drift 24s ease-in-out infinite; }
        .services-plexus-edges path {
          animation: services-plexus-flow 6s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .services-plexus-rect,
          .services-plexus-edges path { animation: none !important; }
        }
      `}</style>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="services-plexus-pattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* edges drawn first so nodes sit on top */}
            <g
              className="services-plexus-edges"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="4 2"
            >
              <path d="M20 20 L100 100" />
              <path d="M100 100 L180 40" />
              <path d="M100 100 L40 160" />
              <path d="M40 160 L160 180" />
              <path d="M180 40 L160 180" />
              <path d="M100 100 L160 180" />
              <path d="M20 20 L180 40" />
            </g>
            <circle cx="20" cy="20" r="2" fill="hsl(var(--primary))" />
            <circle cx="180" cy="40" r="1.5" fill="hsl(var(--primary-deep))" />
            <circle cx="100" cy="100" r="2" fill="hsl(var(--primary))" />
            <circle cx="40" cy="160" r="1.5" fill="hsl(var(--primary-deep))" />
            <circle cx="160" cy="180" r="2" fill="hsl(var(--primary))" />
          </pattern>
        </defs>
        <rect
          className="services-plexus-rect"
          x="-20"
          y="-20"
          width="calc(100% + 40px)"
          height="calc(100% + 40px)"
          fill="url(#services-plexus-pattern)"
        />
      </svg>
    </div>
  );
};

export default ServicesPlexusBackdrop;
