import { Link } from "react-router-dom";

export const AboutCTA = () => (
  <section className="py-32 md:py-40 bg-[#fcfaf7]">
    <div className="container-tight">
      <div className="max-w-4xl mx-auto text-center border-t border-border pt-24 md:pt-32">
        <h2 className="font-['Instrument_Serif'] italic text-5xl md:text-7xl mb-12 text-foreground tracking-tight text-balance">
          Let&apos;s build something <br className="hidden md:block" />
          worth a long journey.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/#contact"
            className="px-10 py-5 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-widest hover:bg-[hsl(var(--primary-deep))] transition-all duration-300 rounded-sm shadow-xl shadow-primary/10"
          >
            Book a Demo
          </a>
          <Link
            to="/"
            className="px-10 py-5 bg-background border border-border text-foreground text-[11px] font-bold uppercase tracking-widest hover:bg-secondary transition-all duration-300 rounded-sm"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  </section>
);
