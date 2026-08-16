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
    <html lang="id" className="scroll-smooth" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#0F172A" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.country" content="Indonesia" />
      </head>
      <body className="antialiased">
        <LocaleProvider><ThemeProvider>{children}</ThemeProvider></LocaleProvider>
      </body>
    </html>
  );
}
