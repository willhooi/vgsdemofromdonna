import { MessageCircle, Phone } from "lucide-react";

export const FloatingActions = () => (
  <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
    <a
      href="#contact"
      aria-label="Talk to expert"
      className="group flex h-16 w-16 flex-col items-center justify-center rounded-2xl text-[8px] font-bold uppercase tracking-wider text-white shadow-[var(--shadow-cta)] transition-all hover:-translate-y-0.5"
      style={{ background: "hsl(var(--accent))" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "hsl(var(--accent-deep))")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = "hsl(var(--accent))")
      }
    >
      <MessageCircle className="h-5 w-5" />
      <span className="mt-1 leading-tight text-center">Talk to<br />expert</span>
    </a>
    <a
      href="tel:+842839106869"
      aria-label="Call us"
      className="group flex h-16 w-16 flex-col items-center justify-center rounded-2xl text-[8px] font-bold uppercase tracking-wider text-white shadow-[var(--shadow-cta)] transition-all hover:-translate-y-0.5"
      style={{ background: "hsl(var(--accent))" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "hsl(var(--accent-deep))")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = "hsl(var(--accent))")
      }
    >
      <Phone className="h-5 w-5" />
      <span className="mt-1 leading-tight">Call us</span>
    </a>
  </div>
);
