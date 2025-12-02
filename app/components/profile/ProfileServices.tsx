
/* eslint-disable @next/next/no-img-element */

"use client";

type ProfileData = {
  servicesSection?: {
    services_section_enabled?: boolean;
    services_section_title?: string;
    services_section_subtitle?: string;
    display_services?: {
      service_id: string | { _id: string; name?: string; description?: string };
      description?: string;
      starting_price?: number;
      show_price?: boolean;
      _id?: string;
    }[];
  };
};

export default function ProfileServices({ data }: { data: ProfileData }) {
  const s = data.servicesSection;
  const services = s?.display_services || [];


  return (
    <section className="features section ">
      <div className="container">
        <div className="row justify-content-between align-items-end">
          <div className="col-md-12">
            <div className="section-header text-center">
            
              <h2 className="section-title text-anime">{s?.services_section_title || "Services"}</h2>
              <p>{s?.services_section_subtitle || ""}</p>
           
            </div>
          </div>
         
        </div>

        <div className="row row-padding-top">
          <div className="col-12">
            <div className="swiper service__slider">
              <div className="swiper-wrapper">
                {services.map((item) => {
                  const key = item._id || (typeof item.service_id === "object" ? item.service_id._id : item.service_id);
                  return (
                  <div key={key} className="swiper-slide">
                    <div className="features__item" >
                      
                      <div className="item-content text-center" >
                        <h6 className="item-title">{typeof item.service_id === "object" ? (item.service_id.name || item.description || item.service_id._id) : (item.description || item.service_id)}</h6>
                        <p className="item-description">{item.description || (typeof item.service_id === "object" ? (item.service_id.description || "") : "")}</p>
                       {item.show_price && typeof item.starting_price === "number" ? (
                         <span className="badge bg-primary my-4">From {item.starting_price}</span>
                       ) : null}
                         <br></br>
                           <a className="saaslyn-1-btn v2" href={`/support?service=${encodeURIComponent(typeof item.service_id === "object" ? (item.service_id.name || item.description || item.service_id._id) : (item.description || item.service_id))}`}>Request Service</a>
                       
                      </div>
                      <img
                        src="/assets/images/features/features-item-shape.png"
                        alt="features-item-shape"
                        className="item-shape"
                      />
                    </div>
                  </div>
                );})}
              </div>
              <div className="service__arry-prev"><i className="bi bi-arrow-left"></i></div>
              <div className="service__arry-next"><i className="bi bi-arrow-right"></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
