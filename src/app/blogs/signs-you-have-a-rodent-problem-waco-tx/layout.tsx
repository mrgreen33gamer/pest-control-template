import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';
const url = BASE_URL + '/blogs/signs-you-have-a-rodent-problem-waco-tx';

export const metadata: Metadata = {
  title: "Signs You Have a Rodent Problem in Waco, TX | ShieldPro",
  description: "Droppings, scratching, grease marks, and nests — early rodent warning signs for Central Texas homes.",
  alternates: { canonical: url },
  openGraph: {
    title: "Signs You Have a Rodent Problem in Waco, TX | ShieldPro",
    description: "Droppings, scratching, grease marks, and nests — early rodent warning signs for Central Texas homes.",
    url,
    siteName: "ShieldPro Pest Control",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
