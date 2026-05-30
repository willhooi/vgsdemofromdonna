import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export const AboutCTABanner = () => (
  <section className="py-16 md:py-24">
    <div className="container-tight">
      <Reveal variant="scale-soft">
        <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-card)]">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=80"
            alt="VietGuys customer success team ready to start the conversation"
            loading="lazy"
            decoding="async"
            className="ken-burns h-[320px] w-full object-cover md:h-[420px]"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, hsl(var(--background) / 0.92) 0%, hsl(var(--background) / 0.65) 45%, transparent 75%)",
            }}
          />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-6 md:px-14">
              <span className="chapter-eyebrow">Looking for enterprise messaging?</span>
              <h2 className="heading-section mt-4 text-balance">
                Let&apos;s discuss the details.
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                A strategist will reply within 2 hours — in Vietnamese, English or Japanese.
              </p>

              <a
                href="#contact"
                className="vg-cta-slant mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
              >
                Get a quote
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="mt-8 flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80"
                  alt="Nguyễn Minh Quân, Chief Executive Officer"
                  className="h-12 w-12 rounded-full border-2 border-background object-cover shadow-md"
                  loading="lazy"
                />
                <p className="text-xs leading-snug text-muted-foreground">
                  <span className="font-semibold text-foreground">Nguyễn Minh Quân</span>, CEO at VietGuys.
                  <br />I&apos;m here to answer all your questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
