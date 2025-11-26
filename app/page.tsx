
import Image from "next/image";
import Banner from "./components/home/Banner";
import Footer from "./components/Footer";
import Features from "./components/home/Features";
import FeaturesTwo from "./components/home/FeaturesTwo";
import Reports from "./components/home/Reports";
import Testimonials from "./components/home/Testimonials";
import Faqs from "./components/home/Faqs";

import Blogs from "./components/home/Blogs";
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
          <Testimonials />
          <Faqs />
         
          <Blogs />
          <Cta />
          </main>
          <Footer />
          </div></div>
  );
}
