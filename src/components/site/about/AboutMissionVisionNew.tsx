import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import missionImage from "@/assets/mission-2.jpg.asset.json";
import visionImage from "@/assets/vision-upweb.jpg.asset.json";

const MissionArt = () => (
  <svg viewBox="0 0 400 360" aria-hidden preserveAspectRatio="xMidYMid meet" className="h-full w-full">
    <rect width="400" height="360" fill="#f4f5f7" />
    <circle cx="80" cy="80" r="44" fill="#cd3734" />

    {/* skyline strip */}
    <g fill="#b6b9bd">
      <rect x="20" y="280" width="14" height="40" />
      <rect x="40" y="260" width="20" height="60" />
      <rect x="66" y="270" width="16" height="50" />
      <rect x="88" y="250" width="22" height="70" />
      <rect x="116" y="275" width="14" height="45" />
      <rect x="136" y="265" width="18" height="55" />
    </g>
    {/* outlined chat bubble */}
    <g stroke="#b6b9bd" strokeWidth="1.6" fill="#fff">
      <rect x="190" y="80" width="170" height="90" rx="14" />
    </g>
    <g stroke="#d9dbde" strokeWidth="2" strokeLinecap="round">
      <line x1="208" y1="106" x2="330" y2="106" />
      <line x1="208" y1="124" x2="320" y2="124" />
      <line x1="208" y1="142" x2="290" y2="142" />
    </g>
    {/* green bubble */}
    <g>
      <rect x="220" y="200" width="140" height="70" rx="14" fill="hsl(128 52% 46%)" />
      <circle cx="252" cy="235" r="5" fill="#fff" />
      <circle cx="272" cy="235" r="5" fill="#fff" />
      <circle cx="292" cy="235" r="5" fill="#fff" />
    </g>
    {/* network nodes top right */}
    <g stroke="hsl(128 52% 46%)" strokeWidth="1" fill="hsl(128 52% 46%)">
      <line x1="320" y1="30" x2="360" y2="50" />
      <line x1="360" y1="50" x2="340" y2="70" />
      <circle cx="320" cy="30" r="3" />
      <circle cx="360" cy="50" r="3" />
      <circle cx="340" cy="70" r="3" />
    </g>
  </svg>
);

const VisionArt = () => (
  <svg viewBox="0 0 400 360" aria-hidden preserveAspectRatio="xMidYMid meet" className="h-full w-full">
    <rect width="400" height="360" fill="#f4f5f7" />
    <circle cx="200" cy="140" r="48" fill="#cd3734" />

    {/* bridge arc */}
    <path d="M40 230 Q200 140 360 230" stroke="#b6b9bd" strokeWidth="3" fill="none" />
    <path d="M40 230 L360 230" stroke="#b6b9bd" strokeWidth="2" />
    {/* cables */}
    <g stroke="#d9dbde" strokeWidth="1">
      <line x1="80" y1="218" x2="80" y2="230" />
      <line x1="130" y1="200" x2="130" y2="230" />
      <line x1="180" y1="186" x2="180" y2="230" />
      <line x1="230" y1="186" x2="230" y2="230" />
      <line x1="280" y1="200" x2="280" y2="230" />
      <line x1="330" y1="218" x2="330" y2="230" />
    </g>
    {/* green traveling nodes */}
    <g fill="hsl(128 52% 46%)">
      <circle cx="120" cy="195" r="4" />
      <circle cx="200" cy="170" r="4" />
      <circle cx="290" cy="200" r="4" />
    </g>
    {/* skylines */}
    <g fill="#b6b9bd">
      <rect x="20" y="265" width="14" height="40" />
      <rect x="40" y="250" width="18" height="55" />
      <rect x="64" y="270" width="14" height="35" />
      <rect x="84" y="240" width="20" height="65" />
    </g>
    <g fill="#b6b9bd">
      <rect x="300" y="260" width="14" height="45" />
      <rect x="320" y="240" width="16" height="65" />
      {/* tower */}
      <rect x="345" y="200" width="6" height="105" />
      <polygon points="343,200 354,200 348.5,185" />
      <rect x="362" y="270" width="14" height="35" />
    </g>
    {/* water reflection */}
    <g stroke="#d9dbde" strokeWidth="1" opacity="0.7">
      <line x1="20" y1="320" x2="380" y2="320" />
      <line x1="40" y1="332" x2="360" y2="332" />
    </g>
  </svg>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3 text-sm leading-relaxed text-foreground/85">
    <span
      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
      style={{ background: "hsl(var(--primary))", color: "#fff" }}
    >
      <Check className="h-3 w-3" strokeWidth={3} />
    </span>
    <span>{children}</span>
  </li>
);

export const AboutMissionVisionNew = () => (
  <section className="bg-background py-20 md:py-24">
    <div className="container-tight">
      <Reveal variant="fade-up" className="mx-auto max-w-3xl text-center">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.24em]"
          style={{ color: "hsl(var(--primary-deep))" }}
        >
          Mission &amp; Vision
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground md:text-5xl">
          Turning enterprise messaging into{" "}
          <span style={{ color: "hsl(var(--primary))" }}>intelligent engagement.</span>
        </h2>
      </Reveal>

      {/* Mission */}
      <div className="mt-16 grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-[60px]">
        <Reveal variant="fade-up">
          <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Our Mission
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            To help brands in Vietnam engage their customers more intelligently —
            combining trusted messaging infrastructure with AI and data.
          </p>
          <ul className="mt-6 space-y-3">
            <Bullet>Every interaction timely, relevant and personalised for the customer.</Bullet>
            <Bullet>Secure and compliant — licensed infrastructure, ISO 27001 certified.</Bullet>
            <Bullet>Worth more to both the brand and the customer, on every channel.</Bullet>
          </ul>
        </Reveal>
        <Reveal variant="scale-soft" delay={120}>
          <div className="overflow-hidden rounded-[24px] bg-[#f4f5f7]" style={{ height: 360 }}>
            <img
              src={missionImage.url}
              alt="VietGuys team presenting CDP platform to enterprise clients"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      {/* Vision */}
      <div className="mt-20 grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-[60px]">
        <Reveal variant="scale-soft" className="md:order-1">
          <div className="overflow-hidden rounded-[24px] bg-[#f4f5f7]" style={{ height: 360 }}>
            <img
              src={visionImage.url}
              alt="VietGuys team presenting CDP platform to enterprise clients"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal variant="fade-up" delay={120} className="md:order-2">
          <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Our Vision
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            To be Vietnam&apos;s leading AI-powered customer engagement company — and the
            most trusted bridge between brands and the customers they serve.
          </p>
          <ul className="mt-6 space-y-3">
            <Bullet>AI built for the Vietnamese market, backed by international standards.</Bullet>
            <Bullet>The most trusted bridge between brands and their customers.</Bullet>
            <Bullet>Setting the benchmark for intelligent, secure customer engagement.</Bullet>
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);
