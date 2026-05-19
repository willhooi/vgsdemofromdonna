import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trackDemoRequest } from "@/lib/analytics";
import { useT } from "@/lib/i18n";
import { HeroChatAnimation } from "./HeroChatAnimation";


export const Hero = () => {
  const { t } = useT();
  const headline = t("hero.headline");
  const parts = headline.split("conversations");

  return (
    <section
      id="top"
      className="hero-section relative overflow-hidden bg-background pt-28 md:pt-32 flex items-center"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />

      <div className="container-tight pb-4 md:pb-6 w-full">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Left — headline + CTA */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <h1 className="heading-display text-[34px] leading-tight md:text-5xl lg:text-[56px] xl:text-6xl text-balance animate-fade-up">
              {parts.length === 2 ? (
                <>
                  {parts[0]}
                  <span
                    className="bg-clip-text text-transparent"
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
              className="mt-8 flex justify-center lg:justify-start animate-fade-up"
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

          {/* Right — animation (compact on mobile, full on desktop) */}
          <div className="animate-fade-up mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none" style={{ animationDelay: "320ms" }}>
            <HeroChatAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};
