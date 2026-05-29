import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { Button } from "@/components/ui/button";
import { VietGuysCaseStudies } from "@/components/site/VietGuysCaseStudies";

const CaseStudies = () => {
  useEffect(() => {
    document.title = "Case Studies — VietGuys | Enterprise Messaging Vietnam";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute(
      "content",
      "See how VietGuys powers messaging, Zalo ZNS and SMS campaigns for Sea Group, LG, CGV, Pharmacity and San Miguel in Vietnam.",
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/case-studies");
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
              <span className="eyebrow">Case studies</span>
              <h1 className="heading-hero mt-4 text-balance">
                Brands we have moved. <span className="text-primary">Results that speak.</span>
              </h1>
            </div>
            <p className="md:col-span-4 text-base leading-relaxed text-muted-foreground">
              From banking to retail, see how VietGuys orchestrates messaging,
              data and AI for Vietnam&apos;s most demanding enterprises.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-tight">
          <VietGuysCaseStudies />
        </div>
      </section>

      <section className="pb-28">
        <div className="container-tight">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-10 text-background md:p-16">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Want a case study tailored to your industry?
                </h2>
                <p className="mt-4 max-w-2xl text-sm text-background/70 md:text-base">
                  Our enterprise team will walk you through benchmarks, compliance requirements and ROI models — built for your sector.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Button variant="cta" size="lg" asChild>
                  <a href="/#contact">
                    Talk to Sales <ArrowUpRight className="ml-1 h-4 w-4" />
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

export default CaseStudies;
