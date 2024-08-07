import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arden from '../assets/img/arden.png'; // replace with your image paths
import spiralytics from '../assets/img/spiralytics.png';
import csg_cos from '../assets/img/csg_cos.png';
import csg_ss from '../assets/img/csg_ss.png';
import lscs from '../assets/img/lscs.png';

const experiencesData = [
    {
      title: "Arden Consult",
      position: "Freelance Web Developer",
      date: "June 2024 - Present",
      description: [
        "Designed and developed custom websites for clients, focusing on responsive design, performance, and accessibility",
        "Deployed websites: ardenconsult.org"
      ],
      imgUrl: arden
    },
    {
      title: "Spiralytics, Inc.",
      position: "Web Developer Intern",
      date: "June 2023 - August 2023",
      description: [
        "Actively contributed to enhancing the user experience and functionality of the company's website and performance-tracking sites"
      ],
      imgUrl: spiralytics
    },
    {
      title: "DLSU - Computer Studies Government",
      position: "Chief of Staff",
      date: "January 2023 - December 2023",
      description: [
        "Orchestrated initiatives that directly impacted a student body of over 3,000 individuals",
        "Maintained and enhanced communication platforms"
      ],
      imgUrl: csg_cos
    },
    {
        title: "DLSU - Computer Studies Government",
        position: "Asst. Director for Student Services",
        date: "October 2021 - December 2022",
        description: [
          "Assisted over 3,000 students with university-related concerns, providing guidance and support",
          "Implemented efficient systems for consolidating and analyzing data"
        ],
        imgUrl: csg_ss
    },
    {
        title: "La Salle Computer Society",
        position: "Vice President for Socio-Civic",
        date: "September 2022 - August 2023",
        description: [
          "Assumed a pivotal role in driving projects spanning a variety of areas, including socio-civic engagement, fundraisers, and computer literacy programs"
        ],
        imgUrl: lscs
    }
  ];

export const Experiences = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="experiences" id="experiences">
      <Container>
        <Row>
          <Col md={12}>
            <div className="experiences-bx wow zoomIn">
              <h2>Experiences</h2>
              <Carousel responsive={responsive}>
                {experiencesData.map((exp, index) => (
                  <div key={index} className="experience-slide">
                    <img src={exp.imgUrl} alt={`Experience ${index + 1}`} className="experience-img" />
                    <div className="experience-content">
                      <h3>{exp.title}</h3>
                      <p className="experience-position">{exp.position}</p>
                      <p className="experience-date">{exp.date}</p>
                      <ul>
                        {exp.description && exp.description.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
