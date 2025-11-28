/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import { SlugProvider } from "../../context/SlugContext";

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
            <section className="breadcrumb-area section">
              <div
                className="breadcrumb-area__wrapper"
                data-bg-src="/assets/images/breadcrumb/breadcrumb-bg.png"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="breadcrumb-area__content">
                        <h1 className="breadcrumb-title text-anime">Profile: {title}</h1>
                        <nav className="breadcrumb-nav" aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                              <a href="/">Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                              {title}
                            </li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="features section section-padding-top-bottom">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-lg-7 col-xxl-6">
                    <div className="section-header">
                      <h2 className="section-title text-anime">Dynamic Profile</h2>
                      <p>Slug: {slug}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </SlugProvider>
  );
}
