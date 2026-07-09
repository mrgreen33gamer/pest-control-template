import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';
const url = BASE_URL + '/industries/property-management';

export const metadata: Metadata = {
  title: "Pest Control for Property Management | ShieldPro Waco TX",
  description: "Portfolio pest control for property managers in Waco and Central Texas. Multi-unit plans, make-ready support, documentation, and emergency response.",
  alternates: { canonical: url },
  openGraph: {
    title: "Pest Control for Property Management | ShieldPro Waco TX",
    description: "Portfolio pest control for property managers in Waco and Central Texas. Multi-unit plans, make-ready support, documentation, and emergency response.",
    url,
    siteName: "ShieldPro Pest Control",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
