import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";
import accreteLogo from "@/assets/brand/accrete-logo.png";

/**
 * AccreteFlightChip — scroll-linked shared-element morph.
 *
 * A single "morph element" (portaled to <body>) visually represents the
 * "A member of [Accrete logo]" badge. As the user scrolls:
 *   progress 0 → it sits in the Hero as a small metallic chip.
 *   progress 1 → it lands on the TrustBand heading position at full size,
 *                with surface (bg/border/shadow) dissolved away.
 *
 * Bidirectional: scrolling back up reverses the morph naturally because
 * progress is a pure function of scrollY.
 *
 * The real chip placeholder (in Hero) and real heading content (in TrustBand)
 * are kept in the DOM (for SEO/layout) but their visible content is hidden
 * via .accrete-morph-active on <body>.
 */

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

export const AccreteFlightChip = () => {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const morphRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const [mounted, setMounted] = useState(false);

  // Activate morph (adds body class that hides static chip + heading content)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return; // fall back to static chip + static heading
    document.body.classList.add("accrete-morph-active");
    setMounted(true);
    return () => {
      document.body.classList.remove("accrete-morph-active");
    };
  }, []);

  // Scroll-linked updates
  useEffect(() => {
    if (!mounted) return;

    const update = () => {
      rafRef.current = 0;
      const placeholder = placeholderRef.current;
      const morph = morphRef.current;
      const target = document.querySelector<HTMLElement>("[data-accrete-target]");
      if (!placeholder || !morph || !target) return;

      const phRect = placeholder.getBoundingClientRect();
      const tgRect = target.getBoundingClientRect();
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // Center positions in document coords
      const phCxDoc = phRect.left + phRect.width / 2;
      const phCyDoc = phRect.top + scrollY + phRect.height / 2;
      const tgCxDoc = tgRect.left + tgRect.width / 2;
      const tgCyDoc = tgRect.top + scrollY + tgRect.height / 2;

      // Progress: 0 at scroll 0, 1 when heading center sits at ~50% viewport.
      const endScroll = Math.max(tgCyDoc - vh * 0.5, 80);
      const progress = clamp01(scrollY / endScroll);

      // Interpolated center (doc coords → viewport coords for fixed element)
      const cxVp = lerp(phCxDoc, tgCxDoc, progress);
      const cyVp = lerp(phCyDoc, tgCyDoc, progress) - scrollY;

      // Scale: chip → heading. Use heading logo height vs chip logo height
      // so the morph's inner logo lands at the heading logo's exact size.
      const tgLogo = target.querySelector<HTMLImageElement>("[data-accrete-logo]");
      const tgLogoH = tgLogo?.getBoundingClientRect().height || 56;
      const chipLogoH = 14;
      const maxScale = Math.max(2, tgLogoH / chipLogoH);
      const scale = lerp(1, maxScale, progress);

      const w = morph.offsetWidth;
      const h = morph.offsetHeight;
      const tx = cxVp - w / 2;
      const ty = cyVp - h / 2;

      morph.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;

      const inner = morph.querySelector<HTMLElement>(".accrete-morph-inner");
      if (inner) {
        inner.style.fontWeight = String(Math.round(lerp(600, 800, progress)));
        inner.style.letterSpacing = `${lerp(0.02, -0.01, progress)}em`;
      }

      const surface = morph.querySelector<HTMLElement>(".accrete-morph-surface");
      if (surface) surface.style.opacity = String(clamp01(1 - progress * 1.25));

      const arrow = morph.querySelector<HTMLElement>("[data-arrow]");
      if (arrow) arrow.style.opacity = String(clamp01(1 - progress * 4));
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(update);
    };
    const onResize = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    // Recompute after fonts/images settle so initial position is exact
    const t1 = window.setTimeout(update, 250);
    const t2 = window.setTimeout(update, 1200);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mounted]);

  return (
    <>
      {/* Inline placeholder in Hero — reserves chip space (invisible content). */}
      <div
        ref={placeholderRef}
        aria-hidden="true"
        className="accrete-chip-slot mt-5 md:mt-6 flex justify-center lg:justify-start"
      >
        <span className="invisible inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold">
          <span>A member of</span>
          <img src={accreteLogo} alt="" aria-hidden className="h-[14px] w-auto" />
          <ChevronDown className="h-3 w-3" />
        </span>
      </div>

      {/* Portaled morph element — the only visible chip/headline. */}
      {mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={morphRef}
            className="accrete-morph fixed left-0 top-0 z-40"
            style={{ transformOrigin: "50% 50%", willChange: "transform" }}
          >
            <a
              href="https://www.accrete-inc.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A member of Accrete Inc."
              className="accrete-morph-inner relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide text-[hsl(128_55%_20%)]"
            >
              <span
                className="accrete-morph-surface accrete-chip-metallic absolute inset-0 rounded-full pointer-events-none"
                aria-hidden="true"
              />
              <span className="relative z-[2]">A member of</span>
              <img
                src={accreteLogo}
                alt=""
                aria-hidden="true"
                className="relative z-[2] h-[14px] w-auto"
              />
              <ChevronDown
                data-arrow
                className="accrete-chip-arrow relative z-[2] h-3 w-3 text-[#ff9b17]"
              />
            </a>
          </div>,
          document.body
        )}
    </>
  );
};
