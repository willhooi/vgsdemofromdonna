import { Cable, BadgeCheck, ShieldCheck, Lock, Clock, Building2 } from "lucide-react";

const cards = [
  {
    icon: Cable,
    title: "Direct carrier connections",
    desc: "No intermediaries. Direct technical integration with all major Vietnamese telecom carriers for maximum deliverability.",
  },
  {
    icon: BadgeCheck,
    title: "Zalo Official Trusted Partner",
    desc: "One of Vietnam's authorised Zalo partners — official access to ZBS messaging channels at source.",
  },
  {
    icon: ShieldCheck,
    title: "ISO Certified",
    desc: "ISO certified operations demonstrating process quality, security discipline, and enterprise-grade service standards.",
  },
  {
    icon: Lock,
    title: "PDPL Compliant",
    desc: "Fully aligned with Vietnam's Personal Data Protection Decree 2023. Safe for regulated industries including banking and healthcare.",
  },
  {
    icon: Clock,
    title: "19 years in Vietnam",
    desc: "Founded in 2007. Deep relationships with Vietnam's largest enterprise clients across banking, aviation, retail, and logistics.",
  },
  {
    icon: Building2,
    title: "Accrete Japan backing",
    desc: "Majority-owned by Accrete Inc. (TSE-listed, Japan) — institutional governance, international standards, local expertise.",
  },
];

export const WhyVietGuys = () => {
  return (
    <section id="why-vietguys" className="py-24 md:py-32 bg-[hsl(var(--muted))]">
      <div className="container-tight">
        <div className="max-w-2xl text-center mx-auto">
          <span className="eyebrow justify-center">Why VietGuys</span>
          <h2 className="heading-section mt-4 text-balance">
            The difference that 19 years makes
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Credentials and capabilities that enterprise procurement teams require.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl border border-border bg-background p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[hsl(var(--primary-soft))] text-[hsl(var(--primary-deep))]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
