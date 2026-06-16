import { Reveal } from "@/components/motion/Reveal";

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

const NetworkArt = () => (
  <svg
    viewBox="0 0 280 200"
    aria-hidden
    className="pointer-events-none absolute right-0 top-0 h-[220px] w-[300px] opacity-55"
  >
    <g stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.6" fill="none">
      <line x1="40" y1="40" x2="120" y2="80" />
      <line x1="120" y1="80" x2="220" y2="50" />
      <line x1="220" y1="50" x2="260" y2="120" />
      <line x1="120" y1="80" x2="180" y2="150" />
      <line x1="40" y1="40" x2="80" y2="140" />
      <line x1="80" y1="140" x2="180" y2="150" />
    </g>
    <g fill="hsl(var(--primary))">
      <circle cx="40" cy="40" r="3" />
      <circle cx="120" cy="80" r="4" />
      <circle cx="220" cy="50" r="3" />
      <circle cx="260" cy="120" r="3" />
      <circle cx="180" cy="150" r="3" />
      <circle cx="80" cy="140" r="2.5" />
    </g>
    <circle cx="230" cy="40" r="14" fill="#cd3734" opacity="0.18" />
  </svg>
);

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

const GiantTarget = (
  <DrawIcon
    className="h-40 w-40 md:h-48 md:w-48"
    strokeWidth={1.1}
    viewBox="0 0 64 64"
  >
    <circle cx="32" cy="32" r="22" />
    <circle cx="32" cy="32" r="14" />
    <circle cx="32" cy="32" r="6" />
    <line x1="32" y1="6" x2="32" y2="20" />
    <line x1="32" y1="44" x2="32" y2="58" />
    <line x1="6" y1="32" x2="20" y2="32" />
    <line x1="44" y1="32" x2="58" y2="32" />
  </DrawIcon>
);

export const AboutCoreValues = () => (
  <section
    className="relative overflow-hidden py-20 md:py-28"
    style={{
      background:
        "linear-gradient(180deg, hsl(0 0% 97%) 0%, hsl(0 0% 100%) 100%)",
    }}
  >
    <NetworkArt />

    <div className="container-tight relative">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
        {/* Heading block — spans full width on mobile, sticky-feel side panel on desktop */}
        <div className="sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:self-stretch">
          <Reveal variant="fade-up">
            <div className="lg:sticky lg:top-24">
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
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                The compass behind every decision, every product, and every
                partnership we build at VietGuys.
              </p>
              {/* signature accent icon, anchors the section visually */}
              <div className="mt-8 hidden lg:flex items-center justify-start text-primary/80">
                {GiantTarget}
              </div>
            </div>
          </Reveal>
        </div>

        {/* 2x2 grid of the first 4 values, right of heading on desktop */}
        <div className="lg:col-span-4">
          <ValueTile value={values[0]} delay={80} className="min-h-[240px]" />
        </div>
        <div className="lg:col-span-4">
          <ValueTile value={values[1]} delay={160} className="min-h-[240px]" />
        </div>
        <div className="lg:col-span-4">
          <ValueTile value={values[2]} delay={80} className="min-h-[240px]" />
        </div>
        <div className="lg:col-span-4">
          <ValueTile value={values[3]} delay={160} className="min-h-[240px]" />
        </div>

        {/* Last 2 values — full-width row, split 6/6 on desktop */}
        <div className="sm:col-span-2 lg:col-span-6">
          <ValueTile value={values[4]} delay={80} className="min-h-[220px]" />
        </div>
        <div className="sm:col-span-2 lg:col-span-6">
          <ValueTile value={values[5]} delay={160} className="min-h-[220px]" />
        </div>
      </div>
    </div>
  </section>
);
