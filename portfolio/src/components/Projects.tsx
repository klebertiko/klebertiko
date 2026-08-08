import { ExternalLink, Folder } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="mb-32 scroll-mt-24">
      <SectionHeading index="03" title="projects/" />
      <div className="space-y-4">
        {projects.filter((p) => p.featured).map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group block rounded border border-[var(--color-border)] bg-[var(--color-bg-raised)] p-5 transition-colors hover:border-[var(--color-accent)]"
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p.icon size={16} className="text-[var(--color-accent)]" />
                <h3 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                  {p.title}
                </h3>
              </div>
              <ExternalLink size={14} className="text-[var(--color-text-dim)]" />
            </div>
            <p className="mb-3 text-sm leading-relaxed text-[var(--color-text-dim)]">{p.desc}</p>
            <div className="flex flex-wrap gap-2 text-[11px] text-[var(--color-text-dim)]">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full border border-[var(--color-border)] px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <h4 className="mb-4 mt-12 text-xs uppercase tracking-widest text-[var(--color-text-dim)]">other/</h4>
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.filter((p) => !p.featured).map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-3 rounded border border-[var(--color-border)] p-4 transition-colors hover:border-[var(--color-border-hover)]"
          >
            <Folder size={16} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
            <div>
              <h5 className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                {p.title}
              </h5>
              <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-dim)]">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
