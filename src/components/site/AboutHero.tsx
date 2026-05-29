import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { VWatermark } from "@/components/brand/VWatermark";

export const AboutHero = () => {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      style={{
        background:
          "radial-gradient(ellipse at top, hsl(var(--primary) / 0.07), transparent 60%), var(--gradient-hero)",
      }}
    >
      <VWatermark
        tone="brand"
        className="pointer-events-none absolute -right-32 -bottom-24 h-[520px] w-[520px] opacity-[0.05]"
      />

      <div className="container-tight relative">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <div className="mt-8 max-w-4xl">
          <span className="chapter-eyebrow">About VietGuys</span>
          <h1 className="heading-display mt-5 text-balance">
            17 years connecting brands with{" "}
            <span className="italic text-[hsl(var(--accent-deep))]">
              millions of Vietnamese
            </span>
            .
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground md:text-xl">
            From a 25m² room in Ho Chi Minh City to Vietnam&apos;s most trusted
            enterprise messaging platform — backed by Japan&apos;s Accrete Inc.,
            recognised by Forbes Asia.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
            >
              Talk to us <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] hover:border-primary/40"
            >
              Read our story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
