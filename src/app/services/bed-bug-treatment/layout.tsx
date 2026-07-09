import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';
const url = BASE_URL + '/services/bed-bug-treatment';

export const metadata: Metadata = {
  title: "Bed Bug Treatment Waco TX | Discreet Protocols | ShieldPro",
  description: "Bed bug treatment in Waco and Central Texas. Discreet inspection, proven protocols, prep guidance, and follow-up verification.",
  keywords: ["bed bug treatment Waco TX","bed bug exterminator Waco","bed bugs Central Texas","ShieldPro"],
  alternates: { canonical: url },
  openGraph: {
    title: "Bed Bug Treatment Waco TX | Discreet Protocols | ShieldPro",
    description: "Bed bug treatment in Waco and Central Texas. Discreet inspection, proven protocols, prep guidance, and follow-up verification.",
    url,
    siteName: "ShieldPro Pest Control",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bed Bug Treatment Waco TX | Discreet Protocols | ShieldPro",
    description: "Bed bug treatment in Waco and Central Texas. Discreet inspection, proven protocols, prep guidance, and follow-up verification.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bed Bug Treatment",
  description: "Bed bug treatment in Waco and Central Texas. Discreet inspection, proven protocols, prep guidance, and follow-up verification.",
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
  serviceType: "Bed Bug Treatment",
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
