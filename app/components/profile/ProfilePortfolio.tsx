"use client";
import ReactPlayer from "react-player";
import { Play, Pause } from "lucide-react";

type VideoItem = {
  id: string;
  src: string;
  title?: string;
};

type ProfileData = {
  portfolioSection?: {
    portfolio_section_title?: string;
    portfolio_section_subtitle?: string;
    showcase_media?: Array<string | { _id: string; type?: string; media_url?: string; title?: string }>;
  };
  portfolio?: { id?: string; url?: string; title?: string }[];
};

function cleanUrl(u?: string) {
  if (!u) return "";
  return u.replace(/`/g, "").trim();
}

export default function ProfilePortfolio({ data }: { data: ProfileData }) {
  let items: VideoItem[] = (data.portfolio || [])
    .filter((p) => typeof p.url === "string" && p.url)
    .map((p, idx) => ({ id: p.id || String(idx), src: p.url as string, title: p.title }));
  if (!items.length && Array.isArray(data.portfolioSection?.showcase_media)) {
    const entries = (data.portfolioSection?.showcase_media || []);
    const urls: { id: string; url: string; title?: string }[] = entries.map((entry, i) => {
      if (typeof entry === "string") {
        const u = cleanUrl(entry);
        return { id: `showcase-${i}`, url: u };
      }
      const u = cleanUrl(entry.media_url || "");
      return { id: entry._id || `showcase-${i}`, url: u, title: entry.title };
    });
    items = urls
      .filter((e) => /^https?:\/\//.test(e.url))
      .map((e) => ({ id: e.id, src: e.url, title: e.title }));
  }
  return (
    <section className="section section-padding-top-bottom">
      <div className="container">
        <div className="row justify-content-between align-items-end">
          <div className="col-md-12">
            <div className="section-header text-center mb-3">
              <h2 className="section-title text-anime">{data.portfolioSection?.portfolio_section_title || "Portfolio"}</h2>
            </div>
          </div>
        </div>

        {items.length > 0 ? (
          <div className="row row-padding-top">
            <div className="col-12">
              <div className="swiper portfolio__slider">
                <div className="swiper-wrapper">
                  {items.map((v) => (
                    <div key={v.id} className="swiper-slide">
                      <MinimalPlayer src={v.src} />
                    </div>
                  ))}
                </div>
                <div className="portfolio__arry-prev"><i className="bi bi-arrow-left"></i></div>
                <div className="portfolio__arry-next"><i className="bi bi-arrow-right"></i></div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

import { useState } from "react";

function MinimalPlayer({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const height = "clamp(420px, 70vh, 720px)";
  return (
    <div
      className="no-download rounded-4 overflow-hidden position-relative"
      onContextMenu={(e) => e.preventDefault()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ReactPlayer
        src={src}
        controls={false}
        width="100%"
        height={height}
        pip={false}
        playing={playing}
        disablePictureInPicture
        disableRemotePlayback
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: (!playing || hovered) ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.35)",
        }}
      >
        <button
          type="button"
          aria-label={playing ? "Pause video" : "Play video"}
          onClick={() => setPlaying(!playing)}
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.6)",
            background: "rgba(0,0,0,0.65)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
            backdropFilter: "blur(2px)",
          }}
        >
          {playing ? (
            <Pause size={36} strokeWidth={2} color="#fff" />
          ) : (
            <Play size={36} strokeWidth={2} color="#fff" />
          )}
        </button>
      </div>
    </div>
  );
}
