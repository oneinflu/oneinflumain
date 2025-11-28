/* eslint-disable @next/next/no-img-element */
"use client";

type TeamMember = {
  id: string;
  name: string;
  designation: string;
  photoUrl: string;
};

function getTeam(): TeamMember[] {
  return [
    { id: "mike-rosenberg", name: "Mike Rosenberg", designation: "Photographer", photoUrl: "/assets/images/team/team-thumb-1.png" },
    { id: "maria-tenent", name: "Maria Tenent", designation: "Copywriter", photoUrl: "/assets/images/team/team-thumb-2.png" },
    { id: "alexander-xolla", name: "Alexander Xolla", designation: "Designer", photoUrl: "/assets/images/team/team-thumb-3.png" },
    { id: "isabella-nyugen", name: "Isabella Nyugen", designation: "Designer", photoUrl: "/assets/images/team/team-thumb-4.png" },
      ];
}

export default function ProfileTeam() {
  const team = getTeam();
  return (
    <section className="team-main section section-padding-top-bottom">
        <div className="row justify-content-between align-items-end">
          <div className="col-md-12">
            <div className="section-header text-center mb-5">
            
              <h2 className="section-title text-anime">Our Team & Collaborators</h2>
              <p>Explore team cards with starting prices and quick actions.</p>
           
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
