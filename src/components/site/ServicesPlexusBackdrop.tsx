import { useMemo } from "react";

/**
 * ServicesPlexusBackdrop — organic-cluster plexus background.
 * Jittered 6×6 grid of nodes connected to nearest neighbors.
 * Nodes twinkle softly with a green glow. Lines stay subtle.
 * Respects prefers-reduced-motion.
 */
const VIEW_W = 1800;
const VIEW_H = 1200;
const COLS = 7;
const ROWS = 5;

// Deterministic pseudo-random so SSR/CSR match and layout is stable.
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Node = { x: number; y: number; r: number; delay: number; dur: number };

function buildGraph() {
  const rand = mulberry32(20260614);
  const cellW = VIEW_W / COLS;
  const cellH = VIEW_H / ROWS;
  const nodes: Node[] = [];

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const jitterX = (rand() - 0.5) * cellW * 0.8;
      const jitterY = (rand() - 0.5) * cellH * 0.8;
      nodes.push({
        x: cellW * (c + 0.5) + jitterX,
        y: cellH * (r + 0.5) + jitterY,
        r: 1.8 + rand() * 1.4,
        delay: rand() * 3.5,
        dur: 3 + rand() * 2.5,
      });
    }
  }

  // Connect each node to its 3 nearest neighbors (dedup).
  const edgeSet = new Set<string>();
  const edges: [number, number][] = [];
  nodes.forEach((n, i) => {
    const dists = nodes
      .map((m, j) => ({ j, d: (m.x - n.x) ** 2 + (m.y - n.y) ** 2 }))
      .filter((e) => e.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 3);
    dists.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!edgeSet.has(key)) {
        edgeSet.add(key);
        edges.push([i, j]);
      }
    });
  });

  return { nodes, edges };
}

export const ServicesPlexusBackdrop = () => {
  const { nodes, edges } = useMemo(buildGraph, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 opacity-40 md:opacity-70"
    >
      <style>{`
        @keyframes services-plexus-twinkle {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50%      { opacity: 0.9;  transform: scale(1.35); }
        }
        .services-plexus-node {
          transform-origin: center;
          transform-box: fill-box;
          animation: services-plexus-twinkle var(--dur, 4s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
          filter: url(#services-plexus-glow);
        }
        @media (prefers-reduced-motion: reduce) {
          .services-plexus-node { animation: none !important; opacity: 0.6 !important; }
        }
      `}</style>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMin slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ willChange: "transform" }}
      >
        <defs>
          <filter id="services-plexus-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g stroke="hsl(var(--primary))" strokeWidth="0.75" strokeOpacity="0.18" fill="none">
          {edges.map(([a, b], i) => (
            <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} />
          ))}
        </g>

        <g fill="hsl(var(--primary-deep))">
          {nodes.map((n, i) => (
            <circle
              key={i}
              className="services-plexus-node"
              cx={n.x}
              cy={n.y}
              r={n.r}
              style={
                {
                  ["--delay" as never]: `${n.delay}s`,
                  ["--dur" as never]: `${n.dur}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default ServicesPlexusBackdrop;
