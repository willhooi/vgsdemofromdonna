import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { CATEGORIES } from "@/content/insights/categories";
import {
  ARTICLES,
  featuredArticles,
  formatDate,
  latestArticles,
} from "@/content/insights/articles";

const SITE = "https://vgsdemofromdonna.lovable.app";

const MarketInsights = () => {
  const [active, setActive] = useState<string>("all");

  const featured = featuredArticles().slice(0, 2);

  const filtered = useMemo(() => {
    const all = latestArticles();
    if (active === "all") return all;
    return all.filter((a) => a.category === active);
  }, [active]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Market Insights — VietGuys | Enterprise Messaging Vietnam</title>
        <meta
          name="description"
          content="Channel intelligence, customer engagement, AI & data, and industry playbooks from VietGuys — Vietnam's enterprise messaging team delivering 5M messages a day."
        />
        <link rel="canonical" href={`${SITE}/market-insights`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Market Insights — VietGuys" />
        <meta
          property="og:description"
          content="Benchmarks, playbooks and channel intelligence from Vietnam's enterprise messaging frontline."
        />
        <meta property="og:url" content={`${SITE}/market-insights`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "VietGuys Market Insights",
            url: `${SITE}/market-insights`,
            publisher: {
              "@type": "Organization",
              name: "VietGuys Joint Stock Company",
            },
            blogPost: ARTICLES.map((a) => ({
              "@type": "BlogPosting",
              headline: a.title,
              url: `${SITE}/market-insights/${a.slug}`,
              datePublished: a.date,
              image: a.image,
              articleSection: CATEGORIES.find((c) => c.slug === a.category)
                ?.title,
            })),
          })}
        </script>
      </Helmet>

      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.10),transparent_70%)]" />
        <div className="container-tight">
          <Reveal variant="fade-up">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to home
            </Link>
          </Reveal>
          <div className="mt-6">
            <Reveal variant="fade-up">
              <span className="eyebrow">Market Insights</span>
              <h1 className="heading-hero mt-4 text-balance">
                <span className="text-primary">Insights</span> & playbooks.
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED — 2 ARTICLES */}
      {featured.length > 0 && (
        <section className="pb-16">
          <div className="container-tight">
            <div className="grid gap-6 md:grid-cols-2">
              {featured.map((a, idx) => (
                <Reveal key={a.slug} variant="scale-soft" delay={idx * 80}>
                  <Link
                    to={`/market-insights/${a.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
                  >
                    <div className="relative">
                      <div className="aspect-[16/10] w-full overflow-hidden">
                        <img
                          src={a.image}
                          alt={a.title}
                          loading="eager"
                          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                        />
                      </div>
                      <span className="absolute left-5 top-5 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
                        Featured
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {CATEGORIES.find((c) => c.slug === a.category)?.title}
                      </span>
                      <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                        {a.title}
                      </h2>
                      <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {a.excerpt}
                      </p>
                      <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          {a.author}
                        </span>
                        <span aria-hidden>·</span>
                        <span>{formatDate(a.date)}</span>
                        <span aria-hidden>·</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {a.readMinutes} min
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Read article <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CATEGORY CHIPS + GRID */}
      <section className="pb-28">
        <div className="container-tight">
          <Reveal variant="fade-up">
            <div className="mb-10 flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActive("all")}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all ${
                  active === "all"
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                All articles ({ARTICLES.length})
              </button>
              {CATEGORIES.map((c) => {
                const count = ARTICLES.filter(
                  (a) => a.category === c.slug,
                ).length;
                const isActive = active === c.slug;
                return (
                  <button
                    key={c.slug}
                    onClick={() => setActive(c.slug)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all ${
                      isActive
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-background text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {c.title} ({count} {count === 1 ? "article" : "articles"})
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a, idx) => (
              <Reveal
                key={a.slug}
                variant="fade-up"
                delay={Math.min(idx, 6) * 60}
              >
                <Link
                  to={`/market-insights/${a.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      {CATEGORIES.find((c) => c.slug === a.category)?.title}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {a.title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {a.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-3 pt-3 text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {a.author}
                      </span>
                      <span aria-hidden>·</span>
                      <span>{formatDate(a.date)}</span>
                      <span aria-hidden>·</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {a.readMinutes} min
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-sm text-muted-foreground">
              No articles in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* NEWSLETTER / CTA */}
      <section className="pb-28">
        <div className="container-tight">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-10 text-background md:p-16">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Get early access to reports
                </h2>
                <p className="mt-4 max-w-2xl text-sm text-background/70 md:text-base">
                  Join our enterprise mailing list for quarterly insights,
                  benchmark data and event invitations — no spam, unsubscribe
                  any time.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">
                    Subscribe <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
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
