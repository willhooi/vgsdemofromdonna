/**
 * Compact cosmic warp transition between Solutions (platform nucleus) and
 * ServicesGrid (orbiting services). Sits transparently on top of the shared
 * GalaxyBackdrop and the PlatformToServicesFlow rails.
 */
export const SolutionsToServicesBridge = () => {
  return (
    <section
      id="services-intro"
      aria-label="From the platform to the services"
      className="relative"
    >
      <div className="container-tight relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 py-6 text-center md:py-10">
          {/* Warp streak above */}
          <div aria-hidden className="relative h-8 w-px">
            <span className="warp-streak absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[hsl(var(--primary)/0.55)] to-transparent" />
            <span
              className="warp-streak absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[hsl(var(--primary)/0.4)] to-transparent"
              style={{ animationDelay: "0.6s" }}
            />
          </div>

          {/* Orbit ring + pulsing core */}
          <div className="relative grid h-14 w-14 place-items-center">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full border border-dashed border-[hsl(var(--primary)/0.55)] galaxy-orbit-medium"
            />
            <span
              aria-hidden
              className="absolute inset-2 rounded-full border border-[hsl(var(--primary)/0.3)] galaxy-orbit-reverse-medium"
            />
            <span
              aria-hidden
              className="absolute h-2.5 w-2.5 rounded-full bg-[hsl(var(--primary))] shadow-[0_0_16px_4px_hsl(var(--primary)/0.45)] animate-pulse"
            />
          </div>

          <h3 className="heading-display text-balance text-[18px] sm:text-[22px] md:text-[26px] text-foreground leading-tight">
            From the platform{" "}
            <span className="text-[hsl(var(--primary))]">
              to the services that orbit it
            </span>
            .
          </h3>

          {/* Warp streak below */}
          <div aria-hidden className="relative h-6 w-px">
            <span className="warp-streak absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[hsl(var(--primary)/0.5)] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsToServicesBridge;
