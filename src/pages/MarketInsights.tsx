import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { Button } from "@/components/ui/button";

const MarketInsights = () => {
  useEffect(() => {
    document.title = "Market Insights — VietGuys | Enterprise Messaging Vietnam";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute(
      "content",
      "Vietnamese enterprise messaging trends, Zalo ZNS benchmarks, SMS deliverability reports and industry analysis from VietGuys.",
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/market-insights");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

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
              <span className="eyebrow">Market insights</span>
              <h1 className="heading-hero mt-4 text-balance">
                The pulse of Vietnamese <span className="text-primary">enterprise messaging.</span>
              </h1>
            </div>
            <p className="md:col-span-4 text-base leading-relaxed text-muted-foreground">
              Benchmarks, trend reports and channel intelligence from the
              team delivering 5 million messages a day across Vietnam.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-tight">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                tag: "Trend Report",
                title: "Zalo ZNS adoption in banking",
                body: "How Vietnam's top 10 banks are shifting transactional alerts from SMS to Zalo ZNS — and what it means for deliverability costs.",
              },
              {
                tag: "Benchmark",
                title: "SMS open rates by industry",
                body: "2025 cross-industry benchmarks: banking leads at 94%, retail averages 78%, and logistics proves the value of time-of-day optimisation.",
              },
              {
                tag: "Analysis",
                title: "The AI messaging playbook",
                body: "From intent prediction to next-best-message: a framework for deploying behavioural AI in regulated Vietnamese markets.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] transition-all hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {item.tag}
                </span>
                <h3 className="mt-3 text-lg font-bold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <span className="mt-4 inline-block text-xs font-semibold text-muted-foreground">
                  Coming soon
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-tight">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-10 text-background md:p-16">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Get early access to reports
                </h2>
                <p className="mt-4 max-w-2xl text-sm text-background/70 md:text-base">
                  Join our enterprise mailing list for quarterly insights, benchmark data and event invitations — no spam, unsubscribe any time.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Button variant="cta" size="lg" asChild>
                  <a href="/#contact">
                    Subscribe <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBubble />
    </div>
  );
};

export default MarketInsights;
