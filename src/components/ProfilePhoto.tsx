import { useState } from "react";
import { personal } from "../data/resume";

export default function ProfilePhoto({ className = "" }: { className?: string }) {
  const { linkedinUsername, localImage } = personal.profile;
  const linkedinSrc = `https://unavatar.io/linkedin/${linkedinUsername}`;

  const [src, setSrc] = useState(localImage);
  const [showInitials, setShowInitials] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const initials = personal.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  if (showInitials) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl border border-border bg-elevated ${className}`}
      >
        <span className="font-mono text-4xl font-medium text-accent">{initials}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-elevated" aria-hidden />}
      <img
        src={src}
        alt={personal.name}
        width={800}
        height={1048}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (src === localImage) {
            setSrc(linkedinSrc);
            return;
          }
          setShowInitials(true);
        }}
        className={`h-full w-full rounded-2xl border border-border object-cover object-top transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
