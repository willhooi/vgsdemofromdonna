import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { Solutions } from "@/components/site/Solutions";
import { Sharp } from "@/components/site/Sharp";
import { Trust } from "@/components/site/Trust";
import { Mobile } from "@/components/site/Mobile";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "VietGuys — AI-Powered Customer Engagement for Vietnam's Enterprises";
    const desc = "VietGuys: AI-powered SMS, Zalo, ZNS, Viber & Email engagement. 15+ years, 5M messages daily, ISO 27001. Backed by Accrete Inc., Japan.";
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
      <LogoMarquee />
      <Solutions />
      <Sharp />
      <Trust />
      <Mobile />
      <CTASection />
      <Footer />
      <ChatBubble />
    </main>
  );
};

export default Index;
