import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  MessageSquare,
  Smartphone,
  Mail,
  ShieldCheck,
  Database,
  Brain,
  Target,
  Workflow,
  Bot,
  BellRing,
  LineChart,
  Layers,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    tag: "Tier 01 · Foundation",
    title: "Core Messaging Infrastructure",
    desc: "Enterprise-grade, compliant delivery across every channel Vietnamese customers actually use — at the scale of millions of messages per day.",
    icon: MessageSquare,
    items: [
      { icon: MessageSquare, name: "SMS Brandname", body: "Authenticated sender ID, nationwide carrier coverage, 99.9% uptime SLA." },
      { icon: Smartphone, name: "Zalo OA & ZNS", body: "Official Account messaging and template-based notifications on Vietnam's #1 chat app." },
      { icon: BellRing, name: "Viber Business", body: "Rich content, branded sender, two-way conversations for engaged audiences." },
      { icon: Mail, name: "Email & OTT", body: "Transactional and marketing email, multi-channel orchestration with smart fallback." },
      { icon: ShieldCheck, name: "OTPBox", body: "Multi-channel OTP delivery with intelligent routing — fastest path, lowest cost." },
    ],
  },
  {
    tag: "Tier 02 · Growth",
    title: "Data & Campaign Intelligence",
    desc: "Turn raw events into revenue. PangoCDP unifies every customer signal; our campaign services activate them across channels with measurable ROI.",
    icon: Database,
    items: [
      { icon: Database, name: "PangoCDP", body: "Unified customer profile across web, app, POS and messaging — built for Vietnamese enterprises." },
      { icon: Layers, name: "Audience Segmentation", body: "RFM, behavioural and predictive segments updated in real time." },
      { icon: Workflow, name: "Campaign Automation", body: "Trigger-based journeys across SMS, Zalo, Viber and email from a single canvas." },
      { icon: LineChart, name: "Attribution & ROI", body: "Channel-level attribution with revenue dashboards your CMO can defend." },
    ],
  },
  {
    tag: "Tier 03 · Differentiator",
    title: "Behavioural AI",
    desc: "Where most providers stop at delivery, we predict intent. Our AI layer learns from every interaction to personalise the next message — and the next outcome.",
    icon: Brain,
    items: [
      { icon: Brain, name: "Intent Prediction", body: "Score every contact's likelihood to buy, churn or re-engage — updated continuously." },
      { icon: Sparkles, name: "Personalisation Engine", body: "Dynamic content, offers and timing tailored to each profile." },
      { icon: Bot, name: "Next-Best-Message", body: "AI decides the right message, channel and moment — automatically." },
      { icon: Workflow, name: "Omnichannel Routing", body: "Cost-optimised fallback logic across SMS, Zalo, Viber and email." },
    ],
  },
  {
    tag: "Tier 04 · Methodology",
    title: "SHARP Account Intelligence",
    desc: "Technology alone doesn't move enterprise accounts — methodology does. SHARP is how we research, pitch and grow with every strategic client.",
    icon: Target,
    items: [
      { icon: Target, name: "Strategic Research", body: "Deep account discovery before the first conversation." },
      { icon: LineChart, name: "ROI-Led Pitching", body: "Every proposal anchored to a measurable business outcome." },
      { icon: Layers, name: "Tiered Governance", body: "Structured engagement model from pilot to enterprise rollout." },
      { icon: ShieldCheck, name: "Long-Term Partnership", body: "Quarterly business reviews, dedicated success teams, shared KPIs." },
    ],
  },
];

const outcomes = [
  { metric: "5M+", label: "messages delivered daily" },
  { metric: "5,000+", label: "brands trust VietGuys" },
  { metric: "99.9%", label: "platform uptime SLA" },
  { metric: "15+", label: "integrated solutions" },
];

const industries = [
  "Banking & Finance",
  "E-commerce & Retail",
  "Insurance",
  "Logistics",
  "Healthcare",
  "Education",
  "Telecommunications",
  "FMCG",
];

const Solutions = () => {
  useEffect(() => {
    document.title = "Solutions — VietGuys | Enterprise Messaging Vietnam";
    const desc =
      "Explore VietGuys' 4-tier solution stack: SMS Brandname, Zalo ZNS, Viber, Email, OTPBox, PangoCDP and Behavioural AI — orchestrated by the SHARP methodology.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/solutions");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.10),transparent_70%)]" />
        <div className="container-tight">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to home
          </Link>
          <div className="mt-8 grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <span className="eyebrow">Solutions</span>
              <h1 className="heading-hero mt-4 text-balance">
                One stack. Every channel. <span className="text-primary">Measurable outcomes.</span>
              </h1>
            </div>
            <p className="md:col-span-4 text-base leading-relaxed text-muted-foreground">
              VietGuys orchestrates messaging, data and AI into a single growth engine — engineered for the
              compliance, scale and speed that Vietnamese enterprises demand.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {outcomes.map((o) => (
              <div
                key={o.label}
                className="rounded-2xl border border-border bg-background/60 p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{o.metric}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="max-w-2xl">
            <span className="eyebrow">The Service Engine</span>
            <h2 className="heading-section mt-4 text-balance">
              A 4-tier ecosystem, deliberately layered.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              From compliant infrastructure at the base, to behavioural AI at the top — each tier compounds
              the value of the one beneath it. You can start at any layer and grow into the rest.
            </p>
          </div>

          <div className="mt-14 space-y-10">
            {tiers.map((t, i) => {
              const Icon = t.icon;
              return (
                <article
                  key={t.title}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-[var(--shadow-soft)] transition-all duration-500 hover:border-primary/40 hover:shadow-[var(--shadow-glow)] md:p-12"
                >
                  <div className="grid gap-10 md:grid-cols-12">
                    <div className="md:col-span-4">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {t.tag}
                      </div>
                      <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                        {t.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                    </div>

                    <div className="md:col-span-8">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {t.items.map((it) => {
                          const ItemIcon = it.icon;
                          return (
                            <div
                              key={it.name}
                              className="rounded-2xl border border-border bg-[hsl(var(--primary-soft))]/30 p-5 transition-colors hover:bg-[hsl(var(--primary-soft))]/60"
                            >
                              <div className="flex items-center gap-3">
                                <span className="grid h-9 w-9 place-items-center rounded-xl bg-background text-[hsl(var(--primary-deep))]">
                                  <ItemIcon className="h-4 w-4" />
                                </span>
                                <h4 className="text-sm font-semibold text-foreground">{it.name}</h4>
                              </div>
                              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{it.body}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[hsl(var(--accent))]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="pointer-events-none absolute left-8 top-8 text-[10px] font-mono text-muted-foreground/60">
                    0{i + 1}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it fits together */}
      <section className="border-y border-border bg-secondary/40 py-20 md:py-28">
        <div className="container-tight">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <span className="eyebrow">How it fits together</span>
              <h2 className="heading-section mt-4 text-balance">
                Composable, not bundled.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Pick the tier that matches your maturity. Most enterprises start with Core Messaging, layer in
                PangoCDP within a quarter, and unlock Behavioural AI once their data foundation is live —
                governed end-to-end by SHARP.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="cta" asChild>
                  <a href="/#contact">
                    Book a Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/about">About VietGuys</Link>
                </Button>
              </div>
            </div>

            <ol className="md:col-span-7 space-y-4">
              {[
                { step: "01", title: "Discover", body: "Account research, audit of current messaging stack and data readiness." },
                { step: "02", title: "Design", body: "Solution blueprint mapped to KPIs — channel mix, data model, AI use cases." },
                { step: "03", title: "Deploy", body: "Integration, compliance setup, template approvals, go-live in weeks not quarters." },
                { step: "04", title: "Optimise", body: "Quarterly business reviews, AI model tuning, channel rebalancing for ROI." },
              ].map((s) => (
                <li
                  key={s.step}
                  className="flex items-start gap-5 rounded-2xl border border-border bg-background p-5"
                >
                  <span className="font-mono text-xs font-semibold text-primary">{s.step}</span>
                  <div>
                    <h4 className="text-base font-semibold text-foreground">{s.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <span className="eyebrow">Built for regulated industries</span>
              <h2 className="heading-section mt-4 text-balance">
                Trusted where compliance and scale matter most.
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              From the largest Vietnamese banks to global FMCG brands — our infrastructure carries critical
              messages every minute.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {industries.map((i) => (
              <span
                key={i}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-[var(--shadow-soft)]"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="container-tight">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-10 text-background md:p-16">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Ready to see your stack on VietGuys?
                </h2>
                <p className="mt-4 max-w-2xl text-sm text-background/70 md:text-base">
                  We'll map your current channels, data and KPIs in a 30-minute working session — and show you
                  exactly where the next ROI lives.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Button variant="cta" size="lg" asChild>
                  <a href="/#contact">
                    Book a Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <span
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
            />
          </div>
        </div>
      </section>

      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Solutions;
