const trust = [
  "Telecom Licensed Operator",
  "Zalo Trusted Partner",
  "ISO 27001:2013",
  "Backed by Accrete Inc.",
  "Tokyo Stock Exchange",
  "5M Messages / day",
];

export const LogoMarquee = () => (
  <section className="border-y border-border bg-secondary/40 py-6">
    <div className="container-tight">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {trust.map((t) => (
          <span key={t} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-primary" />
            {t}
          </span>
        ))}
      </div>
    </div>
  </section>
);
