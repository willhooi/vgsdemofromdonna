import { useEffect, useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import sailboatAsset from "@/assets/sailboat-19.png.asset.json";

// "Setting sail forward" palette — scoped to this section
const SAIL = {
  oceanDeep: "#0B2C4A",
  horizonTeal: "#2A8C9E",
  sailWhite: "#F6F1E7",
  mist: "#E3ECEF",
  sunriseCoral: "#E55A3C",
  goldSpark: "#F2B441",
  mintBridge: "hsl(130 60% 96.5%)", // matches AboutMissionVisionNew top stop
};

const ICON_STROKE = SAIL.oceanDeep;

const DrawIcon = ({
  children,
  className = "h-6 w-6",
  strokeWidth = 1.75,
  viewBox = "0 0 24 24",
}: {
  children: React.ReactNode;
  className?: string;
  strokeWidth?: number;
  viewBox?: string;
}) => (
  <svg
    viewBox={viewBox}
    fill="none"
    stroke={ICON_STROKE}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${className} [&_path,&_circle,&_line,&_polyline,&_rect,&_polygon]:[stroke-dasharray:240] [&_path,&_circle,&_line,&_polyline,&_rect,&_polygon]:[stroke-dashoffset:240] group-data-[in=true]:[&_path]:[stroke-dashoffset:0] group-data-[in=true]:[&_circle]:[stroke-dashoffset:0] group-data-[in=true]:[&_line]:[stroke-dashoffset:0] group-data-[in=true]:[&_polyline]:[stroke-dashoffset:0] group-data-[in=true]:[&_rect]:[stroke-dashoffset:0] group-data-[in=true]:[&_polygon]:[stroke-dashoffset:0] [&_*]:transition-[stroke-dashoffset] [&_*]:duration-[1800ms] [&_*]:ease-out`}
  >
    {children}
  </svg>
);

const InViewGroup = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    data-in="false"
    style={style}
    ref={(el) => {
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              el.setAttribute("data-in", "true");
              io.disconnect();
            }
          });
        },
        { threshold: 0.25 }
      );
      io.observe(el);
    }}
    className={`group ${className ?? ""}`}
  >
    {children}
  </div>
);

type Value = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const values: Value[] = [
  {
    title: "People first",
    body: "We value every individual, respect every contribution, and empower each other to succeed together.",
    icon: (
      <DrawIcon>
        <circle cx="9" cy="8" r="3.2" />
        <circle cx="17" cy="10" r="2.4" />
        <path d="M3 19c0-3 3-5 6-5s6 2 6 5" />
        <path d="M14 19c0-2 2-3.5 4-3.5s3 1 3 3.5" />
      </DrawIcon>
    ),
  },
  {
    title: "Quality",
    body: "We uphold high standards, deliver with excellence, and never compromise on quality.",
    icon: (
      <DrawIcon>
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
        <polyline points="8.5,12 11,14.5 16,9.5" />
      </DrawIcon>
    ),
  },
  {
    title: "Integrity",
    body: "We act with integrity, build trust through transparency, and create long-term value together.",
    icon: (
      <DrawIcon>
        <polygon points="12,3 14.5,9 21,9.5 16,13.5 17.8,20 12,16.5 6.2,20 8,13.5 3,9.5 9.5,9" />
      </DrawIcon>
    ),
  },
  {
    title: "Accountability",
    body: "We take ownership of our actions, decisions, and their impact on our customers.",
    icon: (
      <DrawIcon>
        <rect x="3" y="4" width="18" height="13" rx="1.5" />
        <line x1="3" y1="14" x2="21" y2="14" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <line x1="12" y1="17" x2="12" y2="20" />
      </DrawIcon>
    ),
  },
  {
    title: "Creativity & Innovation",
    body: "We never rest on our laurels. We always strive to be ahead of the curve.",
    icon: (
      <DrawIcon>
        <polygon points="13,2 4,14 11,14 10,22 20,10 13,10" />
      </DrawIcon>
    ),
  },
  {
    title: "Honesty",
    body: "We speak truthfully, act responsibly, and uphold respect in all relationships.",
    icon: (
      <DrawIcon>
        <path d="M3 12a9 9 0 0 1 15.5-6.2" />
        <polyline points="19,3 19,7 15,7" />
        <path d="M21 12a9 9 0 0 1-15.5 6.2" />
        <polyline points="5,21 5,17 9,17" />
      </DrawIcon>
    ),
  },
];

/** Full-width horizon band at the bottom of the section — sailboat + waves */
const HorizonBand = () => {
  const boatRef = useRef<HTMLImageElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const wrap = wrapRef.current;
        const boat = boatRef.current;
        if (!wrap || !boat) return;
        const rect = wrap.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const sectionCenter = rect.top + rect.height / 2;
        const delta = (viewportCenter - sectionCenter) * 0.05;
        const y = Math.max(-20, Math.min(20, delta));
        boat.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] min-h-[220px] overflow-hidden"
    >
      {/* Soft fade so tiles above never collide with waves */}
      <div
        className="absolute inset-x-0 top-0 h-24"
        style={{
          background:
            "linear-gradient(to bottom, rgba(246,241,231,0.6), rgba(246,241,231,0))",
        }}
      />

      {/* Sailboat — bow pointing right ("forward"), nudged left of center */}
      <img
        ref={boatRef}
        src={sailboatAsset.url}
        alt=""
        loading="lazy"
        className="absolute bottom-[28%] left-[6%] hidden h-[60%] max-h-[240px] w-auto opacity-90 transition-transform duration-700 ease-out will-change-transform md:block md:left-[8%] lg:left-[12%] group-hover/section:translate-y-[-6px]"
      />

      {/* Wave — full-width horizon line, fades to mint at the bottom to bridge into Mission/Vision */}
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-full w-full"
      >
        <defs>
          <linearGradient id="waveStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={SAIL.oceanDeep} stopOpacity="0.85" />
            <stop offset="55%" stopColor={SAIL.horizonTeal} stopOpacity="0.7" />
            <stop offset="100%" stopColor={SAIL.sunriseCoral} stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="waveFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={SAIL.horizonTeal} stopOpacity="0.06" />
            <stop offset="100%" stopColor={SAIL.mintBridge} stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* filled mint wash that anchors into Mission/Vision color */}
        <path
          d="M0,150 C220,110 460,180 720,140 C980,100 1200,180 1440,140 L1440,220 L0,220 Z"
          fill="url(#waveFill)"
        />
        {/* primary horizon line */}
        <path
          d="M0,140 C220,90 460,170 720,130 C980,90 1200,170 1440,120"
          fill="none"
          stroke="url(#waveStroke)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* dashed secondary current */}
        <path
          d="M0,170 C260,130 500,200 760,160 C1020,120 1220,200 1440,160"
          fill="none"
          stroke={SAIL.horizonTeal}
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="2 6"
          className="transition-[stroke-dashoffset] duration-[2400ms] ease-linear group-hover/section:[stroke-dashoffset:-40]"
        />
        {/* sunrise spark on the right horizon — destination */}
        <circle cx="1330" cy="118" r="3.5" fill={SAIL.goldSpark} opacity="0.9" />
        <circle cx="1330" cy="118" r="9" fill={SAIL.goldSpark} opacity="0.18" />
      </svg>
    </div>
  );
};

const ValueTile = ({
  value,
  delay = 0,
}: {
  value: Value;
  delay?: number;
}) => (
  <Reveal variant="fade-up" delay={delay}>
    <InViewGroup
      className="relative flex h-full min-h-[230px] flex-col justify-between overflow-hidden rounded-[20px] border p-7 backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1.5"
      style={{
        background: "rgba(246,241,231,0.78)",
        borderColor: SAIL.horizonTeal + "38",
        boxShadow: "0 10px 30px -18px " + SAIL.oceanDeep + "55",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full transition-colors duration-300 group-hover:[background:rgba(242,180,65,0.22)]"
        style={{ background: SAIL.horizonTeal + "14" }}
      />
      <div
        className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full"
        style={{ background: SAIL.horizonTeal + "22" }}
      >
        {value.icon}
      </div>
      <div className="relative mt-6">
        <h3 className="font-display text-lg font-bold" style={{ color: SAIL.oceanDeep }}>
          {value.title}
        </h3>
        <span
          aria-hidden
          className="mt-3 block h-[2px] w-8 rounded-full"
          style={{ background: SAIL.sunriseCoral }}
        />
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {value.body}
        </p>
      </div>
    </InViewGroup>
  </Reveal>
);

export const AboutCoreValues = () => (
  <section
    className="group/section relative overflow-hidden pt-20 md:pt-24"
    style={{
      paddingBottom: "clamp(140px, 18vw, 220px)",
      background:
        "linear-gradient(180deg, #FFFFFF 0%, " +
        SAIL.sailWhite +
        " 55%, " +
        SAIL.mintBridge +
        " 100%)",
    }}
  >
    <div className="container-tight relative z-10">
      {/* Heading — centered top */}
      <Reveal variant="fade-up">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.24em]"
            style={{ color: SAIL.oceanDeep }}
          >
            CORE VALUES
          </span>
          <h2
            className="mt-4 font-display text-3xl font-extrabold leading-[1.1] md:text-[34px] lg:text-[40px]"
            style={{ color: SAIL.oceanDeep }}
          >
            Six values that have outlasted every trend.
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-5 block h-[3px] w-16 rounded-full"
            style={{ background: SAIL.sunriseCoral }}
          />
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            The compass behind every decision, every product, and every
            partnership we build at VietGuys.
          </p>
        </div>
      </Reveal>

      {/* 3×2 grid — symmetric, evenly weighted */}
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {values.map((v, i) => (
          <ValueTile key={v.title} value={v} delay={(i % 3) * 80} />
        ))}
      </div>
    </div>

    {/* Full-width horizon — sailboat + waves at the bottom */}
    <HorizonBand />
  </section>
);
