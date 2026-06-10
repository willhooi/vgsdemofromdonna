/**
 * Cosmic warp transition between the Solutions platform (nucleus) and
 * the ServicesGrid (orbiting services). No background of its own — it
 * sits transparently on top of the shared GalaxyBackdrop.
 */
export const SolutionsToServicesBridge = () => {
  return (
    <section
      id="services-intro"
      aria-label="From the platform to the services"
      className="relative"
    >
      <div className="container-tight relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 py-14 text-center md:py-20">
          {/* Warp streaks above */}
          <div aria-hidden className="relative h-14 w-px">
            <span className="warp-streak absolute left-1/2 top-0 h-14 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[hsl(var(--primary)/0.55)] to-transparent" />
            <span
              className="warp-streak absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[hsl(var(--primary)/0.4)] to-transparent"
              style={{ animationDelay: "0.6s" }}
            />
          </div>

          {/* Orbit ring + pulsing core */}
          <div className="relative grid h-20 w-20 place-items-center">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full border border-dashed border-[hsl(var(--primary)/0.55)] galaxy-orbit-medium"
            />
            <span
              aria-hidden
              className="absolute inset-3 rounded-full border border-[hsl(var(--primary)/0.3)] galaxy-orbit-reverse-medium"
            />
            <span
              aria-hidden
              className="absolute h-3 w-3 rounded-full bg-[hsl(var(--primary))] shadow-[0_0_18px_4px_hsl(var(--primary)/0.45)] animate-pulse"
            />
          </div>

          <h3 className="heading-display text-balance text-[20px] sm:text-[24px] md:text-[30px] text-foreground leading-tight">
            From the platform{" "}
            <span className="text-[hsl(var(--primary))]">
              to the services that orbit it
            </span>
            .
          </h3>

          {/* Warp streaks below */}
          <div aria-hidden className="relative h-14 w-px">
            <span className="warp-streak absolute left-1/2 top-0 h-14 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[hsl(var(--primary)/0.5)] to-transparent" />
            <span
              className="warp-streak absolute left-1/2 top-0 h-9 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[hsl(var(--primary)/0.35)] to-transparent"
              style={{ animationDelay: "0.9s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsToServicesBridge;
