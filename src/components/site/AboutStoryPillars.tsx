import teamImg from "@/assets/about/about-team.jpg";
import qualityImg from "@/assets/about/about-quality.jpg";
import communityImg from "@/assets/about/about-community.jpg";

const pillars = [
  {
    img: teamImg,
    alt: "VietGuys team collaborating in the Ho Chi Minh City office",
    kicker: "Our people",
    title: "A team that grew up together.",
    body: "From a 25m² room in 2007 to today's engineering, product and customer teams — built on the same belief: every voice in the room matters.",
  },
  {
    img: qualityImg,
    alt: "Engineer monitoring real-time message delivery analytics",
    kicker: "Our standard",
    title: "Quality, never optional.",
    body: "Carrier-grade routing, ISO/IEC 27001 controls, and a 99.95% uptime SLA — because a missed message is a missed customer.",
  },
  {
    img: communityImg,
    alt: "VietGuys volunteers visiting a rural community in Vietnam",
    kicker: "Our community",
    title: "Trust earned beyond the platform.",
    body: "Every year, the team shows up — for schools, for relief efforts, for the places our customers also serve. Business is part of a longer story.",
  },
];

export const AboutStoryPillars = () => (
  <section className="py-20 md:py-28">
    <div className="container-tight">
      <div className="max-w-2xl">
        <span className="chapter-eyebrow">The why behind the work</span>
        <h2 className="heading-section mt-4 text-balance">
          Three pillars that have outlasted every trend.
        </h2>
        <p className="mt-5 text-muted-foreground">
          Tools change. Channels change. The reasons we built VietGuys haven&apos;t.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <article
            key={p.title}
            className="group overflow-hidden rounded-3xl border border-border bg-background shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] animate-fade-up"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                width={1280}
                height={960}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
            <div className="p-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                {p.kicker}
              </span>
              <h3 className="mt-2 text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
