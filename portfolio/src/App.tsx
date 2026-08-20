import { useEffect, useState } from 'react';
import SiteHeader from './components/SiteHeader';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { NAV } from './components/nav';

const SECTION_IDS = NAV.map(({ id }) => id);
const SCROLL_OFFSET = 120;

function resolveActiveSection() {
  const scrollPos = window.scrollY + SCROLL_OFFSET;
  let current = SECTION_IDS[0];

  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollPos) current = id;
  }

  return current;
}

export default function App() {
  const [active, setActive] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateActive = () => setActive(resolveActiveSection());

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    setActive(id);
    const targetScrollY = Math.max(0, el.getBoundingClientRect().top + window.scrollY - 100);
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell min-h-screen w-full">
      <CustomCursor />
      <SiteHeader active={active} scrollTo={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="site-main">
        <Hero />
        <main>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer data-cipher-skip className="site-footer">
          klebertiko · ai security · {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
