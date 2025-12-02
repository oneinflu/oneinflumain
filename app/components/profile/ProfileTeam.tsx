/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

type TeamMember = {
  id: string;
  name: string;
  designation: string;
  photoUrl: string;
};

function titleCaseId(id: string) {
  return id.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
function clean(v?: string) {
  if (!v) return "";
  return v.replace(/`/g, "").trim();
}

type CollaboratorObj = {
  _id: string;
  name?: string;
  designation?: string;
  photoUrl?: string;
  image?: string;
  avatar?: string;
  identity?: { profile_icon_url?: string; profile_name?: string };
  contact?: { email?: string };
  socials?: { instagram?: string };
  type?: string;
  users?: { registration?: { name?: string }; profile?: { slug?: string } };
};

type ProfileData = {
  collaboratorsSection?: {
    collaborators_section_title?: string;
    collaborators_section_subtitle?: string;
    published_collaborators?: Array<string | CollaboratorObj>;
  };
};

export default function ProfileTeam({ data }: { data: ProfileData }) {
  const [team, setTeam] = useState<TeamMember[]>([]);

  function firstImage(obj: Partial<CollaboratorObj>): string {
    const v = obj.photoUrl || obj.image || obj.avatar || obj.identity?.profile_icon_url || "";
    return clean(v);
  }
  function resolveName(obj: Partial<CollaboratorObj>, fallbackId: string) {
    const name = obj.users?.registration?.name || obj.name || obj.identity?.profile_name || "";
    if (name.trim()) return name.trim();
    const slug = obj.users?.profile?.slug || "";
    if (slug) return titleCaseId(slug);
    const email = obj.contact?.email || "";
    if (email) {
      const local = email.split("@")[0];
      if (local) return titleCaseId(local.replace(/[^a-zA-Z0-9_-]/g, " "));
    }
    const insta = obj.socials?.instagram || "";
    if (insta) {
      const u = clean(insta);
      const m = u.match(/https?:\/\/[^/]+\/(.+)$/);
      if (m && m[1]) return titleCaseId(m[1]);
    }
    const type = obj.type || "";
    if (type) return type;
    return titleCaseId(fallbackId);
  }

  useEffect(() => {
    async function load() {
      const published = data.collaboratorsSection?.published_collaborators || [];
      const asObjects = published.filter((x) => typeof x === "object") as CollaboratorObj[];
      if (asObjects.length) {
        setTeam(
          asObjects.map((c, i) => ({
            id: c._id,
            name: resolveName(c, c._id),
            designation: c.type || c.designation || "Collaborator",
            photoUrl: firstImage(c) || `/assets/images/team/team-thumb-${(i % 4) + 1}.png`,
          }))
        );
        return;
      }
      const ids = published.filter((x) => typeof x === "string") as string[];
      if (!ids.length) {
        setTeam([]);
        return;
      }
      async function fetchOne(id: string) {
        const tryUrls = [
          `https://backend.oneinflu.com/api/public-collaborators/${encodeURIComponent(id)}`,
          `https://backend.oneinflu.com/api/collaborators/${encodeURIComponent(id)}`,
        ];
        for (const url of tryUrls) {
          try {
            const res = await fetch(url, { cache: "no-store" });
            if (!res.ok) continue;
            const j = (await res.json()) as Partial<CollaboratorObj>;
            const name = resolveName(j, id);
            const photo = firstImage(j);
            return {
              id,
              name,
              designation: (j.designation as string) || "Collaborator",
              photoUrl: photo || `/assets/images/team/team-thumb-1.png`,
            } as TeamMember;
          } catch {
            continue;
          }
        }
        return {
          id,
          name: titleCaseId(id),
          designation: "Collaborator",
          photoUrl: `/assets/images/team/team-thumb-1.png`,
        } as TeamMember;
      }
      const results = await Promise.all(ids.map((id) => fetchOne(id)));
      setTeam(results.filter(Boolean) as TeamMember[]);
    }
    load();
  }, [data.collaboratorsSection?.published_collaborators]);
  return (
    <section className="team-main section section-padding-top-bottom">
        <div className="row justify-content-between align-items-end">
          <div className="col-md-12">
            <div className="section-header text-center mb-5">
            
              <h2 className="section-title text-anime">{data?.collaboratorsSection?.collaborators_section_title || "Our Team & Collaborators"}</h2>
              <p>{data?.collaboratorsSection?.collaborators_section_subtitle || ""}</p>
           
            </div>
          </div>
         
        </div>
      <div className="container ">
        <div className="row gy-4 gy-xl-5">
          {team.map((m) => (
            <div key={m.id} className="col-sm-6 col-xl-4 col-xxl-3">
              <div className="team-main__item fade-anim">
                <div className="team-thumb scale">
                  <img src={m.photoUrl} alt="team-thumb" className="w-100" />
                  <div className="thumb-shape">
                    <svg xmlns="http://www.w3.org/2000/svg" width="223" height="324" viewBox="0 0 223 324" fill="none">
                      <path d="M196.869 1C175.859 79.115 137.342 145.551 32.4471 159.505C-72.448 173.46 113.735 40.6504 173.263 91.5416C219.392 130.978 98.5825 204.472 101.627 217.061C104.672 229.651 233.367 163.604 221.187 185.598C209.008 207.591 134.25 265.094 106.336 323" stroke="currentColor" />
                    </svg>
                  </div>
                  
                </div>
                <div className="team-content">
                  <span className="designation">{m.designation}</span>
                  <h5 className="title text-anime">
                    <a href='/team-details'>{m.name}</a>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
