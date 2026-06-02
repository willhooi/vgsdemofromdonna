import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { Button } from "@/components/ui/button";
import { getCategory } from "@/content/insights/categories";
import {
  ARTICLES,
  formatDate,
  getArticle,
} from "@/content/insights/articles";

const SITE = "https://vgsdemofromdonna.lovable.app";

const InsightArticle = () => {
  const { slug = "" } = useParams();
  const article = getArticle(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!article) return <Navigate to="/market-insights" replace />;

  const category = getCategory(article.category);
  const related = ARTICLES.filter(
    (a) => a.category === article.category && a.slug !== article.slug,
  ).slice(0, 3);

  const url = `${SITE}/market-insights/${article.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${article.title} — VietGuys Market Insights`}</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={article.image} />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content={article.author} />
        <meta
          property="article:section"
          content={category?.title ?? "Insights"}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            image: [article.image],
            datePublished: article.date,
            dateModified: article.date,
            author: {
              "@type": "Organization",
              name: article.author,
            },
            publisher: {
              "@type": "Organization",
              name: "VietGuys Joint Stock Company",
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            articleSection: category?.title,
            keywords: article.tags.join(", "),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Market Insights",
                item: `${SITE}/market-insights`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: category?.title ?? "Article",
                item: `${SITE}/market-insights`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: article.title,
                item: url,
              },
            ],
          })}
        </script>
      </Helmet>

      <Header />

      <article>
        <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.08),transparent_70%)]" />
          <div className="container-tight max-w-4xl">
            <Link
              to="/market-insights"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All insights
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em]">
              {category && (
                <Link
                  to="/market-insights"
                  className="rounded-full bg-primary/10 px-3 py-1 text-primary"
                >
                  {category.title}
                </Link>
              )}
              <span className="text-muted-foreground">
                {formatDate(article.date)}
              </span>
              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <Clock className="h-3 w-3" /> {article.readMinutes} min read
              </span>
            </div>
            <h1 className="heading-hero mt-6 text-balance">{article.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {article.excerpt}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-sm font-bold text-primary-foreground">
                {article.author
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">{article.author}</p>
                <p className="text-muted-foreground">{article.authorRole}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container-tight max-w-5xl">
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
              <img
                src={article.image}
                alt={article.title}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-tight max-w-3xl">
            <div className="prose prose-neutral max-w-none">
              {article.body.map((p, i) => (
                <p
                  key={i}
                  className="mb-6 text-base leading-[1.85] text-foreground/85 md:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>

            {article.tags?.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-8">
                {article.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>
      </article>

      {related.length > 0 && (
        <section className="pb-20">
          <div className="container-tight">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              More in {category?.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((a) => (
                <Link
                  to={`/market-insights/${a.slug}`}
                  key={a.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
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
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {a.title}
                    </h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {a.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-28">
        <div className="container-tight">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-10 text-background md:p-16">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Talk to a messaging strategist
                </h2>
                <p className="mt-4 max-w-2xl text-sm text-background/70 md:text-base">
                  Bring your use case — we will map the right channel mix, data
                  layer and rollout plan for your enterprise.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">
                    Get in touch <ArrowUpRight className="ml-1 h-4 w-4" />
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

export default InsightArticle;
