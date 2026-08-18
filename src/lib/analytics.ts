declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function trackEvent(action: string, params?: Record<string, any>) {
  if (typeof window !== "undefined") {
    // 1. Google Analytics Event
    if (window.gtag) {
      window.gtag("event", action, params);
    }
    // 2. Local console log for development debugging
    if (process.env.NODE_ENV === "development") {
      console.log(`📊 [Analytics Event] ${action}:`, params);
    }
  }
}

export function trackWhatsAppClick(source: string, details?: string) {
  trackEvent("click_whatsapp", {
    event_category: "Lead Generation",
    event_label: source,
    source_location: source,
    product_name: details || "General Consultation",
    timestamp: new Date().toISOString(),
  });
}
