// ShieldPro Pest Control — Commercial Pest Control Service Page
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

export default function CommercialPestControlPage() {

  const expectations = [
  {
    icon: faSearch,
    title: "Site Assessment",
    description: "We walk the property, note risk zones, and review past pressure and audit needs."
  },
  {
    icon: faFileContract,
    title: "Program & Documentation",
    description: "Service schedule, scopes, and service tickets suitable for managers and inspectors."
  },
  {
    icon: faClock,
    title: "After-Hours Friendly",
    description: "Scheduling that respects service hours, tenants, and production windows."
  },
  {
    icon: faShieldHalved,
    title: "Emergency Response",
    description: "Active issues get prioritized so operations are not held hostage by pests."
  }
];

  const whyFeatures = [
  {
    icon: faBuilding,
    title: "Multi-Site Capability",
    description: "Portfolios and multi-building accounts with a single point of contact."
  },
  {
    icon: faFileContract,
    title: "Audit-Ready Records",
    description: "Clear documentation for food service and facility managers."
  },
  {
    icon: faShieldHalved,
    title: "Licensed & Insured",
    description: "COIs available for property managers and ownership groups."
  }
];

  const processSteps = [
  {
    number: 1,
    title: "Assess",
    description: "Walkthrough and risk mapping for your facility type.",
    icon: faSearch
  },
  {
    number: 2,
    title: "Propose Program",
    description: "Frequency, scope, and pricing aligned to your operations.",
    icon: faFileContract
  },
  {
    number: 3,
    title: "Service on Schedule",
    description: "Reliable visits with documentation each time.",
    icon: faClock
  },
  {
    number: 4,
    title: "Respond & Improve",
    description: "Emergency support and continuous recommendations.",
    icon: faCheckCircle
  }
];

  const metrics = [
  {
    icon: faTrophy,
    value: 200,
    label: "Commercial and multi-unit accounts served",
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
    label: "Years serving Central Texas organizations",
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
    feature: "Industry-aware scheduling",
    us: "✅ Built per site type",
    others: "❌ Residential hours only"
  },
  {
    feature: "Service documentation",
    us: "✅ Every visit",
    others: "❌ Inconsistent"
  },
  {
    feature: "Emergency response",
    us: "✅ Priority available",
    others: "❌ Next week"
  },
  {
    feature: "COI / insurance docs",
    us: "✅ On request",
    others: "❌ Slow or missing"
  },
  {
    feature: "Single point of contact",
    us: "✅ Yes",
    others: "❌ Rotating techs only"
  }
];

  const faq = [
  {
    question: "Do you service restaurants?",
    answer: "Yes — food service is a core commercial vertical. We design programs around kitchens, storage, and inspection expectations."
  },
  {
    question: "Can you work after closing hours?",
    answer: "Often yes. Tell us your operating hours and we schedule accordingly."
  },
  {
    question: "Do you provide certificates of insurance?",
    answer: "Yes — COIs for property managers and ownership groups on request."
  },
  {
    question: "Can one contract cover multiple properties?",
    answer: "Yes. Multi-site portfolios can share a dedicated contact and coordinated schedule."
  },
  {
    question: "What about healthcare facilities?",
    answer: "We serve healthcare-adjacent and clinical facilities with sensitivity to occupied spaces and compliance needs. Call to discuss scope."
  }
];

  const crossServices = [
  {
    icon: faBug,
    title: "General Pest Control",
    body: "Residential-grade plans for staff housing too.",
    link: "/services/general-pest-control"
  },
  {
    icon: faPaw,
    title: "Rodent Control",
    body: "Facility rodent exclusion programs.",
    link: "/services/rodent-control"
  },
  {
    icon: faBed,
    title: "Bed Bug Treatment",
    body: "Multi-unit and hospitality protocols.",
    link: "/services/bed-bug-treatment"
  },
  {
    icon: faHouseChimneyCrack,
    title: "Termite Inspection",
    body: "Structure protection for owned assets.",
    link: "/services/termite-inspection-treatment"
  }
];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Commercial Pest Control" },
      ]} />

      <SectionIntro
        title="Commercial Pest Control in Waco, TX"
        subtitle="Restaurants, multi-unit properties, offices, and facilities need documentation, reliability, and emergency response — not a residential spray-and-pray approach."
      />

      <TrustBar headline="Commercial programs built for inspections, tenants, and operating hours" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Commercial Service Looks Like" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Facilities Choose ShieldPro" />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/commercial-pest-control" title="Commercial Coverage Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Commercial Pest FAQs" />
      </div>

      <CTABanner
        headline="Need a Reliable Commercial Vendor?"
        subline="Get a site assessment and a program that matches your operating hours and compliance needs."
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
          title="Request Commercial Pest Service"
          cityName="Waco"
          slug="services/commercial-pest-control"
          spot="commercial-pest-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
