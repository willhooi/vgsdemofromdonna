import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export const AboutCTAFinal = () => (
  <section className="relative overflow-hidden py-24 md:py-32">
    <div
      aria-hidden
      className="absolute inset-0"
      style={{ background: "var(--gradient-brand)" }}
    />
    <div
      aria-hidden
      className="absolute inset-0 opacity-30"
      style={{
        background:
          "radial-gradient(circle at 20% 30%, hsl(var(--accent) / 0.35), transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--primary) / 0.25), transparent 55%)",
      }}
    />

    <div className="container-tight relative">
      <div className="mx-auto max-w-3xl text-center text-primary-foreground">
        <Reveal variant="fade-up">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] opacity-80">
            Looking for enterprise messaging?
          </span>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <h2 className="heading-display mt-4 text-4xl leading-[1.05] md:text-6xl">
            Let&apos;s discuss the details.
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={220}>
          <p className="mx-auto mt-6 max-w-xl text-base opacity-85 md:text-lg">
            From a single ZNS template to a multi-channel orchestration — the same team
            that&apos;s been doing this since 2007 is one message away.
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={320}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 text-sm font-semibold text-foreground shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <MessageSquare className="h-4 w-4" />
              Talk to us
            </Link>
          </div>
        </Reveal>

        <Reveal variant="fade" delay={460}>
          <div className="mt-12 flex items-center justify-center gap-4 text-left">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&q=80"
              alt="Customer success lead at VietGuys"
              className="h-12 w-12 rounded-full border-2 border-primary-foreground/40 object-cover"
            />
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/90">
              <span className="font-semibold">Nguyễn Minh Quân</span>, CEO at VietGuys.
              I&apos;m here to answer your questions.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
