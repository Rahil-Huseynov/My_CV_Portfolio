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
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'J')||(e.ctrlKey && e.key === 'p')||(e.ctrlKey && e.key === 's')) {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Info />
      <Skills />
      <Education />
      <Diploma />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
