"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import {
  ChevronDown,
  Menu,
  X,
  BookOpen,
  Users,
  FileText,
  LifeBuoy,
} from "lucide-react";

export default function Header() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const setFromMQ = () => setIsMobile(mq.matches);
    setFromMQ();
    mq.addEventListener("change", setFromMQ);
    return () => mq.removeEventListener("change", setFromMQ);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${styles.resources}`)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const logoSrc = "/logo.svg";

  return (
    <header className={`${styles.header} ${styles.scrolled}`}>
      <div className="container">
        <div className={styles.row}>
          <Link href="/" className={styles.logo} aria-label="INFLU Home">
            <Image src={logoSrc} alt="INFLU" width={120} height={28} priority />
          </Link>

          <nav className={styles.nav} aria-label="Primary Navigation">
            <Link href="#features" className={styles.navItem}>Features</Link>
            <Link href="#pricing" className={styles.navItem}>Pricing</Link>
            <Link href="#creators" className={styles.navItem}>For Creators</Link>
            <Link href="#agencies" className={styles.navItem}>For Agencies</Link>

            <div className={`${styles.resources} ${resourcesOpen ? "open" : ""}`}>
              <button
                className={styles.navItem}
                onClick={() => setResourcesOpen((v) => !v)}
                aria-expanded={resourcesOpen}
                aria-controls="resources-menu"
              >
                Resources <ChevronDown className={styles.chevron} />
              </button>

              <div id="resources-menu" className={styles.dropdown} role="menu">
                <Link href="#blog" className={styles.dropdownItem} role="menuitem">
                  <BookOpen className={styles.itemIcon} />
                  <div>
                    <div className={styles.itemTitle}>Blog</div>
                    <div className={styles.itemSub}>Insights, product updates, and creator tips.</div>
                  </div>
                </Link>
                <Link href="#community" className={styles.dropdownItem} role="menuitem">
                  <Users className={styles.itemIcon} />
                  <div>
                    <div className={styles.itemTitle}>Community</div>
                    <div className={styles.itemSub}>Join creators building the future.</div>
                  </div>
                </Link>
                <Link href="#docs" className={styles.dropdownItem} role="menuitem">
                  <FileText className={styles.itemIcon} />
                  <div>
                    <div className={styles.itemTitle}>Docs</div>
                    <div className={styles.itemSub}>Developer guides and API references.</div>
                  </div>
                </Link>
                <Link href="#support" className={styles.dropdownItem} role="menuitem">
                  <LifeBuoy className={styles.itemIcon} />
                  <div>
                    <div className={styles.itemTitle}>Support</div>
                    <div className={styles.itemSub}>We’re here to help you succeed.</div>
                  </div>
                </Link>
              </div>
            </div>
          </nav>

          <div className={styles.actions}>
            {!isMobile && (
              <Link href="/login" className={`${styles.login} ${styles.textDark}`}>Login</Link>
            )}
            {!isMobile && (
              <Link
                href="/get-started"
                className={`${styles.cta} ${styles.ctaScrolled}`}
              >
                Get Started
              </Link>
            )}
            <button
              className={styles.burger}
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ""}`}>
        <div className={styles.drawerHeader}>
          <span className={styles.drawerLogo}>
            <Image src="/logo.svg" alt="INFLU" width={112} height={26} />
          </span>
          <button className={styles.close} aria-label="Close menu" onClick={() => setMobileOpen(false)}>
            <X />
          </button>
        </div>
        <div className={styles.drawerBody}>
          <Link href="#features" className={styles.drawerItem} onClick={() => setMobileOpen(false)}>Features</Link>
          <Link href="#pricing" className={styles.drawerItem} onClick={() => setMobileOpen(false)}>Pricing</Link>
          <Link href="#creators" className={styles.drawerItem} onClick={() => setMobileOpen(false)}>For Creators</Link>
          <Link href="#agencies" className={styles.drawerItem} onClick={() => setMobileOpen(false)}>For Agencies</Link>

          <Link href="#blog" className={styles.drawerItem} onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="#community" className={styles.drawerItem} onClick={() => setMobileOpen(false)}>Community</Link>
          <Link href="#docs" className={styles.drawerItem} onClick={() => setMobileOpen(false)}>Docs</Link>
          <Link href="#support" className={styles.drawerItem} onClick={() => setMobileOpen(false)}>Support</Link>

          <Link href="/get-started" className={styles.drawerCta} onClick={() => setMobileOpen(false)}>Get Started</Link>
        </div>
      </div>
      <div className={`${styles.scrim} ${mobileOpen ? styles.scrimVisible : ""}`} onClick={() => setMobileOpen(false)} />
    </header>
  );
}