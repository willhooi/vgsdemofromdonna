const pillars = [
  {
    kicker: "Our People",
    title: "A team that grew together.",
    body: "From a 25m² room in 2007 to today's engineering powerhouses — built on the belief that every voice in the room matters.",
  },
  {
    kicker: "Our Standard",
    title: "Quality, never optional.",
    body: "Carrier-grade routing, ISO 27001 controls, and a 99.95% uptime SLA — because a missed message is a missed customer.",
  },
  {
    kicker: "Our Community",
    title: "Trust earned beyond the platform.",
    body: "Every year, the team shows up for relief efforts and local schools. Business is part of a longer story.",
  },
];

export const AboutPillars = () => (
  <section className="py-24 md:py-32 bg-primary-deep/95 text-primary-foreground" style={{ background: "hsl(var(--primary-deep))" }}>
    <div className="container-tight">
      <h2 className="font-['Instrument_Serif'] italic text-4xl md:text-5xl mb-16 md:mb-20 max-w-3xl text-balance">
        Three pillars that have outlasted every trend.
      </h2>
      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        {pillars.map((p) => (
          <div key={p.title}>
            <div className="text-[10px] uppercase tracking-[0.2em] mb-8 font-bold opacity-70">
              {p.kicker}
            </div>
            <h3 className="font-['Instrument_Serif'] text-2xl md:text-3xl mb-4">{p.title}</h3>
            <p className="text-sm leading-relaxed font-light opacity-80">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
