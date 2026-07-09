import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';
const url = BASE_URL + '/industries/healthcare-facilities';

export const metadata: Metadata = {
  title: "Healthcare Facility Pest Control Waco TX | ShieldPro",
  description: "Pest control for clinics, medical offices, and healthcare facilities in Waco and Central Texas. Sensitive-space protocols and reliable documentation.",
  alternates: { canonical: url },
  openGraph: {
    title: "Healthcare Facility Pest Control Waco TX | ShieldPro",
    description: "Pest control for clinics, medical offices, and healthcare facilities in Waco and Central Texas. Sensitive-space protocols and reliable documentation.",
    url,
    siteName: "ShieldPro Pest Control",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
