import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Timeline } from "@/components/site/Timeline";
import { Solutions } from "@/components/site/Solutions";
import { TrustMap } from "@/components/site/TrustMap";
import { JapanBridge } from "@/components/site/JapanBridge";
import { CaseStudies } from "@/components/site/CaseStudies";
import { HumanStory } from "@/components/site/HumanStory";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";

const Index = () => {
  useEffect(() => {
    document.title = "Enterprise Messaging — VietGuys | Enterprise Messaging Vietnam";
    const desc =
      "VietGuys: where customer conversations become business growth. SMS, Zalo, Viber, Email & AI campaigns, 19 years, 5M messages daily, ISO 27001. Backed by Accrete Inc., Japan.";
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
      <Timeline />
      <Solutions />
      <TrustMap />
      <JapanBridge />
      <CaseStudies />
      <HumanStory />
      <FAQ />
      <CTASection />
      <Footer />
      <ChatBubble />
    </main>
  );
};

export default Index;
