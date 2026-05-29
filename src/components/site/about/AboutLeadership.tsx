const team = [
  {
    name: "Nguyễn Minh Quân",
    role: "Chief Executive Officer",
    bio: "20+ years building Vietnam's messaging infrastructure.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Trần Thu Hà",
    role: "Chief Product Officer",
    bio: "Leads engagement product across SMS, Zalo & ZNS.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Hiroshi Tanaka",
    role: "Board Director, Accrete Inc.",
    bio: "Brings Tokyo Stock Exchange-grade governance & trust.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Lê Hoàng Nam",
    role: "Head of Customer Success",
    bio: "Partners daily with banking, retail & airline leaders.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
];

export const AboutLeadership = () => (
  <section className="py-24 md:py-32 bg-[#fcfaf7]">
    <div className="container-tight">
      <h2 className="font-['Instrument_Serif'] text-4xl md:text-5xl mb-16 md:mb-20 text-foreground text-balance max-w-2xl">
        Real humans, <br className="hidden md:block" />
        on call for your brand.
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {team.map((m, i) => (
          <article
            key={m.name}
            className="group animate-fade-up"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className="aspect-[3/4] bg-secondary mb-6 overflow-hidden">
              <img
                src={m.img}
                alt={`${m.name}, ${m.role}`}
                loading="lazy"
                decoding="async"
                width={400}
                height={533}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <h4 className="font-semibold text-base mb-1 text-foreground">{m.name}</h4>
            <p className="text-[10px] text-primary uppercase tracking-wider font-bold mb-3">
              {m.role}
            </p>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">{m.bio}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
