import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';
const url = BASE_URL + '/industries/restaurants-food-service';

export const metadata: Metadata = {
  title: "Restaurant Pest Control Waco TX | Food Service Programs | ShieldPro",
  description: "Restaurant and food service pest control in Waco and Central Texas. Kitchen-aware programs, documentation, and after-hours service.",
  alternates: { canonical: url },
  openGraph: {
    title: "Restaurant Pest Control Waco TX | Food Service Programs | ShieldPro",
    description: "Restaurant and food service pest control in Waco and Central Texas. Kitchen-aware programs, documentation, and after-hours service.",
    url,
    siteName: "ShieldPro Pest Control",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
