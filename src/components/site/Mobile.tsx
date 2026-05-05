import { MessageCircle, Smartphone } from "lucide-react";

export const Mobile = () => (
  <section className="bg-secondary/40 py-24 md:py-32">
    <div className="container-tight grid gap-12 lg:grid-cols-2 lg:items-center">
      <div className="relative mx-auto w-full max-w-[300px]">
        <div className="relative rounded-[2.4rem] border border-border bg-background p-3 shadow-[var(--shadow-card)]">
          <div className="rounded-[2rem] bg-[hsl(var(--primary-soft))]/40 p-5">
            <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-foreground/15" />
            <div className="rounded-2xl bg-background p-4 shadow-[var(--shadow-soft)]">
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">VietGuys</div>
              <div className="mt-1 text-sm font-bold">AI Engagement</div>
            </div>
            {["Core Messaging", "PangoCDP", "Behavioural AI", "Account Intelligence"].map((t) => (
              <div key={t} className="mt-3 flex items-center justify-between rounded-2xl bg-background p-3 shadow-[var(--shadow-soft)]">
                <span className="text-xs font-semibold">{t}</span>
                <span className="h-2 w-2 rounded-full bg-primary" />
              </div>
            ))}
            <button className="mt-5 w-full rounded-2xl bg-[hsl(var(--accent))] py-3 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--accent-foreground))] shadow-[var(--shadow-cta)]">
              Get Started
            </button>
          </div>
        </div>
        <div className="absolute -right-3 top-10 grid h-12 w-12 animate-pulse-ring place-items-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] shadow-[var(--shadow-cta)]">
          <MessageCircle className="h-5 w-5" />
        </div>
      </div>

      <div>
        <span className="eyebrow"><Smartphone className="h-3.5 w-3.5" /> Mobile-first by design</span>
        <h2 className="heading-section mt-4 text-balance">
          Conversion is always a thumb-tap away.
        </h2>
        <p className="mt-5 max-w-xl text-muted-foreground">
          With ~60% of B2B and B2C traffic on mobile, every layout collapses flawlessly. Our
          AI assistant and primary CTA stay anchored — so the next conversation is always one tap
          from the user.
        </p>
        <ul className="mt-8 grid gap-3 text-sm text-foreground">
          {[
            "Touch-optimised 4-tier service gallery",
            "Persistent AI chatbot, contextual to each page",
            "Bilingual interface — Vietnamese, English, Japanese",
            "Sub-second perceived performance, image-light",
          ].map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--accent))]" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
