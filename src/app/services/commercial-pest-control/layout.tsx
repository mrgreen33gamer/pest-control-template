import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';
const url = BASE_URL + '/services/commercial-pest-control';

export const metadata: Metadata = {
  title: "Commercial Pest Control Waco TX | Restaurants & Facilities | ShieldPro",
  description: "Commercial pest control in Waco and Central Texas. Restaurants, multi-unit, healthcare-adjacent, and facilities — scheduled service and documentation.",
  keywords: ["commercial pest control Waco TX","restaurant pest control Waco","facility pest control Central Texas","ShieldPro"],
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Pest Control Waco TX | Restaurants & Facilities | ShieldPro",
    description: "Commercial pest control in Waco and Central Texas. Restaurants, multi-unit, healthcare-adjacent, and facilities — scheduled service and documentation.",
    url,
    siteName: "ShieldPro Pest Control",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Pest Control Waco TX | Restaurants & Facilities | ShieldPro",
    description: "Commercial pest control in Waco and Central Texas. Restaurants, multi-unit, healthcare-adjacent, and facilities — scheduled service and documentation.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Pest Control",
  description: "Commercial pest control in Waco and Central Texas. Restaurants, multi-unit, healthcare-adjacent, and facilities — scheduled service and documentation.",
  provider: {
    "@type": "PestControlService",
    name: "ShieldPro Pest Control",
    url: BASE_URL,
    telephone: "+12547763300",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1800 N Valley Mills Dr",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76710",
      addressCountry: "US",
    },
  },
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
  serviceType: "Commercial Pest Control",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
