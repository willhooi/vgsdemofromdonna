import { ShieldCheck, Building2, Languages } from "lucide-react";

export const Trust = () => (
  <section id="trust" className="py-24 md:py-32">
    <div className="container-tight grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <span className="eyebrow">Backed by Accrete Inc.</span>
        <h2 className="heading-section mt-4 text-balance">
          The face of innovation.<br />
          The foundation of trust.
        </h2>
        <p className="mt-5 max-w-xl text-muted-foreground">
          VietGuys is the modern AI face. Accrete Inc. — listed on the Tokyo Stock Exchange — is
          the foundation of trust. Together we bring Japanese standards of precision, security and
          reliability to Vietnam&apos;s leading enterprises.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { i: ShieldCheck, t: "ISO 27001:2013", d: "Information security certified" },
            { i: Building2, t: "Accrete Inc.", d: "Tokyo Stock Exchange-listed" },
            { i: Languages, t: "VN · EN · JP", d: "Bilingual enterprise ready" },
          ].map((b) => {
            const Icon = b.i;
            return (
              <div key={b.t} className="rounded-2xl border border-border p-4">
                <Icon className="h-5 w-5 text-primary" />
                <div className="mt-3 text-sm font-bold">{b.t}</div>
                <div className="mt-1 text-xs text-muted-foreground">{b.d}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-2 gap-4">
          {[
            { k: "76+", v: "Enterprise clients across banking, retail, airlines & telco" },
            { k: "15", v: "Years of messaging heritage in Vietnam" },
            { k: "5M", v: "Messages delivered every single day" },
            { k: "99.9%", v: "Platform availability, monitored 24/7" },
          ].map((s, i) => (
            <div
              key={s.k}
              className={`rounded-3xl border border-border p-6 ${
                i % 3 === 0 ? "bg-[var(--gradient-brand)] text-primary-foreground" : "bg-background"
              }`}
            >
              <div className="text-4xl font-extrabold tracking-tight">{s.k}</div>
              <p className={`mt-3 text-xs leading-relaxed ${i % 3 === 0 ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                {s.v}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-4 right-4 rounded-full border border-border bg-background px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-[var(--shadow-soft)]">
          Backed by Accrete Inc. · Japan
        </div>
      </div>
    </div>
  </section>
);
