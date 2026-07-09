// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact ShieldPro Pest Control | Schedule Service in Waco & Central Texas',
  description:
    'Contact ShieldPro Pest Control to schedule pest control repair, panel upgrades, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 776-3300.',
  keywords: [
    'contact ShieldPro Pest Control',
    'pest control service Waco TX',
    'schedule pest control repair Waco',
    'pest control estimate Central Texas',
    'ShieldPro contact',
    '254-776-3300',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact ShieldPro Pest Control | Schedule Service in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day service available. Flat-rate pricing, free re-treat guarantee, licensed electricians.',
    url,
    siteName: 'ShieldPro Pest Control',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ShieldPro Pest Control | Waco & Central Texas',
    description: 'Schedule pest control service or get a free estimate. Call (254) 776-3300.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
