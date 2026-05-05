import { Search, Lightbulb, Layers, Handshake, TrendingUp } from "lucide-react";

const steps = [
  { letter: "S", title: "Scan", icon: Search, body: "Research the account, industry, and marketing stack before the first conversation." },
  { letter: "H", title: "Hypothesise", icon: Lightbulb, body: "Form specific value propositions. No generic proposals — every pitch is tailored." },
  { letter: "A", title: "Assemble", icon: Layers, body: "Build structured, data-backed proof points and ROI projections." },
  { letter: "R", title: "Reach", icon: Handshake, body: "Engage the right stakeholder with a credible, prepared conversation." },
  { letter: "P", title: "Progress", icon: TrendingUp, body: "Measure outcomes and build long-term, tiered account relationships." },
];

export const Sharp = () => (
  <section id="sharp" className="relative overflow-hidden bg-secondary/40 py-24 md:py-32">
    <div className="container-tight">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow justify-center">The Sales Methodology</span>
        <h2 className="heading-section mt-4 text-balance">
          SHARP — intelligence, not instinct.
        </h2>
        <p className="mt-5 text-muted-foreground">
          Strategic High-value Account Research and Pitch — VietGuys&apos; proprietary operating
          model for every enterprise relationship, from prospect to ten-year partner.
        </p>
      </div>

      <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
        <ol className="grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={s.letter}
                className="group relative rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-[var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-soft)]">
                  <span className="text-2xl font-extrabold">{s.letter}</span>
                  <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-[hsl(var(--accent))] text-[10px] font-bold text-[hsl(var(--accent-foreground))] ring-2 ring-background">
                    {i + 1}
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <Icon className="h-4 w-4 text-primary" />
                  <h3 className="text-lg font-bold tracking-tight">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Tiering */}
      <div className="mt-16 rounded-3xl border border-border bg-background p-8 shadow-[var(--shadow-soft)] md:p-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Client Tiering</span>
            <h3 className="mt-3 text-2xl font-bold tracking-tight">Four tiers, one operating model.</h3>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            SHARP applies across every account, structured into tiers that determine the depth of
            engagement and resource allocation.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { t: "A", n: "Strategic", d: "Full SHARP. Quarterly reviews. Executive-sponsored." },
            { t: "B", n: "Growth", d: "SHARP-lite. Mid-revenue with clear upsell path." },
            { t: "C", n: "Maintain", d: "Stable revenue. Automated where possible." },
            { t: "D", n: "Review", d: "Evaluate, fix, renegotiate, or exit with intent." },
          ].map((row) => (
            <div key={row.t} className="rounded-2xl border border-border p-5 transition-colors hover:border-primary/40">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-primary">{row.t}</span>
                <span className="text-sm font-semibold text-foreground">{row.n}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{row.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
