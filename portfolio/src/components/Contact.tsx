import SectionHeading from './SectionHeading';
import { userData } from '../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pb-16">
      <SectionHeading index="04" title="contact.sh" />
      <p className="mb-6 max-w-md text-sm leading-relaxed text-[var(--color-text-dim)]">
        Interessado em conversar sobre segurança de sistemas de IA? Chama no LinkedIn.
      </p>
      <a
        href={userData.social.linkedin}
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded border border-[var(--color-accent)] px-6 py-3 text-sm text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
      >
        ./connect --linkedin
      </a>
    </section>
  );
}
