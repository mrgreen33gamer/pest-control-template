// ShieldPro Pest Control — Bed Bug Treatment Service Page
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

export default function BedBugTreatmentPage() {

  const expectations = [
  {
    icon: faSearch,
    title: "Confirm & Map Infestation",
    description: "We verify bed bugs and map rooms/furniture involved before quoting a full protocol."
  },
  {
    icon: faFileContract,
    title: "Written Prep Checklist",
    description: "Clear prep instructions so treatment works the first cycle."
  },
  {
    icon: faSprayCan,
    title: "Treatment Protocol",
    description: "Method matched to infestation level — explained before work begins."
  },
  {
    icon: faCheckCircle,
    title: "Follow-Up Verification",
    description: "Return visits confirm clearance — we do not disappear after day one."
  }
];

  const whyFeatures = [
  {
    icon: faClock,
    title: "Discreet Scheduling",
    description: "Unmarked professionalism and flexible windows for multi-unit and travel cases."
  },
  {
    icon: faShieldHalved,
    title: "No Shame, Just Solutions",
    description: "Bed bugs hitchhike. We focus on elimination, not blame."
  },
  {
    icon: faWrench,
    title: "Prep Support",
    description: "We walk you through prep so the protocol succeeds."
  }
];

  const processSteps = [
  {
    number: 1,
    title: "Inspect",
    description: "Confirm bed bugs and scope rooms involved.",
    icon: faSearch
  },
  {
    number: 2,
    title: "Plan & Prep",
    description: "Written protocol and prep checklist.",
    icon: faFileContract
  },
  {
    number: 3,
    title: "Treat",
    description: "Execute the agreed treatment method.",
    icon: faSprayCan
  },
  {
    number: 4,
    title: "Verify",
    description: "Follow-up visits until activity is resolved.",
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
    label: "Years serving Central Texas",
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
    feature: "Full inspection before quote",
    us: "✅ Always",
    others: "❌ Guess pricing"
  },
  {
    feature: "Written prep checklist",
    us: "✅ Included",
    others: "❌ Verbal only"
  },
  {
    feature: "Follow-up verification",
    us: "✅ Built in",
    others: "❌ One visit"
  },
  {
    feature: "Multi-unit experience",
    us: "✅ Yes",
    others: "❌ Residential only"
  },
  {
    feature: "Discreet service",
    us: "✅ Professional",
    others: "❌ Varies"
  }
];

  const faq = [
  {
    question: "How do bed bugs spread?",
    answer: "Luggage, used furniture, multi-unit walls, and travel are common paths. Early inspection after travel bites is smart."
  },
  {
    question: "Can I treat bed bugs with store sprays?",
    answer: "DIY sprays often scatter bugs and prolong the problem. Professional protocols with prep and follow-up work better."
  },
  {
    question: "How many visits will I need?",
    answer: "Depends on level and furniture involved. We outline the expected cycle after inspection."
  },
  {
    question: "Will I need to throw away my mattress?",
    answer: "Not always. We advise case-by-case after inspection — disposal is not automatic."
  },
  {
    question: "Do you serve apartments?",
    answer: "Yes. Multi-unit work may involve coordination with management for adjoining units."
  }
];

  const crossServices = [
  {
    icon: faBug,
    title: "General Pest Control",
    body: "Ongoing household pest protection.",
    link: "/services/general-pest-control"
  },
  {
    icon: faPaw,
    title: "Rodent Control",
    body: "Mice and rat exclusion programs.",
    link: "/services/rodent-control"
  },
  {
    icon: faBuilding,
    title: "Commercial Pest",
    body: "Hotels, multi-unit, and facilities.",
    link: "/services/commercial-pest-control"
  },
  {
    icon: faHouseChimneyCrack,
    title: "Termite Inspection",
    body: "Protect structural wood from termites.",
    link: "/services/termite-inspection-treatment"
  }
];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Bed Bug Treatment" },
      ]} />

      <SectionIntro
        title="Bed Bug Treatment in Waco, TX"
        subtitle="Bed bugs demand a protocol — not a single spray. Discreet service, clear prep, and follow-up verification until the job is done."
      />

      <TrustBar headline="Discreet, thorough bed bug protocols for homes and multi-unit" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="How Bed Bug Service Works" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Protocol Over Guesswork" />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/bed-bug-treatment" title="Bed Bug Service Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Bed Bug FAQs" />
      </div>

      <CTABanner
        headline="Suspect Bed Bugs? Act Early."
        subline="Early treatment is faster and less disruptive. Call for a discreet inspection."
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
          title="Schedule Bed Bug Service"
          cityName="Waco"
          slug="services/bed-bug-treatment"
          spot="bed-bug-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
