import { useEffect, useState } from "react";

const SECTION_IDS = ["research", "publications", "experience", "stack", "contact"];

export function useActiveSection() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.15, 0.35] }
    );

    sections.forEach((section) => observer.observe(section!));
    return () => observer.disconnect();
  }, []);

  return active;
}
