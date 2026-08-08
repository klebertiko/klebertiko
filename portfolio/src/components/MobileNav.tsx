import { Github, Linkedin, Menu, X } from 'lucide-react';
import { userData } from '../data/portfolio';
import { NAV } from './nav';

export default function MobileNav({
  active,
  scrollTo,
  menuOpen,
  setMenuOpen,
}: {
  active: string;
  scrollTo: (id: string) => void;
  menuOpen: boolean;
  setMenuOpen: (fn: (v: boolean) => boolean) => void;
}) {
  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 px-6 py-4 backdrop-blur lg:hidden">
        <div>
          <span className="text-sm font-bold text-[var(--color-text)]">{userData.handle}</span>
          <span className="ml-2 text-xs text-[var(--color-text-dim)]">{userData.role}</span>
        </div>
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
          className="text-[var(--color-text)]"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>
      {menuOpen && (
        <div className="sticky top-[57px] z-30 flex flex-col gap-1 border-b border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4 lg:hidden">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className={`py-2 text-left text-sm tracking-widest ${
                active === n.id ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-dim)]'
              }`}
            >
              {n.label}
            </button>
          ))}
          <div className="mt-2 flex gap-5 text-[var(--color-text-dim)]">
            <a href={userData.social.github} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
              <Github size={20} />
            </a>
            <a href={userData.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
