import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { Solutions } from "@/components/site/Solutions";
import { Industries } from "@/components/site/Industries";
import { WhyVietGuys } from "@/components/site/WhyVietGuys";
import { Sharp } from "@/components/site/Sharp";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Partners } from "@/components/site/Partners";
import { Mobile } from "@/components/site/Mobile";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "VietGuys — AI-Powered Customer Engagement for Vietnam's Enterprises";
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
      <WhyVietGuys />
      <Sharp />
      <CaseStudies />
      <Partners />
      <Mobile />
      <FAQ />
      <CTASection />
      <Footer />
      <ChatBubble />
    </main>
  );
};

export default Index;
