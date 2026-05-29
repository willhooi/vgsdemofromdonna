import {
  Flag,
  Smartphone,
  Building2,
  Award,
  ShieldCheck,
  Handshake,
  Database,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

type Milestone = {
  date: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

const milestones: Milestone[] = [
  { date: "06/2007", title: "VietGuys is founded", body: "First SMS gateway lit up from a 25m² workplace in Ho Chi Minh City.", icon: Flag },
  { date: "03/2008", title: "Samsung E-warranty", body: "Selected to power Samsung's E-warranty messaging across Vietnam.", icon: Smartphone },
  { date: "02/2010", title: "Investing in Digitel", body: "Invested in and partnered with Digitel Co., Ltd.", icon: Handshake },
  { date: "11/2017", title: "LG E-warranty", body: "Delivered LG's E-warranty notifications nationwide.", icon: Smartphone },
  { date: "06/2018", title: "1st office expansion", body: "Outgrew the original room — new HQ in Ho Chi Minh City.", icon: Building2 },
  { date: "12/2018", title: "#1 SMS in E-commerce", body: "Top SMS volume provider for Vietnam's e-commerce industry.", icon: Award },
  { date: "09/2019", title: "Top 3 Viber providers", body: "Recognised among Vietnam's top 3 Viber business providers.", icon: Award },
  { date: "11/2020", title: "OTPBox launched", body: "Multi-channel verification code platform goes live.", icon: ShieldCheck },
  { date: "05/2020", title: "2nd office expansion", body: "Doubled office footprint to support growing enterprise demand.", icon: Building2 },
  { date: "01/2021", title: "5,000+ brands", body: "Trusted by 5,000+ domestic and international brands across 15 solutions.", icon: Award },
  { date: "03/2022", title: "Joins Accrete Inc.", body: "Merged with Accrete Inc. — Japan's leading international SMS gateway provider, TSE-listed.", icon: Handshake },
  { date: "05/2022", title: "PangoCDP", body: "Partnered with ByteTech to bring PangoCDP to enterprises.", icon: Database },
  { date: "Today", title: "5M messages a day", body: "76 enterprise clients, every province in Vietnam, one steady signal.", icon: Rocket },
];

export const AboutMilestones = () => (
  <section className="py-20 md:py-28">
    <div className="container-tight">
      <Reveal variant="fade-up" className="max-w-2xl">
        <span className="chapter-eyebrow">The long arc</span>
        <h2 className="heading-section mt-4 text-balance">
          Nineteen years, one signal — getting stronger.
        </h2>
        <p className="mt-5 text-muted-foreground">
          Every milestone below is a moment we earned the right to send the next message.
        </p>
      </Reveal>

      <div className="relative mt-14">
        <Reveal variant="fade" className="absolute left-5 top-0 h-full w-px md:left-1/2">
          <div
            className="timeline-line h-full w-px"
            style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--primary)/0.35), hsl(var(--accent)/0.35), transparent)" }}
          />
        </Reveal>
        <ol className="space-y-10">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            const isRight = i % 2 === 1;
            return (
              <Reveal
                as="li"
                key={`${m.date}-${m.title}`}
                variant="fade-up"
                delay={i * 40}
                className="relative grid gap-3 md:grid-cols-2 md:gap-12"
              >
                <div className={isRight ? "md:order-2 md:pl-12" : "md:pr-12 md:text-right"}>
                  <div className="pl-14 md:pl-0">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                      {m.date}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">{m.title}</h3>
                  </div>
                </div>
                <div className={isRight ? "md:order-1 md:pr-12 md:text-right" : "md:pl-12"}>
                  <p className="pl-14 text-sm text-muted-foreground md:pl-0">{m.body}</p>
                </div>
                <span className="dot-pop absolute left-5 top-1 -translate-x-1/2 md:left-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background ring-4 ring-background border border-[hsl(var(--primary))]/30 text-primary shadow-[var(--shadow-soft)]">
                  <Icon className="h-4 w-4" />
                </span>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </div>
  </section>
);
