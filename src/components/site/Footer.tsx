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
      {[
        { h: "Solutions", l: ["Core Messaging", "PangoCDP", "Behavioural AI", "Account Intelligence"] },
        { h: "Company", l: ["About VietGuys", "SHARP Methodology", "Accrete Inc.", "Careers"] },
        { h: "Resources", l: ["Insights", "Case Studies", "Security · ISO 27001", "Contact Sales"] },
      ].map((c) => (
        <div key={c.h}>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-foreground">{c.h}</h4>
          <ul className="mt-4 space-y-2.5">
            {c.l.map((i) => (
              <li key={i}>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {i}
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
