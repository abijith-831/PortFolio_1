import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/github.svg'
import navIcon3 from "../assets/img/nav-icon3.svg";


const Footer = () => {
  return (
      <footer className="footer" style={{ borderTop: '1px solid white',paddingTop:'30px' }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h5 className='text-center text-sm-start' style={{color:'#00db92',paddingBottom:'20px'}}>Made with React</h5>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>© 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
