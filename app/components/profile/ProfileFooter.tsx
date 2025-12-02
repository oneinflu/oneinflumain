"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type ProfileData = {
  linksSection?: {
    terms_enabled?: boolean;
    privacy_enabled?: boolean;
    terms_text?: string;
    privacy_text?: string;
  };
};

export default function ProfileFooter({ data }: { data: ProfileData }) {
  const links = data.linksSection || {};
  const [modalOpen, setModalOpen] = useState<null | "terms" | "privacy">(null);
  const [mounted] = useState(typeof window !== "undefined");
  const termsText = (links.terms_text || "").trim();
  const privacyText = (links.privacy_text || "").trim();

  if (!links.terms_enabled && !links.privacy_enabled) return null;

  return (
    <footer style={{ background: "#0f1115", color: "#fff" }}>
      <div className="container" style={{ padding: "20px 0" }}>
        <div className="d-flex" style={{ justifyContent: "center", gap: 16 }}>
          {links.terms_enabled ? (
            <button type="button" className="btn btn-link p-0" style={{ color: "#fff" }} onClick={() => setModalOpen("terms")}>
              Terms & Conditions
            </button>
          ) : null}
          {links.privacy_enabled ? (
            <button type="button" className="btn btn-link p-0" style={{ color: "#fff" }} onClick={() => setModalOpen("privacy")}>
              Privacy Policy
            </button>
          ) : null}
        </div>
      </div>
      {(mounted && modalOpen) ? createPortal(
        <div style={{ position: "fixed", inset: 0, background: "rgba(10,12,16,0.75)", backdropFilter: "blur(2px)", zIndex: 10000 }} onClick={() => setModalOpen(null)}>
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "#0f1115",
            color: "#fff",
            maxWidth: "800px",
            width: "90%",
            maxHeight: "80vh",
            borderRadius: "16px",
            boxShadow: "0 24px 48px rgba(0,0,0,0.45)",
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h5 style={{ margin: 0 }}>{modalOpen === "terms" ? "Terms & Conditions" : "Privacy Policy"}</h5>
              <button type="button" onClick={() => setModalOpen(null)} style={{ background: "transparent", border: "none", color: "#fff", cursor: "pointer" }} aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <div style={{ padding: "16px 20px", overflow: "auto" }}>
              <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>{modalOpen === "terms" ? termsText : privacyText}</p>
            </div>
          </div>
        </div>, document.body
      ) : null}
    </footer>
  );
}
