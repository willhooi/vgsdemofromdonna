import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import accreteLogo from "@/assets/brand/accrete-logo.png";

/**
 * AccreteFlightChip
 * A small "A member of [Accrete]" chip that lives next to the Hero CTA.
 * When the user scrolls past the Hero, it detaches and "flies" down into
 * the TrustBand heading (FLIP-style), then disappears after triggering a
 * one-shot shimmer on the heading.
 */

type Phase = "idle" | "flying" | "landed";

const SESSION_KEY = "vg.accrete.flight.played";

export const AccreteFlightChip = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [transform, setTransform] = useState<string>("");
  const placeholderRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLDivElement>(null);
  const startRectRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;





    let triggered = false;

    const fly = () => {
      if (triggered) return;
      triggered = true;

      const target = document.querySelector<HTMLElement>("[data-accrete-target]");
      const placeholder = placeholderRef.current;
      const chip = chipRef.current;

      if (!target || !placeholder || !chip) {
        setPhase("landed");
        return;
      }

      const startRect = placeholder.getBoundingClientRect();
      startRectRef.current = startRect;

      if (reduced) {
        setPhase("landed");
        window.dispatchEvent(new CustomEvent("accrete:landed"));
        return;
      }

      const targetRect = target.getBoundingClientRect();
      const startCenterX = startRect.left + startRect.width / 2;
      const startCenterY = startRect.top + startRect.height / 2;
      const targetCenterX = targetRect.left + targetRect.width / 2;
      const targetCenterY = targetRect.top + targetRect.height / 2;
      const dx = targetCenterX - startCenterX;
      const dy = targetCenterY - startCenterY;
      const scale = Math.min(
        3.2,
        Math.max(1.6, targetRect.height / Math.max(startRect.height, 1))
      );

      // Switch to flying with initial transform = 0, then next frame apply final
      setPhase("flying");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransform(`translate3d(${dx}px, ${dy}px, 0) scale(${scale})`);
        });
      });

      window.setTimeout(() => {
        setPhase("landed");
        window.dispatchEvent(new CustomEvent("accrete:landed"));
      }, 1100);
    };

    // Trigger when the TrustBand heading is about to enter the viewport,
    // so the user actually sees the chip flying into it.
    const target = document.querySelector<HTMLElement>("[data-accrete-target]");
    if (!target) {
      const onScroll = () => { if (window.scrollY > 80) fly(); };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    const io = new IntersectionObserver(
      (entries) => { if (entries.some((e) => e.isIntersecting)) fly(); },
      { rootMargin: "0px 0px -20% 0px", threshold: 0 }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);


  if (phase === "landed") return null;

  const flying = phase === "flying";
  const startRect = startRectRef.current;

  return (
    <>
      {/* Inline placeholder — reserves the layout slot while chip is idle */}
      <div
        ref={placeholderRef}
        className="accrete-chip-slot mt-4 flex justify-center lg:justify-start"
        style={{ visibility: flying ? "hidden" : "visible" }}
      >
        <ChipContent showArrow />
      </div>

      {/* Fixed flying clone — only mounted during flight */}
      {flying && startRect && (
        <div
          ref={chipRef}
          aria-hidden="true"
          className="pointer-events-none fixed z-50"
          style={{
            top: startRect.top,
            left: startRect.left,
            width: startRect.width,
            height: startRect.height,
            transform: transform || "translate3d(0,0,0) scale(1)",
            transition:
              "transform 1050ms cubic-bezier(0.22, 1, 0.36, 1), opacity 260ms ease-out 850ms",
            opacity: transform ? 0 : 1,
            willChange: "transform, opacity",
          }}
        >
          <div className="flex h-full w-full items-center justify-center">
            <ChipContent />
          </div>
        </div>
      )}
    </>
  );
};

const ChipContent = ({ showArrow = false }: { showArrow?: boolean }) => (
  <span className="accrete-chip inline-flex items-center gap-1.5 rounded-full border border-[hsl(128_45%_30%)]/25 bg-white/90 px-2.5 py-1 text-[11px] font-medium text-[hsl(128_55%_22%)] shadow-[0_4px_14px_-6px_rgba(20,80,30,0.35)] backdrop-blur">
    <span>A member of</span>
    <img
      src={accreteLogo}
      alt=""
      aria-hidden="true"
      className="h-[14px] w-auto"
      loading="lazy"
      decoding="async"
    />
    {showArrow && (
      <ChevronDown className="accrete-chip-arrow h-3 w-3 text-[#ff9b17]" />
    )}
  </span>
);
