import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldpropest.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Pest Control Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | ShieldPro',
  description:
    'ShieldPro Pest Control serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Killeen, Temple, and all of Central Texas. Flat-rate pricing, same-day service, free re-treat guarantee.',
  keywords: [
    'pest control service areas Central Texas',
    'pest control Waco TX',
    'pest control Hewitt TX',
    'pest control Killeen TX',
    'pest control Temple TX',
    'ShieldPro Pest Control service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Pest Control Service Areas | ShieldPro Pest Control — Central Texas',
    description:
      'Serving Waco and all of Central Texas with general pest, termites, rodents, and commercial pest programs. Same-day service available.',
    url,
    siteName: 'ShieldPro Pest Control',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest Control Service Areas | ShieldPro Pest Control — Central Texas',
    description: 'Waco, Temple, Killeen, and surrounding Central Texas — licensed pest control service.',
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
