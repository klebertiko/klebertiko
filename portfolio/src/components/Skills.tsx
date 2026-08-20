import SectionPanel from './SectionPanel';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <SectionPanel id="skills" filename="./stack.json" status="indexed">
      <div>
        {skills.map((s) => (
          <div key={s.category} className="skill-block">
            <h3 className="skill-block__title">
              <s.icon size={14} className="text-[var(--color-accent)]" aria-hidden />
              {s.category}
            </h3>
            <ul className="skill-list">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionPanel>
  );
}
