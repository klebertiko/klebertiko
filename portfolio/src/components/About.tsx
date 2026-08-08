import SectionHeading from './SectionHeading';
import { userData } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="mb-32 max-w-xl scroll-mt-24">
      <SectionHeading index="01" title="about.md" />
      <p className="leading-relaxed text-[var(--color-text-dim)]">{userData.about}</p>
    </section>
  );
}
