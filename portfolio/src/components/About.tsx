import SectionPanel from './SectionPanel';
import { userData } from '../data/portfolio';

export default function About() {
  return (
    <SectionPanel id="about" filename="./about.md" status="decrypted">
      <p className="max-w-[65ch] font-sans text-base leading-relaxed text-[var(--color-text-dim)]">{userData.about}</p>
      <dl className="meta-grid">
        <div>
          <dt>atual</dt>
          <dd>
            {userData.employer.title} @ {userData.employer.company}
          </dd>
        </div>
        <div>
          <dt>local</dt>
          <dd>{userData.location}</dd>
        </div>
        <div>
          <dt>idiomas</dt>
          <dd>{userData.languages.join(' · ')}</dd>
        </div>
        <div>
          <dt>certificações</dt>
          <dd className="space-y-1">
            {userData.certifications.map((c) => (
              <p key={c} className="text-sm leading-relaxed text-[var(--color-text-dim)]">
                {c}
              </p>
            ))}
          </dd>
        </div>
      </dl>
    </SectionPanel>
  );
}
