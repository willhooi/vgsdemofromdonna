import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { VWatermark } from "@/components/brand/VWatermark";
import { Reveal } from "@/components/motion/Reveal";

const headlineWords = ["Nineteen", "years."];
const accentWords = ["One", "signal."];

export const AboutHero = () => (
  <section
    className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    style={{ background: "var(--gradient-hero)" }}
  >
    <VWatermark
      tone="brand"
      className="absolute -right-32 -top-16 h-[560px] w-[560px] opacity-[0.05] md:opacity-[0.06] v-trace"
    />

    <div className="container-tight relative">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>

      <div className="mt-10 max-w-4xl">
        <Reveal variant="fade-up">
          <span className="chapter-eyebrow">Chapter 00 — Since 2007</span>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <p className="mt-3 text-sm italic text-muted-foreground md:text-base">
            Short steps · on a long journey.
          </p>
        </Reveal>

        <Reveal
          variant="fade"
          delay={200}
          className="reveal-words"
        >
          <h1 className="heading-display mt-6 text-[44px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[88px] text-balance">
            {headlineWords.map((w, i) => (
              <span key={i} className="word" style={{ ["--i" as any]: i }}>
                {w}{" "}
              </span>
            ))}
            <br />
            <span
              className="bg-clip-text text-transparent italic"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              {accentWords.map((w, i) => (
                <span
                  key={i}
                  className="word"
                  style={{ ["--i" as any]: headlineWords.length + i }}
                >
                  {w}{" "}
                </span>
              ))}
            </span>
          </h1>
        </Reveal>

        <Reveal variant="fade-up" delay={500}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Vietnam&apos;s pioneer in Mobile Marketing Solutions since 2007 —
            now part of <span className="font-semibold text-foreground">Accrete Inc.</span>, listed on the Tokyo
            Stock Exchange. Told in three short chapters.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
