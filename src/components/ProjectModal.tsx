import { useEffect } from "react";
import type { ResearchProject } from "../data/resume";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: ResearchProject | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-base/80 backdrop-blur-sm"
        aria-label="Close project details"
        onClick={onClose}
      />

      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-border bg-surface shadow-2xl">
        <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-border bg-surface/95 px-6 py-4 backdrop-blur">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
              {project.group}
            </p>
            <h3 id="project-modal-title" className="mt-1 text-xl font-semibold text-white">
              {project.label}
            </h3>
            <p className="mt-0.5 font-mono text-xs text-dim">{project.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg border border-border px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6 px-6 py-6">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md bg-accent/10 px-2 py-1 font-mono text-[10px] text-accent ring-1 ring-accent/15">
              {project.metric}
            </span>
            {project.details.status && (
              <span className="status-badge text-accent bg-accent/10 ring-accent/20">
                {project.details.status}
              </span>
            )}
          </div>

          <p className="text-sm leading-relaxed text-muted">{project.description}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-dim">Role</p>
              <p className="mt-1 text-sm text-zinc-200">{project.details.role}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-dim">Period</p>
              <p className="mt-1 text-sm text-zinc-200">{project.details.period}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-dim">Organization</p>
              <p className="mt-1 text-sm text-zinc-200">{project.details.org}</p>
            </div>
          </div>

          {project.details.publication && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-dim">Publication</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{project.details.publication}</p>
            </div>
          )}

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-dim">Key contributions</p>
            <ul className="mt-3 space-y-2">
              {project.details.highlights.map((item) => (
                <li key={item.slice(0, 48)} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-dim">Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border bg-elevated px-3 py-1.5 font-mono text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.details.links && project.details.links.length > 0 && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-dim">Links</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.details.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-chip !px-4 !py-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
