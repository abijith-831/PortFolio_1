import './App.css';
import Navbar from '../src/Components/Navbar'
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import { Contact } from './Components/Contact';
import Footer from './Components/Footer';

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
