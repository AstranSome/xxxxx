"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type AmbientVideoProps = {
  src: string;
  className?: string;
  overlayClassName?: string;
  "aria-label"?: string;
};

export function AmbientVideo({
  src,
  className,
  overlayClassName,
  "aria-label": ariaLabel,
}: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      video.pause();
      return;
    }

    video.play().catch(() => {});
  }, []);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-label={ariaLabel}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {overlayClassName && <div className={cn("absolute inset-0", overlayClassName)} aria-hidden />}
    </div>
  );
}
