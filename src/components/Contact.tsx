import { CV_PATH, personal } from "../data/resume";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

const socialLinks = [
  { label: "LinkedIn", href: personal.links.linkedin },
  { label: "Google Scholar", href: personal.links.scholar },
  { label: "GitHub", href: personal.links.github },
];

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-site px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="section-label">05 — Contact</p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Let&apos;s build something together.
            </h2>
            <p className="mt-3 max-w-md leading-relaxed text-muted">
              Open to research collaborations, ML engineering roles, internships, and
              conversations about computer vision and generative AI.
            </p>

            <div className="mt-8 flex flex-col gap-2.5 font-mono text-sm">
              <a
                href={`mailto:${personal.email}`}
                className="w-fit rounded-sm text-accent transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                {personal.email}
              </a>
              <span className="text-dim">{personal.phone}</span>
              <span className="text-dim">{personal.location}</span>
            </div>

            <div className="mt-6">
              <a href={CV_PATH} download className="btn-secondary inline-flex font-mono text-xs">
                Download CV
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-chip !px-4 !py-2"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-dim">
            © {new Date().getFullYear()} {personal.name}
          </p>
          <p className="font-mono text-[10px] text-dim">
            PhD · Computer Vision · Generative AI
          </p>
        </div>
      </div>
    </footer>
  );
}
