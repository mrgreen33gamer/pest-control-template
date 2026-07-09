// _archetype-library/hero-i-editorial/Component.tsx
//
// Hero I: Minimal Editorial — oversized typography, single accent shape,
// large negative space. Optional accentWord as huge watermark typography.
// No canvas, no stat cards, no widget.
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

export default function WelcomePage() {
const badgeText = 'Waco\'s Most Trusted Pest Control — Since 2014';
const headlineLines = [
  'Pests Out.',
  'Home Safe.',
];
const headlineAccent = 'ShieldPro.';
const subheadline = 'Protecting Central Texas Homes & Businesses from Pests — Guaranteed. Licensed applicators, eco-conscious options, free re-treat between visits.';
const primaryCta = { label: 'Call (254) 776-3300', href: 'tel:+12547763300' };
const secondaryCta = { label: 'Free Estimate', href: '/contact' };
const chips = [
  'Same-Day Service',
  'Free Re-Treats',
  'Licensed',
  'Since 2014',
  'Eco Options',
];
const stats = [
  {
    "value": "12,000+",
    "label": "Properties Protected"
  },
  {
    "value": "4.9 ★",
    "label": "Google Rating"
  },
  {
    "value": "Free",
    "label": "Re-Treat Guarantee"
  },
  {
    "value": "Same-Day",
    "label": "Service Available"
  }
];
const meterTarget = 72;
const meterTopLabel = "Peak";
const meterMidLabel = "Local";
const meterBotLabel = "Base";
const particleColor = '#84cc16';
const beforeImageSrc = '/pages/home/welcome/before.jpg';
const afterImageSrc = '/pages/home/welcome/after.jpg';
const beforeLabel = "Infestation";
const afterLabel = "Under control";
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "General", swatch: "#84cc16", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Roach", swatch: "#a3e635", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Ant", swatch: "#65a30d", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "Spider", swatch: "#4d7c0f", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Exterior", swatch: "#365314", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Commercial", swatch: "#1a2e05", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "Quarterly plan ended our kitchen ant highway. Tech is consistent and explains products clearly.";
const authorName = "Renee Q.";
const authorMeta = "Pest plan · Waco";
const rating = 5;
const schematicLabel = "ShieldPro schematic";
const gauges = [
  { label: "Homes", value: "4,700+" },
  { label: "Rating", value: "4.8 ★" },
  { label: "Plans", value: "Flexible" },
  { label: "Re-treat", value: "Included*" }
];
const toggles = [
  { label: "Plans active", on: true },
  { label: "Recurring routes", on: true },
  { label: "Re-treat ready", on: true }
];
const textureSrc = '/pages/home/welcome/hero-main.jpg';
const textureAlt = 'Texture';
const accentWord = "ShieldPro";

  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Single geometric accent — not a content widget */}
      <div className={styles.accentShape} aria-hidden="true" />
      <div className={styles.hairline} aria-hidden="true" />

      {accentWord ? (
        <div className={styles.watermarkSlot} aria-hidden="true">
          <motion.span
            className={styles.watermark}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {accentWord}
          </motion.span>
        </div>
      ) : null}

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.div
            className={styles.rule}
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
