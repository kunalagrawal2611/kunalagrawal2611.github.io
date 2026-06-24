import { useState } from "react";
import { certificationsFeatured, certificationsMore, education, skills } from "../data/resume";
import Reveal from "./Reveal";

export default function Stack() {
  const [showAllCerts, setShowAllCerts] = useState(false);

  return (
    <section id="stack" className="border-t border-border bg-surface/40 scroll-mt-20">
      <div className="mx-auto max-w-site px-6 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <p className="section-label">04 — Stack</p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Tools, frameworks & education
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-widest text-dim">
              Technical skills
            </h3>
            <div className="mt-6 space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="font-mono text-xs text-accent">{category}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-lg border border-border bg-elevated px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/30 hover:text-zinc-200 ${
                          item.startsWith("Python (") ? "max-w-full" : ""
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-10 font-mono text-xs uppercase tracking-widest text-dim">
              Certifications
            </h3>
            <ul className="mt-4 space-y-2.5">
              {certificationsFeatured.map((cert) => (
                <li key={cert} className="flex items-start gap-2.5 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {cert}
                </li>
              ))}
              {showAllCerts &&
                certificationsMore.map((cert) => (
                  <li key={cert} className="flex items-start gap-2.5 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {cert}
                  </li>
                ))}
            </ul>
            {certificationsMore.length > 0 && (
              <button
                type="button"
                onClick={() => setShowAllCerts((v) => !v)}
                className="mt-3 font-mono text-xs text-accent transition-colors hover:text-white"
              >
                {showAllCerts
                  ? "Show fewer certifications"
                  : `View all ${certificationsFeatured.length + certificationsMore.length} certifications`}
              </button>
            )}
          </Reveal>

          <Reveal delay={80}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-dim">Education</h3>
            <div className="mt-6 space-y-4">
              {education.map((edu) => (
                <div key={edu.degree} className="tech-card">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-medium leading-snug text-white">{edu.degree}</h4>
                    <span className="shrink-0 rounded-md bg-accent/10 px-2 py-0.5 font-mono text-xs text-accent ring-1 ring-accent/15">
                      GPA {edu.gpa}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted">{edu.school}</p>
                  <p className="mt-1 font-mono text-xs text-dim">{edu.period}</p>
                  {edu.focus && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">{edu.focus}</p>
                  )}
                  {edu.award && (
                    <p className="mt-2 font-mono text-xs text-accent/80">{edu.award}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
