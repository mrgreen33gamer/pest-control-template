// ShieldPro Pest Control — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faBug, faHouseChimneyCrack, faPaw, faMosquito, faBed, faBuilding,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faFileAlt, faRotateLeft, faStar, faClipboardCheck, faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faBug,
      title: "General Pest Control",
      body: "Ants, roaches, spiders, silverfish, and seasonal invaders. One-time treatments or recurring plans with free re-treats between visits.",
      link: "/services/general-pest-control",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faHouseChimneyCrack,
      title: "Termite Inspection & Treatment",
      body: "Thorough inspections, liquid and bait systems, and ongoing monitoring to protect the structure of your Central Texas home.",
      link: "/services/termite-inspection-treatment",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faPaw,
      title: "Rodent Control",
      body: "Mice and rats removed with exclusion, trapping, and sanitation guidance so they cannot come back through the same gaps.",
      link: "/services/rodent-control",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faMosquito,
      title: "Mosquito Yard Treatment",
      body: "Barrier treatments and breeding-site focus so your yard is usable again through Texas mosquito season.",
      link: "/services/mosquito-yard-treatment",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faBed,
      title: "Bed Bug Treatment",
      body: "Discreet inspection and proven treatment protocols with clear prep instructions and follow-up verification.",
      link: "/services/bed-bug-treatment",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faBuilding,
      title: "Commercial Pest Control",
      body: "Restaurants, multi-unit, offices, and facilities — scheduled service, documentation, and emergency response.",
      link: "/services/commercial-pest-control",
      image: "/pages/home/services/service-2.jpg",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 12000, label: "Properties protected across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 11,    label: "Years of local pest control experience",     suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,    label: "Customer satisfaction rating",               suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Clear Pricing & Plans",
      description: "One-time treatments and recurring plans quoted upfront. No surprise invoices and no pressure contracts.",
    },
    {
      icon: faShieldHalved,
      title: "Licensed & Fully Insured",
      description: "Licensed Pest Control Applicators on every job. Fully insured for residential and commercial properties.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2014",
      description: "Founded in Waco by Derek Collins. Not a franchise call center — local crews who know Central Texas pests.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below. We'll confirm a same-day or next-day slot that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "Inspect & Identify",
      description: "A licensed applicator inspects activity, entry points, and conditions — and explains findings in plain English.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "Treat With a Clear Plan",
      description: "Written scope and price before treatment. Eco-conscious options available when they fit the job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Protect & Guarantee",
      description: "Follow-up as needed. If covered pests return between scheduled visits, we re-treat free.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Pest Assessment",
      description: "We identify the real pest and pressure points — not a one-size spray-and-pray approach.",
    },
    {
      icon: faLeaf,
      title: "Respectful, Careful Work",
      description: "Children, pets, and landscaping matter. We explain prep, products, and re-entry windows clearly.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Plan & Price",
      description: "You approve the scope before treatment. Recurring plans spell out visit frequency and coverage.",
    },
    {
      icon: faStar,
      title: "Satisfaction Guaranteed",
      description: "Free re-treat if covered pests return between scheduled visits. We stand behind the work.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available technicians in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage. On our regular route.",             badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and businesses.",                      badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                         badge: "" },
    { town: "China Spring", benefit: "Rural coverage for acreage homes and outbuildings.",                          badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",                  badge: "" },
  ];

  const faq = [
    {
      question: "How much does pest control cost in Waco?",
      answer: "Most one-time general pest visits start in the low hundreds depending on property size and pest pressure. Recurring quarterly plans are typically the best value for ongoing protection. We quote before treatment.",
    },
    {
      question: "Do you offer same-day or emergency service?",
      answer: "Yes — same-day and emergency pest service is available 7 days a week including evenings. Call us at (254) 776-3300 anytime.",
    },
    {
      question: "How often should I schedule pest control?",
      answer: "Many Central Texas homes do well on quarterly service; high-pressure properties or commercial kitchens often need monthly. We'll recommend based on your pest history and property.",
    },
    {
      question: "What pests do you treat?",
      answer: "General pests (ants, roaches, spiders, and more), termites, rodents, mosquitoes, bed bugs, and commercial facility pests. Ask if you have something unusual — we likely handle it.",
    },
    {
      question: "Are you licensed and insured in Texas?",
      answer: "Yes — ShieldPro uses Licensed Pest Control Applicators and is fully insured. Documentation available on request for property managers and facilities.",
    },
    {
      question: "What is your guarantee?",
      answer: "Satisfaction Guaranteed — if covered pests return between scheduled visits, we re-treat free. Details are spelled out in your service agreement.",
    },
  ];

  const trustBadges = [
    { icon: faStar,           label: "4.9 Google Rating",    sub: "890+ Reviews" },
    { icon: faShieldHalved,   label: "Licensed Applicators", sub: "Fully Insured" },
    { icon: faTrophy,         label: "12,000+ Properties",   sub: "Protected Since 2014" },
    { icon: faClipboardCheck, label: "Clear Plans",          sub: "Before Treatment" },
    { icon: faFileAlt,        label: "Recurring Options",    sub: "Monthly & Quarterly" },
    { icon: faRotateLeft,     label: "Free Re-Treats",       sub: "Between Visits" },
    { icon: faBug,            label: "Same-Day Service",     sub: "7 Days a Week" },
    { icon: faUsers,          label: "Locally Owned",        sub: "Since 2014" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="Waco's trusted pest control team — licensed, insured, and guaranteed on every plan"
      />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Pest Protection for Your Home & Business"
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="What Makes ShieldPro Different"
        />
      </div>
      <CTABanner
        headline="Pests Out. Comfort Back."
        subline="One-time treatments and quarterly plans for roaches, ants, spiders, and more — family- and pet-aware applications."
        primaryText="Call (254) 776-3300"
        primaryLink="tel:+12547763300"
        secondaryText="Start a Plan"
        secondaryLink="/contact"
        imageSrc="/pages/home/welcome/hero-main.jpg"
      />
      <div className={styles.section}>
        <ImpactMetrics
          title="Numbers That Speak for Us"
          metrics={metrics}
          cityName="Waco"
        />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath=""
          title="Serving All of Central Texas"
        />
      </div>
      <div className={styles.section}>
        <WhatToExpect
          sectionTitle="Every Service Call, Every Time"
          expectations={expectations}
        />
      </div>
      <div className={styles.section}>
        <FAQ
          cityName="Waco"
          faq={faq}
          title="Pest Control Questions — Answered Straight"
        />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Request Service or a Free Quote"
          cityName="Waco"
          slug="/"
          spot="homepage-contact-form"
          formVariant={2}
        />
      </div>
    </main>
  );
}
