import { useT } from "@/lib/i18n";
import { HeroChatAnimation } from "./HeroChatAnimation";
import { AccreteFlightChip } from "./AccreteFlightChip";


export const Hero = () => {
  const { t } = useT();
  const headline = t("hero.headline");
  const parts = headline.split("conversations");

  return (
    <section
      id="top"
      className="hero-section relative overflow-hidden bg-background pt-24 md:pt-28 lg:pt-32 pb-10 md:pb-14 flex items-center"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />

      <div className="container-tight w-full">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left — chip eyebrow + headline */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <AccreteFlightChip />

            <h1 className="heading-display text-[32px] leading-[1.08] sm:text-[40px] md:text-5xl lg:text-[56px] xl:text-6xl text-balance animate-fade-up">
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
          </div>

          {/* Right — animation (compact on mobile, full on desktop) */}
          <div className="animate-fade-up mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-none" style={{ animationDelay: "320ms" }}>
            <HeroChatAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};
