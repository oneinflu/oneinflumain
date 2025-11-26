
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
