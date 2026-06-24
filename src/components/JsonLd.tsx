import { personal, GITHUB, VMR_LAB } from "../data/resume";

const SCHOLAR = personal.links.scholar;

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.title,
    description: personal.summary,
    email: personal.email,
    telephone: personal.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dayton",
      addressRegion: "OH",
      addressCountry: "US",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Dayton",
    },
    worksFor: {
      "@type": "Organization",
      name: "University of Dayton · Vision & Mixed Reality Lab",
      url: VMR_LAB,
    },
    sameAs: [personal.links.linkedin, GITHUB, SCHOLAR],
    image: personal.profile.localImage,
    knowsAbout: [
      "Computer Vision",
      "Generative AI",
      "Machine Learning",
      "Multi-modal Data Fusion",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
