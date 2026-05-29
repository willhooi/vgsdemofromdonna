import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AboutChapterProps {
  chapterNumber: string; // "01"
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
            <span className="chapter-eyebrow">{eyebrow}</span>
            <div
              className="mt-4 font-display text-[120px] leading-[0.85] tracking-tight text-foreground/[0.08] md:text-[180px]"
              aria-hidden="true"
            >
              {chapterNumber}
            </div>
          </div>
        </div>

        {/* Right — content */}
        <div className="lg:col-span-8">
          <h2 className="heading-section text-balance">{title}</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {body}
          </div>

          {pullQuote && (
            <blockquote className="mt-10 border-l-2 border-[hsl(var(--primary))] pl-6 font-display text-2xl italic leading-snug text-foreground md:text-3xl">
              &ldquo;{pullQuote}&rdquo;
            </blockquote>
          )}

          {image && (
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);
