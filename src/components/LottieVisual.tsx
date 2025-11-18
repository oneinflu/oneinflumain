"use client";

import React, { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useReducedMotion } from "framer-motion";
import styles from "./carousel-section.module.css";

type LottieName = "team" | "expenses" | "billing";
type AnimationData = Record<string, unknown>;

type Props = {
  name: LottieName;
  playing: boolean;
  fallback: React.ReactNode;
};

export default function LottieVisual({ name, playing, fallback }: Props) {
  const reducedMotion = useReducedMotion();
  const [data, setData] = useState<AnimationData | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (reducedMotion) return; // respect reduced motion
    let cancelled = false;
    // Try loading animation JSON from public/animations/<name>.json
    fetch(`/animations/${name}.json`)
      .then(async (res): Promise<AnimationData> => {
        if (!res.ok) throw new Error("not found");
        const json = (await res.json()) as AnimationData;
        return json;
      })
      .then((json) => { if (!cancelled) setData(json); })
      .catch(() => {
        if (!cancelled) setData(null);
      });
    return () => {
      cancelled = true;
    };
  }, [name, reducedMotion]);

  useEffect(() => {
    if (!data) return;
    if (playing) lottieRef.current?.play();
    else lottieRef.current?.pause();
  }, [playing, data]);

  return (
    <div className={styles.visual} aria-hidden="true">
      {data ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={data}
          loop={!reducedMotion}
          autoplay={false}
          style={{ width: "100%", height: "100%" }}
          rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
        />
      ) : (
        fallback
      )}
    </div>
  );
}