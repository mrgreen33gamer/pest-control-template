'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faCalendarCheck, faHome, faBuilding, faBug, faLeaf, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "There is no single right schedule for every Waco home. Pest pressure depends on property type, landscaping, neighboring conditions, pets, and whether you have had past infestations. Here is a practical way to choose between one-time, quarterly, and monthly service.",
  },
  {
    type: 'cards',
    heading: 'Common Service Cadences',
    cards: [
      { icon: faBug, title: 'One-time treatment', body: 'Best for a defined issue with low ongoing pressure — or as a bridge until you start a plan. Not ideal if pests return seasonally.' },
      { icon: faCalendarCheck, title: 'Quarterly plans', body: 'The sweet spot for many Central Texas homes. Regular exterior/interior attention keeps common pests from establishing.' },
      { icon: faHome, title: 'Monthly plans', body: 'Useful for high-pressure properties, heavy landscaping, multi-pet homes, or after severe activity.' },
      { icon: faBuilding, title: 'Commercial schedules', body: 'Restaurants and multi-unit properties often need monthly or custom frequencies tied to risk and audits.' },
      { icon: faLeaf, title: 'Seasonal add-ons', body: 'Mosquito programs often run on a summer cadence layered on top of general pest service.' },
      { icon: faClipboardList, title: 'Specialty protocols', body: 'Termites, bed bugs, and rodents follow treatment-specific timelines — not the same as general pest intervals.' },
    ],
  },
  {
    type: 'table',
    heading: 'Which Schedule Fits?',
    tableHeaders: ['Situation', 'Typical Cadence', 'Notes'],
    tableRows: [
      ['Average suburban home, mild history', 'Quarterly', 'Most common recommendation in Waco'],
      ['Repeated roach or ant pressure', 'Monthly (then step down)', 'Stabilize first, then reassess'],
      ['New construction / clean history', 'Quarterly or as-needed', 'Watch landscaping and moisture'],
      ['Restaurant / multi-unit', 'Monthly or custom', 'Documentation matters'],
      ['Mosquito season only', 'Seasonal barrier plan', 'Layer with general pest as needed'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: If you cancel service every winter and restart every spring after ants return, a quarterly plan is usually cheaper and less stressful than repeated emergency visits.",
  },
  {
    type: 'tips',
    heading: 'How to Decide',
    items: [
      'List pests you have seen in the last 12 months',
      'Note moisture, mulch, and pet factors around the home',
      'Ask for a written plan with re-treat terms',
      'Start more frequent if pressure is high — you can always step down',
      'Do not use general pest intervals for termites or bed bugs',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How Often Should You Schedule Pest Control in Waco, TX?"
        description="Monthly vs quarterly vs one-time — an honest guide to recurring pest control schedules for Central Texas homes and when each makes sense."
        imageSrc="/pages/blogs/hvac-filter.jpg"
        imageAlt="How often to schedule pest control in Waco TX"
        category="Plans"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Not Sure Which Plan Fits?"
        body="Talk with ShieldPro — we will recommend a cadence based on your property, not a one-size sales pitch."
        buttonText="Get a Pest Plan Quote"
        buttonHref="/services/general-pest-control"
      />
      <NewsletterSignup variant={1} spot="pest-schedule-blog" />
    </>
  );
}
