import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { Team } from "@/components/site/Team";
import { AboutStoryPillars } from "@/components/site/AboutStoryPillars";
import { AboutMilestones } from "@/components/site/AboutMilestones";
import { AboutHero } from "@/components/site/AboutHero";
import { AboutStoryTimeline } from "@/components/site/AboutStoryTimeline";
import { AboutVisionMission } from "@/components/site/AboutVisionMission";
import { AboutCertificates } from "@/components/site/AboutCertificates";
import { AboutCTAFinal } from "@/components/site/AboutCTAFinal";

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
      <AboutStoryTimeline />
      <AboutVisionMission />
      <div id="values"><AboutStoryPillars /></div>
      <div id="milestones"><AboutMilestones /></div>
      <Team />
      <AboutCertificates />
      <AboutCTAFinal />
      <Footer />
      <ChatBubble />
    </main>
  );
};

export default About;
