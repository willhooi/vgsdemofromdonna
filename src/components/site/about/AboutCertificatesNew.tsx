import { Reveal } from "@/components/motion/Reveal";

const certs = [
  {
    badge: "International Standard",
    title: "ISO/IEC 27001:2022",
    body: "Information security management — audited by Bureau Veritas & UKAS.",
  },
  {
    badge: "National Authority",
    title: "VNCERT Certification",
    body: "Certified by Vietnam's national cybersecurity emergency response centre.",
  },
  {
    badge: "Telecom License",
    title: "VNTA License",
    body: "Licensed provider of telecommunications services in Vietnam.",
  },
  {
    badge: "Platform Partner",
    title: "Zalo Trusted Partner",
    body: "Officially recognised by Zalo, Vietnam's largest messaging platform.",
  },
];

export const AboutCertificatesNew = () => (
  <section id="certificates" className="bg-background py-24 md:py-32">
    <div className="container-tight">
      <Reveal variant="fade-up" className="mx-auto max-w-2xl text-center">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.24em]"
          style={{ color: "hsl(var(--primary-deep))" }}
        >
          Certificates &amp; Licenses
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground md:text-5xl">
          Trust, on paper.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          The credentials behind every conversation we power — audited and re-certified
          annually by Vietnamese authorities, international standards bodies, and the
          platforms we partner with.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certs.map((c, i) => (
          <Reveal key={c.title} variant="fade-up" delay={i * 90}>
            <article className="flex h-full flex-col rounded-[18px] border border-border bg-background p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]">
              <span
                className="inline-flex w-fit items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                style={{
                  background: "hsl(var(--accent) / 0.14)",
                  color: "hsl(var(--accent-deep))",
                }}
              >
                {c.badge}
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
