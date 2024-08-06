import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bootstrap from "../assets/img/bootstrap.png";
import tailwind from "../assets/img/tailwind.png";
import css from "../assets/img/css.png";
import expressjs from "../assets/img/expressjs.png";
import flask from "../assets/img/flask.png";
import html from "../assets/img/html.png";
import mongodb from "../assets/img/mongodb.png";
import node from "../assets/img/node.png";
import python from "../assets/img/python.png";
import react from "../assets/img/react.png";
import sql from "../assets/img/sql.png";
import vue from "../assets/img/vue.png";
import 'react-multi-carousel/lib/styles.css';

const skillsData = {
    frontend: [
      { name: 'HTML', level: 95, icon: html },
      { name: 'CSS', level: 95, icon: css },
      { name: 'React', level: 80, icon: react },
      { name: 'Vue', level: 70, icon: vue },
      { name: 'Bootstrap', level: 65, icon: bootstrap }
    ],
    backend: [
      { name: 'Tailwind', level: 60, icon: tailwind },
      { name: 'Node.js', level: 75, icon: node },
      { name: 'JavaScript', level: 65, icon: html },
      { name: 'Express.js', level: 60, icon: expressjs },
      { name: 'Flask', level: 60, icon: flask }
    ],
    database: [
      { name: 'SQL', level: 85, icon: sql },
      { name: 'MongoDB', level: 60, icon: mongodb },
      { name: 'pandas', level: 70, icon: html },
      { name: 'matplotlib', level: 70, icon: html },
      { name: 'scikit-learn', level: 70, icon: html }
    ],
    programmingLanguages: [
      { name: 'Python', level: 80, icon: python },
      { name: 'C', level: 95, icon: html },
      { name: 'C#', level: 70, icon: html },
      { name: 'Java', level: 95, icon: html },
      { name: 'Verilog', level: 75, icon: html }
    ]
  };

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col md={12}>
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>This section highlights my proficiency in a diverse range of web technologies and frameworks.</p>

              {/* Frontend and Backend Skills */}
              <div className="skill-category">
                <h3>Frontend & Backend</h3>
                <div className="skill-container">
                  <div className="skill-column">
                    {skillsData.frontend.map(skill => (
                      <div className="skill-bar" key={skill.name}>
                        <div className="skill-icon">
                          <img src={skill.icon} alt={`${skill.name} icon`} />
                        </div>
                        <div className="skill-content">
                          <h5>{skill.name}</h5>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: `${skill.level}%` }}
                              aria-valuenow={skill.level}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              {skill.level}%
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="skill-column">
                    {skillsData.backend.map(skill => (
                      <div className="skill-bar" key={skill.name}>
                        <div className="skill-icon">
                          <img src={skill.icon} alt={`${skill.name} icon`} />
                        </div>
                        <div className="skill-content">
                          <h5>{skill.name}</h5>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: `${skill.level}%` }}
                              aria-valuenow={skill.level}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              {skill.level}%
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Programming Languages and Database Skills */}
              <div className="skill-category">
                <h3>Programming Languages, Frameworks, & Databases</h3>
                <div className="skill-container">
                  <div className="skill-column">
                    {skillsData.programmingLanguages.map(skill => (
                      <div className="skill-bar" key={skill.name}>
                        <div className="skill-icon">
                          <img src={skill.icon} alt={`${skill.name} icon`} />
                        </div>
                        <div className="skill-content">
                          <h5>{skill.name}</h5>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: `${skill.level}%` }}
                              aria-valuenow={skill.level}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              {skill.level}%
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="skill-column">
                    {skillsData.database.map(skill => (
                      <div className="skill-bar" key={skill.name}>
                        <div className="skill-icon">
                          <img src={skill.icon} alt={`${skill.name} icon`} />
                        </div>
                        <div className="skill-content">
                          <h5>{skill.name}</h5>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: `${skill.level}%` }}
                              aria-valuenow={skill.level}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              {skill.level}%
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
