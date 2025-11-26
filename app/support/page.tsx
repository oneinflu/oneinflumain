import type { Metadata } from "next";

import Footer from "../components/Footer";
import Cta from "../components/home/Cta";

import BreadcrumbSupport from "../components/support/BreadcrumbSupport";
import SupportSection from "../components/support/SupportSection";


export default function Support() {
  return (
     <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
    <BreadcrumbSupport />
    <SupportSection />
  
  <Cta />
    </main>
    <Footer />
    </div></div>
  );
}

export const metadata: Metadata = {
  title: "INFLU Support – Help for Creators, Influencers & Agencies",
  description:
    "Get help with INFLU’s creator CRM, campaign workflows, payments, portfolios, and client management. Browse FAQs or contact our support team anytime.",
};
