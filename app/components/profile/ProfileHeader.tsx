/* eslint-disable @next/next/no-img-element */
"use client";
import { useSlug } from "../../context/SlugContext";

type SocialHandle = { platform: string; url: string };
type ProfileData = {
  heroImage?: string | null;
  cover_photo?: string | null;
  ownerRef?: { registration?: { avatar?: string } };
  profile?: {
    title?: string;
    subtitle?: string;
    role?: string;
    locationAddress?: string;
    websiteUrl?: string;
    socialHandles?: SocialHandle[];
    ctaPhoneEnabled?: boolean;
    ctaPhoneLabel?: string;
    ctaPhoneNumber?: string;
    ctaEmailEnabled?: boolean;
    ctaEmailLabel?: string;
    ctaEmailAddress?: string;
  };
};

function titleCase(input: string) {
  return input.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
function cleanUrl(u?: string) {
  if (!u) return "";
  return u.replace(/`/g, "").trim();
}
function platformIcon(name?: string) {
  const p = (name || "").toLowerCase();
  if (p.includes("instagram")) return "fa-brands fa-instagram";
  if (p.includes("facebook")) return "fa-brands fa-facebook-f";
  if (p.includes("linkedin")) return "fa-brands fa-linkedin-in";
  if (p.includes("youtube")) return "fa-brands fa-youtube";
  if (p.includes("twitter") || p.includes("x")) return "fa-brands fa-x-twitter";
  return "fa-solid fa-link";
}

export default function ProfileHeader({ data }: { data: ProfileData }) {
  const slug = useSlug() || "profile";
  const name = data.profile?.title || titleCase(slug);
  const role = data.profile?.role || "";
  const location = data.profile?.locationAddress || "";
  const website = cleanUrl(data.profile?.websiteUrl);
  const imgSrc = cleanUrl(
    data.heroImage || data.cover_photo || data.ownerRef?.registration?.avatar || "/assets/images/team/team-details-thumb.png"
  );
  const subtitle = data.profile?.subtitle || "";
  const phoneEnabled = !!data.profile?.ctaPhoneEnabled;
  const phoneLabel = data.profile?.ctaPhoneLabel || "Call";
  const phoneNumber = data.profile?.ctaPhoneNumber || "";
  const emailEnabled = !!data.profile?.ctaEmailEnabled;
  const emailLabel = data.profile?.ctaEmailLabel || "Email";
  const emailAddress = data.profile?.ctaEmailAddress || "";
  const handles = data.profile?.socialHandles || [];

  return (
    <section className="section section-padding-top-bottom">
      <div className="container">
       
          <div className="row py-3 px-2 justify-center" style={{ borderRadius: "32px" }}  data-bg-src="/assets/images/testimonial/testimonial-card-bg.png">
            <div className="col-lg-5 col-md-5 col-sm-12 justify-center p-2" >
              
              <div className="team-details__content">
                      <div className="section-header text-center">
                         <img src={imgSrc} alt={name} className="w-100" style={{ borderRadius: "10%" }}  />
                       
                        
                      </div>
                     
                      
                      
                     
                    </div>
               
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12" >
               <div className="team-details__content">
                      <div className="section-header">
                      
                        <h2 className="section-title text-anime" style={{ perspective: "400px" }}>{name}</h2>
                        <p>{subtitle}</p>
                      </div>
                      <div className="user-infos">
                        <ul>
                          <li>
                            <span>ROLE</span>: {role}
                          </li>
                          <li><span>LOCATION</span>: {location}</li>
                           <li><span>WEBSITE</span>: {website ? (<a href={website} target="_blank">{website}</a>) : ""}</li>
                         
                        </ul>
                      </div>
                     <div className="social-media-infos ">
                        <span>Follow Us On:</span>
                        <div className="social-media v3 ">
                          <ul>
                            {handles.map((h) => (
                              <li key={h.url}>
                                <a href={cleanUrl(h.url)} target="_blank" aria-label={h.platform}>
                                  <i className={platformIcon(h.platform)}></i>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <hr/>
                        <div className="buttons">
                  {phoneEnabled && phoneNumber ? (
                    <a className='saaslyn-2-btn mx-2' href={`tel:${phoneNumber}`}>{phoneLabel}</a>
                  ) : null}
                  {emailEnabled && emailAddress ? (
                    <a className='saaslyn-1-btn v2' href={`mailto:${emailAddress}`}>{emailLabel}</a>
                  ) : null}
                </div>
                      </div>
                       
                     
                    </div>
            </div>
          </div>
       
      </div>
    </section>
  );
}
