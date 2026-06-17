import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

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

const availableGroups = groups.filter((g) => logosByDir[g.dir]?.length);

const LogoCard = ({ url, name }: { url: string; name: string }) => (
  <div className="group flex h-20 items-center justify-center rounded-xl border border-border bg-background px-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
    <img
      src={url}
      alt={prettyName(name)}
      loading="lazy"
      className="max-h-10 w-auto max-w-[120px] object-contain transition duration-300 group-hover:opacity-100"
    />
  </div>
);

export const AboutPartners = () => {
  const [active, setActive] = useState(availableGroups[0]?.dir ?? "");
  const activeLogos = (logosByDir[active] ?? []).slice(0, 10);

  return (
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
            Chosen by leaders across industries
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            From Banking to FMCG, brands of every scale choose VietGuys for customer engagement at scale.
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={80} className="mt-12">
          <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
            <div className="flex flex-nowrap justify-start gap-2 md:flex-wrap md:justify-center">
              {availableGroups.map((g) => {
                const isActive = g.dir === active;
                return (
                  <button
                    key={g.dir}
                    type="button"
                    onClick={() => setActive(g.dir)}
                    className={cn(
                      "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                      isActive
                        ? "border-transparent text-primary-foreground shadow-[var(--shadow-soft)]"
                        : "border-border bg-background text-muted-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
                    )}
                    style={
                      isActive
                        ? { background: "hsl(var(--primary))" }
                        : undefined
                    }
                  >
                    {g.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div
          key={active}
          className="mt-10 grid animate-fade-in grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
        >
          {activeLogos.map((l) => (
            <LogoCard key={l.name} url={l.url} name={l.name} />
          ))}
        </div>
      </div>
    </section>
  );
};
