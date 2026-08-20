import { useEffect, useState, type MouseEvent, type ReactNode } from 'react';

export function useCoarsePointer() {
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)');
    const sync = () => setCoarse(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return coarse;
}

export function useCipherSection() {
  const coarse = useCoarsePointer();
  const [open, setOpen] = useState(false);

  const unlock = () => {
    setOpen(true);
    document.body.classList.add('cipher-taught');
  };

  const toggle = (event?: MouseEvent) => {
    event?.stopPropagation();
    setOpen((value) => !value);
    document.body.classList.add('cipher-taught');
  };

  const onLockedClick = (event: MouseEvent) => {
    if (!coarse || open) return;
    if ((event.target as HTMLElement).closest('a, button')) return;
    unlock();
  };

  return { coarse, open, unlocked: coarse && open, onLockedClick, toggle };
}

type CipherLockProps = {
  children: ReactNode;
  className?: string;
};

export default function CipherLock({ children, className = '' }: CipherLockProps) {
  const { coarse, open, unlocked, onLockedClick, toggle } = useCipherSection();

  if (!coarse) return <div className={className}>{children}</div>;

  return (
    <div
      className={className}
      data-cipher-unlocked={unlocked ? '' : undefined}
      onClick={onLockedClick}
    >
      <button type="button" className="cipher-toggle" onClick={toggle}>
        {open ? 'decrypted — tap to lock' : 'tap to decrypt'}
      </button>
      {children}
    </div>
  );
}
