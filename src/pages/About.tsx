import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { AboutHero } from "@/components/site/AboutHero";
import { AboutNumbers } from "@/components/site/AboutNumbers";
import { HumanStory } from "@/components/site/HumanStory";
import { AboutMilestones } from "@/components/site/AboutMilestones";
import { AboutStoryPillars } from "@/components/site/AboutStoryPillars";
import { JapanBridge } from "@/components/site/JapanBridge";
import { AccreteBacking } from "@/components/site/AccreteBacking";
import { Team } from "@/components/site/Team";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { TrustMap } from "@/components/site/TrustMap";
import { CTASection } from "@/components/site/CTASection";
import { VDivider } from "@/components/brand/VWatermark";

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

      <AboutHero />

      <AboutNumbers />

      <div id="story" />
      <HumanStory />

      <div className="container-tight"><VDivider /></div>

      <AboutMilestones />

      <div className="container-tight"><VDivider /></div>

      <AboutStoryPillars />

      <JapanBridge />

      <div id="accrete" />
      <AccreteBacking />

      <div className="container-tight"><VDivider /></div>

      <Team />

      <LogoMarquee />

      <TrustMap />

      <div id="cta" />
      <CTASection />

      <Footer />
      <ChatBubble />
    </main>
  );
};

export default About;
