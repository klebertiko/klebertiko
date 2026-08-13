import { useEffect, useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { NAV } from './components/nav';

const SECTION_IDS = NAV.map(({ id }) => id);

export default function App() {
  const [active, setActive] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRefs = useRef<Map<string, Element>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            sectionRefs.current.set(id, entry.target);
            setActive(id);
          }
        }
      },
      {
        rootMargin: '120px 0px -80% 0px',
        threshold: 0.1,
      }
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const targetScrollY = Math.max(0, el.getBoundingClientRect().top + window.scrollY - 120);
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: 'var(--font-mono)' }} className="min-h-screen w-full">
      <MobileNav active={active} scrollTo={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="mx-auto flex max-w-6xl gap-8 px-6 lg:px-12">
        <Sidebar active={active} scrollTo={scrollTo} />

        <main className="flex-1 py-16 lg:py-32">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}
