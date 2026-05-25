import { cn } from "@/lib/utils";

interface VWatermarkProps {
  /** Size in CSS units; default fills container */
  className?: string;
  /** Tint preset — controls the two colours of the V/L marks */
  tone?: "brand" | "green" | "orange" | "muted";
}

/**
 * Decorative oversized V-mark used as a brand watermark behind sections.
 * Keep opacity low (3–6%) so it reads as texture, not content.
 */
export const VWatermark = ({ className, tone = "brand" }: VWatermarkProps) => {
  const greenFill =
    tone === "orange" ? "hsl(var(--accent))" : "hsl(var(--primary))";
  const orangeFill =
    tone === "green"
      ? "hsl(var(--primary))"
      : tone === "muted"
      ? "hsl(var(--muted-foreground))"
      : "hsl(var(--accent))";

  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 12 L42 12 L52 64 L48 88 L34 88 Z" fill={greenFill} />
      <path d="M58 12 L92 12 L70 88 L48 88 L52 64 Z" fill={orangeFill} />
    </svg>
  );
};

/** Thin angular V-shaped section divider, echoing the logo silhouette. */
export const VDivider = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 1200 24"
    preserveAspectRatio="none"
    aria-hidden="true"
    className={cn("block h-3 w-full", className)}
  >
    <path
      d="M0 0 L560 0 L600 22 L640 0 L1200 0"
      fill="none"
      stroke="hsl(var(--border))"
      strokeWidth="1.2"
    />
  </svg>
);

/** Repeating V-pattern background — use as a subtle texture
 *  in CTA bands or footers. Keep opacity low. */
export const VPattern = ({
  className,
  opacity = 0.05,
}: {
  className?: string;
  opacity?: number;
}) => (
  <svg
    aria-hidden="true"
    className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    style={{ opacity }}
  >
    <defs>
      <pattern id="vg-pat" width="56" height="56" patternUnits="userSpaceOnUse">
        <path d="M8 10 L22 10 L26 38 L24 46 L18 46 Z" fill="hsl(var(--primary))" />
        <path d="M30 10 L44 10 L36 46 L24 46 L26 38 Z" fill="hsl(var(--accent))" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#vg-pat)" />
  </svg>
);

/** Inline mini-V bullet (8×8). Use inside text or list rows. */
export const VBullet = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 10 10"
    aria-hidden="true"
    className={cn("inline-block h-2 w-2 shrink-0", className)}
  >
    <path d="M0 0 L4.5 0 L5 6 L5 10 L4 10 Z" fill="hsl(var(--primary))" />
    <path d="M5.5 0 L10 0 L6 10 L5 10 L5 6 Z" fill="hsl(var(--accent))" />
  </svg>
);

/** Angular "L-arrow" — replaces → on brand links/CTAs. */
export const LArrow = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 16 12"
    aria-hidden="true"
    className={cn("inline-block h-3 w-4", className)}
  >
    <path
      d="M0 6 L11 6 M7 1 L13 6 L7 11"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

