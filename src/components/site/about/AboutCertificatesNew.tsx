import { Reveal } from "@/components/motion/Reveal";

type Cert = {
  badge: string;
  title: string;
  body: string;
  /** HSL triplet without the hsl() wrapper, e.g. "38 92% 50%" */
  accent: string;
  /** Optional certificate logo/image URL */
  image?: string;
};

const certs: Cert[] = [
  {
    badge: "International Standard",
    title: "ISO/IEC 27001:2022",
    body: "Information security management — audited by Bureau Veritas & UKAS.",
    accent: "var(--primary)",
  },
  {
    badge: "National Authority",
    title: "VNCERT Certification",
    body: "Certified by Vietnam's national cybersecurity emergency response centre.",
    accent: "38 92% 50%",
  },
  {
    badge: "Telecom License",
    title: "VNTA License",
    body: "Licensed provider of telecommunications services in Vietnam.",
    accent: "210 80% 50%",
  },
  {
    badge: "Platform Partner",
    title: "Zalo Trusted Partner",
    body: "Officially recognised by Zalo, Vietnam's largest messaging platform.",
    accent: "212 100% 50%",
  },
];

const accentColor = (accent: string) =>
  accent.startsWith("var(") ? `hsl(${accent})` : `hsl(${accent})`;
const accentAlpha = (accent: string, a: number) =>
  accent.startsWith("var(") ? `hsl(${accent} / ${a})` : `hsl(${accent} / ${a})`;

export const AboutCertificatesNew = () => (
  <section id="certificates" className="bg-background py-20 md:py-24">
    <div className="container-tight">
      <Reveal variant="fade-up" className="mx-auto max-w-2xl text-center">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.24em]"
          style={{ color: "hsl(var(--primary-deep))" }}
        >
          Certificates &amp; Licenses
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground md:text-5xl">
          Trust, <span className="text-primary">on paper.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          The credentials behind every conversation we power — audited and re-certified
          annually by Vietnamese authorities, international standards bodies, and the
          platforms we partner with.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certs.map((c, i) => {
          const color = accentColor(c.accent);
          const tint = accentAlpha(c.accent, 0.1);
          const shadow = accentAlpha(c.accent, 0.18);
          const initial = c.title.replace(/[^A-Za-z]/g, "").charAt(0) || "•";

          return (
            <Reveal key={c.title} variant="fade-up" delay={i * 90}>
              <article
                className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-500 hover:-translate-y-2"
                style={{
                  // @ts-expect-error CSS custom property
                  "--cert-shadow": shadow,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 50px ${shadow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {/* Logo slot */}
                <div className="relative mb-8 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-muted/40 p-6">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={`${c.title} logo`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="flex h-24 w-24 items-center justify-center rounded-full bg-background shadow-sm"
                    >
                      <div
                        className="flex h-full w-full items-center justify-center rounded-full"
                        style={{ background: tint }}
                      >
                        <span
                          className="font-display text-2xl font-extrabold"
                          style={{ color }}
                        >
                          {initial}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col">
                  <span
                    className="mb-4 inline-block w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: tint, color }}
                  >
                    {c.badge}
                  </span>
                  <h3 className="mb-3 text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
