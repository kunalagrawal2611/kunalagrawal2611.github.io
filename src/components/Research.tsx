import { useMemo, useState } from "react";
import { researchAreas, type ResearchProject } from "../data/resume";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";

const groupOrder = [
  "Doctoral research",
  "Master's research",
  "Healthcare AI",
  "Published systems",
  "Industry",
  "Open source",
] as const;

const groupedProjects = groupOrder.map((group) => ({
  group,
  projects: researchAreas.filter((project) => project.group === group),
}));

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={`shrink-0 text-dim transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectCard({
  project,
  onSelect,
}: {
  project: ResearchProject;
  onSelect: (project: ResearchProject) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="tech-card group h-full w-full text-left transition-all hover:ring-1 hover:ring-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h4 className="text-lg font-semibold text-white transition-colors group-hover:text-accent">
            {project.label}
          </h4>
          <p className="mt-0.5 font-mono text-xs text-dim">{project.subtitle}</p>
        </div>
        <span className="shrink-0 rounded-md bg-accent/10 px-2 py-1 font-mono text-[10px] text-accent ring-1 ring-accent/15">
          {project.metric}
        </span>
      </div>
      <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-dim"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 3 && (
          <span className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-dim">
            +{project.stack.length - 3}
          </span>
        )}
      </div>
      <p className="mt-4 font-mono text-[10px] text-dim transition-colors group-hover:text-accent">
        View details →
      </p>
    </button>
  );
}

export default function Research() {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(groupOrder.map((group, index) => [group, index === 0]))
  );
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredGroups = useMemo(() => {
    if (!normalizedQuery) return groupedProjects;

    return groupedProjects
      .map(({ group, projects }) => ({
        group,
        projects: projects.filter((project) => {
          const haystack = [
            project.label,
            project.subtitle,
            project.description,
            project.group,
            project.metric,
            ...project.stack,
          ]
            .join(" ")
            .toLowerCase();
          return haystack.includes(normalizedQuery);
        }),
      }))
      .filter(({ projects }) => projects.length > 0);
  }, [normalizedQuery]);

  const expandAll = () => {
    setOpenGroups(Object.fromEntries(groupOrder.map((group) => [group, true])));
  };

  const collapseAll = () => {
    setOpenGroups(Object.fromEntries(groupOrder.map((group, index) => [group, index === 0])));
  };

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  const allExpanded = groupOrder.every((group) => openGroups[group]);

  return (
    <section id="research" className="border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-site px-6 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">01 — Research</p>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Research projects & systems
              </h2>
              <p className="mt-3 max-w-2xl text-muted">
                {researchAreas.length} projects across doctoral research, master&apos;s systems,
                clinical AI, published benchmarks, industry GenAI, and open-source software.
                Click any card for full details.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter projects…"
                aria-label="Filter projects"
                className="w-full rounded-lg border border-border bg-elevated px-3 py-2 font-mono text-xs text-zinc-100 outline-none placeholder:text-dim focus:border-accent/50 focus:ring-1 focus:ring-accent/30 sm:w-48"
              />
              <button
                type="button"
                onClick={allExpanded ? collapseAll : expandAll}
                className="btn-secondary !px-4 !py-2 font-mono text-xs"
              >
                {allExpanded ? "Collapse groups" : "Expand all"}
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 space-y-4">
          {filteredGroups.length === 0 ? (
            <p className="font-mono text-sm text-dim">No projects match &ldquo;{query}&rdquo;.</p>
          ) : (
            filteredGroups.map(({ group, projects }, groupIndex) => {
              const isOpen = normalizedQuery ? true : openGroups[group];

            return (
              <Reveal key={group} delay={groupIndex * 30}>
                <div className="overflow-hidden rounded-xl border border-border bg-surface/60">
                  <button
                    type="button"
                    onClick={() => toggleGroup(group)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-elevated/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/40"
                  >
                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-200">
                        {group}
                      </h3>
                      <p className="mt-1 font-mono text-[10px] text-dim">
                        {projects.length} project{projects.length === 1 ? "" : "s"}
                        {!isOpen ? " · click to expand" : ""}
                      </p>
                    </div>
                    <Chevron open={isOpen} />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-4 border-t border-border p-4 sm:grid-cols-2">
                        {projects.map((project) => (
                          <ProjectCard
                            key={project.id}
                            project={project}
                            onSelect={setSelectedProject}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })
          )}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
