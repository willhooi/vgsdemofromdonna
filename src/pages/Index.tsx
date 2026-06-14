import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
// import { MediaShowcase } from "@/components/site/MediaShowcase"; // hidden per request

import { TrustBand } from "@/components/site/TrustBand";
import { Solutions } from "@/components/site/Solutions";
import { SolutionsToServicesBridge } from "@/components/site/SolutionsToServicesBridge";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { GalaxyBackdrop } from "@/components/site/GalaxyBackdrop";
import { ServicesPlexusBackdrop } from "@/components/site/ServicesPlexusBackdrop";

import { VietGuysCaseStudies } from "@/components/site/VietGuysCaseStudies";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { ChatBubble } from "@/components/site/ChatBubble";
import { VDivider } from "@/components/brand/VWatermark";

const Index = () => {
  useEffect(() => {
    document.title = "Enterprise Messaging — VietGuys | Enterprise Messaging Vietnam";
    const desc =
      "VietGuys: where customer conversations become business growth. SMS, Zalo, Viber, Email & AI campaigns, 19 years, 5M messages daily, ISO 27001. A member of Accrete Inc., Japan.";
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
      <div className="container-tight"><VDivider /></div>
      <TrustBand />
      <div className="container-tight"><VDivider /></div>
      <div className="relative isolate">
        <GalaxyBackdrop />
        <Solutions />
      </div>
      <div className="relative isolate overflow-hidden">
        <ServicesPlexusBackdrop />
        <SolutionsToServicesBridge />
        <ServicesGrid />
      </div>
      <VietGuysCaseStudies />
      <div className="container-tight"><VDivider /></div>
      <div className="bg-muted">
        <FAQ />
      </div>
      <CTASection />
      <Footer />
      <ChatBubble />
    </main>
  );
};

export default Index;
