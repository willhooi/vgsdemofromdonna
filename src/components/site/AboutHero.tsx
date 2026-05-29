import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { VWatermark } from "@/components/brand/VWatermark";

export const AboutHero = () => (
  <section
    className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    style={{ background: "var(--gradient-hero)" }}
  >
    <VWatermark
      tone="brand"
      className="absolute -right-32 -top-16 h-[560px] w-[560px] opacity-[0.05] md:opacity-[0.06]"
    />

    <div className="container-tight relative">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>

      <div className="mt-10 max-w-4xl">
        <span className="chapter-eyebrow">Chapter 00 — Since 2007</span>
        <h1 className="heading-display mt-6 text-[44px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[88px] text-balance">
          Nineteen years.
          <br />
          <span
            className="bg-clip-text text-transparent italic"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            One signal.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          This is the story of a small Saigon room that grew into Vietnam&apos;s
          messaging backbone — told in three short chapters.
        </p>
      </div>
    </div>
  </section>
);
