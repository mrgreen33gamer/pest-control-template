import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';

export const metadata: Metadata = {
  title: "Industries We Serve | ShieldPro Pest Control Waco TX",
  description: "Pest control for property management, restaurants & food service, and healthcare facilities across Central Texas.",
  alternates: { canonical: BASE_URL + "/industries" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
