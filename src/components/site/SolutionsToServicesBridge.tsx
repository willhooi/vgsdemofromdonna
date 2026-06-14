/**
 * Minimal bridge headline between AIPlatformCard and ServicesGrid.
 * Visual heavy lifting is delegated to the surrounding ConstellationOverlay
 * (rendered via PlatformToServicesFlow) so this stays a thin, semantic anchor.
 */
export const SolutionsToServicesBridge = () => {
  return (
    <section
      id="services-intro"
      aria-label="From the platform to the services"
      className="relative"
    >
      <div className="container-tight relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 py-8 text-center md:py-12">
          {/* Thin vertical tether picks up the constellation flow */}
          <span
            aria-hidden
            className="relative z-10 h-10 w-px bg-gradient-to-b from-transparent via-[hsl(var(--primary)/0.5)] to-transparent"
          />

          <div className="relative">
            {/* Soft radial mask to fade plexus behind the headline */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[160%] w-[140%] -translate-x-1/2 -translate-y-1/2"
              style={{
                background:
                  "radial-gradient(ellipse 60% 100% at 50% 50%, hsl(var(--background)) 0%, hsl(var(--background) / 0.92) 55%, hsl(var(--background) / 0) 100%)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
              }}
            />
            <p className="relative z-10 px-6 text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              <span className="text-muted-foreground/70">From the platform</span>{" "}
              <span className="text-[hsl(var(--primary))]">
                to the services that orbit it
              </span>
            </p>
          </div>

          <span
            aria-hidden
            className="relative z-10 h-10 w-px bg-gradient-to-b from-[hsl(var(--primary)/0.5)] via-[hsl(var(--primary)/0.25)] to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsToServicesBridge;
