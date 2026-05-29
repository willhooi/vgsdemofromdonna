import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  ShieldCheck,
  Target,
  Sparkles,
  Heart,
  Compass,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { Team } from "@/components/site/Team";
import { AboutStoryPillars } from "@/components/site/AboutStoryPillars";
import { AboutMilestones } from "@/components/site/AboutMilestones";
import { AccreteBacking } from "@/components/site/AccreteBacking";
import { VDivider } from "@/components/brand/VWatermark";
import { SignalWave } from "@/components/brand/SignalArt";
import { Button } from "@/components/ui/button";

const values = [
  { icon: Users, title: "People First", body: "We respect and value our team for who they are. Every voice is heard, every input counts." },
  { icon: ShieldCheck, title: "Quality", body: "Quality sits at the front of everything we do — never compromised, always standardised." },
  { icon: Target, title: "Integrity", body: "100% committed to doing what's right for our customers — long-term partnerships, mutual benefit." },
  { icon: Heart, title: "Honesty", body: "Authentic in what we say and do. Respectful with colleagues, customers and stakeholders." },
  { icon: Compass, title: "Accountability", body: "Fully accountable for our actions. We understand how each decision reaches our customers." },
  { icon: Sparkles, title: "Creativity & Innovation", body: "We never rest on our laurels. Always striving to stay ahead of the curve." },
];

const About = () => {
  useEffect(() => {
    document.title = "About — VietGuys | Enterprise Messaging Vietnam";
    const desc =
      "Since 2007, VietGuys has built Vietnam's most trusted enterprise messaging platform. Backed by Accrete Inc., Japan. Meet the people, milestones and values behind the signal.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero — The Origin */}
      <section
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 opacity-50">
          <SignalWave className="h-32 w-full md:h-48" />
        </div>
        <div className="container-tight relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <div className="mt-6 max-w-3xl">
            <span className="chapter-eyebrow">The origin</span>
            <h1 className="heading-display mt-4 text-balance">
              Short steps on a long journey.
            </h1>
            <p className="mt-6 text-lg italic text-muted-foreground md:text-xl">
              &ldquo;Towards holistic values for enterprises in particular and the entire community
              in general — not just sales or profit.&rdquo;
            </p>
            <p className="mt-5 text-muted-foreground">
              That silent mission has carried VietGuys since 2007. It&apos;s the same force that
              drove our 2022 merger with{" "}
              <a
                className="text-primary underline underline-offset-4"
                href="https://www.accrete-inc.com/"
                target="_blank"
                rel="noreferrer"
              >
                Accrete Inc.
              </a>{" "}
              — Japan&apos;s leading international SMS gateway provider.
            </p>
          </div>
        </div>
      </section>

      {/* Story — From 25m² room to backbone */}
      <section className="py-20 md:py-28">
        <div className="container-tight grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="chapter-eyebrow">Our story</span>
            <h2 className="heading-section mt-4 text-balance">
              From a 25m² room to Vietnam&apos;s messaging backbone.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Nearly two decades of persistent effort — starting from a small workplace with young
              founders full of conviction. From day one, VietGuys chose its own direction: build
              constantly-improved Mobile Marketing Solutions for Vietnamese enterprises, not net
              value-added services.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today, we&apos;re widely recognised as one of Vietnam&apos;s leading SMS Brandname
              providers and among the few enterprises licensed by the Authority of
              Telecommunications. We&apos;ve grown into a multi-channel customer engagement
              platform — SMS, Email, Viber, Zalo and more — powered by a core CDP that turns every
              message into measurable growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div>
                <div className="text-3xl font-extrabold text-foreground">19+</div>
                <div className="text-muted-foreground">years in the market</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-foreground">5M</div>
                <div className="text-muted-foreground">messages delivered daily</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-foreground">76</div>
                <div className="text-muted-foreground">enterprise clients</div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="VietGuys team collaborating in the office"
              loading="lazy"
              decoding="async"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="container-tight"><VDivider /></div>

      {/* Three Pillars (with generated imagery) */}
      <AboutStoryPillars />

      <div className="container-tight"><VDivider /></div>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-tight">
          <div className="max-w-2xl">
            <span className="chapter-eyebrow">Vision &amp; Mission</span>
            <h2 className="heading-section mt-4 text-balance">
              Where we&apos;re going, and why.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-border bg-background p-8 shadow-[var(--shadow-soft)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">Vision</h3>
              <p className="mt-3 text-muted-foreground">
                Become the enterprise&apos;s first choice for digital-transformation marketing
                solutions upgraded from mobile platforms — data-driven, behaviour-aware, unified on
                one cross-platform ecosystem.
              </p>
            </article>
            <article className="rounded-3xl border border-border bg-background p-8 shadow-[var(--shadow-soft)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">Mission</h3>
              <p className="mt-3 text-muted-foreground">
                Don&apos;t just give marketing tools — deliver effective mobile-marketing solutions
                that address each client&apos;s individual goals.
              </p>
            </article>
          </div>
        </div>
      </section>

      <div className="container-tight"><VDivider /></div>

      {/* Milestones */}
      <AboutMilestones />

      <div className="container-tight"><VDivider /></div>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-tight">
          <div className="max-w-2xl">
            <span className="chapter-eyebrow">Core values</span>
            <h2 className="heading-section mt-4 text-balance">
              Six values. One way of working.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Quality sits at the front of everything VietGuys does — never compromised in cost
              control, always standardised in execution.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <article
                key={v.title}
                className="group rounded-3xl border border-border bg-background p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] animate-fade-up"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="container-tight"><VDivider /></div>

      {/* The Bridge — Accrete partnership */}
      <section className="py-12 md:py-16">
        <div className="container-tight max-w-3xl text-center">
          <span className="chapter-eyebrow justify-center">Global strength, local fluency</span>
        </div>
        <AccreteBacking />
      </section>

      <div className="container-tight"><VDivider /></div>

      {/* Team */}
      <Team />

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-background to-accent/5 p-10 md:p-16 text-center shadow-[var(--shadow-card)]">
            <h2 className="heading-section text-balance">
              Let&apos;s build something worth a long journey.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Talk to a real human on our team — we&apos;ll show you exactly how leading
              enterprises engage millions of customers with VietGuys.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href="/#contact">Book a Demo</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">Back to home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBubble />
    </main>
  );
};

export default About;
