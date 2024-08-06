import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/portfolio-icon.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "\nA Web Developer.", "\nA Web Designer.", "\nA UI/UX Designer." ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      const img = document.getElementById('header-img');
      const container = img.parentElement;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Set limits for movement
      const maxMove = 50; // Maximum movement in any direction
      const moveX = Math.min(Math.max(x / 20, -maxMove), maxMove);
      const moveY = Math.min(Math.max(y / 20, -maxMove), maxMove);

      img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleDownloadClick = (event) => {
    console.log('Attempting to download resume');
    alert('Your download should start shortly.');
    // Optional: Additional logic can be added here if needed
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to My Portfolio</span>
                <h1>
                  {`Hello there! I'm Jaira.`}{" "} </h1>
                  <h2><span className="txt-rotate" dataPeriod="700" data-rotate='[ "A web developer.", "A web designer.", "A UI/UX Designer" ]'><span className="wrap">{text}</span></span></h2>
                    
                  <p>I am an experienced Web Developer with a strong background in designing and deploying custom websites, proficient in <b>front-end and back-end technologies.</b> With experience in leading large student organizations and a strong academic background in Computer Science from De La Salle University, I am skilled in <b>project management </b>and <b>adept at adapting to new technologies.</b> </p>

                  <a href="/assets/files/resume.pdf" download onClick={handleDownloadClick} className="download-link">
                    <button>Download Resume <ArrowRightCircle size={25} /></button>
                  </a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img id="header-img" src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
