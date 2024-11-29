import './App.css';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import Info from './components/Info/Info';
import Diploma from './components/Diploma/Diploma';


const App: React.FC = () => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'J') || (e.ctrlKey && e.key === 'p') || (e.ctrlKey && e.key === 's')) {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
  }, []);
  
  useEffect(() => {
    let previousScrollPosition = window.scrollY;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentScrollPosition = window.scrollY;
          const isScrollingUp = currentScrollPosition < previousScrollPosition;

          if (entry.isIntersecting) {
            if (entry.target.classList.contains('always-visible')) {
              entry.target.classList.add('visible');
            } else if (!isScrollingUp) {
              entry.target.classList.add('visible');
            }
          } else {
            if (!entry.target.classList.contains('always-visible') && isScrollingUp) {
              entry.target.classList.remove('visible');
            }
          }

          previousScrollPosition = currentScrollPosition;
        });
      },
      {
        threshold: 0.5, 
      }
    );

    const sections = document.querySelectorAll<HTMLDivElement>('.content-section');

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  return (
    <>
      <div className="content-section">
        <Info />
      </div>
      <div className="content-section">
        <Skills />
      </div>
      <div className="content-section">
        <Education />
      </div>
      <div className="content-section">
        <Diploma />
      </div>
      <div className="content-section">
        <Portfolio />
      </div>
      <div className="content-section">
        <Contact />
      </div>
      <div className="content-section">
        <Footer />
      </div>
    </>
  );
};

export default App;
