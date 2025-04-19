import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'


function BasicExample() {

    const [activeLink , setActiveLink] = useState('home')
    const [scrolled , setScrolled] =useState(false)

    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll',onScroll)

        return ()=> window.removeEventListener('scroll',onScroll)
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value)
    }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled':''}>
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home' ? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills' ? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects' ? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/abhijith-p-42747335a/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/abijith-831" target='_blank'><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/abhi_jith_p831?igsh=ZnV5NzM5M3huajdm" target='_blank'> <img src={navIcon3} alt="" /></a>
            </div>
            <button ><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;