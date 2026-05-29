import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const AboutHero = () => (
  <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#fcfaf7]">
    <div className="container-tight">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>
      <div className="mx-auto mt-10 max-w-4xl text-center">
        <span className="text-primary uppercase tracking-[0.22em] text-[10px] font-bold mb-6 block">
          Our Manifesto
        </span>
        <h1 className="font-['Instrument_Serif'] italic text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground text-balance">
          Short steps on a <br className="hidden md:block" />long journey.
        </h1>
        <p className="mt-10 text-lg md:text-2xl text-muted-foreground font-light italic leading-relaxed max-w-2xl mx-auto">
          &ldquo;Towards holistic values for enterprises in particular and the entire community in
          general — not just sales or profit.&rdquo;
        </p>
      </div>
    </div>
  </section>
);
