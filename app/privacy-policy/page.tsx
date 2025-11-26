
import type { Metadata } from "next";
import Footer from "../components/Footer";

import PrivacyBreadCrumb from "../components/terms/PrivacyBreadCrumb";
import PrivacyContent from "../components/terms/PrivacyContent";



export default function Privacy() {
  return (
     <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
         <PrivacyBreadCrumb />
  <PrivacyContent />
  
    </main>
    <Footer />
    </div></div>
  );
}

export const metadata: Metadata = {
  title: "INFLU Privacy Policy – Data Protection for Creators & Agencies",
  description:
    "Learn how INFLU collects, stores, and protects creator, client, and campaign data. Transparent policies for influencers, agencies, and brands using the INFLU CRM platform.",
};
