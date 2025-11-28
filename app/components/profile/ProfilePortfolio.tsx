"use client";
import VideoPlayer from "./VideoPlayer";

type VideoItem = {
  id: string;
  src: string;
  poster?: string;
  title?: string;
};

function getPortfolioVideos(): VideoItem[] {
  return [
    {
      id: "vid-1",
      src: "https://infludb.b-cdn.net/69284f4ee989e366fb861235/new.mp4",
      poster: "/assets/images/team/team-thumb-1.png",
      title: "Product Reel 1",
    },
    {
      id: "vid-2",
      src: "https://infludb.b-cdn.net/69284f4ee989e366fb861235/new.mp4",
      poster: "/assets/images/team/team-thumb-2.png",
      title: "Product Reel 2",
    },
    {
      id: "vid-3",
      src: "https://infludb.b-cdn.net/69284f4ee989e366fb861235/new.mp4",
      poster: "/assets/images/team/team-thumb-3.png",
      title: "Lifestyle Reel",
    },
    {
      id: "vid-4",
      src: "https://infludb.b-cdn.net/69284f4ee989e366fb861235/new.mp4",
      poster: "/assets/images/team/team-thumb-4.png",
      title: "UGC Reel",
    },
    {
      id: "vid-5",
      src: "https://infludb.b-cdn.net/69284f4ee989e366fb861235/new.mp4",
      poster: "/assets/images/team/team-thumb-5.png",
      title: "Campaign Cut",
    },
  ];
}

export default function ProfilePortfolio() {
  const videos = getPortfolioVideos();
  return (
    <section className="section section-padding-top-bottom">
      <div className="container">
        <div className="row justify-content-between align-items-end">
          <div className="col-md-12">
            <div className="section-header text-center mb-3">
              <h2 className="section-title text-anime">Our Portfolio Works</h2>
            </div>
          </div>
        </div>

        <div className="row row-padding-top">
          <div className="col-12">
            <div className="swiper portfolio__slider">
              <div className="swiper-wrapper">
                {videos.map((v) => (
                  <div key={v.id} className="swiper-slide">
                    <VideoPlayer src={v.src} height={"clamp(420px, 70vh, 720px)"} className="rounded-4 overflow-hidden" />
                  </div>
                ))}
              </div>
              <div className="portfolio__arry-prev"><i className="bi bi-arrow-left"></i></div>
              <div className="portfolio__arry-next"><i className="bi bi-arrow-right"></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
