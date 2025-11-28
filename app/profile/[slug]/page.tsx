/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import { SlugProvider } from "../../context/SlugContext";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileServices from "../../components/profile/ProfileServices";
import ProfileTeam from "../../components/profile/ProfileTeam";
import ProfilePortfolio from "../../components/profile/ProfilePortfolio";
import ProfileTestimonials from "@/app/components/profile/ProfileTestimonials";
import Cta from "@/app/components/home/Cta";

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

export default async function ProfileSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }
  const title = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "Profile";
  return (
    <SlugProvider slug={slug || ""}>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            

            <ProfileHeader />
            <ProfileServices />
            <ProfilePortfolio />
            <ProfileTeam />
            <ProfileTestimonials />
          <Cta />
          </main>
          <Footer />
        </div>
      </div>
    </SlugProvider>
  );
}
