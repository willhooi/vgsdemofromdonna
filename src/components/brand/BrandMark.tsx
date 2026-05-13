import { cn } from "@/lib/utils";

type Variant = "icon" | "horizontal" | "stacked";

interface BrandMarkProps {
  variant?: Variant;
  className?: string;
  /** When true, shows the small "Customer Engagement" tagline under the wordmark */
  withTagline?: boolean;
}

/**
 * VietGuys brand mark — inline SVG so colours scale with currentColor / theme.
 * The "V" is brand green, the "L" is brand orange — the visual fingerprint
 * of the company that we then re-use as a watermark across the site.
 */
export const BrandMark = ({
  variant = "horizontal",
  className,
  withTagline = false,
}: BrandMarkProps) => {
  const Icon = (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Green V */}
      <path
        d="M8 12 L42 12 L52 64 L48 88 L34 88 Z"
        fill="hsl(var(--primary))"
      />
      {/* Orange L (mirrored angular form) */}
      <path
        d="M58 12 L92 12 L70 88 L48 88 L52 64 Z"
        fill="hsl(var(--accent))"
      />
    </svg>
  );

  if (variant === "icon") {
    return (
      <span className={cn("inline-block h-9 w-9", className)} aria-label="VietGuys">
        {Icon}
      </span>
    );
  }

  if (variant === "stacked") {
    return (
      <span className={cn("inline-flex flex-col items-center gap-2", className)} aria-label="VietGuys">
        <span className="h-12 w-12">{Icon}</span>
        <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
          VIETGUYS
        </span>
        {withTagline && (
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Mobile Marketing Solutions
          </span>
        )}
      </span>
    );
  }

  // horizontal (default)
  return (
    <span
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="VietGuys"
    >
      <span className="h-9 w-9 shrink-0">{Icon}</span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-extrabold tracking-tight text-foreground">
          VIETGUYS
        </span>
        {withTagline && (
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Mobile Marketing
          </span>
        )}
      </span>
    </span>
  );
};
