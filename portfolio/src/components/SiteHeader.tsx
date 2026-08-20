import { NAV } from './nav';

type SiteHeaderProps = {
  active: string;
  scrollTo: (id: string) => void;
  menuOpen: boolean;
  setMenuOpen: (fn: (v: boolean) => boolean) => void;
};

export default function SiteHeader({ active, scrollTo, menuOpen, setMenuOpen }: SiteHeaderProps) {
  return (
    <header
      className="sticky top-0 z-[300] border-b border-[var(--color-border)] bg-[var(--color-bg)]/92 backdrop-blur-sm"
      style={{ minHeight: 'var(--banner-height)' }}
    >
      <div className="mx-auto flex max-w-[var(--content-width)] items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => scrollTo('about')}
          className="shrink-0 font-mono text-sm text-[var(--color-text)] hover:text-[var(--color-accent)]"
        >
          klebertiko<span className="text-[var(--color-accent)]">_</span>
        </button>

        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-1 md:flex" aria-label="Seções">
          <span className="mr-2 hidden font-mono text-[10px] text-[var(--color-text-muted)] lg:inline">
            $ ls
          </span>
          {NAV.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => scrollTo(n.id)}
              className={`max-w-full truncate rounded px-2 py-1 font-mono text-[11px] whitespace-nowrap ${
                active === n.id
                  ? 'text-[var(--color-accent)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
              }`}
            >
              {active === n.id ? `[${n.cmd}]` : n.cmd}
            </button>
          ))}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded px-2 py-1 font-mono text-xs text-[var(--color-text-dim)] md:hidden"
        >
          {menuOpen ? 'exit' : '$ menu'}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-[var(--color-border)] px-4 py-3 md:hidden"
          aria-label="Seções mobile"
        >
          <p className="mb-2 font-mono text-[10px] text-[var(--color-text-muted)]">$ ls ./sections</p>
          <ul className="space-y-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(n.id)}
                  className={`block w-full rounded px-2 py-2 text-left font-mono text-sm whitespace-nowrap ${
                    active === n.id ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-dim)]'
                  }`}
                >
                  {active === n.id ? `> ${n.cmd}` : n.cmd}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
