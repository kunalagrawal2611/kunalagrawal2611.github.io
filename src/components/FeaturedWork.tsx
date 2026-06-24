import { featuredWork } from "../data/resume";
import Reveal from "./Reveal";

export default function FeaturedWork() {
  return (
    <section className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-site px-6 py-10 lg:px-8">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-widest text-dim">Featured work</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {featuredWork.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="tech-card group block transition-all hover:ring-1 hover:ring-accent/20"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-white transition-colors group-hover:text-accent">
                    {item.label}
                  </h3>
                  <span className="shrink-0 rounded-md bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent ring-1 ring-accent/15">
                    {item.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                <p className="mt-3 font-mono text-[10px] text-dim group-hover:text-accent">
                  {item.href.startsWith("http") ? "View on GitHub →" : "View in research →"}
                </p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
