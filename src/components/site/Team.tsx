const team = [
  {
    name: "Nguyễn Minh Quân",
    role: "Chief Executive Officer",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    bio: "20+ years building Vietnam's messaging infrastructure.",
  },
  {
    name: "Trần Thu Hà",
    role: "Chief Product Officer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Leads AI engagement product across SMS, Zalo & ZNS.",
  },
  {
    name: "Hiroshi Tanaka",
    role: "Board Director, Accrete Inc.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Brings Tokyo Stock Exchange-grade governance & trust.",
  },
  {
    name: "Lê Hoàng Nam",
    role: "Head of Customer Success",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    bio: "Partners daily with banking, retail & airline leaders.",
  },
];

export const Team = () => (
  <section id="team" className="py-24 md:py-32">
    <div className="container-tight">
      <div className="max-w-2xl">
        <span className="eyebrow">The people behind VietGuys</span>
        <h2 className="heading-section mt-4 text-balance">
          Real humans, on call for your brand.
        </h2>
        <p className="mt-5 text-muted-foreground">
          Behind every message delivered is a team that&apos;s been doing this since 2007 — engineers,
          product leads and customer partners who care as much about your campaigns as you do.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m, i) => (
          <article
            key={m.name}
            className="group rounded-3xl border border-border bg-background p-4 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img
                src={m.img}
                alt={`${m.name}, ${m.role} at VietGuys`}
                loading="lazy"
                decoding="async"
                width={400}
                height={500}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="mt-4">
              <h3 className="text-base font-bold text-foreground">{m.name}</h3>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{m.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{m.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
