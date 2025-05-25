import React from 'react'
import { Container , Row , Col , Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from "../assets/projects/rushgames.png";
import projImg2 from "../assets/projects/ums-redux.png";
import projImg3 from "../assets/projects/ums-nodejs.png";
import projImg4 from "../assets/projects/mercelys.png";
import projImg5 from "../assets/projects/coc.png";
import projImg6 from "../assets/projects/netflix-clone.png";
import projImg7 from "../assets/projects/bombay-99.png";
import projImg8 from "../assets/projects/olx-clone.png";
import { motion } from 'framer-motion'



const Projects = () => {

    const projects = [
        {
          title: "RushGames",
          description: "E-Commerce Website",
          imgUrl: projImg1,
          url:'https://rushgamez.online/'
        },
        {
          title: "User Management System",
          description: "Using React & Redux",
          imgUrl: projImg2,
          url:'https://reactumsclient.vercel.app'
        },
        {
          title: "User Management System",
          description: "Using NodeJS & ExpressJS",
          imgUrl: projImg3,
        },
        {
          title: "Mercely's",
          description: "Clone using HTML/CSS & Bootstrap",
          imgUrl: projImg4,
          url:'https://mercelys-abijith-831s-projects.vercel.app/'
        },
        {
          title: "Clash of Clans",
          description: "Clone using HTML & CSS (Not Responsive)",
          imgUrl: projImg5,
          url:'https://abijith-831.github.io/Clash_of_clans/'
        },
        {
          title: "Netflix",
          description: "Clone using React",
          imgUrl: projImg6,
          url:'https://netflix-clone-two-beta-62.vercel.app/'
        },
        {
          title: "Bombay 99",
          description: "Clone using HTML & CSS",
          imgUrl: projImg7,
          url:'https://bombay-99-abijith-831s-projects.vercel.app/'
        },
        {
          title: "OLX",
          description: "Clone using React",
          imgUrl: projImg8,
          url:'https://olx-clone-drab-nu.vercel.app/'
        },
      ];

  return (
    <section className='project' id='projects' style={{ background: 'linear-gradient(to top, #036444, #045455 )' }}>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <br />
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">

                  <Tab.Content id="slideInUp" className={ "animate__animated animate__slideInUp"}>
                    <Tab.Pane eventKey="first">
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    <Row>
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </motion.div>


                      
                    </Tab.Pane>


                  </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp2} alt=""  className='background-image-right'/>
    </section>
  )
}

export default Projects
