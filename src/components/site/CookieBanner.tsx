import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "vg-cookie-consent";
const GTM_ID = "GTM-XXXXXXX";

function loadGTM() {
  if (typeof window === "undefined") return;
  const w = window as any;
  if (w.__gtmLoaded) return;
  w.__gtmLoaded = true;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem(STORAGE_KEY);
    if (choice === "accepted") {
      loadGTM();
    } else if (!choice) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    loadGTM();
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-background/95 shadow-[0_-8px_32px_-12px_hsl(0_0%_0%/0.15)] backdrop-blur"
    >
      <div className="container-tight flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between md:gap-6 md:py-5">
        <p className="text-sm text-foreground md:max-w-3xl">
          We use cookies to understand how visitors use our website. This helps us improve your experience.{" "}
          <Link to="/privacy" className="font-semibold text-primary underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-2.5">
          <Button variant="outline" size="sm" onClick={decline}>
            Decline
          </Button>
          <Button
            variant="cta"
            size="sm"
            onClick={accept}
            className="bg-[#39b44a] text-white shadow-[0_8px_24px_-8px_rgba(57,180,74,0.6)] hover:bg-[#2fa040] hover:brightness-100"
          >
            Accept cookies
          </Button>
        </div>
      </div>
    </div>
  );
};
