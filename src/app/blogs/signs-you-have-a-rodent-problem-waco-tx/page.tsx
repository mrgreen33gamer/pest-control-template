'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faPaw, faEarListen, faPoop, faHome, faExclamationTriangle, faLightbulb, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Mice and rats often announce themselves before you ever see one. Cold fronts, construction, and available food can push rodents into Waco attics, garages, and wall voids. Catching signs early limits damage to wiring, insulation, and stored goods — and reduces health risks from droppings.",
  },
  {
    type: 'cards',
    heading: 'Warning Signs of Rodents',
    cards: [
      { icon: faPoop, title: 'Droppings', body: 'Rice-sized (mice) or larger pellet droppings along baseboards, in pantries, attics, and garages.' },
      { icon: faEarListen, title: 'Scratching or scurrying', body: 'Especially at night in ceilings, walls, or above garages — classic activity sounds.' },
      { icon: faHome, title: 'Grease rub marks', body: 'Dark smears along baseboards and entry holes where bodies repeatedly brush surfaces.' },
      { icon: faPaw, title: 'Gnaw marks', body: 'Chewed packaging, wood, plastic, or wiring insulation is a serious red flag.' },
      { icon: faLightbulb, title: 'Nests and shredded material', body: 'Insulation, paper, and fabric gathered in hidden corners of attics and storage.' },
      { icon: faExclamationTriangle, title: 'Pet fixation', body: 'Dogs or cats staring at voids, scratching cabinets, or agitated near the same wall repeatedly.' },
    ],
  },
  {
    type: 'table',
    heading: 'What To Do When You Suspect Rodents',
    tableHeaders: ['Step', 'Why It Matters', 'Avoid'],
    tableRows: [
      ['Inspect entry points', 'Gaps at garage seals, vents, soffits', 'Leaving holes open after trapping'],
      ['Remove food access', 'Pet food, bird seed, pantry gaps', 'Poison-only without exclusion'],
      ['Sanitize carefully', 'Droppings carry health risks', 'Dry sweeping large amounts of droppings'],
      ['Call for exclusion plan', 'Stops the next wave of rodents', 'One snap trap and hope'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: If you catch one mouse and never seal entry points, you did not solve a rodent problem — you delayed the next one. Exclusion is the permanent half of the job.",
  },
  {
    type: 'tips',
    heading: 'Next Steps for Waco Homeowners',
    items: [
      'Check garage door seals and attic vents for gaps',
      'Store pet food and bird seed in sealed containers',
      'Do not ignore ceiling scratching for weeks',
      'Schedule a rodent inspection if droppings or gnawing appear',
      'Ask for exclusion + follow-up, not traps alone',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Signs You Have a Rodent Problem in Waco, TX"
        description="Droppings, scratching, grease marks, and nests — know the early warning signs of mice and rats before damage and health risks escalate."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Signs of a rodent problem in Waco TX homes"
        category="Rodents"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Need Rodent Control?"
        body="ShieldPro inspects entry points, removes activity, and seals access so mice and rats cannot keep coming back."
        buttonText="Schedule Rodent Control"
        buttonHref="/services/rodent-control"
      />
      <NewsletterSignup variant={1} spot="rodent-signs-blog" />
    </>
  );
}
