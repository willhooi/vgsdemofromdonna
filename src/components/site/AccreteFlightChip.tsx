import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import accreteLogo from "@/assets/brand/accrete-logo.png";

/**
 * AccreteFlightChip
 * Anchored "A member of [Accrete]" chip beside the Hero. When the TrustBand
 * heading enters the viewport, a clone flies down and morphs into the
 * heading's Accrete logo (FLIP-style, GPU-only transforms).
 */

type Phase = "idle" | "flying" | "landed";

const SESSION_KEY = "vg.accrete.flight.played";

export const AccreteFlightChip = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const placeholderRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLDivElement>(null);
  const startRectRef = useRef<DOMRect | null>(null);
  const flightVarsRef = useRef<{
    dx: number;
    dy: number;
    scale: number;
    duration: number;
  } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      setPhase("landed");
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let triggered = false;

    const computeAndFly = () => {
      if (triggered) return;
      const target = document.querySelector<HTMLElement>("[data-accrete-target]");
      const targetLogo =
        document.querySelector<HTMLImageElement>("[data-accrete-logo]") ?? target;
      const placeholder = placeholderRef.current;
      if (!target || !targetLogo || !placeholder) return;

      triggered = true;

      if (reduced) {
        setPhase("landed");
        sessionStorage.setItem(SESSION_KEY, "1");
        window.dispatchEvent(new CustomEvent("accrete:landed"));
        return;
      }

      const startRect = placeholder.getBoundingClientRect();
      startRectRef.current = startRect;

      const targetRect = targetLogo.getBoundingClientRect();
      const startCenterX = startRect.left + startRect.width / 2;
      const startCenterY = startRect.top + startRect.height / 2;
      const targetCenterX = targetRect.left + targetRect.width / 2;
      const targetCenterY = targetRect.top + targetRect.height / 2;
      const dx = targetCenterX - startCenterX;
      const dy = targetCenterY - startCenterY;

      // Scale chip so its inline logo lands at the heading-logo size.
      const chipLogo = placeholder.querySelector<HTMLImageElement>("img");
      const chipLogoH = chipLogo?.getBoundingClientRect().height || 14;
      const targetLogoH = targetRect.height || 40;
      const scale = Math.min(4.5, Math.max(1.6, targetLogoH / chipLogoH));

      // Mobile-aware duration
      const isMobile = window.matchMedia("(max-width: 640px)").matches;
      const duration = isMobile ? 880 : 1140;

      flightVarsRef.current = { dx, dy, scale, duration };
      setPhase("flying");
    };

    const target = document.querySelector<HTMLElement>("[data-accrete-target]");
    if (!target) {
      const onScroll = () => {
        if (window.scrollY > 80) computeAndFly();
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) computeAndFly();
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  // Apply CSS vars + listen for animation end
  useEffect(() => {
    if (phase !== "flying") return;
    const node = cloneRef.current;
    const vars = flightVarsRef.current;
    const startRect = startRectRef.current;
    if (!node || !vars || !startRect) return;

    node.style.setProperty("--fx-dx", `${vars.dx}px`);
    node.style.setProperty("--fx-dy", `${vars.dy}px`);
    node.style.setProperty("--fx-scale", `${vars.scale}`);
    node.style.setProperty("--fx-duration", `${vars.duration}ms`);

    const onEnd = () => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setPhase("landed");
      window.dispatchEvent(new CustomEvent("accrete:landed"));
    };
    node.addEventListener("animationend", onEnd, { once: true });
    // Safety fallback
    const fallback = window.setTimeout(onEnd, vars.duration + 200);
    return () => window.clearTimeout(fallback);
  }, [phase]);

  const flying = phase === "flying";
  const startRect = startRectRef.current;

  return (
    <>
      {/* Inline anchor — chip stays here at all times; hidden only during flight */}
      <div
        ref={placeholderRef}
        className="accrete-chip-slot mt-5 md:mt-6 flex justify-center lg:justify-start"
        style={{ visibility: flying ? "hidden" : "visible" }}
      >
        <ChipContent showArrow={phase === "idle"} />
      </div>

      {/* Fixed flying clone — only mounted during flight */}
      {flying && startRect && (
        <div
          ref={cloneRef}
          aria-hidden="true"
          className="accrete-flying pointer-events-none fixed z-50"
          style={{
            top: startRect.top,
            left: startRect.left,
            width: startRect.width,
            height: startRect.height,
          }}
        >
          <div className="flex h-full w-full items-center justify-center">
            <ChipContent flying />
          </div>
        </div>
      )}
    </>
  );
};

const ChipContent = ({
  showArrow = false,
  flying = false,
}: {
  showArrow?: boolean;
  flying?: boolean;
}) => (
  <span className="accrete-chip accrete-chip-metallic inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide text-[hsl(128_55%_20%)]">
    <span
      className={`relative z-[2] transition-opacity ${flying ? "accrete-chip-text-fade" : ""}`}
    >
      A member of
    </span>
    <img
      src={accreteLogo}
      alt=""
      aria-hidden="true"
      className="relative z-[2] h-[14px] w-auto"
      loading="lazy"
      decoding="async"
    />
    {showArrow && (
      <ChevronDown className="accrete-chip-arrow relative z-[2] h-3 w-3 text-[#ff9b17]" />
    )}
  </span>
);
