import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';
const url = BASE_URL + '/blogs/how-often-should-you-schedule-pest-control-waco-tx';

export const metadata: Metadata = {
  title: "How Often Should You Schedule Pest Control in Waco, TX? | ShieldPro",
  description: "Monthly vs quarterly vs one-time pest control — what makes sense for Central Texas homes.",
  alternates: { canonical: url },
  openGraph: {
    title: "How Often Should You Schedule Pest Control in Waco, TX? | ShieldPro",
    description: "Monthly vs quarterly vs one-time pest control — what makes sense for Central Texas homes.",
    url,
    siteName: "ShieldPro Pest Control",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
