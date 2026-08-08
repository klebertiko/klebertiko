import SectionHeading from './SectionHeading';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="mb-32 scroll-mt-24">
      <SectionHeading index="02" title="stack.json" />
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((s) => (
          <div
            key={s.category}
            className="rounded border border-[var(--color-border)] bg-[var(--color-bg-raised)] p-5 transition-colors hover:border-[var(--color-border-hover)]"
          >
            <div className="mb-3 flex items-center gap-2 text-[var(--color-accent)]">
              <s.icon size={16} />
              <h3 className="text-xs font-semibold uppercase tracking-wider">{s.category}</h3>
            </div>
            <ul className="space-y-1 text-sm text-[var(--color-text-dim)]">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
