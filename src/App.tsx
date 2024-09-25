import './App.css';
import Hello from './companents/Hello/Hello';
import Skills from './companents/Skills/Skills';
import Education from './companents/Education/Education';
import Portfolio from './companents/Portfolio/Portfolio';
import Contact from './companents/Contact/Contact';
import Footer from './companents/Footer/Footer';
import { useEffect } from 'react';


const App: React.FC = () => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'J')) {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Hello />
      <Skills />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
