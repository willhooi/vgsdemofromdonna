import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trackDemoRequest } from "@/lib/analytics";
import { useT } from "@/lib/i18n";


export const Hero = () => {
  const { t } = useT();
  const headline = t("hero.headline");
  const parts = headline.split("conversations");

  return (
    <section id="top" className="relative overflow-hidden bg-background pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />

      <div className="container-tight pb-12 md:pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="heading-display text-[34px] leading-tight md:text-6xl lg:text-[68px] text-balance animate-fade-up">
            {parts.length === 2 ? (
              <>
                {parts[0]}
                <span
                  className="bg-clip-text text-transparent italic"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  conversations
                </span>
                {parts[1]}
              </>
            ) : (
              headline
            )}
          </h1>

          <div
            className="mt-8 flex justify-center animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact" onClick={() => trackDemoRequest("hero_contact_experts")}>
                {t("hero.cta")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
