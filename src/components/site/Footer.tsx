import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="border-t border-border bg-background py-14">
    <div className="container-tight grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <Logo />
        <p className="mt-5 max-w-sm text-sm text-muted-foreground">
          AI-powered customer engagement, built for Vietnam&apos;s leading enterprises.
          Backed by Accrete Inc., Japan.
        </p>
      </div>
      {([
        { h: "Solutions", l: [
          { t: "Core Messaging", h: "/#solutions" },
          { t: "PangoCDP", h: "/#solutions" },
          { t: "Behavioural AI", h: "/#sharp" },
          { t: "Account Intelligence", h: "/#sharp" },
        ]},
        { h: "Company", l: [
          { t: "About VietGuys", h: "/about" },
          { t: "SHARP Methodology", h: "/#sharp" },
          { t: "Accrete Inc.", h: "https://www.accrete-inc.com/" },
          { t: "Careers", h: "#" },
        ]},
        { h: "Resources", l: [
          { t: "Insights", h: "/#insights" },
          { t: "Case Studies", h: "/#insights" },
          { t: "Security · ISO 27001", h: "/#trust" },
          { t: "Contact Sales", h: "/#contact" },
        ]},
      ]).map((c) => (
        <div key={c.h}>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-foreground">{c.h}</h4>
          <ul className="mt-4 space-y-2.5">
            {c.l.map((i) => (
              <li key={i.t}>
                <a href={i.h} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {i.t}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="container-tight mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
      <p>© {new Date().getFullYear()} VietGuys — Mobile Marketing Solutions. Backed by Accrete Inc.</p>
      <div className="flex gap-5">
        <a href="#" className="hover:text-foreground">Privacy</a>
        <a href="#" className="hover:text-foreground">Terms</a>
        <a href="#" className="hover:text-foreground">Security</a>
      </div>
    </div>
  </footer>
);
