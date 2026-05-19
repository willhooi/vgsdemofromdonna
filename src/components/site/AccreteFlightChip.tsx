import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import accreteLogo from "@/assets/brand/accrete-logo.png";

/**
 * AccreteFlightChip — semantic morph (no disappearing).
 * On scroll, when the TrustBand heading enters the viewport:
 *  - chip scales up slightly (1 → 1.08)
 *  - border fades out
 *  - background dissolves
 *  - text weight increases
 *  - letter-spacing tightens
 *  - shifts down toward the TrustBand headline baseline
 * Conveys that the chip "semantically expands" into the headline.
 */

type Phase = "idle" | "morphing" | "landed";

const SESSION_KEY = "vg.accrete.morph.played";

export const AccreteFlightChip = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const chipRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      setPhase("landed");
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let triggered = false;

    const trigger = () => {
      if (triggered) return;
      triggered = true;

      if (reduced) {
        setPhase("landed");
        sessionStorage.setItem(SESSION_KEY, "1");
        window.dispatchEvent(new CustomEvent("accrete:landed"));
        return;
      }
      setPhase("morphing");
    };

    const target = document.querySelector<HTMLElement>("[data-accrete-target]");
    if (!target) {
      const onScroll = () => {
        if (window.scrollY > 120) trigger();
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) trigger();
      },
      { rootMargin: "-10% 0px -45% 0px", threshold: 0 }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (phase !== "morphing") return;
    const node = chipRef.current;
    if (!node) return;
    const onEnd = () => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setPhase("landed");
      window.dispatchEvent(new CustomEvent("accrete:landed"));
    };
    node.addEventListener("animationend", onEnd, { once: true });
    const fallback = window.setTimeout(onEnd, 1400);
    return () => window.clearTimeout(fallback);
  }, [phase]);

  const morphClass =
    phase === "morphing"
      ? "accrete-chip-morphing"
      : phase === "landed"
      ? "accrete-chip-landed"
      : "";

  return (
    <div className="accrete-chip-slot mt-5 md:mt-6 flex justify-center lg:justify-start">
      <span
        ref={chipRef}
        className={`accrete-chip accrete-chip-metallic ${morphClass} inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide text-[hsl(128_55%_20%)]`}
      >
        <span className="accrete-chip-text relative z-[2]">A member of</span>
        <img
          src={accreteLogo}
          alt=""
          aria-hidden="true"
          className="relative z-[2] h-[14px] w-auto"
          loading="lazy"
          decoding="async"
        />
        {phase === "idle" && (
          <ChevronDown className="accrete-chip-arrow relative z-[2] h-3 w-3 text-[#ff9b17]" />
        )}
      </span>
    </div>
  );
};
