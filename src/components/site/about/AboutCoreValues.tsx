import { Reveal } from "@/components/motion/Reveal";

const ICON_STROKE = "hsl(var(--primary))";

const DrawIcon = ({ children }: { children: React.ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={ICON_STROKE}
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 [&_path,&_circle,&_line,&_polyline,&_rect,&_polygon]:[stroke-dasharray:120] [&_path,&_circle,&_line,&_polyline,&_rect,&_polygon]:[stroke-dashoffset:120] group-data-[in=true]:[&_path]:[stroke-dashoffset:0] group-data-[in=true]:[&_circle]:[stroke-dashoffset:0] group-data-[in=true]:[&_line]:[stroke-dashoffset:0] group-data-[in=true]:[&_polyline]:[stroke-dashoffset:0] group-data-[in=true]:[&_rect]:[stroke-dashoffset:0] group-data-[in=true]:[&_polygon]:[stroke-dashoffset:0] [&_*]:transition-[stroke-dashoffset] [&_*]:duration-[1600ms] [&_*]:ease-out"
  >
    {children}
  </svg>
);

const values = [
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
    body: "We act with honesty, build trust through transparency, and create long-term value together.",
    icon: (
      <DrawIcon>
        <polygon points="12,3 14.5,9 21,9.5 16,13.5 17.8,20 12,16.5 6.2,20 8,13.5 3,9.5 9.5,9" />
      </DrawIcon>
    ),
  },
  {
    title: "Accountability",
    body: "We are fully accountable for our own actions. We understand how our business decisions will affect our customers.",
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
    title: "Creativity\n& Innovation",
    body: "We never rest on our laurels. We always strive to be ahead of the curve.",
    icon: (
      <DrawIcon>
        <polygon points="13,2 4,14 11,14 10,22 20,10 13,10" />
      </DrawIcon>
    ),
  },
  {
    title: "Innovation",
    body: "From SMS to AI — we adopt what makes customer engagement smarter, faster, safer.",
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

export const AboutCoreValues = () => (
  <section
    className="relative overflow-hidden py-20 md:py-24"
    style={{
      background:
        "linear-gradient(180deg, hsl(0 0% 97%) 0%, hsl(0 0% 100%) 100%)",
    }}
  >
    <NetworkArt />
    <div className="container-tight relative">
      <div className="grid gap-10 md:grid-cols-2 md:items-end md:gap-16">
        <Reveal variant="fade-up">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.24em]"
            style={{ color: "hsl(var(--primary-deep))" }}
          >
            Values
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground md:text-5xl">
            Six values that have outlasted every trend.
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <p className="text-base leading-relaxed text-muted-foreground">
            The way we work hasn&apos;t changed since the first SMS left our gateway:
            people first, quality always, and infrastructure we own end-to-end —
            improved for every campaign that comes next.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v, i) => (
          <Reveal key={v.title} variant="fade-up" delay={i * 90}>
            <article className="group h-full rounded-[18px] border border-border bg-background p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]">
              <div
                data-in="false"
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
                    { threshold: 0.4 }
                  );
                  io.observe(el);
                }}
                className="group flex h-[52px] w-[52px] items-center justify-center rounded-full"
                style={{ background: "hsl(var(--primary) / 0.10)" }}
              >
                {v.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {v.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
