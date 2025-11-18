/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import styles from "./carousel-section.module.css";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import LottieVisual from "./LottieVisual";

type Feature = {
  key: string;
  title: string;
  desc: string;
  tag: "Free Forever" | "Creator-first" | "Team Ready";
  visual: "leads" | "projects" | "portfolio" | "clients" | "team" | "expenses" | "payments" | "billing" | "collaborators" | "rates";
};

const features: Feature[] = [
  { key: "leads", title: "Leads", desc: "Visual pipelines to convert leads into paying clients.", tag: "Creator-first", visual: "leads" },
  { key: "projects", title: "Projects", desc: "Organize work, deliverables & timelines in one workspace.", tag: "Team Ready", visual: "projects" },
  { key: "portfolio", title: "Portfolio", desc: "Showcase your best work in clean, stunning layouts.", tag: "Creator-first", visual: "portfolio" },
  { key: "clients", title: "Clients", desc: "All client info, files, payments & history connected.", tag: "Team Ready", visual: "clients" },
  { key: "team", title: "Team", desc: "Give your team roles, permissions & shared workflows.", tag: "Team Ready", visual: "team" },
  { key: "expenses", title: "Expenses", desc: "Track every rupee and understand your financial health.", tag: "Creator-first", visual: "expenses" },
  { key: "payments", title: "Payments", desc: "Track payments, send reminders & see transactions easily.", tag: "Free Forever", visual: "payments" },
  { key: "billing", title: "Billing", desc: "Generate invoices, track milestones & attach receipts.", tag: "Free Forever", visual: "billing" },
  { key: "collab", title: "Collaborators", desc: "Add external editors/designers with secure access.", tag: "Team Ready", visual: "collaborators" },
  { key: "rates", title: "Rate Cards", desc: "Set your pricing, offerings & packages clearly.", tag: "Creator-first", visual: "rates" },
];

type CSSVars = { "--play"?: "running" | "paused" };
function vStyle(playing: boolean): React.CSSProperties & CSSVars {
  return { "--play": playing ? "running" : "paused" };
}

function MicroVisual({ type, playing }: { type: Feature["visual"]; playing: boolean }) {
  switch (type) {
    case "payments":
      return (
        <div className={styles.visual} aria-hidden="true" style={vStyle(playing)}>
          <div className={styles.paymentScene}>
            <div className={styles.invoiceFly} />
            <div className={styles.paidBadge} />
            <div className={styles.check} />
            <div className={styles.bank}>
              <div className={styles.bankRoof} />
              <div className={styles.bankBody} />
              <div className={styles.bankSlot} />
            </div>
            <div className={styles.coinBank} />
            <div className={styles.coinBank} />
          </div>
        </div>
      );
    case "expenses":
      return (
        <LottieVisual
          name="expenses"
          playing={playing}
          fallback={
            <div className={styles.cashOut}>
              <div className={styles.wallet} />
              <div className={styles.note} />
              <div className={styles.note2} />
              <div className={styles.note3} />
              <div className={styles.recipientRow}>
                <div className={styles.recipientCard} />
                <div className={styles.recipientCard} />
                <div className={styles.recipientCard} />
              </div>
            </div>
          }
        />
      );
    case "portfolio":
      return (
        <div className={styles.visual} aria-hidden="true" style={vStyle(playing)}>
          <div className={styles.gridDots}>
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className={styles.dot} />
            ))}
          </div>
        </div>
      );
    case "rates":
      return (
        <div className={styles.visual} aria-hidden="true" style={vStyle(playing)}>
          <div className={styles.tags}>
            <span className={styles.tagCard}>₹ 999</span>
            <span className={styles.tagCard}>₹ 1,499</span>
            <span className={styles.tagCard}>₹ 4,999</span>
          </div>
        </div>
      );
    case "collaborators":
      return (
        <div className={styles.visual} aria-hidden="true" style={vStyle(playing)}>
          <div className={styles.orbit}>
            <div className={styles.centerDot} />
            <div className={styles.orbitWrap}>
              <div className={styles.orbiter} />
              <div className={styles.orbiter} />
              <div className={styles.orbiter} />
            </div>
          </div>
        </div>
      );
    case "leads":
      return (
        <div className={styles.visual} aria-hidden="true" style={vStyle(playing)}>
          <div className={styles.kanban}>
            <div className={styles.lane}>
              <div className={styles.ticket} />
              <div className={styles.ticket} />
              <div className={styles.ticket} />
            </div>
            <div className={styles.lane}>
              <div className={styles.ticket} />
              <div className={styles.ticket} />
              <div className={styles.ticket} />
            </div>
            <div className={styles.lane}>
              <div className={styles.ticket} />
              <div className={styles.ticket} />
              <div className={styles.ticket} />
            </div>
          </div>
        </div>
      );
    case "projects":
      return (
        <div className={styles.visual} aria-hidden="true" style={vStyle(playing)}>
          <div className={styles.progressMini}>
            <div className={styles.progressTrack}><div className={styles.progressFill} /></div>
            <div className={styles.progressTrack}><div className={styles.progressFill} /></div>
            <div className={styles.progressTrack}><div className={styles.progressFill} /></div>
          </div>
        </div>
      );
    case "clients":
      return (
        <div className={styles.visual} aria-hidden="true" style={vStyle(playing)}>
          <div className={styles.nodes}>
            <div className={styles.node} style={{ left: 12, top: 20 }} />
            <div className={styles.node} style={{ left: 80, top: 60 }} />
            <div className={styles.node} style={{ left: 140, top: 28 }} />
            <div className={styles.line} style={{ left: 12, top: 26, width: 68 }} />
            <div className={styles.line} style={{ left: 80, top: 62, width: 64 }} />
          </div>
        </div>
      );
    case "team":
      return (
        <LottieVisual
          name="team"
          playing={playing}
          fallback={
            <div className={styles.people}>
              <div className={styles.person} />
              <div className={styles.person} />
              <div className={styles.person} />
              <div className={styles.person} />
            </div>
          }
        />
      );
    case "billing":
      return (
        <LottieVisual
          name="billing"
          playing={playing}
          fallback={
            <>
              <div className={styles.receipts}>
                <div className={styles.sheet} />
                <div className={styles.sheet} />
                <div className={styles.sheet} />
              </div>
              <div className={styles.invoice}>
                <div className={styles.invoiceSheet} />
                <div className={styles.invoiceLine} />
                <div className={styles.invoiceLine} />
                <div className={styles.stamp} />
              </div>
            </>
          }
        />
      );
    default:
      return <div className={styles.visual} aria-hidden="true" />;
  }
}

export default function ThirdSection() {
  const reducedMotion = useReducedMotion();
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const autoplay = useMemo(() => ({
    delay: 6000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  }), []);

  const onSlideChange = useCallback((sw: any) => {
    setActiveIndex(sw.realIndex ?? sw.activeIndex ?? 0);
  }, []);

  return (
    <section className={styles.section} aria-label="Explore the Power of INFLU">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Explore Everything INFLU Can Do for You</h2>
        <p className={styles.subhead}>10 powerful features, crafted for creators, agencies, freelancers, and teams — all free forever.</p>

          <div className={styles.carouselWrap}>
          <div className={styles.edgeLeft} aria-hidden="true" />
          <div className={styles.edgeRight} aria-hidden="true" />
            <div className={styles.nav} aria-hidden="false">
            <button
              ref={prevRef}
              className={`${styles.navBtn} carouselPrev`}
              aria-label="Previous features"
              tabIndex={0}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              ref={nextRef}
              className={`${styles.navBtn} carouselNext`}
              aria-label="Next features"
              tabIndex={0}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Autoplay, A11y, Keyboard]}
            onBeforeInit={(sw) => {
              // Attach navigation elements before init
              
              (sw.params.navigation as any).prevEl = prevRef.current;
             
              (sw.params.navigation as any).nextEl = nextRef.current;
            }}
            onSlideChange={onSlideChange}
            loop
            centeredSlides
            spaceBetween={20}
            keyboard={{ enabled: true }}
            a11y={{ enabled: true }}
            autoplay={reducedMotion ? false : autoplay}
            className={styles.swiperRoot}
            breakpoints={{
              0: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {features.map((f, i) => (
              <SwiperSlide key={f.key} aria-label={`${f.title} feature card`}>
                <motion.div
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 0.9, 0.3, 1] }}
                  className={styles.card}
                >
                  <MicroVisual type={f.visual} playing={!reducedMotion && activeIndex === i} />

                  <div className={styles.title}>{f.title}</div>
                  <div className={styles.desc}>{f.desc}</div>
                  <span className={styles.tag}>{f.tag}</span>
                  <a href="#" className={styles.cta} aria-label={`Learn more about ${f.title}`}>
                    Learn more <ArrowRight size={16} />
                  </a>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}