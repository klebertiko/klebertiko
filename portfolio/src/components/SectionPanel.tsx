import type { ReactNode } from 'react';
import { useCipherSection } from './CipherLock';

type SectionPanelProps = {
  id: string;
  filename: string;
  status?: string;
  children: ReactNode;
  className?: string;
};

export default function SectionPanel({ id, filename, status, children, className = '' }: SectionPanelProps) {
  const { coarse, open, unlocked, onLockedClick, toggle } = useCipherSection();

  return (
    <section
      id={id}
      className={`section scroll-mt-28 ${className}`}
      data-cipher-unlocked={unlocked ? '' : undefined}
      onClick={onLockedClick}
    >
      <div className="section__head">
        <p className="section__path">{filename}</p>
        {coarse ? (
          <button type="button" className="section__status cipher-toggle" onClick={toggle}>
            {open ? 'decrypted' : 'tap to decrypt'}
          </button>
        ) : status ? (
          <span className="section__status">{status}</span>
        ) : null}
      </div>
      <div className="section__body">{children}</div>
    </section>
  );
}
