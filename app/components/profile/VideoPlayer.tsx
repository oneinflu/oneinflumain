"use client";
import ReactPlayer from "react-player";

type Props = {
  src: string;
  height: string | number;
  className?: string;
};

export default function VideoPlayer({ src, height, className }: Props) {
  const wrapperClass = ["no-download", className].filter(Boolean).join(" ");
  return (
    <div className={wrapperClass} onContextMenu={(e) => e.preventDefault()}>
      <ReactPlayer
        src={src}
        controls
        width="100%"
        height={height}
        playsInline
        pip={false}
        playing={false}
        disablePictureInPicture
        disableRemotePlayback
      />
    </div>
  );
}
