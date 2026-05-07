import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AICore } from "./AICore";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] grid-bg opacity-50" />

      <div className="container-tight grid gap-14 pb-20 md:gap-10 lg:grid-cols-12 lg:pb-28">
        <div className="lg:col-span-7">
          <span className="eyebrow animate-fade-up">
            <Sparkles className="h-3.5 w-3.5" /> AI-Powered Customer Engagement
          </span>
          <h1 className="heading-display mt-6 text-balance animate-fade-up" style={{ animationDelay: "80ms" }}>
            The intelligent way Vietnam&apos;s enterprises{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-[var(--gradient-brand)] bg-clip-text text-transparent">
                speak to customers.
              </span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-1.5 rounded-full bg-[hsl(var(--accent))]/70 animate-underline"
                style={{ animationDelay: "700ms" }}
              />
            </span>
          </h1>
          <p
            className="mt-6 max-w-xl text-muted-foreground text-balance animate-fade-up text-base"
            style={{ animationDelay: "160ms" }}
          >
            Founded in 2007, VietGuys is Vietnam’s leading AI-powered customer engagement platform,
            helping 5,000+ brands optimize customer connections through SMS, Zalo, and omnichannel
            solutions. Backed by Accrete Inc. (Japan), we combine trusted messaging infrastructure,
            advanced AI, and local expertise to deliver smarter customer experiences.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <Button variant="cta" size="lg" asChild>
              <a href="#contact">
                Book a Demo <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#solutions">Explore Solutions</a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8 animate-fade-up" style={{ animationDelay: "320ms" }}>
            {[
              { k: "76+", v: "Enterprise clients" },
              { k: "15", v: "Years of heritage" },
              { k: "5M", v: "Messages / day" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">{s.k}</dt>
                <dd className="mt-1 text-xs font-medium text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="animate-float">
            <AICore />
          </div>
          <div className="absolute -bottom-2 left-2 hidden rounded-2xl border border-border bg-background/90 p-4 shadow-[var(--shadow-card)] backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <p className="text-xs font-semibold text-foreground">5,000,000 messages today</p>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">Live across SMS · Zalo · Viber · ZNS</p>
          </div>
        </div>
      </div>
    </section>
  );
};
