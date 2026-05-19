import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import accreteLogo from "@/assets/brand/accrete-logo.png";

/**
 * AccreteFlightChip — premium scroll-linked shared-element morph.
 *
 * progress 0 → metallic champagne chip with halo + Japan flag, sitting as
 *               eyebrow above the Hero headline.
 * progress 1 → lands on the TrustBand headline at full size, surface dissolved,
 *               weight + spacing + color matching enterprise typography.
 *
 * Bidirectional (pure function of scrollY). GPU-only transforms.
 */

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
// Smooth premium easing (ease-in-out cubic)
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const JapanFlag = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 15 10"
    aria-hidden="true"
    className={className}
    style={{ display: "block" }}
  >
    <rect width="15" height="10" rx="1.2" fill="#ffffff" />
    <circle cx="7.5" cy="5" r="3" fill="#bc002d" />
    <rect
      x="0.25"
      y="0.25"
      width="14.5"
      height="9.5"
      rx="1.05"
      fill="none"
      stroke="rgba(0,0,0,0.12)"
      strokeWidth="0.5"
    />
  </svg>
);

export const AccreteFlightChip = () => {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const morphRef = useRef<HTMLDivElement>(null);
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

      const phRect = placeholder.getBoundingClientRect();
      const tgRect = target.getBoundingClientRect();
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      const phCxDoc = phRect.left + phRect.width / 2;
      const phCyDoc = phRect.top + scrollY + phRect.height / 2;
      const tgCxDoc = tgRect.left + tgRect.width / 2;
      const tgCyDoc = tgRect.top + scrollY + tgRect.height / 2;

      // Longer travel for premium feel
      const endScroll = Math.max(tgCyDoc - vh * 0.55, 80);
      const rawProgress = clamp01(scrollY / endScroll);
      const progress = easeInOutCubic(rawProgress);

      const cxVp = lerp(phCxDoc, tgCxDoc, progress);
      const cyVp = lerp(phCyDoc, tgCyDoc, progress) - scrollY;

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

      // Inner typography morph
      const inner = morph.querySelector<HTMLElement>(".accrete-morph-inner");
      if (inner) {
        inner.style.fontWeight = String(Math.round(lerp(600, 800, progress)));
        inner.style.letterSpacing = `${lerp(0.02, -0.012, progress)}em`;
        // Color: green chip → foreground at landing
        const r = Math.round(lerp(40, 33, progress));
        const g = Math.round(lerp(95, 33, progress));
        const b = Math.round(lerp(55, 33, progress));
        inner.style.color = `rgb(${r}, ${g}, ${b})`;
        inner.style.textShadow =
          progress > 0.6
            ? `0 1px 0 rgba(255,255,255,${(progress - 0.6) * 1.2})`
            : "none";
      }

      // Surface dissolve — border ring fades fast, gradient bg lingers
      const surface = morph.querySelector<HTMLElement>(".accrete-morph-surface");
      if (surface) {
        const borderOpacity = clamp01(1 - rawProgress / 0.5);
        const bgOpacity = clamp01(1 - Math.max(0, rawProgress - 0.3) / 0.5);
        surface.style.setProperty("--surface-border", String(borderOpacity));
        surface.style.setProperty("--surface-bg", String(bgOpacity));
        surface.style.opacity = String(clamp01(1 - progress * 0.95));
      }

      // Halo: bloom from chip → fade as we approach landing
      const halo = morph.querySelector<HTMLElement>(".accrete-morph-halo");
      if (halo) {
        const haloScale = lerp(1, 1.35, Math.min(progress * 1.5, 1));
        const haloOpacity = clamp01(1 - progress * 1.4);
        halo.style.transform = `scale(${haloScale})`;
        halo.style.opacity = String(haloOpacity);
      }

      // Specular shimmer — sweep position driven by progress (scanner effect)
      const shimmer = morph.querySelector<HTMLElement>(".accrete-morph-shimmer");
      if (shimmer) {
        const sweep = lerp(-120, 220, progress);
        shimmer.style.transform = `translateX(${sweep}%) skewX(-22deg)`;
        shimmer.style.opacity = String(clamp01(1 - rawProgress / 0.85));
      }

      // Logo polish — saturate + crispen as it lands
      const logoImg = morph.querySelector<HTMLImageElement>("[data-morph-logo]");
      if (logoImg) {
        logoImg.style.filter = `saturate(${lerp(0.85, 1, progress)}) drop-shadow(0 ${lerp(
          1,
          6,
          progress
        )}px ${lerp(2, 14, progress)}px rgba(15,27,61,${lerp(0.05, 0.18, progress)}))`;
      }

      // Idle state class for breathing micro-motion
      if (rawProgress < 0.04) {
        morph.classList.add("accrete-morph-idle");
      } else {
        morph.classList.remove("accrete-morph-idle");
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
            {/* Halo — soft champagne glow behind chip */}
            <span
              className="accrete-morph-halo pointer-events-none absolute inset-0 -z-10 rounded-full"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(60% 80% at 50% 50%, hsl(38 70% 70% / 0.55) 0%, hsl(38 70% 70% / 0) 70%)",
                filter: "blur(12px)",
                transformOrigin: "50% 50%",
              }}
            />

            <a
              href="https://www.accrete-inc.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A member of Accrete Inc. — from Japan"
              className="accrete-morph-inner relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide"
              style={{ color: "rgb(40,95,55)" }}
            >
              {/* Surface = border ring + champagne gradient, dissolves on scroll */}
              <span
                className="accrete-morph-surface accrete-chip-surface absolute inset-0 rounded-full pointer-events-none"
                aria-hidden="true"
              >
                <span
                  className="accrete-morph-shimmer absolute top-0 bottom-0 left-0 pointer-events-none"
                  aria-hidden="true"
                  style={{
                    width: "40%",
                    background:
                      "linear-gradient(100deg, transparent 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.9) 50%, rgba(255,240,200,0.5) 60%, rgba(255,255,255,0) 70%, transparent 100%)",
                    transform: "translateX(-120%) skewX(-22deg)",
                  }}
                />
              </span>
              <span className="relative z-[2]">A member of</span>
              <img
                src={accreteLogo}
                alt=""
                aria-hidden="true"
                data-morph-logo
                className="relative z-[2] h-[14px] w-auto"
              />
              <JapanFlag className="relative z-[2] h-[10px] w-[14px] shrink-0" />
            </a>
          </div>,
          document.body
        )}
    </>
  );
};
