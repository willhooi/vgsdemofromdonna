import { Reveal } from "@/components/motion/Reveal";
import vntaLogo from "@/assets/certs/vnta.png";
import bsiIsoLogo from "@/assets/certs/bsi-iso.png";
import vncertLogo from "@/assets/certs/vncert.png";
import zaloTrustedLogo from "@/assets/certs/zalo-trusted.svg";

type LogoItem = {
  name: string;
  caption?: string;
  /** Logo image URL — leave empty to show text fallback */
  image?: string;
};

// ============================================================
// EDIT THESE ARRAYS TO ADD/REMOVE LOGOS
// ============================================================

const certifications: LogoItem[] = [
  { name: "VNTA", caption: "Vietnam Telecommunications Authority", image: vntaLogo },
  { name: "BSI", caption: "ISO/IEC 27001 Certified", image: bsiIsoLogo },
  { name: "VNCERT", caption: "Vietnam Cybersecurity Emergency Response Team", image: vncertLogo },
  { name: "Zalo", caption: "Trusted Partner", image: zaloTrustedLogo },
];


// ============================================================

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-4">
    <span className="h-px flex-1 bg-border" />
    <h2 className="text-center text-sm font-bold uppercase tracking-[0.28em] text-foreground md:text-base">
      {children}
    </h2>
    <span className="h-px flex-1 bg-border" />
  </div>
);

const LogoCard = ({ item }: { item: LogoItem }) => (
  <article className="group flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-border bg-card p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_-20px_hsl(var(--primary)/0.45)]">
    {item.image ? (
      <img
        src={item.image}
        alt={`${item.name} logo`}
        className="max-h-16 w-full object-contain"
        loading="lazy"
      />
    ) : (
      <span className="font-display text-2xl font-extrabold tracking-tight text-primary md:text-3xl">
        {item.name}
      </span>
    )}
    {item.caption && (
      <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {item.caption}
      </p>
    )}
  </article>
);

export const AboutCertificatesNew = () => (
  <section id="certificates" className="bg-background py-12 md:py-16">
    <div className="container-tight space-y-12">
      {/* Certifications */}
      <div>
        <Reveal variant="fade-up">
          <SectionHeading>Our certifications are issued by</SectionHeading>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((item, i) => (
            <Reveal key={item.name} variant="fade-up" delay={i * 80}>
              <LogoCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Memberships */}
      <div>
        <Reveal variant="fade-up">
          <SectionHeading>VietGuys is currently an active member of</SectionHeading>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {memberships.map((item, i) => (
            <Reveal key={item.name} variant="fade-up" delay={i * 80}>
              <LogoCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
