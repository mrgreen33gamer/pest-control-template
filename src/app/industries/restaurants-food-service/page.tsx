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
  faUtensils, faSearch, faFileInvoiceDollar, faClock,
  faClipboardCheck, faExclamationTriangle, faHandshake,
  faRocket, faTrophy, faChartLine,
  faBug, faPaw, faBuilding, faMosquito,
} from "@fortawesome/free-solid-svg-icons";

export default function RestaurantsFoodServiceIndustryPage() {

  const painPoints = [
    { icon: faExclamationTriangle, problem: "Roaches or rodents risk health scores", consequence: "A single inspection hit can damage reputation and revenue overnight." },
    { icon: faClock, problem: "Service only available during rush hours", consequence: "Daytime-only techs disrupt service; kitchens need after-close options." },
    { icon: faFileInvoiceDollar, problem: "No documentation for audits", consequence: "Managers need service tickets and recommendations — not a spray receipt." },
    { icon: faUtensils, problem: "Generic residential methods in a kitchen", consequence: "Food facilities need product placement and practices that fit food safety rules." },
    { icon: faClipboardCheck, problem: "Inconsistent monthly service", consequence: "Missed visits leave gaps that pests exploit between deliveries and trash cycles." },
    { icon: faHandshake, problem: "Vendor does not understand BOH flow", consequence: "Receiving, dumpsters, and prep areas need targeted attention, not lobby fogging." },
  ];

  const whyFeatures = [
    { icon: faUtensils, title: "Food Service Aware", description: "Programs designed around kitchens, storage, dining, and exterior pressure points." },
    { icon: faClock, title: "After-Hours Friendly", description: "We schedule around service so guests never see a disruption." },
    { icon: faClipboardCheck, title: "Documentation You Can Show", description: "Service records and recommendations suitable for managers and inspectors." },
  ];

  const processSteps = [
    { number: 1, title: "Kitchen Walkthrough", description: "Map pressure zones from receiving to dumpster.", icon: faSearch },
    { number: 2, title: "Program Design", description: "Frequency, interior/exterior scope, and monitoring.", icon: faClipboardCheck },
    { number: 3, title: "Service Execution", description: "Reliable visits with tickets and notes every time.", icon: faRocket },
    { number: 4, title: "Rapid Response", description: "Priority support when activity spikes.", icon: faExclamationTriangle },
  ];

  const metrics = [
    { icon: faTrophy, value: 60, label: "Food service and hospitality sites served", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 11, label: "Years serving Central Texas kitchens", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "After-hours service options", us: "✅ Available", others: "❌ Daytime only" },
    { feature: "Kitchen-aware product placement", us: "✅ Yes", others: "❌ Residential methods" },
    { feature: "Service documentation", us: "✅ Every visit", others: "❌ Inconsistent" },
    { feature: "Emergency response", us: "✅ Priority", others: "❌ Next available week" },
    { feature: "Licensed & insured", us: "✅ Always", others: "❌ Not always" },
  ];

  const faq = [
    { question: "Do you work with restaurants and food trucks with commissaries?", answer: "Yes — full-service restaurants, QSR, bars, and food production spaces are within scope." },
    { question: "Can you service after close?", answer: "Yes in most cases. Tell us your hours and we build a schedule that fits." },
    { question: "Do you help with inspection readiness?", answer: "We provide service documentation and practical recommendations that support a clean operation — we are not a regulatory agency." },
    { question: "What about exterior dumpster pressure?", answer: "Exterior service and recommendations around waste areas are part of a proper food service program." },
    { question: "How fast can you respond to a spike?", answer: "Active kitchen issues are prioritized. Call (254) 776-3300 for emergency dispatch." },
  ];

  const services = [
    { icon: faBug, title: "General Pest Control", body: "Interior/exterior restaurant programs.", link: "/services/general-pest-control" },
    { icon: faPaw, title: "Rodent Control", body: "Exclusion and monitoring for kitchens.", link: "/services/rodent-control" },
    { icon: faBuilding, title: "Commercial Pest", body: "Full facility standing programs.", link: "/services/commercial-pest-control" },
    { icon: faMosquito, title: "Mosquito Treatment", body: "Patios and outdoor dining areas.", link: "/services/mosquito-yard-treatment" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Dense restaurant coverage near campus and downtown.", badge: "Home Base" },
    { town: "Temple", benefit: "Medical district and retail dining corridors.", badge: "" },
    { town: "Killeen", benefit: "High-volume QSR and multi-unit dining.", badge: "" },
    { town: "Hewitt", benefit: "Suburban dining and strip centers.", badge: "" },
    { town: "Woodway", benefit: "Neighborhood restaurants and clubs.", badge: "" },
    { town: "Bellmead", benefit: "Highway corridor food service.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Restaurants & Food Service" },
      ]} />
      <SectionIntro
        title="Pest Control for Restaurants & Food Service"
        subtitle="Kitchen-aware pest programs for Waco and Central Texas dining — documentation, after-hours options, and rapid response when pressure spikes."
      />
      <TrustBar headline="Protect guest experience and inspection readiness with a reliable pest partner" />
      <div className={styles.section}><IndustryPainPoints industry="restaurant & food service" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Kitchens Choose ShieldPro" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Food Service Uses Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Food Service Pest FAQs" /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/restaurants-food-service" title="Dining Coverage Across Central Texas" /></div>
      <CTABanner
        headline="Keep Pests Out of Your Kitchen"
        subline="Call (254) 776-3300 for a restaurant site assessment."
        primaryText="Call (254) 776-3300"
        primaryLink="tel:+12547763300"
        secondaryText="Request a Program Quote"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title="Request Food Service Pest Service" cityName="Waco" slug="industries/restaurants-food-service" spot="restaurant-industry-form" formVariant={2} />
      </div>
    </main>
  );
}
