// ShieldPro Pest Control — Services Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faBug, faHouseChimneyCrack, faPaw, faMosquito, faBed, faBuilding,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faShieldHalved, faLock, faRotateLeft, faTag, faLeaf,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faBug, title: "General Pest Control", body: "Ants, roaches, spiders, and seasonal invaders. One-time or recurring plans with free re-treats.", link: "/services/general-pest-control" },
    { icon: faHouseChimneyCrack, title: "Termite Inspection & Treatment", body: "Inspections, liquid and bait systems, and monitoring for Central Texas structures.", link: "/services/termite-inspection-treatment" },
    { icon: faPaw, title: "Rodent Control", body: "Mice and rats — trapping, exclusion, and follow-up until activity stops.", link: "/services/rodent-control" },
    { icon: faMosquito, title: "Mosquito Yard Treatment", body: "Barrier treatments and breeding-site guidance for usable outdoor living.", link: "/services/mosquito-yard-treatment" },
    { icon: faBed, title: "Bed Bug Treatment", body: "Discreet protocols with prep checklists and verification visits.", link: "/services/bed-bug-treatment" },
    { icon: faBuilding, title: "Commercial Pest Control", body: "Restaurants, multi-unit, and facilities with documentation and emergency response.", link: "/services/commercial-pest-control" },
  ];

  const expectations = [
    { icon: faSearch, title: "Clear Inspection First", description: "We identify pests and conditions before treating — no blind spraying." },
    { icon: faCheckCircle, title: "Upfront Plans & Pricing", description: "One-time or recurring scopes approved before work begins." },
    { icon: faShieldHalved, title: "Licensed Applicators", description: "Licensed Pest Control Applicators, fully insured on every job." },
    { icon: faTag, title: "Free Re-Treat Guarantee", description: "If covered pests return between scheduled visits, we re-treat free." },
  ];

  const metrics = [
    { icon: faTrophy, value: 12000, label: "Properties protected since 2014", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 11, label: "Years serving Central Texas", suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faHeadset, title: "A Real Person Answers", description: "Call or text and reach a real ShieldPro team member — not a national call center." },
    { icon: faLeaf, title: "Eco-Conscious Options", description: "Ask about lower-impact treatments for sensitive households." },
    { icon: faLock, title: "Licensed & Fully Insured", description: "Documentation available for property managers and facilities." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or online form. Same-day when possible.", icon: faHeadset },
    { number: 2, title: "Inspect", description: "Licensed applicator identifies pests and pressure points.", icon: faSearch },
    { number: 3, title: "Treat with a Plan", description: "Clear scope and price before treatment begins.", icon: faFileContract },
    { number: 4, title: "Protect & Guarantee", description: "Follow-up as needed. Free re-treats between visits.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faTag, title: "Clear Pricing", description: "Know the plan and price before we treat." },
    { icon: faShieldHalved, title: "Free Re-Treat Guarantee", description: "Covered pests that return between visits are re-treated free." },
    { icon: faRotateLeft, title: "Satisfaction Focus", description: "We stand behind our work and communicate clearly." },
    { icon: faLock, title: "Licensed & Insured", description: "Licensed Pest Control Applicators. COIs on request." },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential and commercial coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for homes and businesses.", badge: "" },
    { town: "Temple", benefit: "Regular service area — quick turnaround.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for acreage properties.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Free re-treat between visits", us: "✅ Covered pests", others: "❌ Rare or fees" },
    { feature: "Licensed Pest Control Applicators", us: "✅ All crews", others: "❌ Not always" },
    { feature: "Eco-conscious options", us: "✅ Available", others: "❌ Limited" },
    { feature: "No long-term lock-in required", us: "✅ Flexible", others: "❌ Multi-year contracts" },
    { feature: "Same-day emergency service", us: "✅ 7 days/week", others: "❌ Business hours only" },
  ];

  const faq = [
    { question: "How much does pest control cost in Waco?", answer: "One-time general pest visits often start in the low hundreds depending on size and pressure. Recurring plans are usually best value. We quote before treatment." },
    { question: "Are you licensed?", answer: "Yes — Licensed Pest Control Applicators, fully insured. Documentation on request." },
    { question: "Do you offer emergency service?", answer: "Yes — emergency pest service 7 days a week including evenings. Call (254) 776-3300." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "What is your guarantee?", answer: "Satisfaction Guaranteed — free re-treat if covered pests return between scheduled visits." },
    { question: "How do I get a quote?", answer: "Call, text, or fill out our online form. We'll schedule an assessment and provide clear pricing before treatment." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]} />
      <SectionIntro
        title="Pest Control Services in Waco & Central Texas"
        subtitle="General pest, termites, rodents, mosquitoes, bed bugs, and commercial programs — licensed applicators, free re-treats, eco-conscious options."
      />
      <TrustBar headline="12,000+ properties protected — 4.9★ from 890+ reviews" />
      <div className={styles.section}>
        <ServiceCardComponent heading="Our Core Services" cards={services} />
      </div>
      <div className={styles.section}>
        <WhatToExpect sectionTitle="What You Can Expect" expectations={expectations} />
      </div>
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose ShieldPro" />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <GuaranteeSection guarantees={guarantees} />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" title="Serving All of Central Texas" />
      </div>
      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Service FAQs" />
      </div>
      <CTABanner
        headline="Ready for a Pest-Free Property?"
        subline="Call (254) 776-3300 or request a free estimate online."
        primaryText="Call (254) 776-3300"
        primaryLink="tel:+12547763300"
        secondaryText="Get a Quote"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant2 title="Request Service" cityName="Waco" slug="services" spot="services-index-form" formVariant={1} />
      </div>
    </main>
  );
}
