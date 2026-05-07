import { ShieldCheck, Building2, Languages, BadgeCheck } from "lucide-react";
import accreteLogo from "@/assets/accrete-logo.svg";

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

        {/* Strategic highlight: Accrete backing */}
        <a
          href="https://www.accrete-inc.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-8 block overflow-hidden rounded-3xl border border-border bg-background p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)] sm:p-6"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-brand)" }} />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-16 w-32 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-2 sm:h-20 sm:w-40">
              <img
                src={accreteLogo}
                alt="Accrete Inc. logo"
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Strategic backing
                </span>
              </div>
              <p className="mt-1.5 text-sm font-bold text-foreground sm:text-base">
                Backed by Accrete Inc.
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                Tokyo Stock Exchange-listed · Japan
              </p>
            </div>
            <div className="hidden shrink-0 sm:block">
              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/80 backdrop-blur">
                TSE: 4395
              </span>
            </div>
          </div>
        </a>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
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
            { k: "5,000+", v: "Brands trusted across banking, retail, airlines & telco" },
            { k: "19", v: "Years of messaging heritage in Vietnam" },
            { k: "5M+", v: "Messages delivered every single day" },
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
        <div className="absolute -bottom-4 right-4 flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-[var(--shadow-soft)]">
          <img src={accreteLogo} alt="" className="h-4 w-auto" aria-hidden />
          <span>Backed by Accrete Inc. · Japan</span>
        </div>
      </div>
    </div>
  </section>
);

