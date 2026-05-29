import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { Team } from "@/components/site/Team";
import { AboutStoryPillars } from "@/components/site/AboutStoryPillars";
import { AboutMilestones } from "@/components/site/AboutMilestones";
import { AboutHero } from "@/components/site/AboutHero";
import { AboutChapter } from "@/components/site/AboutChapter";
import { AboutSectionNav } from "@/components/site/AboutSectionNav";
import { AboutVisionMission } from "@/components/site/AboutVisionMission";
import { AboutCertificates } from "@/components/site/AboutCertificates";
import { CTASection } from "@/components/site/CTASection";
import { VDivider } from "@/components/brand/VWatermark";

const About = () => {
  useEffect(() => {
    document.title = "About — VietGuys | Enterprise Messaging Vietnam";
    const desc =
      "Since 2007, VietGuys has built Vietnam's most trusted enterprise messaging platform. Backed by Accrete Inc., Japan. The story in three chapters.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <AboutHero />

      <AboutSectionNav />

      <div id="story">
        <AboutChapter
          chapterNumber="01"
          eyebrow="Chapter 01 — The Beginning"
          title="A 25m² room in Saigon, and one stubborn conviction."
          body={
            <>
              <p>
                In June 2007, a small team of young founders lit up their first SMS
                gateway from a 25-square-metre workplace in Ho Chi Minh City. No
                investors. No playbook. Just one stubborn conviction — that
                Vietnamese enterprises deserved messaging infrastructure built for
                them, by people who lived here.
              </p>
              <p>
                From day one, VietGuys chose its own direction: build
                constantly-improved Mobile Marketing Solutions for Vietnamese
                enterprises — not net value-added services, not a side hustle on
                top of a telecom contract. Every line of code, every routing
                decision, every relationship had to earn the right to carry the
                next message.
              </p>
            </>
          }
          pullQuote="Towards holistic values for enterprises and the entire community — not just sales or profit."
          image={{
            src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
            alt: "VietGuys founding team collaborating in their first office",
          }}
        />

        <div className="container-tight"><VDivider /></div>

        <AboutChapter
          chapterNumber="02"
          eyebrow="Chapter 02 — Growing with our customers"
          title="Every brand we earned the right to carry, taught us something."
          reverse
          body={
            <>
              <p>
                In 2008, Samsung chose VietGuys to power its E-warranty messaging
                across Vietnam. It was the first time a global brand bet on us —
                and the first time we learned what enterprise-grade reliability
                really demanded. LG followed in 2017. By 2018 we were the #1 SMS
                provider in Vietnamese e-commerce.
              </p>
              <p>
                Then came the platforms our customers asked for next: Viber in
                2019, OTPBox in 2020, Zalo ZNS, Email, Voice. By 2021 we were
                trusted by 5,000+ domestic and international brands across 15
                solutions. Each step wasn&apos;t a strategy slide — it was a
                customer asking us to go one more mile with them.
              </p>
            </>
          }
          pullQuote="5,000+ brands. 5 million messages a day. One promise, kept message by message."
          image={{
            src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
            alt: "Enterprise team reviewing customer engagement dashboards",
          }}
        />

        <div className="container-tight"><VDivider /></div>

        <AboutChapter
          chapterNumber="03"
          eyebrow="Chapter 03 — The Vietnam–Japan bridge"
          title="In 2022, we shook hands with Tokyo — and kept our feet in Saigon."
          body={
            <>
              <p>
                In March 2022, VietGuys merged with{" "}
                <a
                  className="text-primary underline underline-offset-4"
                  href="https://www.accrete-inc.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Accrete Inc.
                </a>
                , Japan&apos;s leading international SMS gateway provider, listed
                on the Tokyo Stock Exchange. It gave us global reach, a partner
                with the same long-horizon thinking, and governance standards
                that match the brands we serve.
              </p>
              <p>
                What it didn&apos;t change: who picks up the phone when your
                campaign goes live at 2 AM. Our engineers, our customer leads, our
                support — still in Vietnam, still on call. A Tokyo-grade backbone,
                with a Saigon heartbeat.
              </p>
            </>
          }
          pullQuote="Global strength. Local fluency. Same team you&rsquo;ve always known."
          image={{
            src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
            alt: "Vietnam and Japan partnership handshake at corporate event",
          }}
        />
      </div>

      <div className="container-tight"><VDivider /></div>

      <AboutVisionMission />

      <div className="container-tight"><VDivider /></div>

      <div id="milestones"><AboutMilestones /></div>

      <div className="container-tight"><VDivider /></div>

      <div id="values"><AboutStoryPillars /></div>

      <div id="team"><Team /></div>

      <div className="container-tight"><VDivider /></div>

      <AboutCertificates />

      <CTASection />

      <Footer />
      <ChatBubble />
    </main>
  );
};

export default About;
