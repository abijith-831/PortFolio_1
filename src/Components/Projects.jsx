import React from 'react'
import { Container , Row , Col , Tab , Nav} from 'react-bootstrap';
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



const Projects = () => {

    const projects = [
        {
          title: "RushGames",
          description: "E-Commerce Website",
          imgUrl: projImg1,
        },
        {
          title: "User Management System",
          description: "Using React & Redux",
          imgUrl: projImg2,
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
        },
        {
          title: "Clash of Clans",
          description: "Clone using HTML & CSS",
          imgUrl: projImg5,
        },
        {
          title: "Netflix",
          description: "Clone using React",
          imgUrl: projImg6,
        },
        {
          title: "Bombay 99",
          description: "Clone using HTML & CSS",
          imgUrl: projImg7,
        },
        {
          title: "OLX",
          description: "Clone using React",
          imgUrl: projImg8,
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
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
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
