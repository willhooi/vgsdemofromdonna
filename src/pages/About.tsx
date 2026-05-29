import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { Team } from "@/components/site/Team";
import { HumanStory } from "@/components/site/HumanStory";
import { AboutStoryPillars } from "@/components/site/AboutStoryPillars";
import { VietGuysCaseStudies } from "@/components/site/VietGuysCaseStudies";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { CTASection } from "@/components/site/CTASection";
import { AboutHumanHero } from "@/components/site/about/AboutHumanHero";
import { AboutManifesto } from "@/components/site/about/AboutManifesto";
import { AboutLifeGallery } from "@/components/site/about/AboutLifeGallery";
import { VDivider } from "@/components/brand/VWatermark";

const About = () => {
  useEffect(() => {
    document.title = "About — VietGuys | Con người đằng sau mỗi tin nhắn";
    const desc =
      "Từ 2007, VietGuys là một đội ngũ con người — kỹ sư, chuyên viên hỗ trợ, người đồng hành — gửi đi mỗi tin nhắn cho thương hiệu Việt. Gặp gỡ những con người, văn hoá và cộng đồng đứng sau nền tảng.";
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

      <AboutHumanHero />

      <AboutManifesto />

      <div className="container-tight"><VDivider /></div>

      <AboutStoryPillars />

      <div className="container-tight"><VDivider /></div>

      <HumanStory />

      <Team />

      <AboutLifeGallery />

      <VietGuysCaseStudies />

      <LogoMarquee />

      <CTASection />

      <Footer />
      <ChatBubble />
    </main>
  );
};

export default About;
