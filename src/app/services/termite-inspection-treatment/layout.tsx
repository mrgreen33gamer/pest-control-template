import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';
const url = BASE_URL + '/services/termite-inspection-treatment';

export const metadata: Metadata = {
  title: "Termite Inspection & Treatment Waco TX | ShieldPro Pest Control",
  description: "Termite inspection and treatment in Waco and Central Texas. Thorough inspections, liquid and bait systems, monitoring. Licensed applicators.",
  keywords: ["termite inspection Waco TX","termite treatment Waco","termite control Central Texas","ShieldPro Pest Control"],
  alternates: { canonical: url },
  openGraph: {
    title: "Termite Inspection & Treatment Waco TX | ShieldPro Pest Control",
    description: "Termite inspection and treatment in Waco and Central Texas. Thorough inspections, liquid and bait systems, monitoring. Licensed applicators.",
    url,
    siteName: "ShieldPro Pest Control",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Termite Inspection & Treatment Waco TX | ShieldPro Pest Control",
    description: "Termite inspection and treatment in Waco and Central Texas. Thorough inspections, liquid and bait systems, monitoring. Licensed applicators.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Termite Inspection & Treatment",
  description: "Termite inspection and treatment in Waco and Central Texas. Thorough inspections, liquid and bait systems, monitoring. Licensed applicators.",
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
  serviceType: "Termite Control",
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
