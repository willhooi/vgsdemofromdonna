import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

interface AboutChapterProps {
  chapterNumber: string;
  eyebrow: string;
  title: string;
  body: ReactNode;
  pullQuote?: string;
  image?: { src: string; alt: string };
  reverse?: boolean;
}

export const AboutChapter = ({
  chapterNumber,
  eyebrow,
  title,
  body,
  pullQuote,
  image,
  reverse = false,
}: AboutChapterProps) => (
  <section className="relative py-24 md:py-32">
    <div className="container-tight">
      <div
        className={cn(
          "grid gap-10 lg:grid-cols-12 lg:gap-16",
          reverse && "lg:[&>*:first-child]:order-2"
        )}
      >
        {/* Left — chapter marker */}
        <div className="lg:col-span-4">
          <div className="sticky top-28">
            <Reveal variant="fade-up">
              <span className="chapter-eyebrow">{eyebrow}</span>
            </Reveal>
            <Reveal variant="fade-up" delay={120}>
              <div
                className="mt-4 font-display text-[120px] leading-[0.85] tracking-tight md:text-[180px]"
                aria-hidden="true"
                style={{
                  backgroundImage: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  opacity: 0.12,
                }}
              >
                {chapterNumber}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right — content */}
        <div className="lg:col-span-8">
          <Reveal variant="fade-up">
            <h2 className="heading-section text-balance">{title}</h2>
          </Reveal>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {Array.isArray((body as any)?.props?.children) ? body : <Reveal variant="fade-up" delay={120}>{body}</Reveal>}
          </div>

          {pullQuote && (
            <Reveal variant="fade-up" delay={200}>
              <blockquote className="quote-bar mt-10 font-display text-2xl italic leading-snug text-foreground md:text-3xl">
                &ldquo;{pullQuote}&rdquo;
              </blockquote>
            </Reveal>
          )}

          {image && (
            <Reveal variant="clip-right" delay={150}>
              <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover ken-burns"
                />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  </section>
);
