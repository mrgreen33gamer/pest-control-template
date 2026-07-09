"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faHospital, faSearch, faFileInvoiceDollar, faUserShield,
  faClipboardList, faClock, faHandshake,
  faRocket, faTrophy, faChartLine,
  faBug, faPaw, faBuilding, faBed,
} from "@fortawesome/free-solid-svg-icons";

export default function HealthcareFacilitiesIndustryPage() {

  const painPoints = [
    { icon: faUserShield, problem: "Sensitive occupied spaces", consequence: "Waiting rooms and clinical areas need careful product choice and timing — not aggressive fogging." },
    { icon: faClock, problem: "Limited access windows", consequence: "Care schedules leave narrow windows for pest work; unreliable vendors create operational friction." },
    { icon: faFileInvoiceDollar, problem: "Documentation gaps", consequence: "Facilities need clear service records for internal compliance and vendor management." },
    { icon: faHospital, problem: "Multi-zone facilities", consequence: "Admin, clinical, kitchenette, and exterior zones each need different attention." },
    { icon: faClipboardList, problem: "Reactive-only pest response", consequence: "Without a standing program, sightings become patient experience issues." },
    { icon: faHandshake, problem: "Vendor unprofessionalism", consequence: "Healthcare settings require discreet, credentialed techs who follow site rules." },
  ];

  const whyFeatures = [
    { icon: faHospital, title: "Healthcare-Sensitive Approach", description: "We plan service around occupied spaces, patient flow, and facility rules." },
    { icon: faUserShield, title: "Licensed & Fully Insured", description: "COIs and professional documentation available for facility managers." },
    { icon: faClock, title: "Flexible Scheduling", description: "Early, late, or weekend windows when clinical operations require it." },
  ];

  const processSteps = [
    { number: 1, title: "Facility Assessment", description: "Map zones, access rules, and current pressure.", icon: faSearch },
    { number: 2, title: "Program Proposal", description: "Frequency and methods matched to sensitive areas.", icon: faClipboardList },
    { number: 3, title: "Scheduled Service", description: "Discreet execution with visit documentation.", icon: faRocket },
    { number: 4, title: "Ongoing Support", description: "Rapid response for sightings between visits.", icon: faHandshake },
  ];

  const metrics = [
    { icon: faTrophy, value: 40, label: "Healthcare and clinical sites served", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 11, label: "Years serving Central Texas facilities", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Sensitive-space protocols", us: "✅ Planned per zone", others: "❌ One spray for all" },
    { feature: "Flexible access windows", us: "✅ Early/late options", others: "❌ 9–5 only" },
    { feature: "Documentation", us: "✅ Every visit", others: "❌ Minimal" },
    { feature: "COI available", us: "✅ On request", others: "❌ Slow" },
    { feature: "Licensed applicators", us: "✅ Always", others: "❌ Not always" },
  ];

  const faq = [
    { question: "Do you service medical offices and clinics?", answer: "Yes — outpatient clinics, dental, specialty offices, and similar healthcare facilities." },
    { question: "Can you work around patient hours?", answer: "Yes. We schedule early, late, or closed-day windows when needed." },
    { question: "Are products appropriate for occupied buildings?", answer: "We select methods and timing appropriate to the zones served and explain restrictions before treatment." },
    { question: "Do you provide insurance certificates?", answer: "Yes — COIs for facility management on request." },
    { question: "Can you cover multiple clinic locations?", answer: "Yes — multi-site programs with coordinated scheduling." },
  ];

  const services = [
    { icon: faBug, title: "General Pest Control", body: "Standing programs for clinical facilities.", link: "/services/general-pest-control" },
    { icon: faPaw, title: "Rodent Control", body: "Exclusion for exterior and utility areas.", link: "/services/rodent-control" },
    { icon: faBuilding, title: "Commercial Pest", body: "Facility-wide documentation programs.", link: "/services/commercial-pest-control" },
    { icon: faBed, title: "Bed Bug Treatment", body: "When travel or multi-unit exposure occurs.", link: "/services/bed-bug-treatment" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Clinic and medical office coverage citywide.", badge: "Home Base" },
    { town: "Temple", benefit: "Major medical corridor support.", badge: "" },
    { town: "Killeen", benefit: "Outpatient and specialty clinics.", badge: "" },
    { town: "Hewitt", benefit: "Suburban medical offices.", badge: "" },
    { town: "Woodway", benefit: "Professional medical parks.", badge: "" },
    { town: "Bellmead", benefit: "Corridor clinical facilities.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Healthcare Facilities" },
      ]} />
      <SectionIntro
        title="Pest Control for Healthcare Facilities"
        subtitle="Sensitive-space pest programs for clinics and medical facilities across Central Texas — discreet service, flexible windows, and clear documentation."
      />
      <TrustBar headline="Professional pest partners for clinical and outpatient environments" />
      <div className={styles.section}><IndustryPainPoints industry="healthcare" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Facilities Choose ShieldPro" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Healthcare Sites Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Healthcare Pest FAQs" /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/healthcare-facilities" title="Facility Coverage Across Central Texas" /></div>
      <CTABanner
        headline="Protect Patients and Staff from Pest Issues"
        subline="Call (254) 776-3300 for a healthcare facility assessment."
        primaryText="Call (254) 776-3300"
        primaryLink="tel:+12547763300"
        secondaryText="Request a Facility Quote"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title="Request Healthcare Facility Service" cityName="Waco" slug="industries/healthcare-facilities" spot="healthcare-industry-form" formVariant={2} />
      </div>
    </main>
  );
}
