import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import accreteLogo from "@/assets/brand/accrete-logo.png";

/**
 * AccreteFlightChip — minimal "Accrete Loop" morph.
 *
 * Idle: text "A member of" + Accrete logo, wrapped by a thin teal ring with
 *       a small dot orbiting it (signature of accrete-inc.com). 2 concentric
 *       rings pulse outward like a slow sonar (telecom story for VietGuys).
 *
 * Scroll: ring + pulses + dot fade out; typography eases into the TrustBand
 *         headline (scroll-linked, bidirectional, GPU-only transforms).
 *
 * Reduced motion: morph disabled, chip + headline render statically.
 */

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// Accrete signature teal
const TEAL = "hsl(168 60% 52%)";

export const AccreteFlightChip = () => {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const morphRef = useRef<HTMLDivElement>(null);
  const flagRef = useRef<HTMLSpanElement>(null);
  const landedRef = useRef(false);
  const rafRef = useRef(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    document.body.classList.add("accrete-morph-active");
    setMounted(true);
    return () => {
      document.body.classList.remove("accrete-morph-active");
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const update = () => {
      rafRef.current = 0;
      const placeholder = placeholderRef.current;
      const morph = morphRef.current;
      const target = document.querySelector<HTMLElement>("[data-accrete-target]");
      if (!placeholder || !morph || !target) return;

      const phInner =
        placeholder.querySelector<HTMLElement>("[data-chip-anchor]") || placeholder;
      const phRect = phInner.getBoundingClientRect();
      const tgRect = target.getBoundingClientRect();
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      const phCxDoc = phRect.left + phRect.width / 2;
      const phCyDoc = phRect.top + scrollY + phRect.height / 2;
      const tgCxDoc = tgRect.left + tgRect.width / 2;
      const tgCyDoc = tgRect.top + scrollY + tgRect.height / 2;

      const endScroll = Math.max(tgCyDoc - vh * 0.55, 80);
      const rawProgress = clamp01(scrollY / endScroll);
      const progress = easeInOutCubic(rawProgress);

      const cxVp = lerp(phCxDoc, tgCxDoc, progress);
      const cyVp = lerp(phCyDoc, tgCyDoc, progress) - scrollY;

      const tgLogo = target.querySelector<HTMLImageElement>("[data-accrete-logo]");
      const tgLogoH = tgLogo?.getBoundingClientRect().height || 56;
      const chipLogoH = 16;
      const maxScale = Math.max(2, tgLogoH / chipLogoH);
      const scale = lerp(1, maxScale, progress);

      const w = morph.offsetWidth;
      const h = morph.offsetHeight;
      morph.style.transform = `translate3d(${cxVp - w / 2}px, ${cyVp - h / 2}px, 0) scale(${scale})`;

      // Typography morph — bronze→foreground, weight, letter-spacing
      const inner = morph.querySelector<HTMLElement>(".accrete-morph-inner");
      if (inner) {
        inner.style.fontWeight = String(Math.round(lerp(700, 800, progress)));
        inner.style.letterSpacing = `${lerp(0.01, -0.012, progress)}em`;
        const r = Math.round(lerp(33, 33, progress));
        const g = Math.round(lerp(33, 33, progress));
        const b = Math.round(lerp(33, 33, progress));
        inner.style.color = `rgb(${r}, ${g}, ${b})`;
      }

      // Ring fades out early (well before scale gets large)
      const ring = morph.querySelector<HTMLElement>("[data-ring]");
      if (ring) {
        ring.style.opacity = String(clamp01(1 - rawProgress / 0.45));
      }

      // Chevron pulses fade out first (strongest visual, would disrupt scale)
      const pulse = morph.querySelector<HTMLElement>("[data-pulse]");
      if (pulse) {
        pulse.style.opacity = String(clamp01(1 - rawProgress / 0.20));
      }

      // Orbiting dot fades out quickly as morph begins (it "becomes" the flag)
      const dot = morph.querySelector<HTMLElement>("[data-dot]");
      if (dot) {
        dot.style.opacity = String(clamp01(1 - rawProgress / 0.08));
      }

      // Japan flag — slides from chip dot to the right edge of the Accrete logo
      // inside the TrustBand heading, morphs disc → Hinomaru flag.
      const flag = flagRef.current;
      if (flag) {
        if (tgLogo && rawProgress > 0.001) {
          const logoRect = tgLogo.getBoundingClientRect();
          // Start: current chip center in viewport
          const startXVp = phRect.left + phRect.width / 2;
          const startYVp = phRect.top + phRect.height / 2;
          // End: anchor strictly to the logo's bbox — gap scales with logo height,
          // vertical center = bbox center (independent of font/line-height).
          const gap = Math.max(8, logoRect.height * 0.22);
          const endXVp = logoRect.right + gap;
          const endYVp = logoRect.top + logoRect.height / 2;
          // Flag travel uses its own eased progress (front-loaded so it lands before headline does)
          const fp = easeInOutCubic(clamp01(rawProgress / 0.55));
          const fx = lerp(startXVp, endXVp, fp);
          const fy = lerp(startYVp, endYVp, fp);
          // Shape morph — flag final size scales with logo height
          const flagH = Math.max(12, logoRect.height * 0.55);
          const flagW = flagH * 1.5;
          const w = lerp(7, flagW, fp);
          const h = lerp(7, flagH, fp);
          const radius = lerp(50, 10, fp); // % — disc → soft-cornered rect
          const isFlag = fp > 0.65;
          // White bg blends in after halfway
          const r = Math.round(lerp(188, 255, fp));
          const g = Math.round(lerp(0, 255, fp));
          const b = Math.round(lerp(45, 255, fp));
          flag.style.opacity = "1";
          flag.style.transform = `translate3d(${fx - w / 2}px, ${fy - h / 2}px, 0)`;
          flag.style.width = `${w}px`;
          flag.style.height = `${h}px`;
          flag.style.borderRadius = `${radius}%`;
          flag.style.background = `rgb(${r},${g},${b})`;
          flag.style.boxShadow = isFlag
            ? "0 1px 3px rgba(0,0,0,0.18), 0 0 0 0.5px rgba(0,0,0,0.08)"
            : "0 0 10px rgba(188,0,45,0.55)";
          flag.dataset.flag = isFlag ? "1" : "0";
        } else {
          flag.style.opacity = "0";
          flag.dataset.flag = "0";
        }
      }

      // Logo polish — saturate as it lands
      const logoImg = morph.querySelector<HTMLImageElement>("[data-morph-logo]");
      if (logoImg) {
        logoImg.style.filter = `saturate(${lerp(0.9, 1, progress)})`;
      }

      const landed = rawProgress >= 0.98;
      if (landed && !landedRef.current) {
        landedRef.current = true;
        window.dispatchEvent(new CustomEvent("accrete:landed"));
      } else if (!landed && landedRef.current && rawProgress < 0.9) {
        landedRef.current = false;
      }
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
    const t1 = window.setTimeout(update, 250);
    const t2 = window.setTimeout(update, 1200);

    // Recompute when the Accrete logo image actually decodes (lazy/async)
    // and whenever the target heading reflows (font load, viewport changes).
    const tgLogoEl = document.querySelector<HTMLImageElement>("[data-accrete-logo]");
    const tgEl = document.querySelector<HTMLElement>("[data-accrete-target]");
    const onLogoLoad = () => onResize();
    if (tgLogoEl) {
      if (!tgLogoEl.complete) tgLogoEl.addEventListener("load", onLogoLoad);
    }
    let ro: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined" && tgEl) {
      ro = new ResizeObserver(() => onResize());
      ro.observe(tgEl);
      if (tgLogoEl) ro.observe(tgLogoEl);
    }
    // Re-run after web fonts finish loading (line-height shifts can move bbox)
    if ((document as any).fonts?.ready) {
      (document as any).fonts.ready.then(() => onResize()).catch(() => {});
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      if (tgLogoEl) tgLogoEl.removeEventListener("load", onLogoLoad);
      ro?.disconnect();
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
        <span
          data-chip-anchor
          className="invisible inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-bold"
        >
          <span className="leading-none">A member of</span>
          <img src={accreteLogo} alt="" aria-hidden className="h-[20px] w-auto" />
        </span>
      </div>

      {/* Portaled morph element. */}
      {mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={morphRef}
            className="accrete-morph fixed left-0 top-0 z-40"
            style={{ transformOrigin: "50% 50%", willChange: "transform" }}
          >
            {/* VietGuys chevron pulses — bắn ngang trái (xanh) + phải (cam) */}
            <div
              data-pulse
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ transition: "opacity 200ms linear" }}
            >
              <span className="vg-chevron vg-chevron-left">
                <svg viewBox="0 0 12 16">
                  <path d="M10 2 L2 8 L10 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="vg-chevron vg-chevron-left vg-chevron-delay">
                <svg viewBox="0 0 12 16">
                  <path d="M10 2 L2 8 L10 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="vg-chevron vg-chevron-right">
                <svg viewBox="0 0 12 16">
                  <path d="M2 2 L10 8 L2 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="vg-chevron vg-chevron-right vg-chevron-delay">
                <svg viewBox="0 0 12 16">
                  <path d="M2 2 L10 8 L2 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>

            <a
              href="https://www.accrete-inc.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A member of Accrete Inc. — from Japan"
              className="accrete-morph-inner relative inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-[12px] font-bold tracking-wide"
              style={{ color: "rgb(33,33,33)" }}
            >
              {/* Ring (Accrete Loop) + orbiting dot + comet trail */}
              <span
                data-ring
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{ transition: "opacity 200ms linear" }}
              >
                <span
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: `1.25px solid ${TEAL}`,
                    boxShadow: `0 0 0 1px hsl(168 60% 52% / 0.08)`,
                  }}
                />
                {/* Single Japan-red orbiting dot */}
                <span
                  data-dot
                  className="accrete-orbit-dot"
                  style={{ transition: "opacity 160ms linear" }}
                />
              </span>


              <span className="relative z-[2] leading-none">A member of</span>
              <img
                src={accreteLogo}
                alt=""
                aria-hidden="true"
                data-morph-logo
                className="relative z-[2] block h-[16px] w-auto"
              />

            </a>
          </div>,
          document.body
        )}

      {/* Japan flag — fixed portal element that morphs from chip dot → Hinomaru at headline end */}
      {mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <span
            ref={flagRef}
            className="japan-flag"
            aria-hidden="true"
          />,
          document.body
        )}
    </>
  );
};
