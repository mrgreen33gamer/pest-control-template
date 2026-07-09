import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';
const url = BASE_URL + '/services/general-pest-control';

export const metadata: Metadata = {
  title: "General Pest Control Waco TX | Ants, Roaches & Spiders | ShieldPro",
  description: "General pest control in Waco and Central Texas. Ants, roaches, spiders, and seasonal invaders — recurring plans with free re-treats, licensed applicators.",
  keywords: ["general pest control Waco TX","exterminator Waco","ant control Waco","roach control Central Texas","ShieldPro Pest Control"],
  alternates: { canonical: url },
  openGraph: {
    title: "General Pest Control Waco TX | Ants, Roaches & Spiders | ShieldPro",
    description: "General pest control in Waco and Central Texas. Ants, roaches, spiders, and seasonal invaders — recurring plans with free re-treats, licensed applicators.",
    url,
    siteName: "ShieldPro Pest Control",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "General Pest Control Waco TX | Ants, Roaches & Spiders | ShieldPro",
    description: "General pest control in Waco and Central Texas. Ants, roaches, spiders, and seasonal invaders — recurring plans with free re-treats, licensed applicators.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "General Pest Control",
  description: "General pest control in Waco and Central Texas. Ants, roaches, spiders, and seasonal invaders — recurring plans with free re-treats, licensed applicators.",
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
  serviceType: "General Pest Control",
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
