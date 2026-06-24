import { CV_PATH, personal, stats, skills, VMR_LAB } from "../data/resume";
import { useScholarMetrics } from "../hooks/useScholarMetrics";
import ProfilePhoto from "./ProfilePhoto";
import Reveal from "./Reveal";

const stackPreview = [
  ...skills["AI & Machine Learning"].slice(0, 4),
  "PyTorch",
  "OpenCV",
  "AWS",
];

function formatMetric(value: number) {
  return value.toLocaleString("en-US");
}

export default function Hero() {
  const { metrics, loading, scholarUrl } = useScholarMetrics();

  const heroStats = [
    {
      label: "Citations",
      value: formatMetric(metrics.citations),
      suffix: "",
      href: scholarUrl,
      pulse: loading,
      title: "Google Scholar citations",
    },
    {
      label: "h-index",
      value: formatMetric(metrics.hIndex),
      suffix: "",
      href: scholarUrl,
      pulse: loading,
      title: "Google Scholar h-index",
    },
    ...stats.map((stat) => ({
      ...stat,
      href: undefined,
      pulse: false,
      title:
        stat.label === "AWS Cloud" ? "AWS Certified Cloud Practitioner" : undefined,
    })),
  ];

  return (
    <section className="mx-auto max-w-site px-6 pb-16 pt-10 sm:pt-14 lg:px-8 lg:pb-20 lg:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <Reveal className="order-1 mx-auto w-full max-w-[17rem] sm:max-w-xs lg:order-2 lg:col-start-2 lg:row-start-1 lg:mx-0 lg:max-w-sm">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-accent/10 blur-2xl" />
            <ProfilePhoto className="relative aspect-[4/5] w-full shadow-[0_0_40px_rgba(34,211,238,0.08)] ring-1 ring-accent/20" />
          </div>
          <p className="mt-4 text-center font-mono text-xs text-dim">{personal.name}</p>
          <p className="mt-0.5 text-center font-mono text-[10px] text-muted">{personal.title}</p>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-center font-mono text-[10px] text-dim transition-colors hover:text-accent"
          >
            LinkedIn →
          </a>
        </Reveal>

        <Reveal delay={80} className="order-2 lg:order-1 lg:col-start-1 lg:row-start-1">
          <div>
            <a
              href={VMR_LAB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 transition-colors hover:border-accent/40"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-muted hover:text-accent">
                PhD · VMR Lab · University of Dayton
              </span>
            </a>

            <h1 className="mt-6 max-w-4xl text-[2rem] font-bold leading-[1.12] tracking-tight text-white sm:mt-8 sm:text-5xl lg:text-6xl">
              {personal.headline.split("see, understand, and remember").map((part, i) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <span className="text-accent">see, understand, and remember</span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
              {personal.tagline}
            </p>

            <div className="mt-7 flex flex-wrap gap-2 sm:mt-8">
              {stackPreview.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-elevated px-2.5 py-1 font-mono text-xs text-dim"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <a href="#research" className="btn-primary">
                View research
              </a>
              <a href={CV_PATH} download className="btn-secondary">
                Download CV
              </a>
              <a href="#publications" className="btn-secondary">
                Publications
              </a>
              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-chip !px-4 !py-2.5 !text-sm"
              >
                GitHub →
              </a>
              <a
                href={personal.links.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="link-chip !px-4 !py-2.5 !text-sm"
              >
                Scholar →
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={180}>
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:mt-14 sm:grid-cols-3 lg:grid-cols-6">
          {heroStats.map((stat) => {
            const content = (
              <>
                <dt className="font-mono text-[10px] text-dim sm:text-xs">{stat.label}</dt>
                <dd className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                  {stat.value}
                  <span className="text-accent">{stat.suffix}</span>
                  {stat.pulse ? (
                    <span className="ml-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent/60 align-middle" />
                  ) : null}
                </dd>
              </>
            );
            const className = "bg-surface px-3 py-3.5 transition-colors sm:px-5 sm:py-4";

            return stat.href ? (
              <a
                key={stat.label}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} hover:bg-elevated`}
                title={stat.title ?? "View on Google Scholar"}
              >
                {content}
              </a>
            ) : (
              <div key={stat.label} className={className} title={stat.title}>
                {content}
              </div>
            );
          })}
        </dl>
      </Reveal>
    </section>
  );
}
