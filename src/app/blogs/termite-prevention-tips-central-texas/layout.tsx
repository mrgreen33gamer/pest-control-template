import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';
const url = BASE_URL + '/blogs/termite-prevention-tips-central-texas';

export const metadata: Metadata = {
  title: "Termite Prevention Tips for Central Texas Homes | ShieldPro",
  description: "Practical termite prevention for Central Texas — warning signs, moisture control, and when to schedule a professional inspection.",
  alternates: { canonical: url },
  openGraph: {
    title: "Termite Prevention Tips for Central Texas Homes | ShieldPro",
    description: "Practical termite prevention for Central Texas — warning signs, moisture control, and when to schedule a professional inspection.",
    url,
    siteName: "ShieldPro Pest Control",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
