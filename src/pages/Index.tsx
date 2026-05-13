import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { Solutions } from "@/components/site/Solutions";
import { Industries } from "@/components/site/Industries";
import { HumanStory } from "@/components/site/HumanStory";
import { WhyVietGuys } from "@/components/site/WhyVietGuys";
import { Sharp } from "@/components/site/Sharp";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Partners } from "@/components/site/Partners";
import { Mobile } from "@/components/site/Mobile";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { CTABottom } from "@/components/site/CTABottom";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Enterprise Messaging — VietGuys | Enterprise Messaging Vietnam";
    const desc = "VietGuys: AI-powered SMS, Zalo, ZNS, Viber & Email engagement. 19 years, 5M messages daily, ISO 27001. Backed by Accrete Inc., Japan.";
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
      <Hero />
      <TrustBar />
      <LogoMarquee />
      <Solutions />
      <Industries />
      <HumanStory />
      <CaseStudies />
      <WhyVietGuys />
      <Sharp />
      <Partners />
      <Mobile />
      <FAQ />
      <CTASection />
      <CTABottom />
      <Footer />
      <ChatBubble />
    </main>
  );
};

export default Index;
