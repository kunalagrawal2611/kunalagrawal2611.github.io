import { useMemo, useState } from "react";
import { publications } from "../data/resume";
import Reveal from "./Reveal";

type Paper = (typeof publications.published)[number];
type Filter = "all" | "published" | "under-review" | "to-appear";

const statusStyle: Record<string, string> = {
  Published: "text-emerald-400 bg-emerald-400/10 ring-emerald-400/20",
  "Under Review": "text-amber-400 bg-amber-400/10 ring-amber-400/20",
  "To Appear": "text-accent bg-accent/10 ring-accent/20",
};

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "published", label: "Published" },
  { id: "under-review", label: "Under review" },
  { id: "to-appear", label: "To appear" },
];

const INITIAL_VISIBLE = 4;

function PaperCard({ papers }: { papers: Paper[] }) {
  if (papers.length === 0) {
    return <p className="font-mono text-sm text-dim">No papers in this filter.</p>;
  }

  return (
    <div className="space-y-3">
      {papers.map((paper) => (
        <article key={paper.title} className="tech-card group">
          <div className="flex items-start gap-3">
            <h3 className="min-w-0 flex-1 text-sm font-medium leading-snug text-zinc-100 transition-colors group-hover:text-white">
              {paper.title}
            </h3>
            <span className={`status-badge ${statusStyle[paper.status]}`}>{paper.status}</span>
          </div>
          <p className="mt-2 font-mono text-xs text-dim">{paper.authors}</p>
          <p className="mt-1 text-xs text-muted">{paper.venue}</p>
          {paper.links.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {paper.links.map((link) => (
                <a
                  key={`${paper.title}-${link.label}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-chip"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

export default function Publications() {
  const [filter, setFilter] = useState<Filter>("all");
  const [showAll, setShowAll] = useState(false);

  const allPapers = useMemo(
    () => [...publications.published, ...publications.underReview],
    []
  );

  const filtered = useMemo(() => {
    switch (filter) {
      case "published":
        return publications.published;
      case "under-review":
        return publications.underReview.filter((p) => p.status === "Under Review");
      case "to-appear":
        return publications.underReview.filter((p) => p.status === "To Appear");
      default:
        return allPapers;
    }
  }, [allPapers, filter]);

  const visiblePapers = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hasMore = filtered.length > INITIAL_VISIBLE;

  return (
    <section id="publications" className="border-t border-border bg-surface/40 scroll-mt-20">
      <div className="mx-auto max-w-site px-6 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <p className="section-label">02 — Publications</p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Peer-reviewed research output
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            12 papers across ACM MM, IEEE TMM, Informatica, Machine Vision and Applications,
            British Journal of Ophthalmology, SoICT, and CISS.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setFilter(item.id);
                  setShowAll(false);
                }}
                className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
                  filter === item.id
                    ? "bg-accent/15 text-accent ring-1 ring-accent/25"
                    : "border border-border text-muted hover:border-accent/30 hover:text-zinc-200"
                }`}
              >
                {item.label}
                <span className="ml-1.5 text-dim">
                  (
                  {item.id === "all"
                    ? allPapers.length
                    : item.id === "published"
                      ? publications.published.length
                      : item.id === "under-review"
                        ? publications.underReview.filter((p) => p.status === "Under Review").length
                        : publications.underReview.filter((p) => p.status === "To Appear").length}
                  )
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8">
            <PaperCard papers={visiblePapers} />
            {hasMore && (
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="mt-4 font-mono text-xs text-accent transition-colors hover:text-white"
              >
                {showAll
                  ? "Show fewer publications"
                  : `View all ${filtered.length} publications`}
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
