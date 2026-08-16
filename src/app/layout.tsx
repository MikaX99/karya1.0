import type { Metadata } from "next";
import "./globals.css";
import config from "@/data/config.json";
import { ThemeProvider } from "@/context/ThemeContext";
import { LocaleProvider } from "@/context/LocaleContext";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://mikax99.github.io/karya1.0"
      : "http://localhost:3000"
  ),
  title: config.seo.title,
  description: config.seo.description,
  keywords: config.seo.keywords,
  authors: [{ name: config.company.name }],
  robots: "index, follow",
  openGraph: {
    title: config.seo.title,
    description: config.seo.description,
    type: "website",
    locale: "id_ID",
    siteName: config.company.name,
    images: [
      {
        url: config.seo.ogImage,
        width: 1200,
        height: 630,
        alt: config.company.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.seo.title,
    description: config.seo.description,
    images: [config.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" data-theme="light">
      <head>
        {/* Font Resource Hints — DNS resolve early */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        {/* Async (non-blocking) font load — font-display:swap prevents FOIT */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          />
        </noscript>
        <meta name="theme-color" content="#F5F5F7" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.country" content="Indonesia" />

        {/* ─── Security Meta Tags (GitHub Pages fallback) ─────────────────── */}
        {/* Prevents MIME-type sniffing */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        {/* Prevents clickjacking / iframe embedding */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        {/* Legacy XSS filter for older browsers */}
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        {/* Controls referrer information sent on navigation */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        {/* Content Security Policy — restricts resource origins */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={[
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline'",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com",
            "img-src 'self' data: https:",
            "connect-src 'self'",
            "frame-src https://www.google.com https://maps.google.com",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
          ].join("; ")}
        />
        {/* Canonical Link */}
        <link rel="canonical" href="https://mikax99.github.io/karya1.0/" />

        {/* Schema.org Structured Data for AI Agents & Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://mikax99.github.io/karya1.0/#organization",
                  "name": config.company.name,
                  "url": "https://mikax99.github.io/karya1.0/",
                  "logo": "https://mikax99.github.io/karya1.0/kst-dark.png",
                  "description": config.company.description,
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": config.company.phone,
                    "contactType": "sales",
                    "areaServed": "ID",
                    "availableLanguage": ["Indonesian", "English"]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mikax99.github.io/karya1.0/#website",
                  "url": "https://mikax99.github.io/karya1.0/",
                  "name": config.company.name,
                  "publisher": {
                    "@id": "https://mikax99.github.io/karya1.0/#organization"
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <LocaleProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
