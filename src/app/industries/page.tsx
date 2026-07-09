"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "./page.module.scss";
import SectionIntro       from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison    from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import Variant4           from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Operation Before We Quote",
      description: "A property manager, a restaurant GM, and a clinic director all work differently. Before we quote, we learn access rules, hours, and compliance needs.",
    },
    {
      icon: faShieldHalved,
      title: "Licensed, Fully Insured",
      description: "Based in Waco, TX with Licensed Pest Control Applicators and full insurance — documentation multi-unit and commercial projects require.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Pest Control, Scheduling & Records — One Vendor",
      description: "Whether you need multi-unit make-ready, kitchen programs, or clinical facility service — we handle it under one roof.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3,    label: "B2B industries actively served across Central Texas", suffix: "",  duration: 2 },
    { icon: faChartLine, value: 200,  label: "Commercial and multi-unit projects completed",         suffix: "+", duration: 3 },
    { icon: faClock,     value: 11,   label: "Years serving Central Texas organizations",           suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Our home base — serving PM, food service, and healthcare clients.", badge: "Headquarters" },
    { town: "Temple", benefit: "Medical corridor and multi-unit properties across Bell County.", badge: "" },
    { town: "Killeen", benefit: "Restaurants, apartments, and outpatient facilities.", badge: "" },
    { town: "Hewitt", benefit: "Residential portfolios and suburban commercial.", badge: "" },
    { town: "Woodway", benefit: "Professional offices and premium rentals.", badge: "" },
    { town: "McGregor", benefit: "Industrial corridor and commercial properties.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Organization-specific scheduling", us: "✅ Built per project type", others: "❌ One-size-fits-all" },
    { feature: "Central Texas market knowledge", us: "✅ 11+ years in Waco", others: "❌ Out-of-area contractors" },
    { feature: "Licensed commercial crews", us: "✅ Always", others: "❌ Not always" },
    { feature: "Transparent, upfront pricing", us: "✅ Quote before work starts", others: "❌ Billable surprises" },
    { feature: "Free re-treat guarantee", us: "✅ Between scheduled visits", others: "❌ Limited or none" },
  ];

  const faq = [
    {
      question: "What types of organizations does ShieldPro work with?",
      answer: "We have dedicated experience with property management companies, restaurants & food service, and healthcare facilities — in addition to residential pest control.",
    },
    {
      question: "Do you build a custom proposal for each organization?",
      answer: "Yes. Every proposal is built around access rules, operating hours, and compliance needs — not a generic residential quote.",
    },
    {
      question: "Do you serve organizations outside of Waco?",
      answer: "Yes — Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and most of Central Texas within about 60 miles of Waco.",
    },
    {
      question: "Can you handle multi-property portfolios?",
      answer: "Yes — we build phased, portfolio-wide pricing and scheduling with a single dedicated point of contact.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />
      <SectionIntro
        title="Industries We Serve"
        subtitle="Specialized pest programs for property management, restaurants & food service, and healthcare facilities across Central Texas."
      />
      <TrustBar headline="Commercial-ready pest control with documentation and reliable crews" />
      <div className={styles.section}>
        <SectionIndustriesServed
          title="Where We Specialize"
          subtitle="Click through to see how we solve pest problems for your type of property."
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Organizations Choose ShieldPro" />
      </div>
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries" title="Commercial Coverage Across Central Texas" />
      </div>
      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Industry Partnership FAQs" />
      </div>
      <CTABanner
        headline="Need a Commercial Pest Partner?"
        subline="Call (254) 776-3300 or request a site assessment online."
        primaryText="Call (254) 776-3300"
        primaryLink="tel:+12547763300"
        secondaryText="Request a Proposal"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title="Request Commercial Service" cityName="Waco" slug="industries" spot="industries-index-form" formVariant={2} />
      </div>
    </main>
  );
}
