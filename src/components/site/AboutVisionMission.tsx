import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

type Block = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  alt: string;
};

const blocks: Block[] = [
  {
    eyebrow: "Our Mission",
    title: "Holistic value — not just sales or profit.",
    body: "Deliver constantly-improved Mobile Marketing Solutions for Vietnamese enterprises, creating value for businesses and the wider community.",
    bullets: [
      "Exceed customer expectations with personalized, enterprise-grade care.",
      "Uphold honesty and transparency in every relationship we build.",
      "Continuously adopt new technologies and channels to lift our partners.",
    ],
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1400&q=80",
    alt: "VietGuys team in a working session",
  },
  {
    eyebrow: "Our Vision",
    title: "The leading Mobile Marketing partner in Vietnam and the region.",
    body: "Become the partner enterprises trust for the next nineteen years of digital engagement — across borders, channels and generations of technology.",
    bullets: [
      "Embrace new platforms and AI to elevate every campaign we touch.",
      "Build long-lasting relationships rooted in integrity and reliability.",
      "Make a positive impact on the communities our customers serve.",
    ],
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
    alt: "Looking forward — future-focused team",
  },
];

export const AboutVisionMission = () => (
  <section id="vision" className="relative py-24 md:py-32 bg-secondary/30">
    <div className="container-tight">
      <Reveal variant="fade-up" className="max-w-2xl">
        <span className="chapter-eyebrow">Mission &amp; Vision</span>
        <h2 className="heading-section mt-4 text-balance">
          Turning enterprise engagement into a long-term partnership.
        </h2>
      </Reveal>

      <div className="mt-16 space-y-20 md:space-y-28">
        {blocks.map((b, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={b.eyebrow}
              className="grid items-center gap-8 md:grid-cols-12 md:gap-14"
            >
              <Reveal
                variant={reverse ? "fade-up" : "clip-right"}
                className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}
              >
                <div className="relative overflow-hidden rounded-[28px] shadow-[var(--shadow-card)]">
                  <img
                    src={b.image}
                    alt={b.alt}
                    loading="lazy"
                    className="ken-burns h-[280px] w-full object-cover md:h-[440px]"
                  />
                </div>
              </Reveal>

              <Reveal
                variant="fade-up"
                delay={120}
                className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}
              >
                <span className="eyebrow">{b.eyebrow}</span>
                <h3 className="mt-3 font-display text-2xl leading-tight text-foreground md:text-4xl">
                  {b.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {b.body}
                </p>
                <ul className="mt-7 space-y-3.5">
                  {b.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full"
                        style={{
                          background: "hsl(var(--primary) / 0.10)",
                          color: "hsl(var(--primary))",
                        }}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground md:text-base">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          );
        })}
      </div>

      <Reveal variant="fade" delay={200}>
        <p className="mt-16 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Licensed Telecommunications Service Provider — Ministry of Information &amp; Communications, Vietnam.
        </p>
      </Reveal>
    </div>
  </section>
);
