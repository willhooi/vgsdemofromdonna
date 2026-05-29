import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { AboutHero } from "@/components/site/about/AboutHero";
import { AboutKpiBand } from "@/components/site/about/AboutKpiBand";
import { AboutOrigin } from "@/components/site/about/AboutOrigin";
import { AboutPillars } from "@/components/site/about/AboutPillars";
import { AboutVisionMission } from "@/components/site/about/AboutVisionMission";
import { AboutTimeline } from "@/components/site/about/AboutTimeline";
import { AboutValues } from "@/components/site/about/AboutValues";
import { AboutAccrete } from "@/components/site/about/AboutAccrete";
import { AboutLeadership } from "@/components/site/about/AboutLeadership";
import { AboutCTA } from "@/components/site/about/AboutCTA";

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
    <main className="min-h-screen bg-[#fcfaf7]">
      <Header />
      <AboutHero />
      <AboutKpiBand />
      <AboutOrigin />
      <AboutPillars />
      <AboutVisionMission />
      <AboutTimeline />
      <AboutValues />
      <AboutAccrete />
      <AboutLeadership />
      <AboutCTA />
      <Footer />
      <ChatBubble />
    </main>
  );
};

export default About;
