import { useEffect, useRef, useState, type ReactNode, type CSSProperties, type ElementType } from "react";
import { cn } from "@/lib/utils";

type Variant = "fade-up" | "fade" | "clip-right" | "scale-soft" | "blur-in";

interface RevealProps {
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  threshold?: number;
}

export const Reveal = ({
  as: Tag = "div",
  variant = "fade-up",
  delay = 0,
  className,
  style,
  children,
  threshold = 0,
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // Immediate check: if already in (or above) viewport, show right away.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      setShown(true);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);

    // Safety fallback — never let content stay invisible.
    const t = window.setTimeout(() => setShown(true), 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [threshold]);

  return (
    <Tag
      ref={ref as any}
      data-reveal={variant}
      data-in={shown ? "true" : "false"}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
};
