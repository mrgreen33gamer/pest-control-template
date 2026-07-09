// ShieldPro Pest Control — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faBug,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2014",
      description: "ShieldPro was founded in Waco by Derek Collins, a Licensed Pest Control Applicator who built the company on honest assessments and reliable follow-through. We're not a franchise — every decision is made locally.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust on Your Property",
      description: "Every technician is background-aware, licensed, and fully insured. We treat every home and business with respect — clear communication, careful application, no mess left behind.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't sell a yearly contract when a targeted treatment will do. Eco-conscious options are available when they fit. Our reputation is built on straight talk — and 12,000+ protected properties prove it works.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 12000, label: "Properties protected across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,    label: "Customer satisfaction rate",                suffix: "%", duration: 2 },
    { icon: faClock,     value: 11,    label: "Years serving Central Texas families",      suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a same-day or next-day slot that fits your schedule.", icon: faClipboardCheck },
    { number: 2, title: "Inspect Honestly", description: "A licensed applicator inspects activity and explains options in plain English — not just the most expensive plan.", icon: faShieldHalved },
    { number: 3, title: "Treat With a Clear Plan", description: "Written scope and price before treatment. Eco-conscious options available when appropriate.", icon: faBug },
    { number: 4, title: "Protect & Guarantee", description: "Follow-up as needed. Free re-treat if covered pests return between scheduled visits.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About ShieldPro Pest Control"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2014. We protect Central Texas homes and businesses from pests — guaranteed — with licensed applicators and free re-treats between visits."
      />

      <TrustBar headline="12,000+ Central Texas properties trust ShieldPro — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="11+ Years, By the Numbers" metrics={metrics} cityName="Waco" />
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

      <CTABanner
        headline="Waco's Pest Protection Partner — Ready When You Need Us"
        subline="Call (254) 776-3300 or book online. Same-day service available across Central Texas."
        primaryText="Call (254) 776-3300"
        primaryLink="tel:+12547763300"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />

    </main>
  );
}
