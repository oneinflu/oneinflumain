"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";
import {  Play } from "lucide-react";
import Modal from "@/components/Modal";
import FeaturePanel from "@/components/FeaturePanel";

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const mockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.5) setAnimate(true);
        });
      },
      { threshold: [0, 0.5, 1] }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const wrap = mockRef.current;
    if (!wrap) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    let raf = 0;
    let targetX = 0, targetY = 0;
    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      targetX = ((e.clientX - cx) / rect.width) * 24; // max ±12px per card scaled
      targetY = ((e.clientY - cy) / rect.height) * 24;
      if (!raf) loop();
    };
    const onLeave = () => { targetX = 0; targetY = 0; if (!raf) loop(); };
    const loop = () => {
      raf = requestAnimationFrame(() => {
        wrap.style.transform = `translate3d(${targetX * 0.5}px, ${targetY * 0.5}px, 0)`;
        wrap.style.willChange = "transform";
        raf = 0;
      });
    };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
      wrap.style.transform = "translate3d(0,0,0)";
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.heroSection}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.grid}>
            <div className={styles.left}>
              <h1 className={`${styles.headline} ${animate ? styles.enterHeadline : ""}`}>The #1 Free CRM & Collaboration Platform for Creators</h1>
              <p className={`${styles.subline} ${animate ? styles.enterSubline : ""}`}>
                Manage leads, deliverables, invoices & portfolios — all in one creator-first workspace. Free forever.
              </p>

              <div className={styles.ctaRow}>
                <Link href="/get-started" className={`${styles.ctaPrimary} ${styles.focusRing} ${animate ? styles.enterPrimary : ""}`}>Create Free Account</Link>
                <button
                  type="button"
                  className={`${styles.ctaSecondary} ${styles.focusRing} ${animate ? styles.enterSecondary : ""}`}
                  aria-label="Watch 90 second demo — opens modal"
                  onClick={() => setShowDemo(true)}
                >
                  <Play size={16} /> Watch 90s Demo
                </button>
              </div>

              <p className={`${styles.trust} ${animate ? styles.enterTrust : ""}`}>
                10,000+ creators & agencies building on INFLU — No credit card required.
              </p>
            </div>

            <div className={styles.right}>
              <div ref={mockRef} className={styles.mockupWrap}>
                <FeaturePanel />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal open={showDemo} onClose={() => setShowDemo(false)} title="Watch 90 second demo">
        {/* Fallback poster while real video/Lottie is not provided */}
        <Image src="/globe.svg" alt="Demo placeholder" width={720} height={360} />
        {/* If you add /public/demo.mp4, replace above with a <video> and poster */}
      </Modal>
    </section>
  );
}