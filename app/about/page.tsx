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
