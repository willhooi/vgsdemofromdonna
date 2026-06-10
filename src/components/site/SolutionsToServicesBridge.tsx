import { ChevronDown } from "lucide-react";

/**
 * Visual + narrative bridge between <Solutions /> (the platform/infrastructure)
 * and <ServicesGrid /> (the activation services).
 *
 * Background gradient matches the bottom of Solutions at the top edge and the
 * top of ServicesGrid at the bottom edge, so the seam is invisible.
 */
export const SolutionsToServicesBridge = () => {
  return (
    <section
      id="services-intro"
      aria-label="From the platform to the services"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(145 55% 97%) 55%, hsl(145 60% 95%) 100%)",
      }}
    >
      {/* Vertical dashed connector — desktop/tablet only */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block"
        width="2"
        viewBox="0 0 2 200"
        preserveAspectRatio="none"
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="200"
          stroke="hsl(145 50% 55%)"
          strokeWidth="2"
          strokeDasharray="5 7"
          className="bridge-flow"
          opacity="0.55"
        />
      </svg>

      <div className="container-tight relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 py-12 text-center md:py-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--primary))]">
            Chapter 02 — Activation
          </span>
          <h3 className="heading-display text-balance text-[20px] sm:text-[24px] md:text-[30px] text-foreground leading-tight">
            From the platform{" "}
            <span className="text-[hsl(var(--primary))]">to the services that run on it</span>.
          </h3>
          <p className="max-w-lg text-sm text-muted-foreground">
            The infrastructure above powers the messaging services below — every
            channel, fully integrated with your customer data and AI brain.
          </p>

          <span
            aria-hidden
            className="mt-2 grid h-9 w-9 place-items-center rounded-full border border-[hsl(145_40%_75%)] bg-white/80 text-[hsl(var(--primary))] shadow-[0_4px_16px_-6px_rgba(57,180,74,0.35)]"
          >
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </span>
        </div>
      </div>

      <style>{`
        @keyframes bridge-flow-move { to { stroke-dashoffset: -24; } }
        .bridge-flow { animation: bridge-flow-move 1.8s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .bridge-flow { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default SolutionsToServicesBridge;
