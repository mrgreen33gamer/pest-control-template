import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';
const url = BASE_URL + '/services/mosquito-yard-treatment';

export const metadata: Metadata = {
  title: "Mosquito Yard Treatment Waco TX | Barrier Service | ShieldPro",
  description: "Mosquito yard treatment in Waco and Central Texas. Barrier applications and breeding-site focus so outdoor spaces are usable again.",
  keywords: ["mosquito treatment Waco TX","mosquito yard spray Waco","mosquito control Central Texas","ShieldPro"],
  alternates: { canonical: url },
  openGraph: {
    title: "Mosquito Yard Treatment Waco TX | Barrier Service | ShieldPro",
    description: "Mosquito yard treatment in Waco and Central Texas. Barrier applications and breeding-site focus so outdoor spaces are usable again.",
    url,
    siteName: "ShieldPro Pest Control",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mosquito Yard Treatment Waco TX | Barrier Service | ShieldPro",
    description: "Mosquito yard treatment in Waco and Central Texas. Barrier applications and breeding-site focus so outdoor spaces are usable again.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mosquito Yard Treatment",
  description: "Mosquito yard treatment in Waco and Central Texas. Barrier applications and breeding-site focus so outdoor spaces are usable again.",
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
  serviceType: "Mosquito Control",
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
