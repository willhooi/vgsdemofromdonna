import { Compass, Target } from "lucide-react";

export const AboutVisionMission = () => (
  <section className="py-24 md:py-32 bg-[#fcfaf7]">
    <div className="container-tight grid md:grid-cols-2 gap-8">
      <article className="bg-background p-10 md:p-12 border border-border shadow-[var(--shadow-soft)]">
        <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center mb-8 text-primary">
          <Compass className="h-5 w-5" />
        </div>
        <h3 className="font-['Instrument_Serif'] text-3xl md:text-4xl mb-6 text-foreground">
          Vision
        </h3>
        <p className="text-muted-foreground font-light leading-relaxed">
          Become the enterprise&apos;s first choice for digital-transformation marketing solutions
          upgraded from mobile platforms — data-driven, behaviour-aware, and unified on one
          cross-platform ecosystem.
        </p>
      </article>
      <article className="bg-background p-10 md:p-12 border border-border shadow-[var(--shadow-soft)]">
        <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center mb-8 text-primary">
          <Target className="h-5 w-5" />
        </div>
        <h3 className="font-['Instrument_Serif'] text-3xl md:text-4xl mb-6 text-foreground">
          Mission
        </h3>
        <p className="text-muted-foreground font-light leading-relaxed">
          Don&apos;t just give marketing tools — deliver effective mobile-marketing solutions that
          address each client&apos;s individual goals.
        </p>
      </article>
    </div>
  </section>
);
