import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';

export const metadata: Metadata = {
  title: "About ShieldPro Pest Control — Waco TX Exterminator Since 2014",
  description:
    "Meet ShieldPro Pest Control. Locally owned in Waco, Texas since 2014 by Derek Collins. Licensed Pest Control Applicators, fully insured, eco-conscious options, free re-treat guarantee. Serving Waco, Hewitt, Woodway, Temple, Killeen, and all of Central Texas.",
  keywords: [
    "about ShieldPro Pest Control",
    "Waco pest control company",
    "exterminator Waco TX",
    "locally owned pest control Waco",
    "Derek Collins ShieldPro",
  ],
  alternates: { canonical: BASE_URL + "/about" },
  openGraph: {
    title: "About ShieldPro Pest Control — Waco TX Since 2014",
    description:
      "Locally owned pest control in Waco since 2014. Licensed applicators, free re-treat guarantee, eco-conscious options.",
    url: BASE_URL + "/about",
    siteName: "ShieldPro Pest Control",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ShieldPro Pest Control — Waco TX Since 2014",
    description: "Locally owned pest control in Waco, TX. Licensed, insured, free re-treat guarantee.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "PestControlService",
  "@id": BASE_URL + "/#organization",
  name: "ShieldPro Pest Control",
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
  sameAs: [
    "https://www.facebook.com/shieldpropest",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
