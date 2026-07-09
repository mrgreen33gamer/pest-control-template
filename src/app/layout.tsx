// src/app/layout.tsx
// ShieldPro Pest Control â€” root layout
import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, ABeeZee } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

const aBeeZee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abeezee",
});

const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.shieldpropest.com"
  : "http://localhost:3000";

export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0d1b2a" },
    { media: "(prefers-color-scheme: dark)",  color: "#0d1b2a" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ShieldPro Pest Control | Exterminating, Termites & Rodents â€” Waco, TX",
    template: "%s | ShieldPro Pest Control",
  },
  description:
    "ShieldPro Pest Control is a Waco, TX pest control company offering general pest control, termite inspection & treatment, rodent control, mosquito yard treatment, bed bug treatment, and commercial pest control for Central Texas homes and businesses. Licensed, insured, satisfaction guaranteed.",
  keywords: [
    "ShieldPro Pest Control",
    "pest control Waco TX",
    "exterminator Waco Texas",
    "termite inspection Waco",
    "rodent control Central Texas",
    "mosquito treatment Waco TX",
    "bed bug treatment Hewitt TX",
    "commercial pest control Waco",
    "emergency pest control Waco",
  ],
  authors: [{ name: "ShieldPro Pest Control", url: BASE_URL }],
  creator: "ShieldPro Pest Control",
  publisher: "ShieldPro Pest Control",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "ShieldPro Pest Control | Exterminating, Termites & Rodents â€” Waco, TX",
    description:
      "Waco-based pest control for homes and businesses across Central Texas. Licensed applicators, eco-conscious options, free re-treat between visits. Satisfaction guaranteed.",
    url: BASE_URL,
    siteName: "ShieldPro Pest Control",
    images: [
      {
        url: `${BASE_URL}/logos/scott-apps-banner.png?v=1`,
        width: 1200,
        height: 630,
        alt: "ShieldPro Pest Control â€” Waco TX Pest Control & Exterminating",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShieldPro Pest Control | Waco TX Exterminator",
    description:
      "General pest, termites, rodents, mosquitoes, bed bugs & commercial pest control. Licensed, insured â€” free re-treat guarantee.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "4.9";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PestControlService",
  "@id": `${BASE_URL}/#organization`,
  name: "ShieldPro Pest Control",
  alternateName: "ShieldPro Pest Control Waco",
  description:
    "Residential and commercial pest control in Waco and Central Texas â€” general pest control, termite inspection & treatment, rodent control, mosquito yard treatment, bed bug treatment, and commercial pest programs. Licensed Pest Control Applicators, fully insured, satisfaction guaranteed with free re-treat between scheduled visits.",
  url: BASE_URL,
  telephone: "+12547763300",
  email: "hello@shieldpropest.com",
  foundingDate: "2014",
  founder: {
    "@type": "Person",
    name: "Derek Collins",
    jobTitle: "Owner & Licensed Pest Control Applicator",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1800 N Valley Mills Dr",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76710",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pest Control Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Pest Control" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Termite Inspection & Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rodent Control" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mosquito Yard Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bed Bug Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Pest Control" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/shieldpropest",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${aBeeZee.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#ca8a04" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#0d1b2a",
                }}
              >
                <PulseLoader size={50} color="#ca8a04" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}
