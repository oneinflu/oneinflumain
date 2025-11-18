import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topRow}>
          {/* Brand block */}
          <div className={styles.brand}>
            <div className={styles.logo} aria-label="INFLU">
              <Image src="/logo.svg" alt="INFLU" width={120} height={28} />
            </div>
            <p className={styles.mission}>
              “The free CRM powering creators, agencies, and teams worldwide.”
            </p>
            <div className={styles.socials}>
              <Link aria-label="Instagram" href="#" className={styles.social}>
                <Instagram className={styles.socialIcon} />
              </Link>
              <Link aria-label="LinkedIn" href="#" className={styles.social}>
                <Linkedin className={styles.socialIcon} />
              </Link>
              <Link aria-label="X (Twitter)" href="#" className={styles.social}>
                <Twitter className={styles.socialIcon} />
              </Link>
              <Link aria-label="YouTube" href="#" className={styles.social}>
                <Youtube className={styles.socialIcon} />
              </Link>
            </div>
          </div>

          {/* Navigation blocks */}
          <div className={styles.links}>
            <div>
              <div className={styles.columnTitle}>Product</div>
              <div className={styles.linkGroup}>
                <Link href="#features" className={styles.link}>Features</Link>
                <Link href="#pricing" className={styles.link}>Pricing (Free Forever)</Link>
                <Link href="#templates" className={styles.link}>Templates</Link>
                <Link href="#roadmap" className={styles.link}>Roadmap</Link>
              </div>
            </div>
            <div>
              <div className={styles.columnTitle}>Company</div>
              <div className={styles.linkGroup}>
                <Link href="#about" className={styles.link}>About</Link>
                <Link href="#careers" className={styles.link}>Careers</Link>
                <Link href="#partners" className={styles.link}>Partners</Link>
                <Link href="#press" className={styles.link}>Press</Link>
              </div>
            </div>
            <div>
              <div className={styles.columnTitle}>Resources</div>
              <div className={styles.linkGroup}>
                <Link href="#blog" className={styles.link}>Blog</Link>
                <Link href="#community" className={styles.link}>Community</Link>
                <Link href="#docs" className={styles.link}>Documentation</Link>
                <Link href="#support" className={styles.link}>Support</Link>
              </div>
            </div>
            <div>
              <div className={styles.columnTitle}>Legal</div>
              <div className={styles.linkGroup}>
                <Link href="#terms" className={styles.link}>Terms & Conditions</Link>
                <Link href="#privacy" className={styles.link}>Privacy Policy</Link>
                <Link href="#data" className={styles.link}>Data Protection</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom mini-footer */}
      <div className={styles.bottomBar}>
        <div className="container">
          <p className={styles.bottomText}>
            © 2025 Influ Media Tech. Made in India 🇮🇳 for the world.
          </p>
        </div>
      </div>
    </footer>
  );
}