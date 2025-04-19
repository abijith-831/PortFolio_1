import React from 'react'
import { Container , Row , Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import js from '../assets/logos/javascript-39395.png'
import nodejs from '../assets/logos/nodejs.png'
import react from '../assets/logos/react.svg'
import express from '../assets/logos/express.png'
import htmlcss from '../assets/logos/htmlcss.png'
import mongo from '../assets/logos/mongodb-icon.svg'
import postgres from '../assets/logos/postgresql-icon.svg'
import redux from '../assets/logos/redux.png'
import typescript from '../assets/logos/typescript-svgrepo-com.svg'
import aws from '../assets/logos/aws.png'
import tailwind from '../assets/logos/Tailwind CSS.png'


const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };


  return (
        <section style={{ background: 'linear-gradient(to top, #045455, #043a3b)' }}>
            <Container className='skills' id='skills'>
                <Row>
                    <Col >
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <br />
                            <Carousel responsive={responsive} infinite={true}   autoPlay={true} transitionDuration={800} autoPlaySpeed={1300}  className='skill-slider'>
                                <div className='item'>
                                    <img src={js} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className='item'>
                                    <img src={nodejs} alt="Image" />
                                    <h5>Node JS</h5>
                                </div>
                                <div className='item'>
                                    <img src={react} alt="Image" />
                                    <h5>React JS</h5>
                                </div>
                                <div className='item'>
                                    <img src={express} alt="Image" />
                                    <h5>Express </h5>
                                </div>
                                <div className='item'>
                                    <img src={htmlcss} alt="Image" />
                                    <h5>HTML & CSS</h5>
                                </div>
                                <div className='item'>
                                    <img src={mongo} alt="Image" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className='item'>
                                    <img src={postgres} alt="Image" />
                                    <h5>PostgreSQL</h5>
                                </div>
                                <div className='item'>
                                    <img src={redux} alt="Image" />
                                    <h5>Redux</h5>
                                </div>
                                <div className='item'>
                                    <img src={typescript} alt="Image" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className='item'>
                                    <img src={aws} alt="Image" />
                                    <h5>AWS</h5>
                                </div>
                                <div className='item'>
                                    <img src={tailwind} alt="Image" />
                                    <h5> Tailwind CSS</h5>
                                </div>

                            </Carousel>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
  )
}

export default Skills
