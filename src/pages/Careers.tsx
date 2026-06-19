import { useEffect, useState } from "react";
import { ChevronDown, Mail, ArrowDown } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import accreteLogo from "@/assets/brand/accrete-logo.png";

import vpbank from "@/assets/clients/finance-banking/vpbank.png.asset.json";
import fwd from "@/assets/clients/finance-banking/fwd.png.asset.json";
import grab from "@/assets/clients/carriage/grab.png.asset.json";
import shopee from "@/assets/clients/ecommerce/shopee.png.asset.json";
import coffeehouse from "@/assets/clients/hospitality/the-coffee-house.png.asset.json";
import mcdonalds from "@/assets/clients/hospitality/mcdonalds.png.asset.json";

const G = "#39B44A";
const GD = "#008035";

type Job = {
  dept: string;
  title: string;
  level: string;
  positions: string;
  levelTone?: "amber" | "indigo";
  desc: string;
  reqs: string[];
  bens: string[];
};

const JOBS: Job[] = [
  {
    dept: "Business Development",
    title: "Senior Business Development Manager",
    level: "Senior",
    positions: "1 position",
    levelTone: "amber",
    desc: "Own the company's full revenue strategy and commercial performance. Define a scalable sales system, lead cross-functional teams, and drive go-to-market execution for sustainable growth.",
    reqs: [
      "5+ years B2B BD/Sales — SaaS/MarTech/AI preferred",
      "Team management, pipeline building, GTM strategy",
      "P&L ownership, forecasting, C-level relationship",
      "Fluent English",
    ],
    bens: [
      "Negotiable salary + 13th month + quarterly bonus",
      "CDP technology training by specialists",
      "PVI health insurance 100M VND/year",
      "Remote work & annual company trip",
    ],
  },
  {
    dept: "Business Development",
    title: "Business Development Hunter",
    level: "Mid-level",
    positions: "1 position",
    levelTone: "amber",
    desc: "Proactively hunt and develop new B2B clients, expand market coverage, qualify leads, and close high-growth contracts to hit new revenue and customer KPIs.",
    reqs: [
      "2+ years BD/Sales — Agency/CDP/CRM preferred",
      "Strong prospecting, pitching & objection handling",
      "Fluent English · Google Workspace proficiency",
    ],
    bens: [
      "KPI-based income, no cap on earnings",
      "Path to team lead within 12–18 months",
      "CDP training + senior mentorship",
    ],
  },
  {
    dept: "Technology",
    title: "QA/Tester Automation (AI-assisted) & IT Task Coordinator",
    level: "Tech",
    positions: "1 position",
    levelTone: "indigo",
    desc: "Design and execute test automation for web/app/API. Apply AI tools to optimize QA workflows, maintain test documentation, and coordinate IT task progress across the team.",
    reqs: [
      "1+ year QA/Tester — automation experience preferred",
      "Selenium, Playwright, or Cypress proficiency",
      "Fluent English (mandatory) · Agile/Scrum",
    ],
    bens: [
      "Apply AI tools (ChatGPT, Copilot) to real workflows",
      "Growth path to QA Lead / Project Coordinator",
      "Flexible environment, company trip & training",
    ],
  },
  {
    dept: "Marketing",
    title: "Senior Marketing Executive — AI Content & Media",
    level: "Senior",
    positions: "1 position",
    levelTone: "amber",
    desc: "Not just a content writer — leverage AI to tell the brand story through text, images, and video. Ensure visual and messaging consistency across all B2B marketing channels.",
    reqs: [
      "3+ years Content/Media — B2B Tech/MarTech preferred",
      "Proficient in AI prompting: text, image & video",
      "Strong aesthetic sense & brand-first mindset",
    ],
    bens: [
      "AI workflow training from specialists",
      "Salary + 13th month + quarterly bonus",
      "Creative environment with no creative limits",
    ],
  },
  {
    dept: "Solutions & PM",
    title: "Solution Executive cum Project Management",
    level: "Mid–Senior",
    positions: "1 position",
    levelTone: "amber",
    desc: "Bridge clients and internal teams. Build solutions, lead proposal pitching, and manage the full project lifecycle from kick-off to campaign delivery and performance review.",
    reqs: [
      "3+ years — IMC/BTL/Martech agency preferred",
      "O2O marketing, trade campaign, media cost",
      "PM skills: planning, resource & timeline management",
    ],
    bens: [
      "Salary + performance-based project bonuses",
      "Direct exposure to C-level enterprise clients",
      "Clear career path in a growing company",
    ],
  },
];

const BENEFITS = [
  {
    img: "https://www.vietguys.biz/images/web/join-benefit-1.png",
    title: "Professional Training",
    desc: "Employees receive comprehensive training on VietGuys culture, customer service, soft skills, and new tech including CDP.",
  },
  {
    img: "https://www.vietguys.biz/images/web/join-benefit-2.png",
    title: "Compensation Policy",
    desc: "13th month salary, clear holiday & quarterly/annual bonuses, performance-based raises, and project incentives.",
  },
  {
    img: "https://www.vietguys.biz/images/web/join-benefit-3.png",
    title: "Learning & Development",
    desc: "VietGuys supports external course fees by level, plus travel and business expense reimbursements.",
  },
  {
    img: "https://www.vietguys.biz/images/web/join-benefit-4.png",
    title: "Work Remotely",
    desc: "Every employee works remotely at least 1 day/month by job level. Hours: 8:30–18:00, Mon–Fri.",
  },
];

const BENEFIT_WIDE = {
  img: "https://www.vietguys.biz/images/web/join-benefit-5.png",
  title: "Work Hard — Play Hard",
  desc: "Chill-out day every last Friday of the month, annual company trip, Fruit days twice a week.",
};

const CLIENT_LOGOS = [
  { src: vpbank.url, name: "VPBank" },
  { src: grab.url, name: "Grab" },
  { src: shopee.url, name: "Shopee" },
  { src: fwd.url, name: "FWD" },
  { src: coffeehouse.url, name: "The Coffee House" },
  { src: mcdonalds.url, name: "McDonald's" },
];

const Careers = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.title = "Careers — VietGuys | Join Us";
    const desc =
      "Accompany together — grow together. Explore open roles at VietGuys, Vietnam's pioneer customer engagement company, backed by Accrete Inc., Japan.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);
  }, []);

  const scrollToJobs = () => {
    document.getElementById("jobs-sec")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-24 md:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-120px] top-[-80px] h-[420px] w-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(57,180,74,0.12), transparent 70%)" }}
        />
        <div className="container-tight relative grid grid-cols-1 items-start gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
          {/* Left */}
          <div>
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
              style={{ background: "#E8FAE9", color: GD, borderColor: "rgba(57,180,74,0.2)" }}
            >
              ✦ Careers at VietGuys
            </div>
            <h1 className="mb-4 text-[40px] font-extrabold leading-[1.08] tracking-[-2px] text-foreground md:text-[48px]">
              Accompany together —<br />
              <span style={{ color: G }}>Grow together.</span>
            </h1>
            <p className="mb-6 max-w-lg text-[15px] leading-[1.7] text-muted-foreground">
              VietGuys always creates opportunities for each employee to develop and improve their own capacity. A professional, fair environment — always open for you to explore and develop your own career.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToJobs}
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
                style={{ background: G, boxShadow: "0 10px 24px -8px rgba(57,180,74,0.55)" }}
              >
                View open roles <ArrowDown className="h-4 w-4" />
              </button>
              <button
                className="rounded-full border-[1.5px] border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/40"
              >
                Our culture
              </button>
            </div>
            <p className="mt-4 text-[12px] text-muted-foreground">
              <span style={{ color: G }}>5 positions open</span> · Ho Chi Minh · Full-time
            </p>
          </div>

          {/* Right: photos + stat cards */}
          <div className="flex flex-col gap-4">
            {/* Photos */}
            <div className="flex gap-3">
              <img
                src="https://www.vietguys.biz/storage/photos/shares/join-us/1.png"
                alt="VietGuys team"
                className="h-auto w-[45%] rounded-[14px] object-cover"
                style={{ aspectRatio: "3/4" }}
              />
              <img
                src="https://www.vietguys.biz/storage/photos/shares/join-us/2.png"
                alt="VietGuys office"
                className="h-auto w-[55%] rounded-[14px] object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
            {/* Stat cards row */}
            <div className="flex flex-col gap-3 md:flex-row">
              <div
                className="flex-1 rounded-[14px] border-[1.5px] p-4"
                style={{ background: "#E8FAE9", borderColor: "rgba(57,180,74,0.3)" }}
              >
                <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                  Brands trust VietGuys
                </div>
                <div className="text-[28px] font-extrabold leading-none tracking-[-1.5px]" style={{ color: GD }}>
                  6,000+
                </div>
                <div className="mt-1 text-[11px] text-muted-foreground">Retail · Finance · Pharma · F&amp;B</div>
              </div>
              <div className="flex-1 rounded-[14px] border-[1.5px] border-border bg-white p-4">
                <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                  Years active
                </div>
                <div className="text-[28px] font-extrabold leading-none tracking-[-1.5px] text-foreground">19</div>
                <div className="mt-1 text-[11px] text-muted-foreground">Est. 2007</div>
              </div>
              <div
                className="flex flex-1 items-center gap-2 rounded-[14px] border-[1.5px] p-3"
                style={{ background: "#FFF3DC", borderColor: "rgba(245,164,32,0.3)" }}
              >
                <img
                  src="https://vgsdemofromdonna.lovable.app/assets/accrete-logo-gpK5hsy4.png"
                  alt="Accrete Inc."
                  className="h-5 w-auto shrink-0 object-contain opacity-80"
                />
                <div>
                  <div className="text-[11px] font-bold leading-tight" style={{ color: "#7A4A00" }}>
                    Backed by Accrete Inc.
                  </div>
                  <div className="text-[10px] leading-tight" style={{ color: "#9A6B20" }}>
                    Tokyo Stock Exchange
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <div className="border-y border-border" style={{ background: "#fafafa" }}>
        <div className="container-tight px-4 py-5">
          <div className="mb-3 text-center text-[10px] font-bold uppercase tracking-[1.5px] text-muted-foreground">
            Trusted by Vietnam's leading enterprise brands
          </div>
          <div className="flex flex-wrap items-center justify-around gap-6">
            {CLIENT_LOGOS.map((l) => (
              <img
                key={l.name}
                src={l.src}
                alt={l.name}
                className="h-11 w-auto object-contain opacity-90 md:h-14"
              />
            ))}
          </div>
        </div>
      </div>

      {/* OPEN POSITIONS */}
      <section id="jobs-sec" className="bg-white py-16 md:py-20">
        <div className="container-tight px-4">
          <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.5px]" style={{ color: G }}>
            <span className="inline-block h-[2px] w-4 rounded-full" style={{ background: G }} />
            Open Positions
          </div>
          <h2 className="mb-8 text-[28px] font-extrabold tracking-[-0.5px] text-foreground md:text-[36px]">
            You want to accompany VietGuys <span style={{ color: G }}>as?</span>
          </h2>

          <div className="space-y-3">
            {JOBS.map((job, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="overflow-hidden rounded-[14px] border-[1.5px] border-border bg-white transition-colors hover:border-[rgba(57,180,74,0.4)]"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-3 px-5 py-4 text-left md:px-6 md:py-5"
                  >
                    <div className="flex-1">
                      <div className="mb-1 text-[10px] font-bold uppercase tracking-[1px]" style={{ color: G }}>
                        {job.dept}
                      </div>
                      <div className="mb-2 text-[15px] font-bold text-foreground md:text-[16px]">{job.title}</div>
                      <div className="flex flex-wrap gap-1.5">
                        <span
                          className="rounded-full border px-2.5 py-0.5 text-[11px] font-semibold"
                          style={{ background: "#E8FAE9", borderColor: "rgba(57,180,74,0.25)", color: GD }}
                        >
                          Full-time
                        </span>
                        <span className="rounded-full border border-border bg-white px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                          Ho Chi Minh
                        </span>
                        <span
                          className="rounded-full border px-2.5 py-0.5 text-[11px] font-semibold"
                          style={
                            job.levelTone === "indigo"
                              ? { background: "#EEF2FF", borderColor: "#C7D2FE", color: "#3730A3" }
                              : { background: "#FFF3DC", borderColor: "rgba(245,164,32,0.3)", color: "#7A4A00" }
                          }
                        >
                          {job.level} · {job.positions}
                        </span>
                      </div>
                    </div>
                    <span
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all"
                      style={
                        isOpen
                          ? { background: G, borderColor: G, color: "#fff", transform: "rotate(180deg)" }
                          : { background: "#F5F5F5", borderColor: "#EBEBEB", color: "#5C5C5C" }
                      }
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height] duration-300"
                    style={{ maxHeight: isOpen ? 800 : 0 }}
                  >
                    <div className="border-t border-border px-5 pb-5 pt-2 md:px-6 md:pb-6">
                      <p className="py-3 text-[13.5px] leading-[1.7] text-muted-foreground">{job.desc}</p>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                          <div className="mb-2 text-[10px] font-bold uppercase tracking-[1px]" style={{ color: G }}>
                            Requirements
                          </div>
                          <ul className="space-y-1.5">
                            {job.reqs.map((r) => (
                              <li key={r} className="relative pl-4 text-[13px] leading-[1.7] text-muted-foreground">
                                <span className="absolute left-0 top-[1px]" style={{ color: G }}>→</span>
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="mb-2 text-[10px] font-bold uppercase tracking-[1px]" style={{ color: G }}>
                            Benefits
                          </div>
                          <ul className="space-y-1.5">
                            {job.bens.map((b) => (
                              <li key={b} className="relative pl-4 text-[13px] leading-[1.7] text-muted-foreground">
                                <span className="absolute left-0 top-[1px]" style={{ color: G }}>→</span>
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <a
                        href="mailto:hr@vietguys.biz?subject=Application — VietGuys Careers"
                        className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold text-white"
                        style={{ background: G, boxShadow: "0 8px 18px -6px rgba(57,180,74,0.5)" }}
                      >
                        <Mail className="h-4 w-4" /> Send us your CV
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="py-16 md:py-20" style={{ background: GD }}>
        <div className="container-tight px-4">
          <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-white/60">
            <span className="inline-block h-[2px] w-4 rounded-full bg-white/40" />
            Why Join Us
          </div>
          <h2 className="mb-8 text-[28px] font-extrabold tracking-[-0.5px] text-white md:text-[36px]">
            Clear policy — abundant benefits.
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="flex flex-col overflow-hidden rounded-[14px] border border-white/15"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <div className="h-[140px] overflow-hidden bg-white/5">
                  <img src={b.img} alt={b.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h4 className="mb-1 text-[15px] font-bold text-white">{b.title}</h4>
                  <p className="text-[13px] leading-[1.6] text-white/60">{b.desc}</p>
                </div>
              </div>
            ))}

            {/* Wide card */}
            <div
              className="col-span-1 flex flex-col overflow-hidden rounded-[14px] border border-white/15 md:col-span-2 md:flex-row"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              <div className="h-[160px] w-full shrink-0 overflow-hidden bg-white/5 md:h-auto md:w-[240px]">
                <img src={BENEFIT_WIDE.img} alt={BENEFIT_WIDE.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col justify-center p-5 md:p-6">
                <h4 className="mb-1 text-[15px] font-bold text-white">{BENEFIT_WIDE.title}</h4>
                <p className="text-[13px] leading-[1.6] text-white/60">{BENEFIT_WIDE.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-tight px-4 text-center">
          <h3 className="mb-3 text-[26px] font-extrabold tracking-[-0.5px] text-foreground md:text-[32px]">
            Your next chapter starts at <span style={{ color: G }}>VietGuys.</span>
          </h3>
          <p className="mb-6 text-[14px] text-muted-foreground">
            Drop your email to receive the latest openings, or apply directly.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) {
                window.location.href = `mailto:hr@vietguys.biz?subject=Notify me about new openings&body=Email: ${email}`;
              }
            }}
            className="mx-auto mb-4 flex max-w-[420px] gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-full border-[1.5px] border-border bg-[#F7F7F7] px-4 py-2.5 text-[13px] outline-none focus:border-foreground/40"
            />
            <button
              type="submit"
              className="rounded-full px-5 py-2.5 text-[13px] font-bold text-white"
              style={{ background: G, boxShadow: "0 8px 18px -6px rgba(57,180,74,0.5)" }}
            >
              Get notified
            </button>
          </form>
          <p className="text-[13px] text-muted-foreground">
            Apply directly:{" "}
            <a href="mailto:hr@vietguys.biz" className="font-semibold" style={{ color: G }}>
              hr@vietguys.biz
            </a>{" "}
            ·{" "}
            <a href="tel:+84933331840" className="font-semibold" style={{ color: G }}>
              0933 331 840
            </a>
          </p>
        </div>
      </section>

      <Footer />
      <ChatBubble />
    </main>
  );
};

export default Careers;
