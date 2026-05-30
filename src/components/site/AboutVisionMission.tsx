import { Compass, Target, Check } from "lucide-react";
import { VWatermark } from "@/components/brand/VWatermark";
import { Reveal } from "@/components/motion/Reveal";

const mission = {
  icon: Target,
  eyebrow: "Our Mission",
  title: "Holistic value — not just sales or profit.",
  body:
    "Deliver constantly-improved Mobile Marketing Solutions for Vietnamese enterprises, creating real value for businesses and the wider community.",
  bullets: [
    "Exceed customer expectations with exceptional service and personalised care.",
    "Uphold honesty and transparency in every routing decision and contract.",
    "Continuously adopt new technologies to improve every campaign we carry.",
  ],
  image:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  alt: "VietGuys team aligning on enterprise messaging delivery",
  tone: "brand" as const,
};

const vision = {
  icon: Compass,
  eyebrow: "Our Vision",
  title: "The leading Mobile Marketing partner in Vietnam and the region.",
  body:
    "Become the trusted long-term partner accompanying enterprises on their digital transformation journey — year after year, message after message.",
  bullets: [
    "Embrace new channels and technologies to expand every brand's reach.",
    "Build long-lasting relationships through integrity, reliability and craft.",
    "Make a positive impact in the communities we serve, across Vietnam and Japan.",
  ],
  image:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  alt: "Founders sketching the next chapter of VietGuys",
  tone: "orange" as const,
};

const blocks = [mission, vision];

export const AboutVisionMission = () => (
  <section id="vision" className="relative overflow-hidden py-24 md:py-32">
    <VWatermark
      tone="brand"
      className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] opacity-[0.05]"
    />
    <VWatermark
      tone="orange"
      className="pointer-events-none absolute -right-24 bottom-10 h-[420px] w-[420px] opacity-[0.05]"
    />

    <div className="container-tight relative">
      <Reveal variant="fade-up" className="max-w-2xl">
        <span className="chapter-eyebrow">Mission &amp; Vision</span>
        <h2 className="heading-section mt-4 text-balance">
          Turning enterprise messaging into measurable trust.
        </h2>
        <p className="mt-5 text-muted-foreground">
          Where we&apos;re going, and why we exist — the two beliefs that guide
          every routing decision we make.
        </p>
      </Reveal>

      <div className="mt-14 space-y-20 md:space-y-28">
        {blocks.map(({ icon: Icon, eyebrow, title, body, bullets, image, alt, tone }, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={eyebrow}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                reverse ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <Reveal variant="scale-soft">
                <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-card)]">
                  <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    className="ken-burns aspect-[4/5] w-full object-cover md:aspect-[5/6]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        tone === "brand"
                          ? "linear-gradient(to top, hsl(var(--primary) / 0.18), transparent 55%)"
                          : "linear-gradient(to top, hsl(var(--accent) / 0.18), transparent 55%)",
                    }}
                  />
                </div>
              </Reveal>

              <Reveal variant="fade-up" delay={120}>
                <div>
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      background:
                        tone === "brand"
                          ? "hsl(var(--primary) / 0.10)"
                          : "hsl(var(--accent) / 0.12)",
                      color:
                        tone === "brand"
                          ? "hsl(var(--primary))"
                          : "hsl(var(--accent))",
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="eyebrow mt-6 block">{eyebrow}</span>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-foreground md:text-4xl">
                    {title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                        <span
                          className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          style={{
                            background:
                              tone === "brand"
                                ? "hsl(var(--primary) / 0.12)"
                                : "hsl(var(--accent) / 0.15)",
                            color:
                              tone === "brand"
                                ? "hsl(var(--primary))"
                                : "hsl(var(--accent))",
                          }}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>

      <Reveal variant="fade" delay={300}>
        <p className="mt-16 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Licensed Telecommunications Service Provider — Ministry of Information &amp; Communications, Vietnam.
        </p>
      </Reveal>
    </div>
  </section>
);
