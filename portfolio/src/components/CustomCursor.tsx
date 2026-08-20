import { useEffect, useRef, useState } from 'react';

const HOVER_SELECTOR = 'a, button, [role="button"], input, textarea, label, select';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor');

    const lerp = reducedMotion ? 1 : 0.15;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dotRef.current?.style.setProperty(
        'transform',
        `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      );

      const under = document.elementFromPoint(e.clientX, e.clientY);
      setHovering(!!under?.closest(HOVER_SELECTOR));
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * lerp;
      ringRef.current?.style.setProperty(
        'transform',
        `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`
      );
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove('custom-cursor');
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className={`custom-cursor-dot${visible ? '' : ' custom-cursor-hidden'}${hovering ? ' custom-cursor-dot-hover' : ''}`}
      />
      <div
        ref={ringRef}
        aria-hidden
        className={`custom-cursor-ring${visible ? '' : ' custom-cursor-hidden'}${hovering ? ' custom-cursor-ring-hover' : ''}`}
      />
    </>
  );
}
