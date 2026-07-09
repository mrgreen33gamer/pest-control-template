// ShieldPro Pest Control — General Pest Control Service Page
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

export default function GeneralPestControlPage() {

  const expectations = [
  {
    icon: faSearch,
    title: "Inspect Hot Spots",
    description: "We check kitchens, baths, baseboards, and entry points to match treatment to the actual pests present."
  },
  {
    icon: faFileContract,
    title: "Clear Scope & Price",
    description: "One-time or recurring plan priced before we treat — no surprise add-ons mid-visit."
  },
  {
    icon: faSprayCan,
    title: "Targeted Treatment",
    description: "Interior/exterior applications focused on harborage and traffic paths — not random fogging."
  },
  {
    icon: faShieldHalved,
    title: "Free Re-Treat Guarantee",
    description: "If covered pests return between scheduled visits, we come back and re-treat at no charge."
  }
];

  const whyFeatures = [
  {
    icon: faClock,
    title: "Same-Day When You Need It",
    description: "Active infestations do not wait. We answer 7 days a week and dispatch quickly across Central Texas."
  },
  {
    icon: faLeaf,
    title: "Eco-Conscious Options",
    description: "Ask about lower-impact options for homes with kids, pets, or sensitive areas."
  },
  {
    icon: faShieldHalved,
    title: "Licensed Applicators",
    description: "Every technician is a Licensed Pest Control Applicator — fully insured on every property."
  }
];

  const processSteps = [
  {
    number: 1,
    title: "Call or Book",
    description: "Phone, text, or online. Same-day slots available most business days.",
    icon: faHeadset
  },
  {
    number: 2,
    title: "Inspect",
    description: "We identify pests and pressure points before treating.",
    icon: faSearch
  },
  {
    number: 3,
    title: "Treat",
    description: "Targeted applications with clear prep and re-entry guidance.",
    icon: faSprayCan
  },
  {
    number: 4,
    title: "Protect",
    description: "Optional recurring plan + free re-treats between visits.",
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
    label: "Years serving Waco-area homes",
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
    feature: "Free re-treat between visits",
    us: "✅ On covered pests",
    others: "❌ Rare or fees apply"
  },
  {
    feature: "Licensed Pest Control Applicators",
    us: "✅ All techs",
    others: "❌ Not always"
  },
  {
    feature: "Eco-conscious options available",
    us: "✅ On request",
    others: "❌ One product only"
  },
  {
    feature: "Same-day / emergency service",
    us: "✅ 7 days/week",
    others: "❌ Business hours only"
  },
  {
    feature: "No long-term lock-in contracts",
    us: "✅ Flexible plans",
    others: "❌ Multi-year required"
  }
];

  const faq = [
  {
    question: "What pests are included in general pest control?",
    answer: "Common household pests such as ants, roaches, spiders, silverfish, and many seasonal invaders. Specialty pests like termites, bed bugs, and rodents have dedicated services."
  },
  {
    question: "How often should I schedule service?",
    answer: "Most Waco homes do well on quarterly service. High-pressure properties may need monthly. We will recommend based on your history and property."
  },
  {
    question: "Is it safe for pets and kids?",
    answer: "We explain products, prep, and re-entry windows on every visit. Eco-conscious options are available — tell us about pets, kids, and sensitive areas when you book."
  },
  {
    question: "Do you treat inside and outside?",
    answer: "Yes. Most general pest visits include interior hotspot treatment and exterior barrier work as appropriate for the pests found."
  },
  {
    question: "What if pests come back?",
    answer: "If covered pests return between scheduled visits, we re-treat free under our Satisfaction Guarantee."
  }
];

  const crossServices = [
  {
    icon: faHouseChimneyCrack,
    title: "Termite Inspection",
    body: "Protect your structure with inspection and treatment.",
    link: "/services/termite-inspection-treatment"
  },
  {
    icon: faPaw,
    title: "Rodent Control",
    body: "Exclusion and trapping for mice and rats.",
    link: "/services/rodent-control"
  },
  {
    icon: faMosquito,
    title: "Mosquito Treatment",
    body: "Yard barrier treatments for Texas summers.",
    link: "/services/mosquito-yard-treatment"
  },
  {
    icon: faBuilding,
    title: "Commercial Pest",
    body: "Plans for restaurants, multi-unit, and facilities.",
    link: "/services/commercial-pest-control"
  }
];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "General Pest Control" },
      ]} />

      <SectionIntro
        title="General Pest Control in Waco, TX"
        subtitle="Ants, roaches, spiders, and seasonal invaders — treated with a clear plan, licensed applicators, and free re-treats between visits."
      />

      <TrustBar headline="12,000+ Central Texas properties trust ShieldPro for pest protection" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens on a General Pest Visit" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls ShieldPro First" />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/general-pest-control" title="General Pest Control Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="General Pest Control FAQs" />
      </div>

      <CTABanner
        headline="Pests Active Again? We Can Help Today."
        subline="Same-day service available. Free re-treats between visits. Licensed & insured."
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
          title="Schedule General Pest Control"
          cityName="Waco"
          slug="services/general-pest-control"
          spot="general-pest-control-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
