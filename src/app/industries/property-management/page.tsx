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
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faBuilding, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faBug, faPaw, faBed, faHouseChimneyCrack,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyManagementIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Reactive pest tickets only", consequence: "Units fail at turnover or after tenant complaints — driving emergency rates and bad reviews instead of planned service." },
    { icon: faFileInvoiceDollar, problem: "Pest costs blow up the OpEx budget", consequence: "Without a multi-unit plan and locked pricing, infestations land as surprise invoices instead of forecastable expense." },
    { icon: faUsers, problem: "Tenants disrupted by no-shows", consequence: "Missed access windows create complaints that a reliable vendor schedule would prevent." },
    { icon: faBuilding, problem: "Inconsistent quality across units", consequence: "Rotating freelancers leave gaps in coverage and documentation — a liability at inspection and sale." },
    { icon: faClipboardList, problem: "No single pest vendor for the portfolio", consequence: "Coordinating separate quotes per building wastes management time." },
    { icon: faHandshake, problem: "Vendors don't understand PM workflows", consequence: "Access notices, owner approvals, and turnover timelines need a contractor who knows the process." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Portfolio-Wide Pest Planning", description: "Phased schedules across units and buildings — turnovers, common areas, and recurring plans you can budget." },
    { icon: faFileInvoiceDollar, title: "Clear Multi-Unit Pricing", description: "Volume-friendly rates and scopes so ownership sees predictable numbers." },
    { icon: faUsers, title: "Tenant-Friendly Scheduling", description: "We coordinate access windows so your office is not fielding angry calls." },
  ];

  const processSteps = [
    { number: 1, title: "Portfolio Assessment", description: "Walk units/common areas, document pressure, prioritize risk.", icon: faSearch },
    { number: 2, title: "Phased Plan & Quote", description: "Multi-unit pricing synced to turnovers and budgets.", icon: faCalendarAlt },
    { number: 3, title: "Execute by Building", description: "Crews move unit-by-unit with consistent quality and documentation.", icon: faRocket },
    { number: 4, title: "Standing Service", description: "Optional recurring service so pest issues stay on a plan.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 80, label: "Multi-unit properties serviced", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 15, label: "PM companies on standing service", suffix: "+", duration: 2 },
    { icon: faClock, value: 11, label: "Years serving Central Texas properties", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Multi-unit pest planning", us: "✅ Full portfolio plan", others: "❌ One-off calls only" },
    { feature: "Locked multi-unit pricing", us: "✅ Volume-friendly rates", others: "❌ Re-quoted every ticket" },
    { feature: "Single point of contact", us: "✅ Dedicated lead", others: "❌ Different tech each time" },
    { feature: "Tenant communication support", us: "✅ Built into scheduling", others: "❌ Minimal notice" },
    { feature: "Licensed & insured", us: "✅ Always", others: "❌ Not always" },
  ];

  const faq = [
    { question: "Do you work with property managers on multi-unit portfolios?", answer: "Yes — apartments, duplexes, HOA common areas, and scattered-site residential portfolios are core B2B work for us." },
    { question: "Can you prioritize make-ready turnovers?", answer: "Yes. We schedule pest make-ready work around your turnover calendar whenever possible." },
    { question: "Do you provide insurance certificates?", answer: "Yes — COIs for property managers and ownership groups are available on request." },
    { question: "Can you standardize service across a complex?", answer: "Yes. Consistent service schedules, documentation, and protocols are part of our multi-unit approach." },
    { question: "What areas do you cover for PM work?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, China Spring, and surrounding Central Texas." },
  ];

  const services = [
    { icon: faBug, title: "General Pest Control", body: "Make-ready and recurring unit protection.", link: "/services/general-pest-control" },
    { icon: faPaw, title: "Rodent Control", body: "Common-area and unit rodent programs.", link: "/services/rodent-control" },
    { icon: faBed, title: "Bed Bug Treatment", body: "Discreet multi-unit protocols.", link: "/services/bed-bug-treatment" },
    { icon: faHouseChimneyCrack, title: "Termite Inspection", body: "Structure protection for owned assets.", link: "/services/termite-inspection-treatment" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base for multi-unit and scattered-site PM work.", badge: "Home Base" },
    { town: "Temple", benefit: "Regular multi-family coverage in Bell County.", badge: "" },
    { town: "Killeen", benefit: "Apartments and rental portfolios near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Suburban portfolios on our regular route.", badge: "" },
    { town: "Woodway", benefit: "Premium rentals and small multi-unit.", badge: "" },
    { town: "Bellmead", benefit: "Affordable multi-family coverage.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Property Management" },
      ]} />
      <SectionIntro
        title="Pest Control for Property Management Companies"
        subtitle="Portfolio-ready pest programs for multi-unit and scattered-site properties across Central Texas — documentation, make-ready support, and emergency response."
      />
      <TrustBar headline="Built for PM workflows — access, turnovers, and predictable pricing" />
      <div className={styles.section}><IndustryPainPoints industry="property management" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why PMs Choose ShieldPro" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Property Managers Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Property Management FAQs" /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/property-management" title="Portfolio Coverage Across Central Texas" /></div>
      <CTABanner
        headline="Need a Pest Vendor Your Portfolio Can Rely On?"
        subline="Call (254) 776-3300 for a multi-unit assessment."
        primaryText="Call (254) 776-3300"
        primaryLink="tel:+12547763300"
        secondaryText="Request a Proposal"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title="Request a PM Pest Proposal" cityName="Waco" slug="industries/property-management" spot="pm-industry-form" formVariant={2} />
      </div>
    </main>
  );
}
