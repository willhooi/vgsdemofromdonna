import { useEffect, useState } from "react";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, lang, toggle } = useT();
  const location = useLocation();

  const nav = [
    { label: t("nav.solutions"), href: "/solutions" },
    { label: t("nav.caseStudy"), href: "/case-studies" },
    { label: t("nav.marketInsight"), href: "/market-insights" },
    { label: t("nav.about"), href: "/about" },
  ];

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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-xl shadow-[0_4px_20px_-12px_rgba(0,0,0,0.08)]"
          : "bg-background/60 backdrop-blur-md",
      )}
    >
      {/* Mobile announcement bar */}
      <Link
        to="/demo"
        className="flex md:hidden items-center justify-center gap-1.5 bg-[#39b44a] py-1.5 text-center text-[11px] font-medium text-white"
      >
        {t("nav.demoBar")}
        <ArrowRight className="h-3 w-3" />
      </Link>

      <div className="container-tight flex h-14 items-center justify-between gap-3 md:h-[68px] lg:h-20">
        {/* Left: Logo */}
        <Link to="/" aria-label="VietGuys home" className="shrink-0">
          <Logo className="h-8 w-auto sm:h-9 md:h-10 lg:h-11 object-contain" />
        </Link>

        {/* Centre: nav */}
        <nav className="hidden flex-1 items-center justify-center gap-0.5 md:flex lg:gap-1">
          {nav.map((n) => (
            <NavLink key={n.href} to={n.href} className={linkClass} end>
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-1.5 md:gap-2">
          <button
            onClick={toggle}
            className="hidden items-center gap-1.5 rounded-full px-2.5 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground md:inline-flex"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            <span className={cn(lang === "en" && "text-foreground")}>EN</span>
            <span className="text-border">|</span>
            <span className={cn(lang === "vi" && "text-foreground")}>VI</span>
          </button>

          <Button
            variant="cta"
            size="sm"
            asChild
            className="bg-[#39b44a] text-white shadow-[0_8px_24px_-8px_rgba(57,180,74,0.6)] hover:bg-[#2fa040] hover:brightness-100 md:h-10 md:px-5 md:text-sm"
          >
            <Link to="/contact">{t("nav.contact")}</Link>
          </Button>

          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
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
              onClick={toggle}
              className="mt-1 inline-flex items-center gap-1.5 rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary"
            >
              <Globe className="h-4 w-4" />
              <span className={cn(lang === "en" && "font-semibold")}>EN</span>
              <span className="text-border">|</span>
              <span className={cn(lang === "vi" && "font-semibold")}>VI</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
