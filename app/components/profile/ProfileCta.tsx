"use client";

type ProfileData = {
  ctaSection?: {
    cta_section_enabled?: boolean;
    cta_section_title?: string;
    cta_section_subtext?: string;
    cta_button_label?: string;
  };
  linksSection?: {
    terms_enabled?: boolean;
    privacy_enabled?: boolean;
    terms_text?: string;
    privacy_text?: string;
  };
  profile?: {
    ctaPhoneEnabled?: boolean;
    ctaPhoneLabel?: string;
    ctaPhoneNumber?: string;
    ctaEmailEnabled?: boolean;
    ctaEmailLabel?: string;
    ctaEmailAddress?: string;
  };
};

import { useState } from "react";


export default function ProfileCta({ data }: { data: ProfileData }) {
  const s = data.ctaSection || {};
  const title = s.cta_section_title || "Get in touch";
  const subtext = s.cta_section_subtext || "";
  const phoneEnabled = !!data.profile?.ctaPhoneEnabled;
  const phoneLabel = data.profile?.ctaPhoneLabel || "Call";
  const phoneNumber = data.profile?.ctaPhoneNumber || "";
  const emailEnabled = !!data.profile?.ctaEmailEnabled;
  const emailLabel = data.profile?.ctaEmailLabel || "Email";
  const emailAddress = data.profile?.ctaEmailAddress || "";
  const links = data.linksSection || {};
  const [modalOpen, setModalOpen] = useState<null | "terms" | "privacy">(null);
  const termsText = (links.terms_text || "").trim();
  const privacyText = (links.privacy_text || "").trim();
  return (
    <section className="cta section section-padding-bottom section-padding-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-header cta__content-wrapper" data-bg-src="./assets/images/cta/cta-bg.png">
              <div className="cta__content">
                <h2 className="section-title text-anime">{title}</h2>
                <p>{subtext}</p>
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
