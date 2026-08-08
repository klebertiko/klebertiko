import { Github, Linkedin } from 'lucide-react';
import { userData } from '../data/portfolio';
import { NAV } from './nav';

export default function Sidebar({ active, scrollTo }: { active: string; scrollTo: (id: string) => void }) {
  return (
    <aside className="hidden lg:flex sticky top-0 h-screen w-[320px] shrink-0 flex-col justify-between py-16">
      <div>
        <div className="mb-1 text-xs text-[var(--color-accent)]">$ whoami</div>
        <h1 className="text-3xl font-bold text-[var(--color-text)]">{userData.handle}</h1>
        <p className="mt-2 text-sm text-[var(--color-text-dim)]">{userData.role}</p>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-text-dim)]">
          {userData.tagline}
        </p>

        <nav className="mt-16">
          <ul className="space-y-4">
            {NAV.map((n) => (
              <li key={n.id}>
                <button onClick={() => scrollTo(n.id)} className="group flex items-center gap-3 text-sm">
                  <span
                    className={`h-px transition-all ${
                      active === n.id
                        ? 'w-10 bg-[var(--color-accent)]'
                        : 'w-4 bg-[var(--color-border-hover)] group-hover:w-8 group-hover:bg-[var(--color-text-dim)]'
                    }`}
                  />
                  <span
                    className={`tracking-widest transition-colors ${
                      active === n.id
                        ? 'text-[var(--color-accent)]'
                        : 'text-[var(--color-text-dim)] group-hover:text-[var(--color-text)]'
                    }`}
                  >
                    {n.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex gap-5 text-[var(--color-text-dim)]">
        <a href={userData.social.github} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
          <Github size={20} />
        </a>
        <a href={userData.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
    </aside>
  );
}
