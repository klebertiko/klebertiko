import { userData } from '../data/portfolio';
import CipherLock from './CipherLock';

export default function Hero() {
  return (
    <header className="pb-8 sm:pb-12">
      <div data-cipher-skip>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
          {userData.location} · {userData.employer.company}
        </p>
        <h1 className="mt-3 max-w-[18ch] font-sans text-[clamp(2rem,6vw,3.25rem)] font-semibold leading-[1.05] tracking-tight text-[var(--color-text)]">
          {userData.name}
        </h1>
        <p className="mt-2 font-mono text-sm text-[var(--color-accent)]">{userData.role}</p>
        <p className="mt-1 font-mono text-xs text-[var(--color-text-dim)]">{userData.roleExtended}</p>
        <p className="cipher-hint mt-4 font-mono text-xs text-[var(--color-text-muted)]">
          Toque numa seção para descriptografar
        </p>
      </div>
      <CipherLock className="mt-6">
        <p className="max-w-[55ch] font-sans text-base leading-relaxed text-[var(--color-text-dim)]">
          {userData.tagline}
        </p>
        <p className="prompt-line mt-8">
          <span className="prompt-line__user">kleber@soc</span>
          <span className="prompt-line__cmd">:~$ link --list</span>
        </p>
        <nav className="link-row mt-3" aria-label="Links externos">
          <a href={userData.social.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>
          <a href={userData.social.github} target="_blank" rel="noreferrer">
            github
          </a>
          <a href={userData.social.medium} target="_blank" rel="noreferrer">
            medium
          </a>
          <a href={userData.social.email}>email</a>
        </nav>
      </CipherLock>
    </header>
  );
}
