import styles from "./pillars-section.module.css";
import { TrendingUp, CheckSquare, Wallet, Infinity, Lock, ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";

type CSSVars = CSSProperties & {
  "--delay"?: string | number;
  "--bullet-delay"?: string | number;
};

const delayStyle = (ms: string | number): CSSVars => ({ "--delay": ms });
const bulletStyle = (ms: string | number): CSSVars => ({ "--bullet-delay": ms });

export default function SecondSection() {
  const growthBullets = [
    "Visual lead pipelines",
    "Client profiles & communication history",
    "Beautiful portfolio pages",
    "Rate cards for pricing transparency",
  ];
  const workspaceBullets = [
    "Project folders & timelines",
    "Add collaborators with custom permissions",
    "Team roles & access control",
    "Milestones & deliverables tracking",
  ];
  const financeBullets = [
    "Auto-generated invoices",
    "Attach receipts",
    "Payment history",
    "Expenses tracking dashboard",
  ];

  return (
    <section aria-label="The Complete System for Running Your Creator Business" className={styles.sectionWrap}>
      <div className={styles.section}>
      <h2 className={styles.heading}>Everything you need. Unlimited. Free forever.</h2>
      <p className={styles.subhead}>
        Manage your leads, projects, payments, team, and entire workflow without paying a single rupee.
      </p>

      <div className={styles.grid}>
        {/* Pillar 1 — Growth & Clients */}
        <article className={styles.card} style={delayStyle("0ms")}>
          <div className={styles.iconWrap} aria-hidden="true">
            <TrendingUp color="#FFFFFF" size={24} />
          </div>
          <div className={styles.title}>Grow your business with organized leads & clients.</div>
          <div className={styles.desc}>
            Track every lead, manage clients with clarity, present your portfolio, and define your services — all connected.
          </div>
          <div className={styles.microList}>
            {growthBullets.map((text, i) => (
              <div key={text} className={styles.microItem} style={bulletStyle(`${i * 60}ms`)}>
                <span className={styles.bullet} aria-hidden="true" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </article>

        {/* Pillar 2 — Workspace & Execution */}
        <article className={styles.card} style={delayStyle("120ms")}>
          <div className={styles.iconWrap} aria-hidden="true">
            <CheckSquare color="#FFFFFF" size={24} />
          </div>
          <div className={styles.title}>Execute projects with clarity & seamless collaboration.</div>
          <div className={styles.desc}>
            Organize work, manage your team, assign collaborators, and track deliverables with milestone-based planning.
          </div>
          <div className={styles.microList}>
            {workspaceBullets.map((text, i) => (
              <div key={text} className={styles.microItem} style={bulletStyle(`${i * 60}ms`)}>
                <span className={styles.bullet} aria-hidden="true" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </article>

        {/* Pillar 3 — Finance & Payments */}
        <article className={styles.card} style={delayStyle("240ms")}>
          <div className={styles.iconWrap} aria-hidden="true">
            <Wallet color="#FFFFFF" size={24} />
          </div>
          <div className={styles.title}>Control your finances with zero stress.</div>
          <div className={styles.desc}>
            Track payments, generate invoices, store receipts, record expenses — know your financial health instantly.
          </div>
          <div className={styles.microList}>
            {financeBullets.map((text, i) => (
              <div key={text} className={styles.microItem} style={bulletStyle(`${i * 60}ms`)}>
                <span className={styles.bullet} aria-hidden="true" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className={styles.taglineWrap}>
        <p className={styles.tagline}>
          <Lock className={styles.tagIcon} size={16} />
          <Infinity className={styles.tagIcon} size={16} />
          <span>And yes — all of this is completely free. No trial. No limits. Free forever.</span>
        </p>
        <a href="https://console.oneinflu.com" className={styles.tagCta} aria-label="Get started for free">
          Get started free
          <ArrowRight size={16} />
        </a>
      </div>
      </div>
    </section>
  );
}