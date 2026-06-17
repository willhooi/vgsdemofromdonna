import { Reveal } from "@/components/motion/Reveal";

type AssetPointer = { url: string; original_filename: string };

const modules = import.meta.glob<{ default: AssetPointer }>(
  "@/assets/clients/*/*.png.asset.json",
  { eager: true }
);

const logosByDir: Record<string, { url: string; name: string }[]> = {};
for (const path in modules) {
  const m = (modules[path] as { default: AssetPointer }).default;
  const parts = path.split("/");
  const dir = parts[parts.length - 2];
  const name = parts[parts.length - 1].replace(/\.png\.asset\.json$/, "");
  (logosByDir[dir] ||= []).push({ url: m.url, name });
}

const prettyName = (slug: string) =>
  slug
    .replace(/-/g, " ")
    .replace(/\bpng\b/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

const groups: { dir: string; label: string }[] = [
  { dir: "finance-banking", label: "Finance & Banking" },
  { dir: "retail", label: "Retail" },
  { dir: "technology-electronic", label: "Technology & Electronics" },
  { dir: "ecommerce", label: "E-Commerce" },
  { dir: "fmcg", label: "FMCG" },
  { dir: "pharmacy", label: "Medicine & Pharmacy" },
  { dir: "fashion-beauty", label: "Fashion & Beauty" },
  { dir: "hospitality", label: "Hospitality & F&B" },
  { dir: "education", label: "Education" },
  { dir: "real-estate", label: "Real Estate" },
  { dir: "carriage", label: "Delivery & Travel" },
  { dir: "industry", label: "Industry & Manufacturing" },
];

const LogoCard = ({ url, name }: { url: string; name: string }) => (
  <div className="group flex h-20 w-[160px] shrink-0 items-center justify-center rounded-xl border border-border bg-background px-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
    <img
      src={url}
      alt={prettyName(name)}
      loading="lazy"
      className="max-h-10 w-auto max-w-[120px] object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
    />
  </div>
);

const MarqueeRow = ({
  logos,
  reverse,
}: {
  logos: { url: string; name: string }[];
  reverse: boolean;
}) => {
  const duration = Math.max(30, logos.length * 4);
  return (
    <div
      className="relative overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div
        className="marquee-track flex w-max gap-4 hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[...logos, ...logos].map((l, i) => (
          <LogoCard key={`${l.name}-${i}`} url={l.url} name={l.name} />
        ))}
      </div>
    </div>
  );
};

export const AboutPartners = () => (
  <section
    className="py-20 md:py-24"
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
          Our Valued Clients
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground md:text-5xl">
          Trusted by{" "}
          <span style={{ color: "hsl(var(--primary))" }}>6,000+ brands</span>{" "}
          across Vietnam.
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          From banking to FMCG, brands of every scale choose VietGuys for
          customer engagement at scale.
        </p>
      </Reveal>

      <div className="mt-14 space-y-10">
        {groups.map((g, gi) => {
          const logos = logosByDir[g.dir];
          if (!logos?.length) return null;
          return (
            <Reveal key={g.dir} variant="fade-up" delay={gi * 60}>
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.24em]"
                    style={{ color: "hsl(var(--primary-deep))" }}
                  >
                    {g.label}
                  </span>
                  <span
                    className="h-px flex-1"
                    style={{ background: "hsl(var(--primary) / 0.18)" }}
                  />
                </div>
                <MarqueeRow logos={logos} reverse={gi % 2 === 1} />
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
