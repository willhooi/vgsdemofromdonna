import { ShieldCheck, BadgeCheck, Lock, Award, Building2 } from "lucide-react";

const clients = [
  "Vietnam Airlines",
  "Sea / Shopee",
  "GHTK",
  "TIEPTHISOTOQUA",
  "ByteTech",
];

const credentials = [
  { label: "ISO Certified", Icon: ShieldCheck },
  { label: "Zalo Official Trusted Partner", Icon: BadgeCheck },
  { label: "PDPL 2023 Compliant", Icon: Lock },
  { label: "19 Years Enterprise Experience", Icon: Award },
  { label: "Backed by Accrete Inc. Japan (TSE Listed)", Icon: Building2 },
];

export const TrustBar = () => {
  return (
    <section className="w-full border-y border-border bg-muted/50">
      <div className="container-tight space-y-6 py-8 md:py-10">
        {/* Row 1 — clients */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
          <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Our clients include
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-foreground">
            {clients.map((c, i) => (
              <span key={c} className="inline-flex items-center gap-3">
                {c}
                {i < clients.length - 1 && (
                  <span className="hidden h-3 w-px bg-border md:inline-block" aria-hidden />
                )}
              </span>
            ))}
            <span className="font-normal text-muted-foreground">+ 71 more</span>
          </div>
        </div>

        {/* Row 2 — credential chips */}
        <div className="flex flex-wrap gap-2.5">
          {credentials.map(({ label, Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-[var(--shadow-soft)] md:text-sm"
            >
              <Icon className="h-4 w-4 text-primary" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
