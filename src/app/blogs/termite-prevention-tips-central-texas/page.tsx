'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faHouseChimney, faDroplet, faBug, faExclamationTriangle, faTree, faClipboardCheck, faSearch } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Central Texas soil and climate keep subterranean termites active much of the year. Prevention will not replace a professional inspection when activity is present — but it does reduce conducive conditions and helps you catch problems earlier. Here is what Waco-area homeowners should watch for.",
  },
  {
    type: 'cards',
    heading: 'Termite Prevention Essentials',
    cards: [
      { icon: faDroplet, title: 'Control moisture around the foundation', body: 'Fix grading, gutters, and irrigation overspray. Termites follow moisture — wet soil against the slab is an invitation.' },
      { icon: faTree, title: 'Keep wood and mulch off the foundation', body: 'Firewood stacks, dense mulch beds, and wood debris against the house create bridges and harborage.' },
      { icon: faHouseChimney, title: 'Seal gaps and utility penetrations', body: 'Where pipes and cables enter, seal gaps. Reduce easy access points from soil to structure.' },
      { icon: faBug, title: 'Do not ignore mud tubes or swarmers', body: 'Pencil-wide mud tubes on foundations or wings near windows after rains are red flags — schedule an inspection.' },
      { icon: faSearch, title: 'Schedule periodic professional inspections', body: 'Especially before buying/selling a home or after noticing soft wood, blistered paint, or hollow-sounding trim.' },
      { icon: faClipboardCheck, title: 'Keep treatment records', body: 'If you have a prior termite system, know what was installed and when monitoring is due.' },
    ],
  },
  {
    type: 'table',
    heading: 'DIY Prevention vs Professional Inspection',
    tableHeaders: ['Factor', 'Homeowner Prevention', 'Professional Inspection/Treatment'],
    tableRows: [
      ['Moisture & debris control', 'High impact — do this year-round', 'Supports long-term success'],
      ['Confirming active termites', 'Unreliable without training', 'Required for correct treatment'],
      ['Structural risk assessment', 'Limited', 'Full exterior/interior evaluation'],
      ['Treatment selection', 'Not recommended DIY', 'Liquid, bait, or hybrid as appropriate'],
      ['Real estate timelines', 'Helpful prep only', 'Documentation buyers and lenders want'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: After a spring rain in Central Texas, check foundation edges and window sills for discarded swarmers. One afternoon of wings is enough reason to call for an inspection.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Walk your foundation monthly during warm months',
      'Fix irrigation and gutter issues that soak the slab edge',
      'Move firewood and lumber away from the house',
      'Book a professional termite inspection if you see tubes, swarmers, or soft wood',
      'Ask for written findings — not just a verbal "looks fine"',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Termite Prevention Tips for Central Texas Homes"
        description="Central Texas soil and climate keep termites active year-round. Learn practical prevention steps, warning signs, and when to schedule a professional inspection."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="Termite prevention tips for Central Texas homes"
        category="Prevention"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Want a Professional Termite Inspection?"
        body="Schedule an inspection with ShieldPro Pest Control — Waco's licensed pest team since 2014."
        buttonText="Schedule a Termite Inspection"
        buttonHref="/services/termite-inspection-treatment"
      />
      <NewsletterSignup variant={1} spot="termite-prevention-blog" />
    </>
  );
}
