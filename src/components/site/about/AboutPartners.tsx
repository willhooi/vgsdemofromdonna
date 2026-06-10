import { Reveal } from "@/components/motion/Reveal";
import bytetech from "@/assets/brand/bytetech.svg";
import cxgenie from "@/assets/brand/cxgenie.svg";

const partners = [
  { logo: bytetech, name: "ByteTech", tag: "Enterprise CDP" },
  { logo: null, name: "CNV", tag: "Mini CDP" },
  { logo: cxgenie, name: "CX Genie", tag: "AI Implementation" },
];

export const AboutPartners = () => (
  <section
    className="py-24 md:py-32"
    style={{
      background:
        "linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(0 0% 97%) 20%, hsl(0 0% 97%) 80%, hsl(0 0% 100%) 100%)",
    }}
  >
    <div className="container-tight">
      <Reveal variant="fade-up" className="mx-auto max-w-2xl text-center">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.24em]"
          style={{ color: "hsl(var(--primary-deep))" }}
        >
          Strategic Partners
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground md:text-5xl">
          An ecosystem built for{" "}
          <span style={{ color: "hsl(var(--primary))" }}>intelligent engagement.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((p, i) => (
          <Reveal key={p.name} variant="fade-up" delay={i * 110}>
            <article className="flex h-full flex-col items-center rounded-[18px] border border-border bg-background p-8 text-center shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]">
              <div className="flex h-16 items-center justify-center">
                {p.logo ? (
                  <img src={p.logo} alt={p.name} className="h-10 w-auto" />
                ) : (
                  <span className="font-display text-2xl font-extrabold text-foreground">
                    {p.name}
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{p.name}</h3>
              <span
                className="mt-3 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
                style={{
                  background: "hsl(var(--primary) / 0.12)",
                  color: "hsl(var(--primary-deep))",
                }}
              >
                {p.tag}
              </span>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal variant="fade" delay={300}>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Coming soon: Insight Genie &amp; ForwardEdge.
        </p>
      </Reveal>
    </div>
  </section>
);
