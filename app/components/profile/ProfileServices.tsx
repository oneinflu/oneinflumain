/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

"use client";
import { useSlug } from "../../context/SlugContext";

type Service = {
  id: string;
  name: string;
  description: string;
  icon?: string;
};

type RateCard = {
  serviceId: string;
  startingPrice: number;
  currency: string;
};

function getServices(_slug: string): Service[] {
  return [
    {
      id: "ugc-content",
      name: "UGC Content Production",
      description:
        "End-to-end short-form video, product showcases, and brand-ready creatives.",
      icon: "bi-camera-video",
    },
    {
      id: "editing",
      name: "Video Editing",
      description:
        "Cuts, captions, motion graphics, color, sound design, and delivery to spec.",
      icon: "bi-scissors",
    },
    {
      id: "influencer-campaigns",
      name: "Influencer Campaigns",
      description:
        "Plan, source, and run creator campaigns with briefs, approvals, and tracking.",
      icon: "bi-people",
    },
    {
      id: "photography",
      name: "Product Photography",
      description:
        "High-quality product shots for ecom, ads, and social with fast turnarounds.",
      icon: "bi-camera",
    },
    {
      id: "influencer-campaigns",
      name: "Influencer Campaigns",
      description:
        "Plan, source, and run creator campaigns with briefs, approvals, and tracking.",
      icon: "bi-people",
    },
    {
      id: "photography",
      name: "Product Photography",
      description:
        "High-quality product shots for ecom, ads, and social with fast turnarounds.",
      icon: "bi-camera",
    },
  ];
}

function getRateCards(_slug: string): RateCard[] {
  return [
    { serviceId: "ugc-content", startingPrice: 199, currency: "USD" },
    { serviceId: "editing", startingPrice: 149, currency: "USD" },
    { serviceId: "influencer-campaigns", startingPrice: 499, currency: "USD" },
    { serviceId: "photography", startingPrice: 299, currency: "USD" },
  ];
}

export default function ProfileServices() {
  const slug = useSlug() || "profile";
  const services = getServices(slug);
  const rateCards = getRateCards(slug);

  const priceFor = (id: string) => {
    const rc = rateCards.find((r) => r.serviceId === id);
    return rc ? `${rc.currency} ${rc.startingPrice}` : "Contact";
  };


  return (
    <section className="features section ">
      <div className="container">
        <div className="row justify-content-between align-items-end">
          <div className="col-md-12">
            <div className="section-header text-center">
            
              <h2 className="section-title text-anime">What We Offer</h2>
              <p>Explore service cards with starting prices and quick actions.</p>
           
            </div>
          </div>
         
        </div>

        <div className="row row-padding-top">
          <div className="col-12">
            <div className="swiper service__slider">
              <div className="swiper-wrapper">
                {services.map((s) => (
                  <div key={s.id} className="swiper-slide">
                    <div className="features__item" >
                      
                      <div className="item-content text-center" >
                        <h6 className="item-title">{s.name}</h6>
                        <p className="item-description">{s.description}</p>
                       <span className="badge bg-primary my-4">From {priceFor(s.id)}</span>
                         <br></br>
                           <a className="saaslyn-1-btn v2" href={`/support?service=${encodeURIComponent(s.name)}`}>Request Service</a>
                       
                      </div>
                      <img
                        src="/assets/images/features/features-item-shape.png"
                        alt="features-item-shape"
                        className="item-shape"
                      />
                    </div>
                  </div>
                ))}
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
