import { ArrowRight, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trackDemoRequest } from "@/lib/analytics";
import { SignalWave } from "@/components/brand/SignalArt";
import { useT } from "@/lib/i18n";
import { useCountUp } from "@/hooks/use-count-up";

export const Hero = () => {
  const { t } = useT();
  const count = useCountUp(5_000_000, 2200);
  const formatted = count.toLocaleString("en-US");

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] grid-bg opacity-40" />

      <div className="container-tight grid gap-12 pb-20 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        {/* LEFT — narrative */}
        <div className="lg:col-span-7">
          <span className="chapter-eyebrow animate-fade-up">{t("hero.eyebrow")}</span>

          <h1
            className="heading-display mt-6 text-[30px] leading-tight md:text-5xl lg:text-[58px] text-balance animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            {t("hero.headline").split("conversations").length === 2 ? (
              <>
                {t("hero.headline").split("conversations")[0]}
                <span className="bg-clip-text text-transparent italic" style={{ backgroundImage: "var(--gradient-brand)" }}>
                  conversations
                </span>
                {t("hero.headline").split("conversations")[1]}
              </>
            ) : (
              t("hero.headline")
            )}
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground text-balance animate-fade-up md:text-lg" style={{ animationDelay: "160ms" }}>
            {t("hero.sub")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact" onClick={() => trackDemoRequest("hero_contact_experts")}>
                {t("hero.cta")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <a
              href="#timeline"
              className="text-sm font-semibold text-foreground underline-offset-4 hover:underline"
            >
              {t("hero.secondary")} →
            </a>
          </div>

          {/* Live heartbeat counter */}
          <div className="mt-12 inline-flex items-center gap-4 rounded-2xl border border-border bg-background/80 px-5 py-4 shadow-[var(--shadow-soft)] backdrop-blur animate-fade-up" style={{ animationDelay: "360ms" }}>
            <span className="relative grid h-10 w-10 place-items-center">
              <span className="absolute inset-0 rounded-full bg-[hsl(var(--accent))]/20 heart-pulse" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[hsl(var(--accent))]" />
            </span>
            <div>
              <div className="font-display text-2xl font-extrabold tracking-tight text-foreground md:text-3xl tabular-nums">
                {formatted}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {t("hero.counterLabel")} · {t("hero.pulseTag")}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — phone + signal artwork */}
        <div className="lg:col-span-5">
          <div className="relative aspect-square w-full">
            {/* Signal waves radiating from the phone */}
            <SignalWave intensity={4} tone="brand" className="absolute inset-0 animate-fade-up" />

            {/* Phone */}
            <div className="absolute left-1/2 top-1/2 grid h-32 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[28px] border-2 border-foreground/80 bg-background shadow-[var(--shadow-card)]">
              <Smartphone className="h-7 w-7 text-foreground/80" />
              <span className="absolute -top-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-foreground/30" />
            </div>

            {/* VietGuys mark glow target — top-right */}
            <div className="absolute right-2 top-2 grid h-16 w-16 place-items-center rounded-2xl border border-border bg-background shadow-[var(--shadow-soft)] vg-glow">
              <span className="font-display text-2xl font-extrabold tracking-tight text-[hsl(var(--primary-deep))]">VG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
