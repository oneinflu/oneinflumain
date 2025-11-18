/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./stats-section.module.css";
import { motion, useInView, useReducedMotion } from "framer-motion";

type StatType = "number" | "crore";

type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  ariaLabel: string;
  type: StatType;
  value: number; // end value (e.g., 10000, 250000, 8 for crore)
  plus?: boolean;
  index: number;
};

function useCountUp(end: number, inView: boolean, durationSec = 1.2) {
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    if (reduceMotion) {
      setCurrent(end);
      return;
    }

    let rafId = 0;
    let startTs: number | null = null;
    const durationMs = durationSec * 1000;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (ts: number) => {
      if (startTs === null) startTs = ts;
      const elapsed = ts - startTs;
      const t = Math.min(elapsed / durationMs, 1);
      const eased = easeOutCubic(t);
      const val = Math.round(end * eased);
      setCurrent(val);
      if (t < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setCurrent(end);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [end, inView, reduceMotion, durationSec]);

  return current;
}

function StatCard({ icon, label, ariaLabel, type, value, plus = true, index }: StatCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(cardRef, { once: true, margin: "-10% 0px -10% 0px" });
  const count = useCountUp(type === "crore" ? value : value, inView, 1.4);

  const formatted = (() => {
    if (type === "crore") {
      const intVal = Math.round(count);
      return `₹${intVal} Crore${plus ? "+" : ""}`;
    }
    const nf = new Intl.NumberFormat("en-US");
    return `${nf.format(Math.round(count))}${plus ? "+" : ""}`;
  })();

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      tabIndex={0}
      role="article"
      aria-label={label}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: [0.22, 0.9, 0.3, 1], delay: index * 0.12 }}
    >
      <div className={styles.iconWrap} aria-hidden="true">
        <div className={styles.iconInner}>{icon}</div>
      </div>
      <div className={styles.number} aria-label={ariaLabel}>{formatted}</div>
      <div className={styles.label}>{label}</div>
    </motion.div>
  );
}

// Minimal inline icons with purple gradient stroke
const UsersIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad-users" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7B32FF" />
        <stop offset="1" stopColor="#B089F0" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="5" stroke="url(#grad-users)" strokeWidth="2" />
    <circle cx="20" cy="10" r="4" stroke="url(#grad-users)" strokeWidth="2" />
    <path d="M6 24c2.5-4 9.5-4 12 0" stroke="url(#grad-users)" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 24c1.8-3 6.8-3 8.6 0" stroke="url(#grad-users)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const LeadsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad-leads" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7B32FF" />
        <stop offset="1" stopColor="#B089F0" />
      </linearGradient>
    </defs>
    <path d="M6 10h20l-6 8h-8l-6-8z" stroke="url(#grad-leads)" strokeWidth="2" fill="none" />
    <path d="M12 18l4 6 4-6" stroke="url(#grad-leads)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PaymentsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad-pay" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7B32FF" />
        <stop offset="1" stopColor="#B089F0" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="12" stroke="url(#grad-pay)" strokeWidth="2" />
    <path d="M18 9h-3.5a3.5 3.5 0 100 7H18M12.5 22H18" stroke="url(#grad-pay)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const FilesIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad-files" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7B32FF" />
        <stop offset="1" stopColor="#B089F0" />
      </linearGradient>
    </defs>
    <path d="M10 6h8l4 4v16H10V6z" stroke="url(#grad-files)" strokeWidth="2" fill="none" />
    <path d="M18 6v4h4" stroke="url(#grad-files)" strokeWidth="2" />
    <path d="M12 14h8M12 18h8" stroke="url(#grad-files)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function FourthSection() {
  const cards = [
    {
      icon: <UsersIcon />,
      label: "Active Users",
      aria: "Ten thousand active users",
      type: "number" as const,
      value: 10000,
    },
    {
      icon: <LeadsIcon />,
      label: "Leads Managed",
      aria: "Two hundred fifty thousand leads managed",
      type: "number" as const,
      value: 250000,
    },
    {
      icon: <PaymentsIcon />,
      label: "Payments Tracked",
      aria: "Eight crore rupees of payments tracked",
      type: "crore" as const,
      value: 8,
    },
    {
      icon: <FilesIcon />,
      label: "Files Uploaded",
      aria: "One hundred twenty thousand files uploaded",
      type: "number" as const,
      value: 120000,
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="stats-title">
      <div className={styles.container}>
        <h2 id="stats-title" className={styles.title}>
          Trusted by creators, agencies, freelancers & teams worldwide.
        </h2>
        <p className={styles.subline}>
          INFLU helps run the entire workflow — leads, projects, files, payments, and team management.
        </p>
        <motion.div
          className={styles.grid}
          initial="hidden"
          animate="visible"
        >
          {cards.map((c, i) => (
            <StatCard
              key={c.label}
              icon={c.icon}
              label={c.label}
              ariaLabel={c.aria}
              type={c.type}
              value={c.value}
              plus
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}