// GTM dataLayer helper
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

const push = (payload: Record<string, unknown>) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
};

export const trackDemoRequest = (form_location: string) =>
  push({ event: "demo_request", form_location });

export const trackProfileDownload = (form_location: string) =>
  push({ event: "profile_download", form_location });

export const trackContactClick = (contact_type: "phone" | "email") =>
  push({ event: "contact_click", contact_type });
