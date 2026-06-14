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
            className="h-10 w-px bg-gradient-to-b from-transparent via-[hsl(var(--primary)/0.5)] to-transparent"
          />

          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
            <span className="text-muted-foreground/70">From the platform</span>{" "}
            <span className="text-[hsl(var(--primary))]">
              to the services that orbit it
            </span>
          </p>

          <span
            aria-hidden
            className="h-10 w-px bg-gradient-to-b from-[hsl(var(--primary)/0.5)] via-[hsl(var(--primary)/0.25)] to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsToServicesBridge;
