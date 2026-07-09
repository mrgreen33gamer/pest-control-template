// ShieldPro Pest Control — Mosquito Yard Treatment Service Page
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

export default function MosquitoYardTreatmentPage() {

  const expectations = [
  {
    icon: faSearch,
    title: "Yard Assessment",
    description: "We note dense vegetation, standing water risk, and high-use outdoor areas."
  },
  {
    icon: faSprayCan,
    title: "Barrier Application",
    description: "Treatment focused on harborage where mosquitoes rest during the day."
  },
  {
    icon: faLeaf,
    title: "Breeding-Site Guidance",
    description: "We flag containers, drains, and landscape features that reseed the population."
  },
  {
    icon: faShieldHalved,
    title: "Seasonal Plans",
    description: "Optional recurring visits through peak mosquito season for lasting relief."
  }
];

  const whyFeatures = [
  {
    icon: faClock,
    title: "Seasonal Availability",
    description: "Peak summer demand is high — book early for preferred windows."
  },
  {
    icon: faLeaf,
    title: "Outdoor Living Focus",
    description: "Treatments aimed at making patios and play areas usable again."
  },
  {
    icon: faShieldHalved,
    title: "Licensed Application",
    description: "Products applied by Licensed Pest Control Applicators."
  }
];

  const processSteps = [
  {
    number: 1,
    title: "Book",
    description: "Schedule a one-time or seasonal plan.",
    icon: faHeadset
  },
  {
    number: 2,
    title: "Assess Yard",
    description: "Identify rest sites and breeding risks.",
    icon: faSearch
  },
  {
    number: 3,
    title: "Treat",
    description: "Barrier application to key harborage.",
    icon: faSprayCan
  },
  {
    number: 4,
    title: "Maintain",
    description: "Optional repeat visits through mosquito season.",
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
    feature: "Barrier + harborage focus",
    us: "✅ Yes",
    others: "❌ Fog only"
  },
  {
    feature: "Breeding-site coaching",
    us: "✅ Included",
    others: "❌ Rarely"
  },
  {
    feature: "Seasonal plan options",
    us: "✅ Available",
    others: "❌ One-time only"
  },
  {
    feature: "Licensed applicators",
    us: "✅ Always",
    others: "❌ Not always"
  },
  {
    feature: "Local Waco dispatch",
    us: "✅ Yes",
    others: "❌ Out-of-area"
  }
];

  const faq = [
  {
    question: "How long does a mosquito treatment last?",
    answer: "Results vary with weather, irrigation, and re-infestation from untreated neighbors. Seasonal plans outperform single visits in peak summer."
  },
  {
    question: "Can you treat while we have a party this weekend?",
    answer: "Tell us your event date — we schedule so re-entry windows fit your plans."
  },
  {
    question: "Is treatment safe for pets?",
    answer: "We provide pet guidance and re-entry timing. Keep bowls and toys inside during application as directed."
  },
  {
    question: "Do you eliminate every mosquito?",
    answer: "No honest company promises zero mosquitoes. We dramatically reduce pressure in treated zones when breeding sources are managed."
  },
  {
    question: "Do you treat standing water chemically?",
    answer: "We focus on barriers and source reduction advice. Some sites may need additional measures we will discuss on site."
  }
];

  const crossServices = [
  {
    icon: faBug,
    title: "General Pest Control",
    body: "Keep indoor pests down year-round.",
    link: "/services/general-pest-control"
  },
  {
    icon: faPaw,
    title: "Rodent Control",
    body: "Stop mice and rats at entry points.",
    link: "/services/rodent-control"
  },
  {
    icon: faHouseChimneyCrack,
    title: "Termite Inspection",
    body: "Protect your structure year-round.",
    link: "/services/termite-inspection-treatment"
  },
  {
    icon: faBuilding,
    title: "Commercial Pest",
    body: "Outdoor event venues and facilities.",
    link: "/services/commercial-pest-control"
  }
];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Mosquito Yard Treatment" },
      ]} />

      <SectionIntro
        title="Mosquito Yard Treatment in Waco, TX"
        subtitle="Texas summers should not mean surrendering the backyard. Barrier treatments and breeding-site focus help reclaim evenings outdoors."
      />

      <TrustBar headline="Seasonal mosquito programs for Central Texas yards" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What a Mosquito Visit Includes" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Smarter Than a One-Time Fog" />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/mosquito-yard-treatment" title="Mosquito Service Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Mosquito Treatment FAQs" />
      </div>

      <CTABanner
        headline="Ready to Enjoy the Yard Again?"
        subline="Book a mosquito barrier treatment — seasonal plans available for continuous protection."
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
          title="Schedule Mosquito Treatment"
          cityName="Waco"
          slug="services/mosquito-yard-treatment"
          spot="mosquito-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
