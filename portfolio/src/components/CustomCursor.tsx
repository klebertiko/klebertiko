import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const IDLE_MS = 30_000;
const LENS_DESKTOP = 300;
const TOUCH_LIFT = 148;
const CIPHER = '0123456789ABCDEFΞΦΨΩΔЖБД#*+=/%';

type Glyph = {
  x: number;
  y: number;
  w: number;
  h: number;
  cipher: string;
  font: string;
};

function cipherChar(ch: string) {
  if (!/[\p{L}\p{N}]/u.test(ch)) return ch;
  return CIPHER[(ch.codePointAt(0) ?? 0) % CIPHER.length];
}

function collectGlyphs(): Glyph[] {
  const root = document.querySelector('.site-shell');
  if (!root) return [];

  const view = {
    left: -40,
    top: -40,
    right: window.innerWidth + 40,
    bottom: window.innerHeight + 40,
  };

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const value = node.nodeValue;
      if (!value) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (parent.closest('script, style, noscript, canvas, [data-cipher-skip]')) {
        return NodeFilter.FILTER_REJECT;
      }
      const rect = parent.getBoundingClientRect();
      if (rect.bottom < view.top || rect.top > view.bottom || rect.right < view.left || rect.left > view.right) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const glyphs: Glyph[] = [];
  const range = document.createRange();

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    const text = node.nodeValue ?? '';
    const parent = node.parentElement;
    if (!parent) continue;
    const style = getComputedStyle(parent);
    if (style.opacity === '0' || style.visibility === 'hidden') continue;
    const font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;

    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (ch === '\n' || ch === '\r') continue;
      range.setStart(node, i);
      range.setEnd(node, i + 1);
      const rect = range.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) continue;
      glyphs.push({
        x: rect.left,
        y: rect.top,
        w: rect.width,
        h: rect.height,
        cipher: cipherChar(ch),
        font,
      });
    }
  }

  return glyphs;
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const idleTimer = useRef(0);
  const mouse = useRef({ x: -9999, y: -9999, on: false });
  const glyphs = useRef<Glyph[]>([]);
  const dirty = useRef(true);
  const raf = useRef(0);
  const coarse = useRef(false);
  const lastScroll = useRef(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(!reducedMotion);
  }, []);

  useLayoutEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    coarse.current = window.matchMedia('(pointer: coarse)').matches;
    if (!coarse.current) document.body.classList.add('custom-cursor');

    const bg = getComputedStyle(document.documentElement).getPropertyValue('--color-bg').trim() || '#111';
    const ink = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim() || '#7dffc0';

    const lensRadius = () =>
      coarse.current ? Math.min(220, Math.max(150, window.innerWidth * 0.42)) : LENS_DESKTOP;

    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dirty.current = true;
    };

    const scheduleIdle = () => {
      window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => {
        mouse.current.on = false;
      }, IDLE_MS);
    };

    const openLens = (x: number, y: number) => {
      mouse.current = { x, y, on: true };
      scheduleIdle();
      document.body.classList.add('cipher-taught');
    };

    const onMove = (e: MouseEvent) => {
      if (coarse.current) return;
      openLens(e.clientX, e.clientY);
    };

    const onLeave = () => {
      if (coarse.current) return;
      mouse.current = { x: -9999, y: -9999, on: false };
      window.clearTimeout(idleTimer.current);
    };

    const lensFromTouch = (t: Touch) => {
      openLens(t.clientX, Math.max(28, t.clientY - TOUCH_LIFT));
    };

    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0] ?? e.changedTouches[0];
      if (t) lensFromTouch(t);
    };

    const markDirty = () => {
      dirty.current = true;
    };

    const onScroll = () => {
      const now = performance.now();
      if (coarse.current && now - lastScroll.current < 48) return;
      lastScroll.current = now;
      dirty.current = true;
    };

    const draw = () => {
      if (dirty.current) {
        glyphs.current = collectGlyphs();
        dirty.current = false;
      }

      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const { x: mx, y: my, on } = mouse.current;
      const r = lensRadius();
      const inner = r * 0.52;

      ctx.textBaseline = 'top';
      ctx.textAlign = 'left';

      for (const g of glyphs.current) {
        const cx = g.x + g.w / 2;
        const cy = g.y + g.h / 2;
        const dist = on ? Math.hypot(cx - mx, cy - my) : r + 1;

        if (dist <= inner) continue;

        const edge = dist >= r ? 1 : (dist - inner) / (r - inner);

        ctx.globalAlpha = edge;
        ctx.fillStyle = bg;
        ctx.fillRect(g.x - 0.5, g.y - 0.5, g.w + 1, g.h + 1);
        if (g.cipher !== ' ') {
          ctx.font = g.font;
          ctx.fillStyle = ink;
          ctx.globalAlpha = edge * 0.72;
          ctx.fillText(g.cipher, g.x, g.y);
        }
        ctx.globalAlpha = 1;
      }

      if (!coarse.current && mx > -1000 && my > -1000) {
        ctx.beginPath();
        ctx.arc(mx, my, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = ink;
        ctx.fill();
      }

      raf.current = requestAnimationFrame(draw);
    };

    sizeCanvas();
    glyphs.current = collectGlyphs();
    dirty.current = false;

    const onResize = () => sizeCanvas();

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    window.addEventListener('touchstart', onTouch, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('touchend', onTouch, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    const fontsReady = document.fonts?.ready?.then(markDirty);
    const observer = new MutationObserver(markDirty);
    const shell = document.querySelector('.site-shell');
    if (shell) observer.observe(shell, { subtree: true, childList: true, characterData: true });

    raf.current = requestAnimationFrame(draw);

    return () => {
      document.body.classList.remove('custom-cursor');
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('touchstart', onTouch);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('touchend', onTouch);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      window.clearTimeout(idleTimer.current);
      cancelAnimationFrame(raf.current);
      void fontsReady;
    };
  }, [enabled]);

  if (!enabled) return null;

  return <canvas ref={canvasRef} aria-hidden className="cipher-canvas" />;
}
