import SectionPanel from './SectionPanel';
import { userData } from '../data/portfolio';

export default function Contact() {
  return (
    <SectionPanel id="contact" filename="./contact.sh" status="ready" className="min-h-[32vh]">
      <p className="prompt-line">
        <span className="prompt-line__user">$</span>
        <span className="prompt-line__cmd"> ./connect --help</span>
      </p>
      <p className="mt-4 max-w-[55ch] font-sans text-base leading-relaxed text-[var(--color-text-dim)]">
        Segurança de IA, arquitetura de agentes, SecDevOps ou red teaming — escolha o canal:
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={userData.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          exec connect.sh --linkedin
        </a>
        <a href={userData.social.email} className="btn-ghost">
          mail klebertiko@gmail.com
        </a>
      </div>
    </SectionPanel>
  );
}
