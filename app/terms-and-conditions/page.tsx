
import type { Metadata } from "next";
import Footer from "../components/Footer";

import TermsBreadCrumb from "../components/terms/TermsBreadCrumb";
import TermsContent from "../components/terms/TermsContent";



export default function Terms() {
  return (
     <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
         <TermsBreadCrumb />
  <TermsContent />
 
    </main>
    <Footer />
    </div></div>
  );
}

export const metadata: Metadata = {
  title: "INFLU Terms & Conditions – Creator & Influencer Platform Policies",
  description:
    "Review INFLU’s terms for creators, influencers, agencies, and brands regarding platform usage, collaborations, campaigns, payments, data handling, and legal compliance.",
};
