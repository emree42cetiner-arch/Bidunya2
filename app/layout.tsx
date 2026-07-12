import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyContactButtons } from "@/components/StickyContactButtons";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Ödül, Plaket, Madalya ve Kupa Kataloğu`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Ödül, Plaket, Madalya ve Kupa Kataloğu`,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: absoluteUrl("/images/og-default.png"),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} ürün kataloğu`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Ödül Kataloğu`,
    description: siteConfig.description,
    images: [absoluteUrl("/images/og-default.png")],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.legalName,
  url: siteConfig.url,
  image: absoluteUrl("/images/og-default.png"),
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Halkalı Merkez, Maslak Çeşme Cd. NO:231/A",
    postalCode: "34295",
    addressLocality: "Küçükçekmece",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  openingHours: "Mo-Sa 09:00-18:30",
  sameAs: siteConfig.socials.map((social) => social.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className="pb-16 text-ink antialiased md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main>{children}</main>
        <Footer />
        <StickyContactButtons />
      </body>
    </html>
  );
}
