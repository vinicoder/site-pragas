import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "BR Pragas Campinas | Dedetização de cupins, ratos, baratas, escorpiões, formigas e aranhas",
  description:
    "Dedetização em Campinas e região com avaliação 5.0 ⭐ (43 avaliações). Orçamento grátis via WhatsApp. Controle de cupins, ratos, baratas, escorpiões e mais.",
  keywords: [
    "dedetização campinas",
    "controle de pragas campinas",
    "dedetizadora campinas",
    "desratização campinas",
    "descupinização campinas",
  ],
  authors: [{ name: "BR Pragas Campinas" }],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title:
      "BR Pragas Campinas | Dedetização de cupins, ratos, baratas, escorpiões, formigas e aranhas",
    description:
      "Dedetização em Campinas com avaliação 5.0. Orçamento grátis via WhatsApp. Atendimento rápido!",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LocalBusiness structured data for SEO and Google Ads Quality Score
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["PestControlService", "LocalBusiness"],
    name: "BR Pragas Campinas",
    image: "https://www.brpragas.com.br/logo.png",
    description:
      "Controle de pragas, dedetização, desratização e descupinização em Campinas e região com avaliação 5.0 estrelas.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Andrea Fernandes da Silva Araújo, 444",
      addressLocality: "Campinas",
      addressRegion: "SP",
      postalCode: "13101-290",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-22.9099",
      longitude: "-47.0626",
    },
    telephone: "+55-19-99710-8660",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "43",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: {
      "@type": "City",
      name: "Campinas e Região",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Controle de Pragas",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dedetização de Cupins",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desratização",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Controle de Escorpiões",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dedetização de Baratas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Controle de Formigas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Higienização de Caixa d'Água",
          },
        },
      ],
    },
    url: "https://www.brpragas.com.br",
    sameAs: ["https://www.instagram.com/brpragascampinas/"],
  };

  return (
    <html lang="pt-BR">
      <head>
        {/* Schema.org JSON-LD for LocalBusiness SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Ads (gtag.js) - Using Next.js Script component */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17698807037"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17698807037');
          `}
        </Script>

        {/* Event snippet for Page view conversion */}
        <Script id="google-ads-pageview" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-17698807037/Ke4yCNyAlrkbEP25ufdB',
              'value': 1.0,
              'currency': 'BRL'
            });
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
