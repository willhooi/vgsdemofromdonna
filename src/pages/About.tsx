import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, ShieldCheck, Target, Sparkles, Heart, Compass } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { Team } from "@/components/site/Team";
import { Button } from "@/components/ui/button";

const milestones = [
  { date: "06/2007", title: "Founding VietGuys", body: "Began the journey from a 25m² workplace with young, passionate founders." },
  { date: "03/2008", title: "Samsung E-warranty", body: "Supplied messaging for Samsung's E-warranty program." },
  { date: "02/2010", title: "Investing in Digitel", body: "Invested in and accompanied Digitel Co., Ltd." },
  { date: "11/2017", title: "LG E-warranty", body: "Powered LG's E-warranty notifications across Vietnam." },
  { date: "12/2018", title: "#1 SMS in E-commerce", body: "Top SMS volume provider for the e-commerce industry." },
  { date: "09/2019", title: "Top 3 Viber providers", body: "Recognised among Vietnam's top 3 Viber providers." },
  { date: "11/2020", title: "OTPBox launched", body: "Multi-channel verification code generation solution." },
  { date: "01/2021", title: "5,000+ brands", body: "Trusted by 5,000+ domestic and foreign brands across 15 solutions." },
  { date: "03/2022", title: "Joins Accrete Inc.", body: "Officially merged with Accrete Inc. — Japan's leading international SMS gateway provider." },
  { date: "05/2022", title: "PangoCDP", body: "Partnered with ByteTech to introduce PangoCDP to the market." },
];

const values = [
  { icon: Users, title: "People First", body: "We respect and value our team for who they are. Every employee's input is heard and valued." },
  { icon: ShieldCheck, title: "Quality", body: "Quality is at the forefront of everything we do — never compromised, always standardised." },
  { icon: Target, title: "Integrity", body: "100% committed to doing what's right for our customers — long-term partnerships for mutual benefit." },
  { icon: Heart, title: "Honesty", body: "Authentic in what we say and do. Respectful with colleagues, customers and stakeholders." },
  { icon: Compass, title: "Accountability", body: "Fully accountable for our own actions. We understand how decisions affect our customers." },
  { icon: Sparkles, title: "Creativity & Innovation", body: "We never rest on our laurels. Always striving to be ahead of the curve." },
];

const About = () => {
  useEffect(() => {
    document.title = "About VietGuys — Short Steps on a Long Journey";
    const desc = "Since 2007, VietGuys has built Vietnam's most trusted enterprise messaging platform. Backed by Accrete Inc., Japan. Meet the people, milestones and values behind the brand.";
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

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-tight">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">About VietGuys</span>
            <h1 className="heading-display mt-4 text-balance">
              Short steps on a long journey.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              <em>"Towards holistic values for enterprises in particular and the entire community in general —
              not just sales or profit."</em>
            </p>
            <p className="mt-5 text-muted-foreground">
              That silent mission has guided VietGuys since 2007. It's the same force that drove our 2022 merger with{" "}
              <a className="text-primary underline underline-offset-4" href="https://www.accrete-inc.com/" target="_blank" rel="noreferrer">Accrete Inc.</a> —
              Japan's leading international SMS service gateway provider.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container-tight grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl aspect-[4/3] shadow-[var(--shadow-card)]">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="VietGuys team collaborating"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="heading-section mt-4 text-balance">From a 25m² room to Vietnam's trusted messaging backbone.</h2>
            <p className="mt-5 text-muted-foreground">
              Nearly two decades of persistent effort — starting from a 25m² workplace with young founders full of
              enthusiasm. From day one, VietGuys chose its own direction: bring constantly-improved Mobile Marketing
              Solutions to the market, not net value-added services.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today, we're widely recognised as one of Vietnam's leading SMS Brandname providers, and among the few
              enterprises licensed by the Authority of Telecommunications. We've grown into a multi-channel customer
              engagement platform — SMS Brandname, Email, Viber, Zalo and more — powered by a core CDP for effective,
              data-driven engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-tight">
          <div className="max-w-2xl">
            <span className="eyebrow">Vision & Mission</span>
            <h2 className="heading-section mt-4 text-balance">Where we're going, and why.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-border bg-background p-8 shadow-[var(--shadow-soft)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">Vision</h3>
              <p className="mt-3 text-muted-foreground">
                Become the enterprise's first choice for digital transformation marketing solutions upgraded from mobile
                platforms — especially data-driven, customer-behaviour analysis, combined on one cross-platform ecosystem.
              </p>
            </article>
            <article className="rounded-3xl border border-border bg-background p-8 shadow-[var(--shadow-soft)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">Mission</h3>
              <p className="mt-3 text-muted-foreground">
                Not simply give marketing tools — but provide clients with effective mobile marketing solutions
                that address their individual goals.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="max-w-2xl">
            <span className="eyebrow">Milestones</span>
            <h2 className="heading-section mt-4 text-balance">Nearly two decades, one steady arc.</h2>
          </div>
          <div className="relative mt-14">
            <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
            <ol className="space-y-8">
              {milestones.map((m, i) => (
                <li
                  key={m.date}
                  className={`relative grid gap-3 md:grid-cols-2 md:gap-12 animate-fade-up ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary">{m.date}</span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">{m.title}</h3>
                  </div>
                  <div className={`pl-12 md:pl-12 ${i % 2 ? "md:pl-0 md:pr-12 md:text-right" : ""}`}>
                    <p className="text-sm text-muted-foreground">{m.body}</p>
                  </div>
                  <span className="absolute left-4 top-1.5 -translate-x-1/2 md:left-1/2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-tight">
          <div className="max-w-2xl">
            <span className="eyebrow">Core Values</span>
            <h2 className="heading-section mt-4 text-balance">Six values. One way of working.</h2>
            <p className="mt-5 text-muted-foreground">
              Quality should be at the forefront of everything VietGuys does. Never compromise on service quality
              in cost control, and strive for standardisation in any job.
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

      {/* Team */}
      <Team />

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-background to-accent/5 p-10 md:p-16 text-center shadow-[var(--shadow-card)]">
            <h2 className="heading-section text-balance">Let's build something worth a long journey.</h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Talk to a real human on our team — we'll show you exactly how leading enterprises engage millions of customers with VietGuys.
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
