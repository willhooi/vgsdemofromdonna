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
