import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ccapdev from "../assets/img/ccapdev.png";
import mobdeve from "../assets/img/mobdeve.png";
import empathy from "../assets/img/empathy.png";
import cssweng from "../assets/img/cssweng.png";
import hci2001 from "../assets/img/hci2001.png";
import sthciux from "../assets/img/sthciux.png";
import digimap from "../assets/img/digimap.png";
import csarch2 from "../assets/img/csarch2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects1 = [
    {
      title: "SWSI Web Portal",
      description: "An online platform to consolidate, streamline, and manage the interactions between SWSI and its customers.",
      imgUrl: cssweng,
      link: 'https://github.com/alessgomez/CSSWENG-Team4-WebApp.git'
    },
    {
      title: "DLSU Organization Hub",
      description: "A social media platform for DLSU Organizations. It makes use of handlebars.js as its templating engine, Node.js as its backend, and Mongodb as its database.",
      imgUrl: ccapdev,
      link: 'https://github.com/AndreiMarin15/dlsu-organization-hub?tab=readme-ov-file'
    },
    {
      title: "Planify",
      description: "A software application designed to facilitate enhanced time management and task organization. It leverages a local database to efficiently store and manage various aspects of users' tasks, and notes, among others. ",
      imgUrl: mobdeve,
      link: 'https://github.com/jaiiraaaaaa/MOBDEVE_Project'
    },
    {
      title: "Web Watcher",
      description: "A browser extension designed to monitor and nudge users towards healthier social media habits, with a focus on empathy and personalized intervention.",
      imgUrl: empathy,
      link: 'https://github.com/fdoble12/EMPATHY_MCO.git'
    },
  ];

  const projects2 = [
    {
      title: "Redesigned McDonald's Kiosk",
      description: "McDonald’s kiosk's ergonomic constraints and navigational complexities are addressed by exploring different layouts that use a more efficient placement of buttons.",
      imgUrl: hci2001,
      link: 'https://github.com/giogerardino/HCI2001-COIN-Project.git'
    },
    {
      title: "Redesigned DLSU Enrollment System",
      description: "A proposed redesigned DLSU Enrollment System prototype that integrates the course offerings in MLS, the enrollment process in Animo.Sys, and the ability to visualize one’s weekly schedule, all in one application.",
      imgUrl: sthciux,
      link: 'https://www.figma.com/proto/dnbrof96q2GI1IutfIIz4A?node-id=0-1&t=sIr8PWKQqvMS2ANr-6'
    },
  ];

  const projects3 = [
    {
      title: "Image Colorization App",
      description: "A simple web app that colorizes black-and-white images",
      imgUrl: digimap,
      link: 'https://digimap-image-colorization-group6.streamlit.app/'
    },
    {
      title: "Cache Simulator (Full Associative/LRU)",
      description: "An application that simulates cache memory behavior based on specified parameters. It outputs key performance metrics including cache hits, cache misses, miss penalty, average memory access time, etc.",
      imgUrl: csarch2,
      link: 'https://csarch2-g3-cache-simulator-fa-lru.github.io/'
    },
  ];

  const handleProjectClick = (link) => {
    window.open(link, '_blank'); // Open the specified link in a new tab
  };

  return (
    <section className="project" id="projects">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2>Projects</h2>
              <p>This section features a collection of projects demonstrating my utilization of the aforementioned web technologies and frameworks.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first" style={{ cursor: 'pointer' }}>Web and Mobile Applications</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" style={{ cursor: 'pointer' }}>UI / UX Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" style={{ cursor: 'pointer' }}>Simulation Projects</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                  <Row className="justify-content-center">
                    {projects1.map((project, index) => (
                      <Col key={index} xs={12} sm={6} md={6} style={{ marginBottom: '20px' }}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', // Center vertically
                            alignItems: 'center', // Center horizontally
                            height: '350px', // Set a fixed height for the wrapping div
                          }}
                        >
                          <ProjectCard
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                            link={project.link}
                            onClick={() => handleProjectClick(project.link)}
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  <Row className="justify-content-center">
                    {projects2.map((project, index) => (
                      <Col key={index} xs={12} sm={6} md={6} style={{ marginBottom: '20px' }}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', // Center vertically
                            alignItems: 'center', // Center horizontally
                            height: '350px', // Set a fixed height for the wrapping div
                          }}
                        >
                          <ProjectCard
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                            link={project.link}
                            onClick={() => handleProjectClick(project.link)}
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                  <Row className="justify-content-center">
                    {projects3.map((project, index) => (
                      <Col key={index} xs={12} sm={6} md={6} style={{ marginBottom: '20px' }}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', // Center vertically
                            alignItems: 'center', // Center horizontally
                            height: '350px', // Set a fixed height for the wrapping div
                          }}
                        >
                          <ProjectCard
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                            link={project.link}
                            onClick={() => handleProjectClick(project.link)}
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          )}
        </TrackVisibility>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  );
};

<style>
  
</style>