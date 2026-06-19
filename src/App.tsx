import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Solutions from "./pages/Solutions.tsx";
import CaseStudies from "./pages/CaseStudies.tsx";
import MarketInsights from "./pages/MarketInsights.tsx";
import InsightArticle from "./pages/InsightArticle.tsx";
import NotFound from "./pages/NotFound.tsx";
import Careers from "./pages/Careers.tsx";
import { CookieBanner } from "./components/site/CookieBanner";

const queryClient = new QueryClient();

const InsightSlugRedirect = () => {
  const slug = window.location.pathname.split("/").filter(Boolean)[1] ?? "";
  return <Navigate to={`/market-insights/${slug}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/market-insights" element={<MarketInsights />} />
          <Route
            path="/market-insights/:slug"
            element={<InsightArticle />}
          />
          {/* Legacy /insights → /market-insights (301-style client redirect) */}
          <Route
            path="/insights"
            element={<Navigate to="/market-insights" replace />}
          />
          <Route path="/insights/:slug" element={<InsightSlugRedirect />} />
          <Route path="/en/join-us" element={<Careers />} />
          <Route path="/careers" element={<Navigate to="/en/join-us" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
