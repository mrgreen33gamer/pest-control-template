// ShieldPro Pest Control — Rodent Control Service Page
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

export default function RodentControlPage() {

  const expectations = [
  {
    icon: faSearch,
    title: "Activity & Entry Inspection",
    description: "Droppings, rub marks, nesting, and gaps — we map where rodents travel and enter."
  },
  {
    icon: faFileContract,
    title: "Removal + Exclusion Plan",
    description: "Trapping alone fails if holes stay open. You get a written plan for both."
  },
  {
    icon: faWrench,
    title: "Seal & Protect",
    description: "Entry points sealed with appropriate materials; recommendations for remaining gaps."
  },
  {
    icon: faShieldHalved,
    title: "Follow-Up Until Clear",
    description: "We schedule follow-ups to confirm activity has stopped — not a drop-and-go visit."
  }
];

  const whyFeatures = [
  {
    icon: faClock,
    title: "Rapid Response",
    description: "Active rodents escalate quickly. Same-day service available most days."
  },
  {
    icon: faWrench,
    title: "Exclusion Focused",
    description: "We fix the access problem, not just catch one mouse."
  },
  {
    icon: faShieldHalved,
    title: "Licensed & Insured",
    description: "Safe methods for homes with kids and pets — explained on site."
  }
];

  const processSteps = [
  {
    number: 1,
    title: "Inspect",
    description: "Identify species, activity level, and entry points.",
    icon: faSearch
  },
  {
    number: 2,
    title: "Remove",
    description: "Strategic trapping and monitoring devices.",
    icon: faWrench
  },
  {
    number: 3,
    title: "Exclude",
    description: "Seal primary entry points to stop re-infestation.",
    icon: faFileContract
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
    feature: "Entry-point exclusion",
    us: "✅ Core of the plan",
    others: "❌ Traps only"
  },
  {
    feature: "Follow-up until clear",
    us: "✅ Built in",
    others: "❌ One visit"
  },
  {
    feature: "Sanitation guidance",
    us: "✅ Always",
    others: "❌ Rarely"
  },
  {
    feature: "Licensed applicators",
    us: "✅ Always",
    others: "❌ Not always"
  },
  {
    feature: "Same-day when available",
    us: "✅ Yes",
    others: "❌ Wait list"
  }
];

  const faq = [
  {
    question: "How do I know if I have mice or rats?",
    answer: "Dropping size, gnaw marks, and nesting locations differ. Our inspection identifies the species so exclusion and device placement are correct."
  },
  {
    question: "Will you seal every hole on day one?",
    answer: "We seal primary entry points during service. Large structural gaps may need contractor follow-up — we document those clearly."
  },
  {
    question: "Is poison the only option?",
    answer: "No. We prefer integrated methods emphasizing exclusion and trapping. Product choices are explained before use."
  },
  {
    question: "Can rodents damage my home?",
    answer: "Yes — wiring, insulation, and contamination are real risks. Early intervention limits damage and cleanup cost."
  },
  {
    question: "Do you clean droppings?",
    answer: "We provide sanitation guidance. Full remediation can be arranged or referred depending on scope."
  }
];

  const crossServices = [
  {
    icon: faBug,
    title: "General Pest Control",
    body: "Keep insects under control year-round.",
    link: "/services/general-pest-control"
  },
  {
    icon: faHouseChimneyCrack,
    title: "Termite Inspection",
    body: "Protect wood structures from termites.",
    link: "/services/termite-inspection-treatment"
  },
  {
    icon: faBed,
    title: "Bed Bug Treatment",
    body: "Discreet bed bug protocols.",
    link: "/services/bed-bug-treatment"
  },
  {
    icon: faBuilding,
    title: "Commercial Pest",
    body: "Multi-unit and facility rodent programs.",
    link: "/services/commercial-pest-control"
  }
];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Rodent Control" },
      ]} />

      <SectionIntro
        title="Rodent Control in Waco, TX"
        subtitle="Mice and rats need exclusion — not just traps. We remove activity, seal entry points, and guide cleanup so the problem does not rebound."
      />

      <TrustBar headline="Exclusion-first rodent control from a Waco crew that shows up" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="How We Handle Rodents" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Exclusion Matters" />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/rodent-control" title="Rodent Control Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Rodent Control FAQs" />
      </div>

      <CTABanner
        headline="Hearing Scratching? Call Today."
        subline="Attic, walls, or garage — we inspect entry points and build a clear removal plan."
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
          title="Schedule Rodent Control"
          cityName="Waco"
          slug="services/rodent-control"
          spot="rodent-control-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
