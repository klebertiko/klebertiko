import SectionPanel from './SectionPanel';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <SectionPanel id="experience" filename="./career.log" status="synced">
      <ol className="timeline">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className={`timeline-item${job.current ? ' timeline-item--current' : ''}`}
          >
            <span className="timeline-item__dot" aria-hidden />
            <div className="timeline-item__head">
              <span className="timeline-item__company">{job.company}</span>
              <span className="timeline-item__period">{job.period}</span>
            </div>
            <p className="timeline-item__role">{job.role}</p>
            <p className="timeline-item__loc">{job.location}</p>
            <ul className="timeline-item__points">
              {job.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </SectionPanel>
  );
}
