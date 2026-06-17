import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ParticleField } from "./ParticleField";

type Milestone = {
  year: string;
  tbc?: boolean;
  highlight?: boolean;
  title: string;
  body: string;
};

const milestones: Milestone[] = [
  {
    year: "06/2007",
    title: "VietGuys is founded",
    body: "Founded in Ho Chi Minh City as a pioneer in mobile and SMS marketing in Vietnam.",
  },
  {
    year: "2008–2018",
    title: "Growth years",
    body: "One of Vietnam's leading SMS Brandname providers in the country, serving banks, airlines, retailers, and global consumer brands: Samsung E-warranty Solutions (2008), LG E-warranty Solutions (2017), Top 1 SMS in E-commerce (2018).",
  },
  {
    year: "05/2014",
    tbc: false,
    title: "Accrete Inc. is established",
    body: "Enterprise messaging specialist serving Japan's major mobile carriers — the foundation for the later partnership.",
  },
  {
    year: "03/2022",
    title: "VietGuys joins the Accrete group",
    body: "Japanese backing, regional technology and international standards — a Tokyo Stock Exchange–listed partner with the same long-horizon thinking.",
  },
  {
    year: "10/2025",
    tbc: false,
    title: "ISO/IEC 27001:2022",
    body: "Information Security Management Systems, - audited and certified by BSI (British Standards Institution) and accredited by ANAB.",
  },
  {
    year: "01/2026",
    tbc: false,
    title: "PangoCDP launches",
    body: "VietGuys' customer data platform — adding data, segmentation and customer journeys to messaging.",
  },
  {
    year: "01/2026",
    tbc: false,
    title: "Trusted partner. Licensed provider",
    body: "Officially recognized as a Zalo Trusted Partner and granted License No. 39/GP-CVT for non-facilities-based telecommunications services, reinforcing VietGuys' credibility and regulatory compliance.",
  },
  {
    year: "01/2026",
    highlight: true,
    title: "Another I launches",
    body: "VietGuys' AI-powered customer engagement brand — the move from messaging vendor to AI-led engagement platform.",
  },
];

const MilestoneCard = ({ m, align }: { m: Milestone; align: "left" | "right" }) => (
  <div className={align === "left" ? "md:text-right" : "md:text-left"}>
    <h3
      className="text-lg font-bold md:text-xl"
      style={{ color: m.highlight ? "#a7f070" : "#fff" }}
    >
      {m.title}
    </h3>
    <p className="mt-2 text-sm leading-relaxed text-white/65">{m.body}</p>
  </div>
);

const YearPill = ({ m }: { m: Milestone }) => (
  <span
    className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
    style={
      m.tbc
        ? {
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.18)",
            color: "rgba(255,255,255,0.5)",
          }
        : m.highlight
        ? {
            background: "hsl(var(--accent))",
            borderColor: "hsl(var(--accent))",
            color: "#fff",
            boxShadow:
              "0 0 0 4px rgba(255,155,23,0.25), 0 8px 24px -8px rgba(255,155,23,0.55)",
          }
        : {
            background: "rgba(255,255,255,0.08)",
            borderColor: "#a7f070",
            color: "#a7f070",
          }
    }
  >
    {m.year}
  </span>
);

export const AboutOurStory = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.4;
      const passed = Math.min(Math.max(vh - rect.top, 0), total);
      setProgress(passed / total);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-24"
      style={{ background: "linear-gradient(180deg, #0c3b20, #0a2f1a)" }}
    >
      <ParticleField
        dotColor="rgba(167,240,112,0.38)"
        lineColor="rgba(167,240,112,0.14)"
        count={45}
      />

      <div className="container-tight relative">
        <Reveal variant="fade-up" className="mx-auto max-w-2xl text-center">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.24em]"
            style={{ color: "#a7f070" }}
          >
            Our Story
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-5xl">
            Know more about us
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
            From an SMS pioneer in 2007 to Vietnam&apos;s AI-powered customer engagement
            company — every milestone is a moment we earned the right to send the next
            message.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* center line + progress */}
          <div
            aria-hidden
            className="absolute left-5 top-0 h-full w-0.5 md:left-1/2 md:-translate-x-1/2"
            style={{ background: "rgba(255,255,255,0.15)" }}
          >
            <div
              className="w-full origin-top"
              style={{
                height: `${Math.min(100, progress * 110)}%`,
                background: "#a7f070",
                boxShadow: "0 0 18px rgba(167,240,112,0.6)",
                transition: "height 80ms linear",
              }}
            />
          </div>

          <ol className="space-y-10 md:space-y-14">
            {milestones.map((m, i) => {
              // Milestone 1 (i=0) → RIGHT, Milestone 2 (i=1) → LEFT, alternating.
              const onRight = i % 2 === 0;
              return (
                <Reveal
                  as="li"
                  key={`${i}-${m.title}`}
                  variant="fade-up"
                  delay={60}
                  className="relative grid gap-4 md:grid-cols-[1fr_120px_1fr] md:items-center md:gap-6"
                >
                  {/* LEFT column */}
                  <div className="hidden md:block">
                    {!onRight && <MilestoneCard m={m} align="left" />}
                  </div>

                  {/* year pill — centered on the line */}
                  <div className="absolute left-5 -translate-x-1/2 md:static md:flex md:justify-center md:translate-x-0">
                    <YearPill m={m} />
                  </div>

                  {/* RIGHT column (also the only column on mobile) */}
                  <div className="pl-14 md:pl-0">
                    {onRight ? (
                      <MilestoneCard m={m} align="right" />
                    ) : (
                      <div className="md:hidden">
                        <MilestoneCard m={m} align="right" />
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
