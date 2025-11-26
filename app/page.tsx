import type { Metadata } from "next";
import Banner from "./components/home/Banner";
import Footer from "./components/Footer";
import Features from "./components/home/Features";
import FeaturesTwo from "./components/home/FeaturesTwo";
import Reports from "./components/home/Reports";
;
import Faqs from "./components/home/Faqs";


import Cta from "./components/home/Cta";

export default function Home() {
  return (
   <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <Banner />
          <Features />
          <FeaturesTwo />
          <Reports />
        
          <Faqs />
         
        
          <Cta />
          </main>
          <Footer />
          </div></div>
  );
}

export const metadata: Metadata = {
  title: "INFLU – Creator & Influencer CRM | UGC Workflow & Collaboration Platform",
  description:
    "INFLU is the all-in-one CRM for creators, influencers, agencies, and UGC teams. Manage clients, campaigns, portfolios, deliverables, payments, and collaboration in one platform.",
};
