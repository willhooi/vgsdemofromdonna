import { useEffect, useState } from "react";

const sections = [
  { id: "story", label: "Story" },
  { id: "vision", label: "Vision & Mission" },
  { id: "milestones", label: "Milestones" },
  { id: "values", label: "Core Values" },
  { id: "team", label: "Team" },
  { id: "certificates", label: "Certificates" },
];

export const AboutSectionNav = () => {
  const [active, setActive] = useState<string>("story");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="About sections"
      className="sticky top-16 z-30 border-y border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70"
    >
      <div className="container-tight">
        <ul className="-mx-4 flex snap-x snap-mandatory gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-center">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id} className="snap-start">
                <a
                  href={`#${s.id}`}
                  onClick={handleClick(s.id)}
                  className={`relative inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full"
                      style={{ background: "var(--gradient-brand)" }}
                    />
                  )}
                  <span className="relative">{s.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
