/* eslint-disable @next/next/no-img-element */
"use client";
import { useSlug } from "../../context/SlugContext";

type Profile = {
  photoUrl: string;
  name: string;
  role: string;
  location: string;
  shortBio: string;
  verified?: boolean;
};

function titleCase(input: string) {
  return input.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function getProfile(slug: string): Profile {
  const name = titleCase(slug || "Profile");
  return {
    photoUrl: "/assets/images/team/team-details-thumb.png",
    name,
    role: "UGC Agency",
    location: "Hyderabad, India",
    shortBio:
      "Building authentic content and campaign workflows for brands and agencies.",
    verified: true,
  };
}

export default function ProfileHeader() {
  const slug = useSlug() || "profile";
  const profile = getProfile(slug);

  return (
    <section className="section section-padding-top-bottom">
      <div className="container">
        <div className="testimonial__item" >
          <div className="row py-3 px-2" style={{ borderRadius: "32px" }}  data-bg-src="/assets/images/testimonial/testimonial-card-bg.png">
            <div className="col-lg-5 col-md-5 col-sm-12 justify-center p-2" >
              
              <div className="team-details__content">
                      <div className="section-header text-center">
                         <img src={profile.photoUrl} alt={profile.name} className="w-100 " style={{ borderRadius: "10%" }}  />
                       
                        
                      </div>
                     
                      
                      
                     
                    </div>
               
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12" >
               <div className="team-details__content">
                      <div className="section-header">
                      
                        <h2 className="section-title text-anime" style={{ perspective: "400px" }}>One Influ </h2>
                        <p>  Digital agencies focus on understanding their client’s
                          business goals, target audience and unique challenges.
                        </p>
                      </div>
                      <div className="user-infos">
                        <ul>
                          <li>
                            <span>ROLE</span>: {profile.role}
                          </li>
                          <li><span>LOCATION</span>: {profile.location}</li>
                           <li><span>WEBSITE</span>: <a href="https://www.oneinflu.com/" target="_blank">www.oneinflu.com</a></li>
                         
                        </ul>
                      </div>
                     <div className="social-media-infos ">
                        <span>Follow Us On:</span>
                        <div className="social-media v3 ">
                          <ul>
                            <li>
                              <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                            </li>
                            <li>
                              <a href="#0"><i className="fa-brands fa-instagram"></i></a>
                            </li>
                            <li>
                              <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                            </li>
                            <li>
                              <a href="#0"><i className="fa-brands fa-youtube"></i></a>
                            </li>
                          </ul>
                        </div>
                        <hr/>
                        <div className="buttons">
                  <a className='saaslyn-2-btn mx-2' href='https://console.oneinflu.com/signup'>Call Us</a>
                  <a className='saaslyn-1-btn v2' href='https://console.oneinflu.com/signin'>Book Now</a>
                </div>
                      </div>
                       
                     
                    </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
