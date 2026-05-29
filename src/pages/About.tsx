import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { AboutHero } from "@/components/site/about/AboutHero";
import { AboutKpiBand } from "@/components/site/about/AboutKpiBand";
import { AboutOrigin } from "@/components/site/about/AboutOrigin";
import { AboutMilestones } from "@/components/site/AboutMilestones";
import { AboutStoryPillars } from "@/components/site/AboutStoryPillars";
import { JapanBridge } from "@/components/site/JapanBridge";
import { AccreteBacking } from "@/components/site/AccreteBacking";
import { Team } from "@/components/site/Team";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { TrustMap } from "@/components/site/TrustMap";
import { CTASection } from "@/components/site/CTASection";

const About = () => {
  useEffect(() => {
    document.title = "About — VietGuys | Enterprise Messaging Vietnam";
    const desc =
      "Since 2007, VietGuys has built Vietnam's most trusted enterprise messaging platform. Backed by Accrete Inc., Japan. Meet the people, milestones and values behind the signal.";
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

      {/* Act I — The Manifesto */}
      <AboutHero />

      {/* Act II — Numbers that prove it */}
      <AboutKpiBand />

      {/* Act III — Origin Story */}
      <AboutOrigin />

      {/* Act IV — Milestones (19-year timeline) */}
      <div className="bg-secondary/30">
        <AboutMilestones />
      </div>

      {/* Act V — Three Pillars */}
      <AboutStoryPillars />

      {/* Act VI — Japan Bridge → Accrete backing */}
      <div className="bg-secondary/30">
        <JapanBridge />
        <AccreteBacking />
      </div>

      {/* Act VII — Leadership */}
      <Team />

      {/* Act VIII — Trust Wall (certs + map) */}
      <LogoMarquee />
      <TrustMap />

      {/* Act IX — CTA form */}
      <CTASection />

      <Footer />
      <ChatBubble />
    </main>
  );
};

export default About;
