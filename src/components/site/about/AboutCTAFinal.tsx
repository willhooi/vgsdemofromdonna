import { Reveal } from "@/components/motion/Reveal";

export const AboutCTAFinal = () => (
  <section className="px-6 pb-24 pt-4 md:pb-28">
    <div className="container-tight">
      <Reveal variant="scale-soft">
        <div
          className="grid overflow-hidden rounded-[28px] text-white md:grid-cols-[1.2fr_0.8fr]"
          style={{
            background:
              "linear-gradient(120deg, #0c3b20 0%, hsl(var(--primary-deep)) 100%)",
          }}
        >
          <div className="px-8 py-14 md:px-14 md:py-[70px]">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "#a7f070" }}
            >
              Looking for enterprise messaging?
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.12] md:text-[44px]">
              Let&apos;s discuss the details.
            </h2>
            <p className="mt-4 max-w-md text-white/80 md:text-[15.5px]">
              Tell us about your goals. A VietGuys strategist will reply within
              2 hours — in Vietnamese, English or Japanese.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
              style={{ color: "hsl(var(--primary-deep))" }}
            >
              Get a quote
            </a>
          </div>

          <figure
            className="relative hidden min-h-[280px] md:block"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.1}
              className="absolute inset-0 m-auto h-[120px] w-[120px] text-white/90"
              aria-hidden
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <figcaption className="absolute inset-x-0 bottom-5 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
              VietGuys representative
            </figcaption>
          </figure>
        </div>
      </Reveal>
    </div>
  </section>
);
