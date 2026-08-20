import SectionPanel from './SectionPanel';
import { projects } from '../data/portfolio';

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const archive = projects.filter((p) => !p.featured);

  return (
    <SectionPanel id="projects" filename="./ops/case-files/" status="active">
      <ul className="case-list">
        {featured.map((p) => (
          <li key={p.title} className="case-item">
            <a href={p.link} target="_blank" rel="noreferrer">
              <div className="case-item__top">
                <span className="case-item__title">{p.title}</span>
                <span className="case-item__tag">deployed</span>
              </div>
              <p className="case-item__desc">{p.desc}</p>
              <div className="case-item__tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-8 mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
        ./archive/
      </p>
      <ul className="case-list border-t border-[var(--color-border)]">
        {archive.map((p) => (
          <li key={p.title} className="case-item">
            <a href={p.link} target="_blank" rel="noreferrer">
              <div className="case-item__top">
                <span className="case-item__title">{p.slug}</span>
                <span className="case-item__tag">repo</span>
              </div>
              <p className="case-item__desc">{p.desc}</p>
            </a>
          </li>
        ))}
      </ul>
    </SectionPanel>
  );
}
