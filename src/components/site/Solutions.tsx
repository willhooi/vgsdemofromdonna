import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bytetechLogo from "@/assets/brand/bytetech.svg";

/**
 * Solutions — animated galaxy of services.
 *
 * Each node is a service in the VietGuys ecosystem. Lines connect
 * them softly through a central VietGuys hub. Highlighted nodes
 * (Zalo, Mini App, CDP, ByteTech) are larger and brighter.
 *
 * To add a new service: append to the `nodes` array below with
 * a position (in % of the SVG viewBox) and a `featured` flag.
 */

type Node = {
  id: string;
  label: string;
  x: number; // 0..100
  y: number; // 0..100
  featured?: boolean;
  /** Optional logo for partner nodes */
  logo?: string;
};

const nodes: Node[] = [
  { id: "zalo", label: "Zalo ZNS", x: 22, y: 28, featured: true },
  { id: "miniapp", label: "Mini App", x: 78, y: 26, featured: true },
  { id: "cdp", label: "PangoCDP", x: 18, y: 72, featured: true },
  { id: "bytetech", label: "ByteTech", x: 82, y: 74, featured: true, logo: bytetechLogo },
  { id: "sms", label: "SMS Brandname", x: 8, y: 50 },
  { id: "viber", label: "Viber Business", x: 50, y: 8 },
  { id: "email", label: "Email", x: 92, y: 50 },
  { id: "otp", label: "OTP & Voice", x: 36, y: 88 },
  { id: "ai", label: "AI Campaigns", x: 64, y: 88 },
  { id: "topup", label: "Mobile Topup", x: 50, y: 96 },
];

const HUB = { x: 50, y: 50 };

export const Solutions = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.25 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  // background twinkle stars
  const stars = Array.from({ length: 60 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    r: Math.random() * 0.6 + 0.15,
    delay: Math.random() * 4,
    dur: 2.4 + Math.random() * 3,
  }));

  return (
    <section
      ref={ref}
      id="solutions"
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, hsl(145 100% 12%) 0%, hsl(145 100% 7%) 55%, hsl(145 100% 5%) 100%)",
      }}
    >
      <div className="container-tight relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--accent))]">
            Solutions
          </span>
          <h2 className="heading-section mt-4 text-balance text-white">
            One ecosystem.{" "}
            <span className="text-[hsl(var(--accent))]">Every channel</span>{" "}
            your customers live on.
          </h2>
          <p className="mt-4 text-base text-white/70">
            From SMS to Zalo Mini Apps, from PangoCDP to AI campaigns — orchestrated through
            a single VietGuys hub, partnered with ByteTech.
          </p>
        </div>

        <div className="relative mx-auto mt-10 aspect-square w-full max-w-[640px] md:mt-14">
          {/* Twinkle starfield */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            {stars.map((s, i) => (
              <circle
                key={i}
                cx={s.x}
                cy={s.y}
                r={s.r}
                fill="white"
                style={{
                  animation: `star-twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
                }}
              />
            ))}
          </svg>

          {/* Connector lines */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <defs>
              <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(128 52% 60%)" stopOpacity="0.55" />
                <stop offset="60%" stopColor="hsl(128 52% 46%)" stopOpacity="0.12" />
                <stop offset="100%" stopColor="hsl(128 52% 46%)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* hub aura */}
            <circle cx={HUB.x} cy={HUB.y} r="22" fill="url(#hub-glow)" />

            {/* lines hub <-> nodes */}
            {nodes.map((n) => (
              <line
                key={n.id}
                x1={HUB.x}
                y1={HUB.y}
                x2={n.x}
                y2={n.y}
                stroke={n.featured ? "hsl(35 100% 60%)" : "hsl(128 52% 60%)"}
                strokeWidth={n.featured ? 0.35 : 0.18}
                strokeDasharray="0.6 1.2"
                strokeOpacity={visible ? (n.featured ? 0.55 : 0.3) : 0}
                style={{
                  transition: "stroke-opacity 1.4s ease-out",
                  transitionDelay: `${100 + nodes.indexOf(n) * 60}ms`,
                  animation: "line-flow 18s linear infinite",
                }}
              />
            ))}

            {/* faint orbits */}
            <circle
              cx={HUB.x}
              cy={HUB.y}
              r="32"
              fill="none"
              stroke="hsl(128 52% 60% / 0.18)"
              strokeWidth="0.15"
              strokeDasharray="0.6 1.4"
            />
            <circle
              cx={HUB.x}
              cy={HUB.y}
              r="44"
              fill="none"
              stroke="hsl(128 52% 60% / 0.12)"
              strokeWidth="0.15"
              strokeDasharray="0.6 1.4"
            />
          </svg>

          {/* Central hub */}
          <div
            className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            style={{ left: `${HUB.x}%`, top: `${HUB.y}%` }}
          >
            <div
              className="grid h-20 w-20 place-items-center rounded-full border border-[hsl(var(--primary))]/40 bg-white/95 shadow-[0_0_60px_hsl(128_52%_55%/0.55)] md:h-24 md:w-24"
              style={{ animation: "node-pulse 3s ease-in-out infinite" }}
            >
              <span className="font-display text-base font-extrabold tracking-tight text-[hsl(var(--primary-deep))] md:text-lg">
                VIETGUYS
              </span>
            </div>
          </div>

          {/* Nodes */}
          {nodes.map((n, i) => (
            <NodeDot key={n.id} node={n} visible={visible} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-[hsl(var(--accent))]/60 hover:text-[hsl(var(--accent))]"
          >
            Explore all solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const NodeDot = ({
  node,
  visible,
  index,
}: {
  node: Node;
  visible: boolean;
  index: number;
}) => {
  const size = node.featured ? "h-14 w-14 md:h-16 md:w-16" : "h-9 w-9 md:h-10 md:w-10";
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        opacity: visible ? 1 : 0,
        transform: `translate(-50%, -50%) scale(${visible ? 1 : 0.6})`,
        transition: "opacity 700ms ease-out, transform 700ms ease-out",
        transitionDelay: `${200 + index * 80}ms`,
      }}
    >
      <div
        className={`grid place-items-center rounded-full border ${
          node.featured
            ? "border-[hsl(var(--accent))]/60 bg-white shadow-[0_0_24px_hsl(35_100%_55%/0.55)]"
            : "border-white/30 bg-white/90 shadow-[0_0_12px_hsl(128_52%_60%/0.4)]"
        } ${size}`}
        style={{
          animation: node.featured
            ? "node-pulse 2.6s ease-in-out infinite"
            : undefined,
        }}
      >
        {node.logo ? (
          <img
            src={node.logo}
            alt={node.label}
            className="h-7 w-auto md:h-8"
            loading="lazy"
          />
        ) : (
          <span
            className={`font-display font-extrabold ${
              node.featured
                ? "text-[10px] text-[hsl(var(--primary-deep))] md:text-[11px]"
                : "text-[9px] text-[hsl(var(--primary-deep))]/80"
            }`}
          >
            {node.label.split(" ")[0].slice(0, 4).toUpperCase()}
          </span>
        )}
      </div>
      <span
        className={`mt-1.5 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide md:text-[11px] ${
          node.featured
            ? "bg-[hsl(var(--accent))]/15 text-[hsl(var(--accent))]"
            : "text-white/75"
        }`}
      >
        {node.label}
      </span>
    </div>
  );
};
