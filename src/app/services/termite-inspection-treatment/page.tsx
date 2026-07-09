// ShieldPro Pest Control — Termite Inspection & Treatment Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faBug, faHouseChimneyCrack, faPaw, faMosquito, faBed, faBuilding,
  faWrench, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faTrophy, faChartLine, faLeaf, faSprayCan,
} from "@fortawesome/free-solid-svg-icons";

export default function TermiteInspectionTreatmentPage() {

  const expectations = [
  {
    icon: faSearch,
    title: "Full Property Inspection",
    description: "Foundation, crawl/slab edges, wood contact points, and moisture conditions documented clearly."
  },
  {
    icon: faFileContract,
    title: "Written Findings & Options",
    description: "You see activity level and treatment options before you commit — no scare tactics."
  },
  {
    icon: faSprayCan,
    title: "Liquid or Bait Systems",
    description: "We match method to structure, soil, and pressure — then explain monitoring next steps."
  },
  {
    icon: faShieldHalved,
    title: "Ongoing Protection Plans",
    description: "Optional monitoring and retreat protocols so protection does not end after day one."
  }
];

  const whyFeatures = [
  {
    icon: faClock,
    title: "Fast Inspection Scheduling",
    description: "Home sales and active swarmers get priority scheduling whenever possible."
  },
  {
    icon: faWrench,
    title: "Treatment Matched to the Home",
    description: "Slab, crawl, additions, and outbuildings are assessed — not a one-size spray."
  },
  {
    icon: faShieldHalved,
    title: "Licensed Applicators",
    description: "Termite work performed by Licensed Pest Control Applicators, fully insured."
  }
];

  const processSteps = [
  {
    number: 1,
    title: "Book Inspection",
    description: "Schedule online or by phone — tell us if this is for a real estate closing.",
    icon: faHeadset
  },
  {
    number: 2,
    title: "Inspect Thoroughly",
    description: "We look for activity, conducive conditions, and prior damage indicators.",
    icon: faSearch
  },
  {
    number: 3,
    title: "Recommend Plan",
    description: "Written options with pricing — liquid, bait, or hybrid as appropriate.",
    icon: faFileContract
  },
  {
    number: 4,
    title: "Treat & Monitor",
    description: "Treatment installed, documentation provided, monitoring scheduled.",
    icon: faCheckCircle
  }
];

  const metrics = [
  {
    icon: faTrophy,
    value: 12000,
    label: "Properties protected across Central Texas",
    suffix: "+",
    duration: 3
  },
  {
    icon: faChartLine,
    value: 98,
    label: "Customer satisfaction rating",
    suffix: "%",
    duration: 2
  },
  {
    icon: faClock,
    value: 11,
    label: "Years of local termite experience",
    suffix: "+",
    duration: 2
  }
];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest dispatch for pest service.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full pest control coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Same-day pest service for Woodway neighborhoods.", badge: "" },
    { town: "Bellmead",     benefit: "On our regular route — quick turnaround.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for same-day availability.", badge: "" },
    { town: "Temple",       benefit: "Full pest service coverage for Bell County homes.", badge: "" },
  ];

  const comparisonRows = [
  {
    feature: "Written inspection findings",
    us: "✅ Always",
    others: "❌ Verbal only"
  },
  {
    feature: "Multiple treatment options",
    us: "✅ Liquid & bait",
    others: "❌ One method only"
  },
  {
    feature: "Licensed applicators",
    us: "✅ Always",
    others: "❌ Not always"
  },
  {
    feature: "Real-estate friendly timing",
    us: "✅ Priority when possible",
    others: "❌ Weeks out"
  },
  {
    feature: "Monitoring after treatment",
    us: "✅ Available",
    others: "❌ One-and-done"
  }
];

  const faq = [
  {
    question: "How much does a termite inspection cost in Waco?",
    answer: "Inspection pricing depends on property size and access. We quote before we arrive. Treatment is separate and quoted after findings."
  },
  {
    question: "Do I need treatment if I only saw swarmers once?",
    answer: "Swarmers are a strong indicator of a nearby colony. An inspection determines whether treatment is warranted and how urgent it is."
  },
  {
    question: "Liquid vs bait — which is better?",
    answer: "It depends on structure, soil, moisture, and activity. We explain tradeoffs and recommend what fits your home — not a single product push."
  },
  {
    question: "Can you help with a home sale inspection?",
    answer: "Yes. Tell us your closing timeline when you book so we can prioritize documentation."
  },
  {
    question: "Will treatment smell or require us to leave?",
    answer: "Depends on method and access. We explain prep and re-entry before work starts."
  }
];

  const crossServices = [
  {
    icon: faBug,
    title: "General Pest Control",
    body: "Ongoing protection for ants, roaches, and more.",
    link: "/services/general-pest-control"
  },
  {
    icon: faPaw,
    title: "Rodent Control",
    body: "Exclusion and trapping for mice and rats.",
    link: "/services/rodent-control"
  },
  {
    icon: faBed,
    title: "Bed Bug Treatment",
    body: "Discreet protocols with follow-up verification.",
    link: "/services/bed-bug-treatment"
  },
  {
    icon: faBuilding,
    title: "Commercial Pest",
    body: "Facility-wide programs and documentation.",
    link: "/services/commercial-pest-control"
  }
];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Termite Inspection & Treatment" },
      ]} />

      <SectionIntro
        title="Termite Inspection & Treatment in Waco, TX"
        subtitle="Central Texas termites do not take seasons off. Get a thorough inspection, a clear treatment plan, and monitoring that protects your structure."
      />

      <TrustBar headline="Structural protection backed by licensed applicators and honest recommendations" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect from Termite Service" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Termite Protection Done Right" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/termite-inspection-treatment" title="Termite Service Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Termite FAQs" />
      </div>

      <CTABanner
        headline="Suspect Termites? Get Inspected."
        subline="Mud tubes, soft wood, or swarmers — do not wait. Call ShieldPro for a professional inspection."
        primaryText="Call Us Now"
        primaryLink="tel:+12547763300"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4
          title="Schedule a Termite Inspection"
          cityName="Waco"
          slug="services/termite-inspection-treatment"
          spot="termite-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
