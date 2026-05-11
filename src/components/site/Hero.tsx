import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trackDemoRequest } from "@/lib/analytics";

const trustSignals = [
  "Zalo Trusted Partner",
  "ISO/IEC Certified",
  "PDPL Compliant",
  "76 enterprise clients",
  "Since 2007",
];

const clientLogos = ["Vietnam Airlines", "Shopee", "GHTK", "ByteTech"];

type Channel = { label: string; tag?: "Featured" | "New" };
const channels: Channel[] = [
  { label: "SMS Brandname" },
  { label: "Zalo ZBS", tag: "Featured" },
  { label: "AI Campaign Services", tag: "New" },
  { label: "OTP and Alerts" },
  { label: "PangoCDP" },
];

const stats = [
  { k: "19+", v: "Years in Vietnam" },
  { k: "76", v: "Enterprise clients" },
  { k: "PDPL", v: "Compliant" },
];

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] grid-bg opacity-50" />

      <div className="container-tight grid gap-12 pb-20 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7">
          <span className="eyebrow animate-fade-up text-[hsl(var(--accent-deep))]">
            <Sparkles className="h-3.5 w-3.5" />
            Zalo Trusted Partner · ISO Certified · Direct Carrier Connections
          </span>

          <h1 className="heading-display mt-6 text-[28px] leading-tight md:text-5xl lg:text-6xl text-balance animate-fade-up" style={{ animationDelay: "80ms" }}>
            Reach every Vietnamese customer.{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
              On every channel.
            </span>{" "}
            Every time.
          </h1>

          <p
            className="mt-6 max-w-xl text-base text-muted-foreground text-balance animate-fade-up md:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            VietGuys connects your brand to customers via SMS, Zalo ZBS, and AI-powered campaigns —
            backed by 19 years of direct carrier relationships and Vietnam's most trusted enterprise
            messaging network.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <Button variant="cta" size="lg" asChild>
              <Link to="/demo" onClick={() => trackDemoRequest("hero_cta")}>
                Request a Demo
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/solutions">See Our Solutions</Link>
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 animate-fade-up" style={{ animationDelay: "320ms" }}>
            {trustSignals.map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                <Check className="h-4 w-4 text-primary" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-border pt-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Trusted by
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">
              {clientLogos.join("  ·  ")}
              <span className="ml-2 font-normal text-muted-foreground">+ 72 more</span>
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN — Visual panel */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl border border-border bg-background/90 p-6 shadow-[var(--shadow-card)] backdrop-blur md:p-8">
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-[0.06]"
              style={{ background: "var(--gradient-brand)" }}
            />

            <div className="relative">
              <h2 className="text-lg font-bold text-foreground md:text-xl">Channels we deliver</h2>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {channels.map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)]"
                  >
                    {c.label}
                    {c.tag && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          c.tag === "Featured"
                            ? "bg-primary text-primary-foreground"
                            : "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]"
                        }`}
                      >
                        {c.tag}
                      </span>
                    )}
                  </span>
                ))}
              </div>

              <dl className="mt-7 grid grid-cols-3 gap-3 border-t border-border pt-6">
                {stats.map((s) => (
                  <div key={s.v} className="rounded-xl border border-border bg-background/70 p-3 text-center">
                    <dt className="text-xl font-extrabold tracking-tight text-foreground md:text-2xl">{s.k}</dt>
                    <dd className="mt-1 text-[11px] font-medium leading-tight text-muted-foreground">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
