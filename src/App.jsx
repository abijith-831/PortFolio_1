import './App.css';
import { useState, useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import Navbar from '../src/Components/Navbar';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import { Contact } from './Components/Contact';
import Footer from './Components/Footer';

const splashMessages = ["Hello", "नमस्ते", "നമസ്കാരം", "வணக்கம்", 'Hi...'];

function App() {
  const [step, setStep] = useState(0);
  const [showMain, setShowMain] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    if (step < splashMessages.length) {
      const fadeOutTimer = setTimeout(() => {
        setFadeIn(false);
      }, 300);

      const changeTextTimer = setTimeout(() => {
        setStep(step + 1);
        setFadeIn(true);
      }, 600);

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(changeTextTimer);
      };
    } else {
      const delayBeforeMain = setTimeout(() => setShowMain(true), 500);
      return () => clearTimeout(delayBeforeMain);
    }
  }, [step]);

  if (!showMain) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '6rem',
        fontWeight: 'bold',
        backgroundColor: '#012020',
        color: '#66ff00'
      }}>
        <div
          style={{
            opacity: fadeIn ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          {step < splashMessages.length ? splashMessages[step] : ''}
        </div>
      </div>
    );
  }

  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} autoHideDuration={3000}>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </SnackbarProvider>
  );
}

export default App;