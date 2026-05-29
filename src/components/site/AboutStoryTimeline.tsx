import { Reveal } from "@/components/motion/Reveal";

type Milestone = {
  year: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

const milestones: Milestone[] = [
  {
    year: "2007",
    title: "A 25m² room in Saigon.",
    body: "VietGuys lit up its first SMS gateway from a small workplace in Ho Chi Minh City — no investors, no playbook, one stubborn conviction that Vietnamese enterprises deserved messaging infrastructure built for them.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    alt: "VietGuys founding team in their first Saigon office",
  },
  {
    year: "2008",
    title: "First global trust — Samsung.",
    body: "Samsung chose VietGuys to power its E-warranty messaging across Vietnam. It was the first time a global brand bet on us, and the first time we learned what enterprise-grade reliability really demanded.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    alt: "Enterprise team partnership meeting",
  },
  {
    year: "2018",
    title: "#1 SMS in Vietnamese e-commerce.",
    body: "From Viber to OTPBox, Zalo ZNS, Email and Voice — every step was a customer asking us to go one more mile. By 2018 we were the trusted messaging backbone for Vietnam&apos;s fastest-growing brands.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
    alt: "Team reviewing customer engagement dashboards",
  },
  {
    year: "2022",
    title: "Tokyo handshake, Saigon heartbeat.",
    body: "VietGuys merged with Accrete Inc., Japan&apos;s leading international SMS gateway provider listed on the Tokyo Stock Exchange. Global reach. Tokyo-grade governance. Same team that picks up the phone at 2 AM.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80",
    alt: "Vietnam and Japan partnership handshake",
  },
];

export const AboutStoryTimeline = () => (
  <section id="story" className="relative py-24 md:py-32">
    <div className="container-tight">
      <Reveal variant="fade-up" className="max-w-2xl">
        <span className="chapter-eyebrow">Our Story</span>
        <h2 className="heading-section mt-4 text-balance">
          Nineteen years, told in four short moments.
        </h2>
        <p className="mt-5 text-muted-foreground">
          From a 25m² room in Saigon to a Tokyo-listed group — the milestones that shaped how
          we carry every message today.
        </p>
      </Reveal>

      <div className="mt-16 space-y-20 md:space-y-28">
        {milestones.map((m, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={m.year}
              className="grid items-center gap-8 md:grid-cols-12 md:gap-14"
            >
              <Reveal
                variant={reverse ? "fade-up" : "clip-right"}
                className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}
              >
                <div className="relative overflow-hidden rounded-[28px] shadow-[var(--shadow-card)]">
                  <img
                    src={m.image}
                    alt={m.alt}
                    loading="lazy"
                    className="ken-burns h-[280px] w-full object-cover md:h-[420px]"
                  />
                </div>
              </Reveal>

              <Reveal
                variant="fade-up"
                delay={120}
                className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}
              >
                <div
                  className="font-display text-6xl font-bold leading-none md:text-7xl"
                  style={{
                    backgroundImage: "var(--gradient-brand)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {m.year}
                </div>
                <h3 className="mt-5 font-display text-2xl leading-tight text-foreground md:text-4xl">
                  {m.title}
                </h3>
                <p
                  className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
                  dangerouslySetInnerHTML={{ __html: m.body }}
                />
              </Reveal>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
