import vnta from "@/assets/certs/vnta.png";
import bsiIso from "@/assets/certs/bsi-iso.png";
import vncert from "@/assets/certs/vncert.png";
import zaloTrusted from "@/assets/certs/zalo-trusted.svg";

const certs = [
  { src: vnta, alt: "Viet Nam Telecommunications Authority (VNTA)" },
  { src: bsiIso, alt: "BSI ISO/IEC 27001 Information Security Management Certified" },
  { src: vncert, alt: "VNCERT" },
  { src: zaloTrusted, alt: "Zalo Trusted Partner" },
];

export const LogoMarquee = () => (
  <section className="border-y border-border bg-secondary/40 py-10">
    <div className="container-tight">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        Certified & Trusted By
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
        {certs.map((c) => (
          <img
            key={c.alt}
            src={c.src}
            alt={c.alt}
            loading="lazy"
            className="h-14 w-auto object-contain sm:h-16 md:h-20 transition-opacity hover:opacity-100 opacity-90"
          />
        ))}
      </div>
    </div>
  </section>
);
