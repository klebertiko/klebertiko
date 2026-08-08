import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { NAV } from './components/nav';

export default function App() {
  const [active, setActive] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const positions = NAV.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      positions.sort((a, b) => a.top - b.top);
      setActive(positions[0].id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
