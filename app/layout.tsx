import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BR Pragas Campinas | Dedetização de cupins, ratos, baratas e escorpiões",
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
  openGraph: {
    title: "BR Pragas Campinas | Dedetização de cupins, ratos, baratas e escorpiões ⭐5.0",
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

        {/* 
          TODO: Add Google Tag Manager when ready
          Instructions:
          1. Create GTM account at tagmanager.google.com
          2. Add GTM container script here in <head>
          3. Add noscript iframe right after <body>
          4. Configure Google Ads conversion tracking in GTM
          5. Set up events for: WhatsApp click, Phone click, Form submission
          
          Example GTM head script:
          <script>
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          </script>
        */}
      </head>
      <body className={inter.className}>
        {/* 
          TODO: Add GTM noscript here
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          </noscript>
        */}
        {children}
      </body>
    </html>
  );
}
