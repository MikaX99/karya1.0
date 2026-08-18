"use client";

import Script from "next/script";
import config from "@/data/config.json";

export default function Analytics() {
  const gaId = config.analytics?.googleAnalyticsId;
  const cfToken = config.analytics?.cloudflareToken;

  return (
    <>
      {/* Google Analytics 4 (GA4) */}
      {gaId && gaId !== "G-XXXXXXXXXX" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* Cloudflare Web Analytics */}
      {cfToken && (
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={`{"token": "${cfToken}"}`}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
