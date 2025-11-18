"use client";

import React from "react";
import styles from "./comparison-section.module.css";
import { motion, useReducedMotion } from "framer-motion";

type Row = {
  feature: string;
  influ: string;
  others: string;
};

const rows: Row[] = [
  { feature: "Leads Management", influ: "Free", others: "Paid / Limited" },
  { feature: "Projects & Milestones", influ: "Included", others: "Limited or Add-on" },
  { feature: "Payments Tracking", influ: "Free", others: "Usually paid" },
  { feature: "Invoices & Receipts", influ: "Unlimited", others: "Charged per invoice" },
  { feature: "Client Management", influ: "Free", others: "Limited tiers" },
  { feature: "Team Management", influ: "Unlimited", others: "Extra cost per member" },
  { feature: "Collaborators", influ: "Free", others: "Not included" },
  { feature: "Portfolio Manager", influ: "Built-in", others: "No / third-party" },
  { feature: "Rate Cards & Services", influ: "Included", others: "Not available" },
  { feature: "Expenses Tracking", influ: "Included", others: "Paid extension" },
  { feature: "File Storage", influ: "Unlimited", others: "Storage caps" },
  { feature: "Pricing", influ: "Free Forever", others: "₹799–₹4999/month" },
];

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="grad-check" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7B32FF" />
        <stop offset="1" stopColor="#B089F0" />
      </linearGradient>
    </defs>
    <circle cx="10" cy="10" r="9" stroke="url(#grad-check)" strokeWidth="2" fill="#FFF" />
    <path d="M6 10.5l2.2 2.2L14 7.8" stroke="url(#grad-check)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="10" cy="10" r="9" stroke="#9EA2AE" strokeWidth="2" fill="#FFF" />
    <path d="M7 7l6 6M13 7l-6 6" stroke="#9EA2AE" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function FifthSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="cmp-title">
      <div className={styles.container}>
        <h2 id="cmp-title" className={styles.title}>
          Why creators and teams choose INFLU over other CRMs.
        </h2>
        <p className={styles.subline}>
          Simple. All-in-one. Free forever. No limits. No confusion.
        </p>

        <div className={styles.panel} role="table" aria-label="INFLU vs other CRMs comparison">
          <div className={styles.headerRow} role="rowgroup">
            <div className={`${styles.headCell}`} role="columnheader">Feature</div>
            <div className={`${styles.headCell} ${styles.headInflu}`} role="columnheader">
              INFLU <span className={styles.badge}>Free Forever</span>
            </div>
            <div className={`${styles.headCell} ${styles.headOthers}`} role="columnheader">
              Other CRMs <span className={styles.priceBadge}>₹799–₹4999/mo</span>
            </div>
          </div>

          <div role="rowgroup" aria-label="comparison rows">
            {rows.map((r, i) => (
              <motion.div
                key={r.feature}
                className={styles.row}
                role="row"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: [0.22, 0.9, 0.3, 1], delay: i * 0.06 }}
              >
                <div className={styles.featureCell} role="cell">
                  <div className={styles.featureName}>{r.feature}</div>
                </div>
                <div className={styles.influCell} role="cell">
                  <motion.span
                    className={styles.checkIconWrap}
                    aria-hidden="true"
                    whileInView={reduceMotion ? {} : { scale: [1, 1.08, 1] }}
                    transition={{ duration: 0.12 }}
                  >
                    <CheckIcon />
                  </motion.span>
                  <span className={styles.cellText}>{r.influ}</span>
                </div>
                <div className={styles.othersCell} role="cell">
                  <span className={styles.crossIconWrap} aria-hidden="true">
                    <CrossIcon />
                  </span>
                  <span className={styles.cellTextGrey}>{r.others}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      

       
      </div>
    </section>
  );
}