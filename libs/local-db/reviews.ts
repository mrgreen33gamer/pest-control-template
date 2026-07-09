// libs/local-db/reviews.ts
// Static testimonials for ShieldPro Pest Control

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'General Pest Control',
    text:     "We had ants every spring and roaches in the garage. ShieldPro set us up on a quarterly plan and the difference was immediate. Tech was professional, explained what he was doing, and the free re-treat promise actually means something — they came back once for a small ant trail at no charge.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Termite Inspection',
    text:     'Found mud tubes along the foundation during a home inspection. ShieldPro came out the same week, confirmed activity, and treated with a clear written plan. Pricing was upfront and they walked us through monitoring. Highly recommend for peace of mind.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Rodent Control',
    text:     'Mice in the attic after a cold snap. ShieldPro sealed entry points, set stations, and followed up until activity stopped. No scare tactics — just a clear plan and results. Our new go-to pest company.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Mosquito Yard Treatment',
    text:     'Backyard was unusable in June. After their mosquito barrier treatment we could sit outside again. They treat around the yard and explain breeding sites. Worth every penny for summer evenings.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Bed Bug Treatment',
    text:     'Nightmare situation after travel. ShieldPro was discreet, thorough, and honest about the protocol and prep. Follow-up visit confirmed clear. Professional from start to finish.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'General Pest Control',
    text:     'Rural property with scorpions and wasps. They tailored treatment for our outbuildings and main house. Eco-conscious option available for the kids play area. Great crew.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Commercial Pest Control',
    text:     "We run a small multi-unit and needed a vendor who shows up on schedule and documents service. ShieldPro's commercial plan is reliable and our tenants notice fewer pest calls.",
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Rodent Control',
    text:     'Called about scratching in the walls. They found entry at the garage soffit, sealed it, and cleaned up. Fair price, no upselling a year-long contract. Thank you.',
  },
];

export default reviews;
