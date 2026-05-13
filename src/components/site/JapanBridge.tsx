import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";
import { TwoWavesBridge } from "@/components/brand/SignalArt";

export const JapanBridge = () => {
  const { t } = useT();
  return (
    <section id="japan-bridge" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse at center, hsl(var(--accent) / 0.06), transparent 65%)" }}
      />
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <span className="chapter-eyebrow justify-center">{t("bridge.eyebrow")}</span>
          <h2 className="heading-section mt-4 text-balance">{t("bridge.title")}</h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <TwoWavesBridge className="h-auto w-full" />
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 text-base text-muted-foreground md:grid-cols-2">
          <p>{t("bridge.p1")}</p>
          <p>{t("bridge.p2")}</p>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/about#accrete"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] hover:border-primary/40"
          >
            {t("bridge.cta")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
