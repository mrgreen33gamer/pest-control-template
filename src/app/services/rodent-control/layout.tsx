import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';
const url = BASE_URL + '/services/rodent-control';

export const metadata: Metadata = {
  title: "Rodent Control Waco TX | Mice & Rat Removal | ShieldPro",
  description: "Rodent control in Waco and Central Texas. Mice and rat trapping, exclusion, and sanitation guidance. Licensed, insured, same-day when available.",
  keywords: ["rodent control Waco TX","mouse exterminator Waco","rat control Central Texas","ShieldPro Pest Control"],
  alternates: { canonical: url },
  openGraph: {
    title: "Rodent Control Waco TX | Mice & Rat Removal | ShieldPro",
    description: "Rodent control in Waco and Central Texas. Mice and rat trapping, exclusion, and sanitation guidance. Licensed, insured, same-day when available.",
    url,
    siteName: "ShieldPro Pest Control",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodent Control Waco TX | Mice & Rat Removal | ShieldPro",
    description: "Rodent control in Waco and Central Texas. Mice and rat trapping, exclusion, and sanitation guidance. Licensed, insured, same-day when available.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Rodent Control",
  description: "Rodent control in Waco and Central Texas. Mice and rat trapping, exclusion, and sanitation guidance. Licensed, insured, same-day when available.",
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
  serviceType: "Rodent Control",
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
