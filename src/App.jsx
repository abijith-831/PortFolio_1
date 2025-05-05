import './App.css';
import { SnackbarProvider } from 'notistack';
import Navbar from '../src/Components/Navbar'
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import { Contact } from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <SnackbarProvider maxSnack={3}       anchorOrigin={{vertical: 'bottom',horizontal: 'center'}} autoHideDuration={3000} >
      <Navbar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </SnackbarProvider>
  )
}

export default App