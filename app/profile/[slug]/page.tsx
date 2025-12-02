/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
// Footer intentionally omitted for /profile/* pages per requirement
import { SlugProvider } from "../../context/SlugContext";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileServices from "../../components/profile/ProfileServices";
import ProfileTeam from "../../components/profile/ProfileTeam";
import ProfilePortfolio from "../../components/profile/ProfilePortfolio";
import ProfileCta from "@/app/components/profile/ProfileCta";
import ProfileFooter from "@/app/components/profile/ProfileFooter";

type Props = { params: { slug: string } };

export const dynamic = "force-dynamic";

// Optional: pre-render known slugs at build time; all others render dynamically
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const source = process.env.NEXT_PUBLIC_PROFILE_SLUGS || process.env.PROFILE_SLUGS || "";
  const slugs = source
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "Profile";
  return {
    title: `INFLU – Profile: ${t}`,
    description: slug ? `Profile page for ${slug}` : "Dynamic profile page",
  };
}

type PublicProfile = {
  slug: string;
  title?: string;
  shortBio?: string;
  heroImage?: string | null;
  cover_photo?: string | null;
  profile?: {
    shortBio?: string;
    title?: string;
    subtitle?: string;
    role?: string;
    locationAddress?: string;
    websiteUrl?: string;
    socialHandles?: { platform: string; url: string; _id?: string }[];
    ctaPhoneEnabled?: boolean;
    ctaPhoneLabel?: string;
    ctaPhoneNumber?: string;
    ctaEmailEnabled?: boolean;
    ctaEmailLabel?: string;
    ctaEmailAddress?: string;
  };
  servicesSection?: {
    services_section_enabled?: boolean;
    services_section_title?: string;
    services_section_subtitle?: string;
    display_services?: {
      service_id: string;
      description?: string;
      starting_price?: number;
      show_price?: boolean;
      _id?: string;
    }[];
  };
  portfolioSection?: {
    portfolio_section_enabled?: boolean;
    portfolio_section_title?: string;
    portfolio_section_subtitle?: string;
    showcase_media?: string[];
  };
  portfolio?: { id?: string; url?: string; title?: string }[];
  ctaSection?: {
    cta_section_enabled?: boolean;
    cta_section_title?: string;
    cta_section_subtext?: string;
    cta_button_label?: string;
  };
  collaboratorsSection?: {
    collaborators_section_enabled?: boolean;
    collaborators_section_title?: string;
    collaborators_section_subtitle?: string;
    published_collaborators?: Array<string | { _id: string; type?: string; users?: { registration?: { name?: string }; profile?: { slug?: string } }; identity?: { profile_icon_url?: string } } >;
  };
  linksSection?: {
    terms_enabled?: boolean;
    privacy_enabled?: boolean;
    terms_text?: string;
    privacy_text?: string;
  };
};

async function fetchProfile(slug: string): Promise<PublicProfile | null> {
  try {
    const res = await fetch(`https://backend.oneinflu.com/api/public-profiles/slug/${encodeURIComponent(slug)}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as PublicProfile;
    return data;
  } catch {
    return null;
  }
}

export default async function ProfileSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }
  const data = await fetchProfile(slug);
  if (!data) {
    notFound();
  }
  return (
    <SlugProvider slug={slug || ""}>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ProfileHeader data={data} />
            {data?.servicesSection?.services_section_enabled ? (
              <ProfileServices data={data} />
            ) : null}
            {data?.portfolioSection?.portfolio_section_enabled ? (
              <ProfilePortfolio data={data} />
            ) : null}
            {data?.collaboratorsSection?.collaborators_section_enabled ? (
              <ProfileTeam data={data} />
            ) : null}
            {data?.ctaSection?.cta_section_enabled ? (
              <ProfileCta data={data} />
            ) : null}
            <ProfileFooter data={data} />
          </main>
          
        </div>
      </div>
    </SlugProvider>
  );
}
