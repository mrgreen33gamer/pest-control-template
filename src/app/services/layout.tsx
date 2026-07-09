import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';

export const metadata: Metadata = {
  title: "Pest Control Services Waco TX | ShieldPro Pest Control",
  description: "General pest control, termites, rodents, mosquitoes, bed bugs, and commercial pest programs in Waco and Central Texas. Licensed, insured, free re-treat guarantee.",
  alternates: { canonical: BASE_URL + "/services" },
  openGraph: {
    title: "Pest Control Services Waco TX | ShieldPro Pest Control",
    description: "Complete pest protection for homes and businesses across Central Texas.",
    url: BASE_URL + "/services",
    siteName: "ShieldPro Pest Control",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
