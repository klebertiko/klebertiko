import type { ReactNode } from 'react';

type SectionPanelProps = {
  id: string;
  filename: string;
  status?: string;
  children: ReactNode;
  className?: string;
};

export default function SectionPanel({ id, filename, status, children, className = '' }: SectionPanelProps) {
  return (
    <section id={id} className={`section scroll-mt-28 ${className}`}>
      <div className="section__head">
        <p className="section__path">{filename}</p>
        {status ? <span className="section__status">{status}</span> : null}
      </div>
      <div className="section__body">{children}</div>
    </section>
  );
}
