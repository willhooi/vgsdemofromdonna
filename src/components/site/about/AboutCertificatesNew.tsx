import { Reveal } from "@/components/motion/Reveal";
import vntaCert from "@/assets/certs/vnta-cert.png.asset.json";
import bsiIsoCert from "@/assets/certs/bsi-iso-cert.png.asset.json";
import vncertCert from "@/assets/certs/vncert-cert.png.asset.json";
import zaloTrustedCert from "@/assets/certs/zalo-trusted-cert.png.asset.json";

type CertItem = {
  name: string;
  caption: string;
  image: string;
};

const certifications: CertItem[] = [
  {
    name: "VNTA License",
    caption: "Vietnam Telecommunications Authority",
    image: vntaCert.url,
  },
  {
    name: "ISO/IEC 27001:2022",
    caption: "BSI Information Security Management",
    image: bsiIsoCert.url,
  },
  {
    name: "VNCERT Registration",
    caption: "Vietnam Cybersecurity Emergency Response Team",
    image: vncertCert.url,
  },
  {
    name: "Zalo Trusted Partner 2025",
    caption: "Zalo Business Solutions",
    image: zaloTrustedCert.url,
  },
];

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-4">
    <span className="h-px flex-1 bg-border" />
    <h2 className="text-center text-sm font-bold uppercase tracking-[0.28em] text-foreground md:text-base">
      {children}
    </h2>
    <span className="h-px flex-1 bg-border" />
  </div>
);

const CertCard = ({ item }: { item: CertItem }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_-20px_hsl(var(--primary)/0.45)]">
    <div className="flex aspect-[3/4] items-center justify-center overflow-hidden bg-muted/40 p-3">
      <img
        src={item.image}
        alt={`${item.name} certificate`}
        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />
    </div>
    <div className="flex flex-1 flex-col justify-center border-t border-border px-4 py-3 text-center">
      <h3 className="text-sm font-bold text-foreground md:text-base">{item.name}</h3>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {item.caption}
      </p>
    </div>
  </article>
);

export const AboutCertificatesNew = () => (
  <section id="certificates" className="bg-background py-12 md:py-16">
    <div className="container-tight space-y-8">
      <Reveal variant="fade-up">
        <SectionHeading>Our certifications are issued by</SectionHeading>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((item, i) => (
          <Reveal key={item.name} variant="fade-up" delay={i * 80}>
            <CertCard item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
