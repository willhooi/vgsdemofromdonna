import isoLogo from "@/assets/certs/iso-27001.svg";
import vncertLogo from "@/assets/certs/vncert.svg";
import vntaLogo from "@/assets/certs/vnta.svg";
import zaloLogo from "@/assets/certs/zalo-trusted.svg";

const certs = [
  {
    logo: isoLogo,
    name: "ISO/IEC 27001:2022",
    issuer: "International standard",
    body: "Information security management certified — the global benchmark for protecting customer data end-to-end.",
  },
  {
    logo: vncertLogo,
    name: "VNCERT CERTIFICATtion",
    issuer: "Vietnam Computer Emergency Response Team",
    body: "Recognised by Vietnam's national cybersecurity authority for safe, compliant messaging infrastructure.",
  },
  {
    logo: vntaLogo,
    name: "VNTA License",
    issuer: "Authority of Telecommunications, Vietnam",
    body: "License for Provision of Telecommunications Services without Network Infrastructure — a rare legal foundation held by only a few Vietnamese providers.",
  },
  {
    logo: zaloLogo,
    name: "Zalo Trusted Partner",
    issuer: "VNG Corporation",
    body: "Official ZNS partner — verified by Zalo to deliver branded, high-trust messages across Vietnam's largest OTT platform.",
  },
];

export const AboutCertificates = () => (
  <section id="certificates" className="py-24 md:py-32">
    <div className="container-tight">
      <div className="max-w-2xl">
        <span className="chapter-eyebrow">Certificates &amp; licenses</span>
        <h2 className="heading-section mt-4 text-balance">
          Trust, on paper. Audited, renewed, displayed.
        </h2>
        <p className="mt-5 text-muted-foreground">
          The credentials behind every message we deliver — issued by Vietnamese
          authorities, international standards bodies, and the platforms we
          partner with.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certs.map((c, i) => (
          <article
            key={c.name}
            className="group relative flex h-full flex-col rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] motion-reduce:hover:translate-y-0 animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex h-16 items-center">
              <img
                src={c.logo}
                alt={`${c.name} certification`}
                loading="lazy"
                decoding="async"
                className="h-12 w-auto max-w-[140px] object-contain"
              />
            </div>
            <h3 className="mt-5 text-base font-bold text-foreground">
              {c.name}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {c.issuer}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {c.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
