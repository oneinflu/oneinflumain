
import type { Metadata } from "next";
import BlogArea from "../components/blog/BlogArea";
import Breadcrumb from "../components/blog/Breadcrumb";
import Footer from "../components/Footer";
import Cta from "../components/home/Cta";



export default function Blog() {
  return (
     <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <Breadcrumb />
          <BlogArea />
  
  <Cta />
    </main>
    <Footer />
    </div></div>
  );
}

export const metadata: Metadata = {
  title: "INFLU Blog – Insights for Creators, Influencers & UGC Agencies",
  description:
    "Read expert guides, industry news, and tips on creator CRM workflows, influencer marketing, UGC strategies, portfolio building, campaign management, and creator growth.",
};
