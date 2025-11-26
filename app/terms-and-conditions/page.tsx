
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
