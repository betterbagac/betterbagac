import type { Metadata, Viewport } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HotlineBar from "@/components/layout/HotlineBar";
import InfoBar from "@/components/layout/InfoBar";
import SkipLink from "@/components/layout/SkipLink";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { siteConfig } from "@/data/site.config";
import { Providers } from "./providers";

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: "Ramon Logan Jr." }],
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: siteConfig.title,
    description: siteConfig.tagline,
    images: [
      {
        url: siteConfig.assets.openGraph,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: siteConfig.assets.favicon,
    apple: siteConfig.assets.favicon,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/accessibility.css" />
        <link rel="stylesheet" href="/assets/css/footer.css" />

        {/* Per-LGU token overrides. */}
        <link rel="stylesheet" href="/assets/css/theme.local.css" />
      </head>
      <body>
        <Providers>
          <LanguageProvider>
            <SkipLink />
            <HotlineBar />
            <Header />
            <InfoBar />
            <main id="main-content">{children}</main>
            <Footer />
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
