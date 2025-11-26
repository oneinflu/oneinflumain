import AboutBanner from "../components/about/AboutBanner";
import AboutHero from "../components/about/AboutHero";
import WhyUs from "../components/about/WhyUs";
import Footer from "../components/Footer";
import Cta from "../components/home/Cta";
import Features from "../components/home/Features";
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
