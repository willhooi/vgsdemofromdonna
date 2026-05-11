import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "VI">("EN");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
      isActive
        ? "text-[hsl(var(--accent))]"
        : "text-muted-foreground hover:text-foreground",
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="container-tight flex h-16 items-center justify-between gap-2 md:h-20">
        {/* Left: Logo */}
        <Link to="/" aria-label="VietGuys home" className="shrink-0">
          <Logo />
        </Link>

        {/* Centre: nav */}
        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {nav.map((n) => (
            <NavLink key={n.href} to={n.href} className={linkClass} end>
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang((l) => (l === "EN" ? "VI" : "EN"))}
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground md:inline-flex"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            <span className={cn(lang === "EN" && "text-foreground")}>EN</span>
            <span className="text-border">|</span>
            <span className={cn(lang === "VI" && "text-foreground")}>VI</span>
          </button>

          <Button variant="cta" size="default" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>

          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-tight flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <NavLink
                key={n.href}
                to={n.href}
                end
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-3 text-sm font-medium hover:bg-secondary",
                    isActive ? "text-[hsl(var(--accent))]" : "text-foreground",
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
            <button
              onClick={() => setLang((l) => (l === "EN" ? "VI" : "EN"))}
              className="mt-1 inline-flex items-center gap-1.5 rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary"
            >
              <Globe className="h-4 w-4" />
              <span className={cn(lang === "EN" && "font-semibold")}>EN</span>
              <span className="text-border">|</span>
              <span className={cn(lang === "VI" && "font-semibold")}>VI</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
