import { ArrowRight, Sparkles, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AICore } from "./AICore";
import accreteLogo from "@/assets/accrete-logo.svg";

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
          <h1 className="heading-display mt-6 text-balance" style={{ animationDelay: "80ms" }}>
            <span className="inline-block animate-fade-up" style={{ animationDelay: "60ms" }}>The</span>{" "}
            <span className="inline-block animate-fade-up" style={{ animationDelay: "140ms" }}>intelligent</span>{" "}
            <span className="inline-block animate-fade-up" style={{ animationDelay: "220ms" }}>way</span>{" "}
            <span className="inline-block animate-fade-up" style={{ animationDelay: "300ms" }}>for</span>{" "}
            <span className="inline-block animate-fade-up" style={{ animationDelay: "380ms" }}>brands</span>{" "}
            <span className="relative inline-block">
              <span
                className="relative z-10 inline-block bg-clip-text text-transparent animate-connect"
                style={{ animationDelay: "520ms", backgroundImage: "var(--gradient-brand)" }}
              >
                to connect
              </span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-1.5 rounded-full bg-[hsl(var(--accent))]/70 animate-underline"
                style={{ animationDelay: "900ms" }}
              />
            </span>{" "}
            <span className="inline-block animate-fade-up" style={{ animationDelay: "700ms" }}>with</span>{" "}
            <span className="inline-block animate-fade-up" style={{ animationDelay: "780ms" }}>customers.</span>
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
              { k: "5M+", v: "Messages / day" },
              { k: "15+", v: "Years of heritage" },
              { k: "5,000+", v: "Brands trusted" },
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
          <a
            href="https://www.accrete-inc.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Backed by Accrete Inc., Tokyo Stock Exchange-listed"
            className="group relative mt-6 flex items-center gap-3 overflow-hidden rounded-2xl border border-border bg-background/90 p-3 shadow-[var(--shadow-card)] backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)] md:absolute md:-bottom-4 md:left-2 md:right-2 md:mt-0"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{ background: "var(--gradient-brand)" }}
            />
            <div className="relative flex h-11 w-20 shrink-0 items-center justify-center rounded-lg border border-border bg-white p-1">
              <img src={accreteLogo} alt="Accrete Inc. logo" loading="lazy" className="h-full w-full object-contain" />
            </div>
            <div className="relative min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Strategic backing
                </span>
              </div>
              <p className="mt-0.5 text-sm font-bold text-foreground leading-tight">
                Backed by Accrete Inc.
                <span className="ml-1 font-medium text-muted-foreground">· TSE-listed</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
