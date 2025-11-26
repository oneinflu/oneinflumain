import type { Metadata } from "next";
import AboutBanner from "../components/about/AboutBanner";
import AboutHero from "../components/about/AboutHero";
import WhyUs from "../components/about/WhyUs";
import Footer from "../components/Footer";
import Cta from "../components/home/Cta";
import Features from "../components/home/Features";


export default function About() {
  return (
     <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
      <AboutHero />
      <AboutBanner />
      <WhyUs />
  <Features />
  
  <Cta />
    </main>
    <Footer />
    </div></div>
  );
}

export const metadata: Metadata = {
  title: "About INFLU – The Creator Business OS for Influencers & UGC Agencies",
  description:
    "Discover INFLU’s vision to empower creators, influencers, agencies, and brands with smart CRM tools for collaboration, campaign management, payments, and portfolio growth.",
};
