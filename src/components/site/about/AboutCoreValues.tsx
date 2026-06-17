import { useEffect, useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import sailboatAsset from "@/assets/sailboat-19.png.asset.json";


const ICON_STROKE = "hsl(var(--primary))";

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

/** Observer wrapper to trigger DrawIcon animation when in viewport */
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

const SailboatBackdrop = () => {
  const boatRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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
        const section = sectionRef.current;
        const boat = boatRef.current;
        if (!section || !boat) return;
        const rect = section.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const sectionCenter = rect.top + rect.height / 2;
        const delta = (viewportCenter - sectionCenter) * 0.08;
        const y = Math.max(-40, Math.min(40, delta));
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
      ref={sectionRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Sailboat key visual — right side, desktop+ */}
      <img
        ref={boatRef}
        src={sailboatAsset.url}
        alt=""
        loading="lazy"
        className="absolute right-0 bottom-0 hidden md:block h-full w-auto max-w-[60%] object-cover object-left opacity-80 transition-transform duration-700 ease-out will-change-transform group-hover/section:-translate-y-2 group-hover/section:scale-[1.015]"
        style={{
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Top-edge blend — hides the image’s solid background at the top so the sailboat overlays the section background */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[26%] w-[60%]"
        style={{
          background:
            "linear-gradient(to bottom, hsl(0 0% 97%) 0%, hsl(0 0% 97% / 0.55) 45%, transparent 100%)",
        }}
      />


      {/* Wave that visually connects the bottom row of tiles */}
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[6%] h-[260px] w-full opacity-70"
      >
        <defs>
          <linearGradient id="waveStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="35%" stopColor="hsl(var(--primary))" stopOpacity="0.55" />
            <stop offset="100%" stopColor="hsl(var(--primary-deep))" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <path
          d="M0,140 C220,90 420,180 700,130 C960,85 1180,170 1440,120"
          fill="none"
          stroke="url(#waveStroke)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M0,170 C260,130 500,200 760,160 C1020,120 1220,200 1440,160"
          fill="none"
          stroke="hsl(var(--primary) / 0.35)"
          strokeWidth="1"
          strokeDasharray="2 6"
          className="transition-[stroke-dashoffset] duration-[2400ms] ease-linear group-hover/section:[stroke-dashoffset:-40]"
        />
      </svg>

      {/* Readability overlay — left side & bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, hsl(0 0% 100% / 0.96) 0%, hsl(0 0% 100% / 0.78) 45%, hsl(0 0% 100% / 0.25) 75%, hsl(0 0% 100% / 0.05) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-white/85 via-white/40 to-transparent" />
    </div>
  );
};


const ValueTile = ({
  value,
  delay = 0,
  className = "",
}: {
  value: Value;
  delay?: number;
  className?: string;
}) => (
  <Reveal variant="fade-up" delay={delay}>
    <InViewGroup
      className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-20px_hsl(var(--primary)/0.35)] ${className}`}
      style={{
        background: "hsl(var(--primary) / 0.05)",
        borderColor: "hsl(var(--primary) / 0.18)",
        boxShadow: "0 10px 30px -18px hsl(var(--primary) / 0.25)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full"
        style={{ background: "hsl(var(--primary) / 0.08)" }}
      />
      <div
        className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full"
        style={{ background: "hsl(var(--primary) / 0.12)" }}
      >
        {value.icon}
      </div>
      <div className="relative mt-6">
        <h3 className="font-display text-lg font-bold text-foreground">
          {value.title}
        </h3>
        <span
          aria-hidden
          className="mt-3 block h-[2px] w-8 rounded-full"
          style={{ background: "#cd3734" }}
        />
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {value.body}
        </p>
      </div>
    </InViewGroup>
  </Reveal>
);


/** Accent gradient tile that takes the role of a "photo" in the mosaic */
const AccentTile = ({
  className = "",
  giantIcon,
  caption,
}: {
  className?: string;
  giantIcon: React.ReactNode;
  caption: string;
}) => (
  <Reveal variant="fade-up">
    <InViewGroup
      className={`relative overflow-hidden rounded-[20px] ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-deep)) 100%)",
        }}
      />
      {/* subtle dotted texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      {/* red accent dot */}
      <div
        aria-hidden
        className="absolute right-6 top-6 h-3 w-3 rounded-full"
        style={{ background: "#cd3734", boxShadow: "0 0 0 6px rgba(205,55,52,0.18)" }}
      />
      {/* giant outline icon */}
      <div className="absolute inset-0 flex items-center justify-center text-white/85">
        {giantIcon}
      </div>
      <div className="relative flex h-full flex-col justify-end p-7">
        <p className="font-display text-base font-semibold text-white/95">
          {caption}
        </p>
        <span
          aria-hidden
          className="mt-2 block h-[2px] w-10 rounded-full bg-white/70"
        />
      </div>
    </InViewGroup>
  </Reveal>
);

export const AboutCoreValues = () => (
  <section
    className="group/section relative overflow-hidden py-20 md:py-28"
    style={{
      background:
        "linear-gradient(180deg, hsl(0 0% 97%) 0%, hsl(0 0% 100%) 100%)",
    }}
  >
    <SailboatBackdrop />

    <div className="container-tight relative z-10">
      {/* Heading block — full width on top */}
      <Reveal variant="fade-up">
        <div className="max-w-2xl">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.24em]"
            style={{ color: "hsl(var(--primary-deep))" }}
          >
            CORE VALUES
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] text-foreground md:text-[34px] lg:text-[40px]">
            Six values that have outlasted every trend.
          </h2>
          <span
            aria-hidden
            className="mt-5 block h-[3px] w-16 rounded-full"
            style={{ background: "#cd3734" }}
          />
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Built in calm waters and rough ones alike. These six values are
            why we're still sailing.
          </p>
        </div>
      </Reveal>

      {/* 3x2 grid of value tiles */}
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {values.map((value, i) => (
          <ValueTile
            key={value.title}
            value={value}
            delay={(i % 3) * 80}
            className="min-h-[240px]"
          />
        ))}
      </div>
    </div>
  </section>
);

