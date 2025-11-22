"use client";

import React from "react";
import styles from "./cta-banner.module.css";
import { motion } from "framer-motion";

const WhiteCheck = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="9" cy="9" r="8" stroke="rgba(255,255,255,0.9)" strokeWidth="2" fill="none" />
    <path d="M5.5 9.5l2.3 2.3L12.5 7.5" stroke="rgba(255,255,255,0.95)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function SixthSection() {
  const variants = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };
  const transition = { duration: 0.48 };

  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <div className={styles.bgLayer} aria-hidden="true">
        <div className={styles.blob} />
        <div className={styles.blob} />
        <div className={styles.blob} />
      </div>

      <motion.div className={styles.inner} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={variants} transition={transition}>
        <h2 id="cta-title" className={styles.title}>Start managing your creator business like a pro.</h2>
        <p className={styles.subline}>Get your free account — no limits, no credit card, no trials.</p>

        <a href="https://console.oneinflu.com" className={styles.ctaBtn} aria-label="Create Free Account">
          Create Free Account <span className={styles.arrow}>→</span>
        </a>

        <div className={styles.trustList} aria-label="Trust points">
          <span className={styles.trustItem}><span className={styles.checkIcon}><WhiteCheck /></span> Free forever</span>
          <span className={styles.trustItem}><span className={styles.checkIcon}><WhiteCheck /></span> Unlimited users</span>
          <span className={styles.trustItem}><span className={styles.checkIcon}><WhiteCheck /></span> Unlimited projects</span>
          <span className={styles.trustItem}><span className={styles.checkIcon}><WhiteCheck /></span> No credit card needed</span>
        </div>
      </motion.div>
    </section>
  );
}