import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { AutomationSection } from "@/components/solutions/AutomationSection";
import smsBrandnameImg from "@/assets/solutions/sms-brandname.png.asset.json";
import ottMultiServiceImg from "@/assets/solutions/ott-multi-service.jpg.asset.json";
import emailServicesImg from "@/assets/solutions/email-services.jpg.asset.json";

import mobileTopupImg from "@/assets/solutions/mobile-topup-46.png.asset.json";
import otpboxImg from "@/assets/solutions/otpbox.jpg.asset.json";

const SOLUTION_OPTIONS = [
  "SMS Brandname",
  "Zalo ZBS / OA",
  "Viber Message",
  "Email Marketing",
  "Email OTP",
  "Voice Brandname",
  "Voice OTP",
  "OTPBox",
  "Mobile Topup / Rewards",
  "PangoCDP",
  "Another I (AI Engagement)",
  "Omnichannel / Multiple solutions",
];

type TabKey = "sms" | "ott" | "emailVoice" | "otp" | "rw";

const TABS: { key: TabKey; label: string }[] = [
  { key: "sms", label: "SMS" },
  { key: "ott", label: "Zalo · Viber · OTT" },
  { key: "emailVoice", label: "Email · Voice" },
  { key: "otp", label: "Verification" },
  { key: "rw", label: "Rewards & Loyalty" },
];

const Solutions = () => {
  const [tab, setTab] = useState<TabKey>("sms");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const heroCanvas = useRef<HTMLCanvasElement>(null);
  const indCanvas = useRef<HTMLCanvasElement>(null);

  // Document title + font
  useEffect(() => {
    document.title = "Solutions — VietGuys | Enterprise Messaging Vietnam";
    const id = "vg-jakarta-font";
    if (!document.getElementById(id)) {
      const pre = document.createElement("link");
      pre.rel = "preconnect";
      pre.href = "https://fonts.googleapis.com";
      pre.id = id + "-pre";
      document.head.appendChild(pre);
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
      document.head.appendChild(link);
    }
  }, []);


  // Scroll reveal + count up
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".vg-sol .rv").forEach((el) => io.observe(el));

    const cio = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          cio.unobserve(e.target);
          const el = e.target as HTMLElement;
          const to = +(el.dataset.to || "0");
          const dur = 1600;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - t0) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(to * ease).toLocaleString("en-US");
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }),
      { threshold: 0.6 }
    );
    document.querySelectorAll(".vg-sol .count").forEach((el) => cio.observe(el));

    return () => {
      io.disconnect();
      cio.disconnect();
    };
  }, []);

  // Particle canvases
  useEffect(() => {
    const runners: Array<() => void> = [];
    const start = (
      c: HTMLCanvasElement | null,
      opts: { count: number; dot: string; line: string; link: number }
    ) => {
      if (!c) return;
      const ctx = c.getContext("2d")!;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      let W = 0,
        H = 0;
      const N = matchMedia("(max-width: 920px)").matches
        ? Math.round(opts.count * 0.5)
        : opts.count;
      type P = { x: number; y: number; vx: number; vy: number; r: number };
      let P: P[] = [];
      const size = () => {
        W = c.width = c.offsetWidth * dpr;
        H = c.height = c.offsetHeight * dpr;
      };
      const init = () => {
        P = Array.from({ length: N }, () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.2 * dpr,
          vy: (Math.random() - 0.5) * 0.2 * dpr,
          r: (Math.random() * 1.7 + 1) * dpr,
        }));
      };
      size();
      init();
      const onResize = () => {
        size();
        init();
      };
      window.addEventListener("resize", onResize, { passive: true });
      const link = opts.link * dpr;
      let raf = 0;
      let alive = true;
      const loop = () => {
        if (!alive) return;
        ctx.clearRect(0, 0, W, H);
        for (const p of P) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
        }
        ctx.fillStyle = opts.dot;
        for (const p of P) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, 7);
          ctx.fill();
        }
        ctx.lineWidth = 0.7 * dpr;
        ctx.strokeStyle = opts.line;
        for (let i = 0; i < N; i++)
          for (let j = i + 1; j < N; j++) {
            const a = P[i],
              b = P[j];
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < link) {
              ctx.globalAlpha = 1 - d / link;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }
        raf = requestAnimationFrame(loop);
      };
      loop();
      runners.push(() => {
        alive = false;
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", onResize);
      });
    };
    start(heroCanvas.current, {
      count: 45,
      dot: "rgba(58,168,79,.5)",
      line: "rgba(58,168,79,.22)",
      link: 130,
    });
    start(indCanvas.current, {
      count: 35,
      dot: "rgba(167,240,112,.38)",
      line: "rgba(167,240,112,.14)",
      link: 145,
    });
    return () => runners.forEach((r) => r());
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => setSuccess(true), 900);
  };

  return (
    <>
      <Header />
      <div className="vg-sol">
        <style>{CSS}</style>



      {/* FAB */}
      <div className="fab">
        <a href="#cta" aria-label="Talk to expert">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8A8.5 8.5 0 0 1 12.5 3a8.38 8.38 0 0 1 8.5 8.5z" />
          </svg>
          TALK TO
          <br />
          EXPERT
        </a>
        <a href="tel:+842873008027" aria-label="Call us">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          CALL US
        </a>
      </div>

      {/* HERO */}
      <header className="hero">
        <canvas id="dotsHero" ref={heroCanvas}></canvas>
        <div className="container">
          <p className="label rv">SOLUTIONS &amp; SERVICES</p>
          <h1 className="rv d1">
            Every channel.
            <br />
            <span className="green">One partner.</span>
          </h1>
          <p className="sub rv d2">
            16 enterprise-grade services across messaging, verification, rewards,
            data and AI — composable into the exact stack your customer
            journey needs.
          </p>
          <div className="hero-cta rv d3">
            <a className="btn" href="#cta">
              Talk to a Strategist
            </a>
            <a className="btn ghost" href="#services">
              Browse services ↓
            </a>
          </div>
        </div>
      </header>

      {/* CATALOG */}
      <section id="catalog" style={{ paddingTop: 50 }}>
        <div className="container">
          <div className="cat-head">
            <p className="label rv">ALL SERVICES</p>
            <h2 className="rv d1">
              VietGuys Services{"\u00a0"}<span className="green">Ecosystem</span>
            </h2>
            <p className="rv d2">
              A system of methodologies and tools for running marketing
              campaigns{"\u00a0"}{"\u00a0"}
            </p>
          </div>

          <div className="tabs rv">
            {TABS.map((t) => (
              <button
                key={t.key}
                className={`tab ${tab === t.key ? "on" : ""}`}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === "sms" && (
            <div className="pane show">
              <CatArt caption="Direct carrier connections">
                <img
                  src={smsBrandnameImg.url}
                  alt="SMS Brandname on mobile keypad"
                  className="h-full w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              </CatArt>
              <div className="svc-grid">
                <Svc title="SMS Brandname" body="Sender displays your brand name (HSBC, Samsung…) instead of a phone number — authenticated, nationwide.">
                  <IconSms />
                </Svc>
                <Svc title="SMS Fixed" body="Deploy campaigns quickly — no Sender Name registration required, live in days.">
                  <IconSmsFixed />
                </Svc>
                <Svc title="SMS Short Code" body="2-way SMS gateway — voting, surveys, lead capture and customer-care scenarios.">
                  <IconChat />
                </Svc>
              </div>
            </div>
          )}

          {tab === "ott" && (
            <div className="pane show">
              <CatArt caption="Vietnam's most-used chat apps">
                <img
                  src={ottMultiServiceImg.url}
                  alt="People using Zalo and Viber on smartphones"
                  className="h-full w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              </CatArt>
              <div className="svc-grid">
                <Svc title="Zalo ZBS Template" body="Customer-service alerts via API straight to Zalo numbers on Vietnam's #1 chat app." chip="80M+ USERS">
                  <IconBubbleDots />
                </Svc>
                <Svc title="Viber Message" body="Rich-content campaigns, branded sender and Viber Communities for engaged audiences.">
                  <IconQ />
                </Svc>
                <Svc title="OTT Multi Service" body="Combine OTT (Viber, Zalo) with SMS fallback — guaranteed delivery, optimised cost.">
                  <IconSwap />
                </Svc>
              </div>
            </div>
          )}

          {tab === "emailVoice" && (
            <div className="pane show">
              <CatArt caption="Reach beyond the inbox">
                <img
                  src={emailServicesImg.url}
                  alt="Email on phone and laptop"
                  className="h-full w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              </CatArt>
              <div className="svc-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
                <Svc title="Email Marketing" body="Sales, promotions and product content with automation journeys and A/B testing.">
                  <IconMail />
                </Svc>
                <Svc title="Email OTP" body="One-time codes via email — automatic, fast and efficient for every transaction.">
                  <IconMailCheck />
                </Svc>
                <Svc title="Voice Brandname" body="Calls display your brand name instead of a number — higher answer rates, instant trust.">
                  <IconPhone />
                </Svc>
              </div>
            </div>
          )}

          {tab === "otp" && (
            <div className="pane show">
              <CatArt caption="Security at login speed">
                <img
                  src={otpboxImg.url}
                  alt="OTP verification on mobile"
                  className="h-full w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              </CatArt>
              <div className="svc-grid" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
                <Svc title="OTPBox" body="A multi-channel OTP solution that enables businesses to combine primary and backup delivery routes through a single API for maximum reliability." chip="1 API">
                  <IconLock />
                </Svc>
                <Svc title="Voice OTP" body="OTP via automated calls — reach hundreds of users in seconds when SMS isn't an option.">
                  <IconLockCall />
                </Svc>
              </div>
            </div>
          )}

          {tab === "rw" && (
            <div className="pane show">
              <CatArt caption="Turn engagement into retention">
                <img
                  src={mobileTopupImg.url}
                  alt="Rewards and loyalty solutions on mobile"
                  className="h-full w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              </CatArt>
              <div className="svc-grid">
                <Svc title="Mobile Topup" body="Instant airtime rewards across all carriers — fully automated, zero card risk.">
                  <IconCard />
                </Svc>
                <Svc title="Smart Warranty" body="Digital warranty via QR + messaging — kills paper, captures customer data at POS.">
                  <IconShieldCheck />
                </Svc>
                <Svc title="Customized Rewards Solutions" body="Tech + marketing engineered into unique products — white-label, API-first builds.">
                  <IconStar />
                </Svc>
              </div>
            </div>
          )}
        </div>
      </section>

      <AutomationSection />



      {/* divider white → dark */}
      <div className="divider" style={{ background: "#fff" }}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none">
          <path d="M0,32 C240,64 480,4 720,28 C960,52 1200,10 1440,36 L1440,64 L0,64 Z" fill="#0c3b20" />
        </svg>
      </div>

      {/* INDUSTRIES */}
      <section className="inds" id="industries" style={{ paddingTop: 56 }}>
        <canvas id="dotsInd" ref={indCanvas}></canvas>
        <div className="container">
          <div className="inds-head">
            <p className="label rv">SOLUTIONS BY INDUSTRY</p>
            <h2 className="rv d1">
              Your industry has a playbook.
              <br />
              We've already run it.
            </h2>
          </div>
          <div className="ind-grid">
            <IndCard tag="Banking & Finance" title="OTP in seconds, statements on Zalo, zero compliance risk." d="" >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" /></svg>
            </IndCard>
            <IndCard tag="E-commerce & Retail" title="Recover abandoned carts before the competitor's voucher lands." d="d1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="9" cy="21" r="1.5" /><circle cx="19" cy="21" r="1.5" /><path d="M2 3h3l3 13h11l2-9H7" /></svg>
            </IndCard>
            <IndCard tag="Insurance" title="Renewals that renew themselves — fewer lapses, lower call load." d="d2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </IndCard>
            <IndCard tag="Logistics" title="Every parcel tells the customer where it is — by ZNS & Voice." d="d3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="1" y="6" width="14" height="11" rx="1.5" /><path d="M15 10h4l3 4v3h-7M5.5 20a2 2 0 1 0 0-.01M17.5 20a2 2 0 1 0 0-.01" /></svg>
            </IndCard>
            <IndCard tag="Healthcare" title="No-shows drop when reminders feel personal." d="">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 6v12M6 12h12" /><circle cx="12" cy="12" r="9.5" /></svg>
            </IndCard>
            <IndCard tag="Education" title="Fill the next intake before the semester ends." d="d1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 3 3 6 3s6-2 6-3v-5" /></svg>
            </IndCard>
            <IndCard tag="F&B · FMCG" title="Turn a QR scan into a lifetime customer profile." d="d2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6 2l1 4h10l1-4M7 6v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6" /></svg>
            </IndCard>
            <IndCard tag="Telecommunications" title="Engage millions without breaking the network — or the rules." d="d3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 12.5a12 12 0 0 1 14 0M2 9a16.5 16.5 0 0 1 20 0M8.5 16a7.5 7.5 0 0 1 7 0" /><circle cx="12" cy="19.5" r="1.2" /></svg>
            </IndCard>
          </div>

        </div>
      </section>

      {/* divider dark → white */}
      <div className="divider" style={{ background: "#0a2f1a" }}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none">
          <path d="M0,30 C260,0 520,60 760,34 C1000,8 1240,50 1440,26 L1440,64 L0,64 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* CTA */}
      <div className="cta-wrap" id="cta">
        <div className="cta rv">
          <div className="cta-txt">
            <p className="label">FIND YOUR SOLUTION</p>
            <h2>
              Tell us your use case.
              <br />
              We'll build the stack.
            </h2>
            <p>
              Share a few details and a VietGuys strategist will map the right
              channels, data layer, and KPIs for your business — within 2
              working hours.
            </p>
            <ul className="cta-trust">
              <li>Dedicated account strategist, not a generic demo</li>
              <li>Channel + data recommendations tailored to your industry</li>
              <li>No commitment required — just a working conversation</li>
              <li>Response in Vietnamese, English or Japanese</li>
            </ul>
          </div>
          <div className="cta-form">
            <h3>Get in touch</h3>
            {!success ? (
              <form onSubmit={onSubmit}>
                <div className="f-row">
                  <div className="f-field">
                    <label htmlFor="cf-name">Full Name</label>
                    <input id="cf-name" type="text" placeholder="Nguyen Van A" required />
                  </div>
                  <div className="f-field">
                    <label htmlFor="cf-company">Company</label>
                    <input id="cf-company" type="text" placeholder="Company name" required />
                  </div>
                </div>
                <div className="f-row">
                  <div className="f-field">
                    <label htmlFor="cf-phone">Phone</label>
                    <input id="cf-phone" type="tel" placeholder="0901 234 567" />
                  </div>
                  <div className="f-field">
                    <label htmlFor="cf-email">Work Email</label>
                    <input id="cf-email" type="email" placeholder="you@company.com" required />
                  </div>
                </div>
                <div className="f-row full">
                  <div className="f-field">
                    <label htmlFor="cf-service">Solution I'm interested in</label>
                    <select id="cf-service" defaultValue="">
                      <option value="">Select a solution…</option>
                      {SOLUTION_OPTIONS.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="f-row full">
                  <div className="f-field">
                    <label htmlFor="cf-msg">
                      Briefly describe your goal{" "}
                      <span style={{ opacity: 0.5, fontWeight: 600 }}>(optional)</span>
                    </label>
                    <textarea
                      id="cf-msg"
                      placeholder="e.g. We want to reduce OTP drop-off and improve cart recovery rate…"
                    />
                  </div>
                </div>
                <button type="submit" className="f-submit" disabled={submitting}>
                  {submitting ? "Sending…" : "Send my request →"}
                </button>
                <p className="f-note">
                  By submitting, you agree to our Privacy Policy. We never share
                  your data with third parties.
                </p>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "30px 0" }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>✅</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 8 }}>
                  Request received!
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.65)" }}>
                  A strategist will reach out within 2 working hours.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      </div>
      <Footer />
      <ChatBubble />
    </>

  );
};

/* -------- subcomponents -------- */

const CatArt = ({ caption, children }: { caption: string; children: React.ReactNode }) => (
  <div className="cat-art">
    {children}
    <span className="cap">{caption}</span>
  </div>
);

const Svc = ({
  title,
  body,
  chip,
  children,
}: {
  title: string;
  body: string;
  chip?: string;
  children: React.ReactNode;
}) => (
  <div className="svc">
    {chip && <span className="chip">{chip}</span>}
    <div className="ico">{children}</div>
    <h3>{title}</h3>
    <p>{body}</p>
    <a className="more" href="#">Learn more →</a>
  </div>
);

const IndCard = ({
  tag,
  title,
  d,
  children,
}: {
  tag: string;
  title: string;
  d: string;
  children: React.ReactNode;
}) => (
  <div className={`indc rv ${d}`}>
    <div className="ico">{children}</div>
    <span className="tag">{tag}</span>
    <h3>{title}</h3>
  </div>
);

/* tiny SVG icons */
const IconSms = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2" y="4" width="20" height="14" rx="3" /><path d="M6 9h9M6 13h6" /></svg>;
const IconSmsFixed = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2" y="4" width="20" height="14" rx="3" /><path d="M7 21h10M12 18v3" /></svg>;
const IconChat = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M7 8h10M7 12h6M4 4h16v12H8l-4 4V4z" /></svg>;
const IconBubbleDots = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8A8.5 8.5 0 0 1 12.5 3a8.38 8.38 0 0 1 8.5 8.5z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></svg>;
const IconQ = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8A8.5 8.5 0 0 1 12.5 3a8.38 8.38 0 0 1 8.5 8.5z" /><path d="M9 10a3 3 0 0 1 6 0c0 2-3 2-3 4" /><path d="M12 17h.01" /></svg>;
const IconSwap = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" /></svg>;
const IconMail = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 6L2 7" /></svg>;
const IconPhone = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
const IconLock = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>;
const IconLockCall = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M15 7a4 4 0 1 0-8 0v4h8V7zM5 11h14v10H5z" /><path d="M12 15v3" /></svg>;
const IconMailCheck = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 6L2 7" /><path d="M16 14l2 2 4-4" /></svg>;
const IconCard = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="8" width="18" height="13" rx="2" /><path d="M12 8v13M3 12h18M7.5 8a2.5 2.5 0 1 1 4.5-1.5A2.5 2.5 0 1 1 16.5 8" /></svg>;
const IconShieldCheck = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>;
const IconStar = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8L12 2z" /></svg>;

/* category illustrations */
const SmsArt = () => (
  <svg viewBox="0 0 230 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="230" height="280" fill="#f4f5f7" />
    <circle cx="185" cy="48" r="40" fill="#cd3734" opacity=".9" />
    <rect x="36" y="80" width="120" height="44" rx="12" fill="#fff" stroke="#d9dcdf" />
    <rect x="48" y="93" width="72" height="7" rx="3.5" fill="#3aa84f" opacity=".6" />
    <rect x="48" y="106" width="50" height="6" rx="3" fill="#c9ccd0" />
    <rect x="66" y="140" width="120" height="44" rx="12" fill="#0c3b20" />
    <rect x="78" y="153" width="76" height="7" rx="3.5" fill="#a7f070" opacity=".85" />
    <rect x="78" y="166" width="56" height="6" rx="3" fill="#a7f070" opacity=".4" />
    <rect x="36" y="200" width="104" height="40" rx="12" fill="#fff" stroke="#d9dcdf" />
    <rect x="48" y="212" width="60" height="6" rx="3" fill="#c9ccd0" />
    <g stroke="#3aa84f" strokeWidth="1" opacity=".5" fill="none"><path d="M30 40L70 22L110 48M70 22L70 60" /></g>
    <g fill="#3aa84f" opacity=".8"><circle cx="30" cy="40" r="3" /><circle cx="70" cy="22" r="3.5" /><circle cx="110" cy="48" r="3" /><circle cx="70" cy="60" r="2.5" /></g>
  </svg>
);
const OttArt = () => (
  <svg viewBox="0 0 230 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="230" height="280" fill="#f4f5f7" />
    <circle cx="50" cy="52" r="36" fill="#cd3734" opacity=".9" />
    <path d="M115 100a52 44 0 1 1 0 88 58 58 0 0 1-24-5l-26 9 9-24a44 44 0 0 1-11-24" fill="#fff" stroke="#d9dcdf" strokeWidth="2" />
    <circle cx="98" cy="144" r="5" fill="#3aa84f" /><circle cx="118" cy="144" r="5" fill="#3aa84f" opacity=".6" /><circle cx="138" cy="144" r="5" fill="#3aa84f" opacity=".35" />
    <rect x="138" y="196" width="74" height="34" rx="11" fill="#0c3b20" />
    <rect x="148" y="206" width="44" height="6" rx="3" fill="#a7f070" opacity=".8" />
    <rect x="148" y="216" width="30" height="5" rx="2.5" fill="#a7f070" opacity=".45" />
    <g stroke="#3aa84f" strokeWidth="1" opacity=".5" fill="none"><path d="M180 60L210 40M180 60L206 86M180 60L150 44" /></g>
    <g fill="#3aa84f" opacity=".8"><circle cx="180" cy="60" r="3.5" /><circle cx="210" cy="40" r="3" /><circle cx="206" cy="86" r="3" /><circle cx="150" cy="44" r="2.5" /></g>
  </svg>
);
const EvArt = () => (
  <svg viewBox="0 0 230 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="230" height="280" fill="#f4f5f7" />
    <circle cx="182" cy="220" r="38" fill="#cd3734" opacity=".9" />
    <rect x="38" y="60" width="150" height="100" rx="12" fill="#fff" stroke="#d9dcdf" strokeWidth="2" />
    <path d="M38 72l75 52 75-52" stroke="#3aa84f" strokeWidth="2" fill="none" />
    <circle cx="70" cy="208" r="26" fill="#0c3b20" />
    <path d="M62 200a16 16 0 0 0 16 16" stroke="#a7f070" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <g stroke="#3aa84f" strokeWidth="1" opacity=".5" fill="none"><path d="M120 210L150 190L180 170" /></g>
    <g fill="#3aa84f" opacity=".8"><circle cx="120" cy="210" r="3" /><circle cx="150" cy="190" r="3.5" /></g>
  </svg>
);
const OtpArt = () => (
  <svg viewBox="0 0 230 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="230" height="280" fill="#f4f5f7" />
    <circle cx="46" cy="240" r="34" fill="#cd3734" opacity=".9" />
    <path d="M115 50l54 20v44c0 40-54 62-54 62s-54-22-54-62V70l54-20z" fill="#fff" stroke="#d9dcdf" strokeWidth="2" />
    <path d="M96 118l14 14 26-28" stroke="#3aa84f" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="84" y="206" width="62" height="22" rx="7" fill="#0c3b20" />
    <text x="115" y="221" textAnchor="middle" fontSize="11" fontWeight="800" fill="#a7f070" letterSpacing="3">482916</text>
    <g stroke="#3aa84f" strokeWidth="1" opacity=".5" fill="none"><path d="M180 60L206 44M180 60L210 84M180 60L160 36" /></g>
    <g fill="#3aa84f" opacity=".8"><circle cx="180" cy="60" r="3.5" /><circle cx="206" cy="44" r="3" /><circle cx="210" cy="84" r="3" /><circle cx="160" cy="36" r="2.5" /></g>
  </svg>
);
const RwArt = () => (
  <svg viewBox="0 0 230 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="230" height="280" fill="#f4f5f7" />
    <circle cx="190" cy="56" r="36" fill="#cd3734" opacity=".9" />
    <rect x="46" y="96" width="138" height="92" rx="14" fill="#fff" stroke="#d9dcdf" strokeWidth="2" />
    <rect x="46" y="122" width="138" height="16" fill="#0c3b20" />
    <rect x="60" y="156" width="56" height="8" rx="4" fill="#c9ccd0" />
    <rect x="60" y="170" width="38" height="7" rx="3.5" fill="#e0e2e5" />
    <circle cx="158" cy="164" r="15" fill="#e9f9ec" stroke="#3aa84f" strokeWidth="1.5" />
    <path d="M158 157v14M151 164h14" stroke="#3aa84f" strokeWidth="2" strokeLinecap="round" />
    <path d="M84 222c0-8 8-12 14-7 6-5 14-1 14 7 0 7-9 12-14 16-5-4-14-9-14-16z" fill="#cd3734" opacity=".85" />
    <g stroke="#3aa84f" strokeWidth="1" opacity=".5" fill="none"><path d="M44 52L70 36L96 56M70 36L70 70" /></g>
    <g fill="#3aa84f" opacity=".8"><circle cx="44" cy="52" r="3" /><circle cx="70" cy="36" r="3.5" /><circle cx="96" cy="56" r="3" /></g>
  </svg>
);

const EmailArt = () => (
  <svg viewBox="0 0 230 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="230" height="280" fill="#f4f5f7" />
    <circle cx="182" cy="48" r="38" fill="#cd3734" opacity=".9" />
    <rect x="38" y="60" width="150" height="110" rx="12" fill="#fff" stroke="#d9dcdf" strokeWidth="2" />
    <path d="M38 72l75 52 75-52" stroke="#3aa84f" strokeWidth="2" fill="none" />
    <rect x="38" y="190" width="120" height="44" rx="10" fill="#0c3b20" />
    <rect x="48" y="202" width="72" height="6" rx="3" fill="#a7f070" opacity=".8" />
    <rect x="48" y="214" width="48" height="5" rx="2.5" fill="#a7f070" opacity=".4" />
    <g stroke="#3aa84f" strokeWidth="1" opacity=".5" fill="none"><path d="M50 40L80 20L110 40" /></g>
    <g fill="#3aa84f" opacity=".8"><circle cx="50" cy="40" r="3" /><circle cx="80" cy="20" r="3.5" /><circle cx="110" cy="40" r="3" /></g>
  </svg>
);

const VoiceArt = () => (
  <svg viewBox="0 0 230 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="230" height="280" fill="#f4f5f7" />
    <circle cx="48" cy="232" r="38" fill="#cd3734" opacity=".9" />
    <circle cx="115" cy="120" r="42" fill="#fff" stroke="#d9dcdf" strokeWidth="2" />
    <path d="M100 100c0 16 6.7 28 15 28s15-12 15-28" stroke="#3aa84f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <rect x="130" y="180" width="80" height="40" rx="10" fill="#0c3b20" />
    <rect x="140" y="192" width="52" height="6" rx="3" fill="#a7f070" opacity=".8" />
    <rect x="140" y="204" width="36" height="5" rx="2.5" fill="#a7f070" opacity=".4" />
    <g stroke="#3aa84f" strokeWidth="1" opacity=".5" fill="none"><path d="M170 50L200 30L230 50" /></g>
    <g fill="#3aa84f" opacity=".8"><circle cx="170" cy="50" r="3" /><circle cx="200" cy="30" r="3.5" /><circle cx="230" cy="50" r="3" /></g>
  </svg>
);

const CSS = `
.vg-sol{--primary:hsl(128 52% 46%);--primary-deep:hsl(145 100% 25%);--primary-soft:hsl(130 100% 94%);--accent:hsl(35 100% 54%);--accent-soft:hsl(36 100% 93%);--lime:#a7f070;--fg:hsl(0 0% 13%);--muted-fg:hsl(0 0% 36%);--muted:hsl(220 20% 97%);--border:hsl(0 0% 90%);--dark:#0c3b20;--dark2:#0a2f1a;font-family:'Plus Jakarta Sans',system-ui,sans-serif;color:var(--fg);background:#fff;line-height:1.55;overflow-x:hidden}
.vg-sol *{box-sizing:border-box}
.vg-sol .container{max-width:1140px;margin:0 auto;padding:0 24px}
.vg-sol section{padding:64px 0;scroll-margin-top:90px}
.vg-sol .label{font-size:12.5px;font-weight:700;color:var(--primary-deep);letter-spacing:.05em}
.vg-sol h1{font-size:clamp(36px,4.6vw,54px);font-weight:800;letter-spacing:-.03em;line-height:1.08;margin:0}
.vg-sol h2{font-size:clamp(26px,3.2vw,38px);font-weight:800;letter-spacing:-.02em;line-height:1.14;margin:0}
.vg-sol h3{margin:0}
.vg-sol p{margin:0}
.vg-sol .green{color:var(--primary)}
.vg-sol .rv{opacity:0;transform:translateY(26px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.vg-sol .rv.in{opacity:1;transform:none}
.vg-sol .d1{transition-delay:.08s}.vg-sol .d2{transition-delay:.16s}.vg-sol .d3{transition-delay:.24s}
.vg-sol .logo{font-weight:800;font-size:21px}
.vg-sol .logo span{color:var(--primary)}
.vg-sol .nav-links{display:flex;gap:30px;font-size:14px;font-weight:600;color:var(--muted-fg)}
.vg-sol .nav-links a{text-decoration:none;color:inherit}
.vg-sol .nav-links a.active{color:var(--primary-deep)}
.vg-sol .nav-right{display:flex;align-items:center;gap:18px}
.vg-sol .lang{font-size:13px;font-weight:700;color:var(--muted-fg)}.vg-sol .lang b{color:var(--fg)}
.vg-sol .btn{display:inline-block;background:var(--primary);color:#fff;font-weight:700;font-size:14px;padding:12px 28px;border-radius:999px;text-decoration:none;transition:background .2s,transform .2s;border:none;cursor:pointer}
.vg-sol .btn:hover{background:var(--primary-deep);transform:translateY(-1px)}
.vg-sol .btn.ghost{background:transparent;color:var(--primary-deep);border:1.5px solid var(--primary)}
.vg-sol .btn.ghost:hover{background:var(--primary-soft)}
.vg-sol .fab{position:fixed;right:16px;top:55%;z-index:60;display:flex;flex-direction:column;gap:10px}
.vg-sol .fab a{width:64px;height:64px;border-radius:14px;background:var(--accent);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-size:8.5px;font-weight:800;letter-spacing:.05em;text-align:center;text-decoration:none;box-shadow:0 10px 26px rgba(0,0,0,.2);transition:transform .2s,background .2s}
.vg-sol .fab a:hover{transform:translateY(-3px);background:#cf7500}
.vg-sol .fab svg{width:20px;height:20px}
.vg-sol .hero{padding:130px 0 60px;position:relative;overflow:hidden;text-align:center}
.vg-sol .hero .container{position:relative;z-index:1;max-width:760px;margin:0 auto}
.vg-sol #dotsHero{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0}
.vg-sol .hero .sub{color:var(--muted-fg);font-size:17px;margin:20px auto 32px;max-width:560px}
.vg-sol .hero-cta{display:flex;gap:12px;justify-content:center}
.vg-sol .plat{background:linear-gradient(180deg,#fff,var(--muted) 120px,var(--muted) calc(100% - 120px),#fff);padding:56px 0}
.vg-sol .plat-head{text-align:center;max-width:640px;margin:0 auto 36px}
.vg-sol .plat-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.vg-sol .plat-card{border-radius:20px;padding:34px 32px;color:#fff;position:relative;overflow:hidden;transition:transform .3s,box-shadow .3s}
.vg-sol .plat-card:hover{transform:translateY(-5px);box-shadow:0 22px 50px rgba(0,0,0,.16)}
.vg-sol .plat-card.pango{background:linear-gradient(135deg,var(--primary-deep),var(--primary))}
.vg-sol .plat-card.ai{background:linear-gradient(135deg,#15233f,#2b4a7a)}
.vg-sol .plat-card .new{position:absolute;top:18px;right:18px;background:var(--accent);font-size:9.5px;font-weight:800;letter-spacing:.12em;padding:4px 11px;border-radius:999px}
.vg-sol .plat-card h3{font-size:22px;font-weight:800;margin:8px 0 8px}
.vg-sol .plat-card .k{font-size:10.5px;font-weight:800;letter-spacing:.16em;opacity:.7;text-transform:uppercase}
.vg-sol .plat-card p{font-size:14px;opacity:.9;margin-bottom:14px}
.vg-sol .plat-card ul{list-style:none;display:flex;flex-wrap:wrap;gap:7px;margin:0 0 18px;padding:0}
.vg-sol .plat-card li{font-size:11.5px;font-weight:700;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2);padding:5px 12px;border-radius:999px}
.vg-sol .plat-card a{color:#fff;font-weight:700;font-size:13.5px;text-decoration:none;border-bottom:2px solid rgba(255,255,255,.4)}
.vg-sol .plat-card a:hover{border-color:#fff}
.vg-sol .plat-card .bgnet{position:absolute;right:-30px;bottom:-30px;width:200px;height:200px;opacity:.16;pointer-events:none}
.vg-sol .cat-head{text-align:center;max-width:640px;margin:0 auto 28px}
.vg-sol .cat-head p:not(.label){color:var(--muted-fg);margin-top:10px;font-size:15px}
.vg-sol .tabs{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:30px}
.vg-sol .tab{font-size:13px;font-weight:700;color:var(--muted-fg);border:1.5px solid var(--border);background:#fff;border-radius:999px;padding:10px 22px;cursor:pointer;transition:all .25s;font-family:inherit}
.vg-sol .tab:hover{border-color:var(--primary);color:var(--primary-deep)}
.vg-sol .tab.on{background:linear-gradient(135deg,var(--primary),var(--primary-deep));color:#fff;border-color:transparent;box-shadow:0 8px 22px rgba(20,120,50,.25)}
.vg-sol .pane.show{display:grid;grid-template-columns:230px 1fr;gap:22px;animation:vgpaneIn .45s cubic-bezier(.16,1,.3,1)}
@keyframes vgpaneIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.vg-sol .cat-art{border-radius:18px;background:var(--muted);border:1px solid var(--border);position:relative;overflow:hidden;min-height:280px}
.vg-sol .cat-art svg{position:absolute;inset:0;width:100%;height:100%}
.vg-sol .cat-art .cap{position:absolute;left:0;right:0;bottom:0;padding:14px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--primary-deep);text-align:center;background:linear-gradient(transparent,rgba(255,255,255,.85))}
.vg-sol .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;align-content:start}
.vg-sol .svc{background:#fff;border:1px solid var(--border);border-radius:14px;padding:20px;display:flex;flex-direction:column;transition:all .3s;position:relative}
.vg-sol .svc:hover{transform:translateY(-4px);box-shadow:0 14px 34px rgba(0,0,0,.08);border-color:var(--primary)}
.vg-sol .svc .ico{width:38px;height:38px;border-radius:10px;background:var(--primary-soft);display:flex;align-items:center;justify-content:center;color:var(--primary-deep);margin-bottom:12px}
.vg-sol .svc .ico svg{width:19px;height:19px}
.vg-sol .svc h3{font-size:15px;font-weight:800;margin-bottom:4px}
.vg-sol .svc p{font-size:12.5px;color:var(--muted-fg);flex:1}
.vg-sol .svc .more{margin-top:12px;font-size:12.5px;font-weight:700;color:var(--primary-deep);text-decoration:none}
.vg-sol .svc .more:hover{text-decoration:underline}
.vg-sol .svc .chip{position:absolute;top:14px;right:14px;font-size:9px;font-weight:800;letter-spacing:.1em;color:#cf7500;background:var(--accent-soft);padding:3px 9px;border-radius:999px}
.vg-sol .inds{background:linear-gradient(180deg,var(--dark),var(--dark2));color:#fff;position:relative;overflow:hidden;padding:70px 0}
.vg-sol #dotsInd{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0}
.vg-sol .inds .container{position:relative;z-index:1}
.vg-sol .inds .label{color:var(--lime)}
.vg-sol .inds h2{color:#fff}
.vg-sol .inds-head{text-align:center;max-width:640px;margin:0 auto 40px}
.vg-sol .ind-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.vg-sol .indc{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:22px 20px;transition:all .3s;display:flex;flex-direction:column}
.vg-sol .indc:hover{background:rgba(255,255,255,.09);border-color:var(--lime);transform:translateY(-4px)}
.vg-sol .indc .ico{width:38px;height:38px;border-radius:10px;background:rgba(167,240,112,.12);display:flex;align-items:center;justify-content:center;color:var(--lime);margin-bottom:12px}
.vg-sol .indc .ico svg{width:19px;height:19px}
.vg-sol .indc .tag{font-size:9.5px;font-weight:800;letter-spacing:.13em;text-transform:uppercase;color:var(--lime)}
.vg-sol .indc h3{font-size:14.5px;font-weight:800;margin:6px 0 10px;line-height:1.4;flex:1}
.vg-sol .mstrip{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:46px;padding-top:38px;border-top:1px solid rgba(255,255,255,.12);text-align:center}
.vg-sol .mstrip b{display:block;font-size:clamp(30px,3.2vw,40px);font-weight:800;color:var(--lime);letter-spacing:-.02em}
.vg-sol .mstrip b em{font-style:normal}
.vg-sol .mstrip span{font-size:10.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.6)}
.vg-sol .cta-wrap{padding:54px 24px 80px}
.vg-sol .cta{max-width:1140px;margin:0 auto;background:linear-gradient(120deg,var(--dark),var(--primary-deep));color:#fff;border-radius:24px;display:grid;grid-template-columns:1fr 1.15fr;align-items:start;overflow:hidden}
.vg-sol .cta-txt{padding:54px 50px}
.vg-sol .cta .label{color:var(--lime)}
.vg-sol .cta h2{color:#fff;margin:10px 0 12px}
.vg-sol .cta-txt > p{opacity:.85;margin-bottom:0;font-size:15px;line-height:1.7}
.vg-sol .cta-trust{margin:28px 0 0;padding:0;display:flex;flex-direction:column;gap:10px}
.vg-sol .cta-trust li{display:flex;align-items:center;gap:9px;font-size:13px;opacity:.78;list-style:none}
.vg-sol .cta-trust li::before{content:'✓';font-weight:800;color:var(--lime);font-size:14px;flex-shrink:0}
.vg-sol .cta-form{background:rgba(255,255,255,.06);border-left:1px solid rgba(255,255,255,.1);padding:54px 46px}
.vg-sol .cta-form h3{font-size:17px;font-weight:800;color:#fff;margin-bottom:22px}
.vg-sol .f-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
.vg-sol .f-row.full{grid-template-columns:1fr;margin-bottom:12px}
.vg-sol .f-field{display:flex;flex-direction:column;gap:5px}
.vg-sol .f-field label{font-size:11px;font-weight:700;letter-spacing:.08em;color:rgba(255,255,255,.55);text-transform:uppercase}
.vg-sol .f-field input,.vg-sol .f-field select,.vg-sol .f-field textarea{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:11px 14px;font-size:13.5px;font-family:inherit;color:#fff;outline:none;transition:border .2s,background .2s}
.vg-sol .f-field input::placeholder,.vg-sol .f-field textarea::placeholder{color:rgba(255,255,255,.35)}
.vg-sol .f-field select option{background:#0c3b20;color:#fff}
.vg-sol .f-field input:focus,.vg-sol .f-field select:focus,.vg-sol .f-field textarea:focus{border-color:var(--lime);background:rgba(255,255,255,.14)}
.vg-sol .f-field textarea{resize:none;height:82px;line-height:1.5}
.vg-sol .f-submit{margin-top:16px;width:100%;padding:14px;background:var(--lime);color:var(--dark);font-weight:800;font-size:14.5px;border:none;border-radius:999px;cursor:pointer;transition:background .2s,transform .2s;font-family:inherit;letter-spacing:.02em}
.vg-sol .f-submit:hover{background:#c0ff78;transform:translateY(-2px)}
.vg-sol .f-submit:disabled{opacity:.7;cursor:wait;transform:none}
.vg-sol .f-note{margin-top:12px;font-size:11.5px;color:rgba(255,255,255,.45);text-align:center;line-height:1.6}
.vg-sol .divider{display:block;width:100%;height:64px;margin-bottom:-1px}
.vg-sol .divider svg{display:block;width:100%;height:100%}
.vg-sol .f-badges{display:flex;gap:10px;flex-wrap:wrap;padding:18px 0;border-top:1px solid rgba(255,255,255,.08)}
.vg-sol .f-badges span{font-size:10.5px;font-weight:700;letter-spacing:.1em;border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:5px 12px;color:rgba(255,255,255,.6)}
.vg-sol .f-bottom{display:flex;justify-content:space-between;align-items:center;padding:18px 0 26px;border-top:1px solid rgba(255,255,255,.08);font-size:12.5px;color:rgba(255,255,255,.45)}
.vg-sol .f-bottom .links{display:flex;gap:22px}
.vg-sol .f-bottom a{color:inherit;text-decoration:none;letter-spacing:.08em;font-weight:600}
@media(max-width:920px){
  .vg-sol .nav-links,.vg-sol .lang{display:none}
  .vg-sol .hero{padding:110px 0 50px}
  .vg-sol .plat-grid{grid-template-columns:1fr}
  .vg-sol .pane.show{grid-template-columns:1fr}
  .vg-sol .cat-art{min-height:160px}
  .vg-sol .svc-grid{grid-template-columns:1fr!important}
  .vg-sol .ind-grid{grid-template-columns:repeat(2,1fr)}
  .vg-sol .mstrip{grid-template-columns:repeat(2,1fr);gap:24px 8px}
  .vg-sol .cta{grid-template-columns:1fr}
  .vg-sol .cta-form{border-left:none;border-top:1px solid rgba(255,255,255,.1);padding:36px 32px}
  .vg-sol .cta-txt{padding:42px 32px 32px}
  .vg-sol .f-row{grid-template-columns:1fr}
  .vg-sol .f-grid{grid-template-columns:1fr 1fr}
}
`;

export default Solutions;
