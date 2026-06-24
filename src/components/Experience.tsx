import { experience, teaching, leadership } from "../data/resume";
import Reveal from "./Reveal";

const typeBadge = {
  research: "text-violet-400 bg-violet-400/10 ring-violet-400/20",
  industry: "text-orange-400 bg-orange-400/10 ring-orange-400/20",
  operations: "text-zinc-400 bg-zinc-400/10 ring-zinc-400/20",
};

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-site px-6 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <p className="section-label">03 — Experience</p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Research, industry & leadership
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {experience.map((job, index) => (
            <Reveal key={`${job.role}-${job.period}`} delay={index * 40}>
              <article className="tech-card">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-medium text-white">{job.role}</h3>
                    <p className="mt-1 font-mono text-xs text-accent">{job.org}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                    <span
                      className={`rounded-md px-2 py-0.5 font-mono text-[10px] uppercase ring-1 ${typeBadge[job.type]}`}
                    >
                      {job.type}
                    </span>
                    <span className="font-mono text-xs text-dim">{job.period}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((h) => (
                    <li
                      key={h.slice(0, 50)}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-14 border-t border-border pt-12">
            <h3 className="font-mono text-xs uppercase tracking-widest text-dim">
              Teaching & mentorship
            </h3>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {teaching.map((role) => (
                <div key={role.role} className="tech-card h-full">
                  <h4 className="text-sm font-medium text-white">{role.role}</h4>
                  <p className="mt-1 font-mono text-xs text-dim">
                    {role.org} · {role.period}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {role.highlights.map((h) => (
                      <li key={h.slice(0, 40)} className="text-sm leading-relaxed text-muted">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 border-t border-border pt-12">
            <h3 className="font-mono text-xs uppercase tracking-widest text-dim">
              Community leadership
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {leadership.map((role) => (
                <div key={`${role.role}-${role.org}`} className="tech-card h-full">
                  <h4 className="text-sm font-medium text-white">{role.role}</h4>
                  <p className="mt-1 font-mono text-xs text-dim">
                    {role.org} · {role.period}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] text-dim">{role.location}</p>
                  <ul className="mt-3 space-y-1.5">
                    {role.highlights.map((h) => (
                      <li key={h.slice(0, 40)} className="text-sm leading-relaxed text-muted">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
