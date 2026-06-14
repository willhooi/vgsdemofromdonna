import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { AboutCTAFinal } from "@/components/site/about/AboutCTAFinal";
import { AboutHeroNew } from "@/components/site/about/AboutHeroNew";
import { AboutOurStory } from "@/components/site/about/AboutOurStory";
import { AboutCoreValues } from "@/components/site/about/AboutCoreValues";
import { AboutMissionVisionNew } from "@/components/site/about/AboutMissionVisionNew";
import { AboutPartners } from "@/components/site/about/AboutPartners";
import { AboutCertificatesNew } from "@/components/site/about/AboutCertificatesNew";
import { WaveDivider } from "@/components/site/about/WaveDivider";
import { FloatingActions } from "@/components/site/about/FloatingActions";

const About = () => {
  useEffect(() => {
    document.title = "About — VietGuys | AI-Powered Customer Engagement Vietnam";
    const desc =
      "Since 2007, VietGuys has built Vietnam's most trusted enterprise messaging platform — now evolving into an AI-powered customer engagement company. Backed by Accrete Inc., Japan.";
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

      <AboutHeroNew />

      <WaveDivider from="hsl(0 0% 100%)" to="#0c3b20" />
      <AboutOurStory />
      <WaveDivider from="#0a2f1a" to="hsl(0 0% 97%)" flip />

      <AboutCoreValues />

      <AboutMissionVisionNew />

      <AboutPartners />

      <AboutCertificatesNew />

      <AboutCTAFinal />

      <Footer />
      <ChatBubble />
      <FloatingActions />
    </main>
  );
};

export default About;
