import Navigation from "../../components/Navbar/Navbar";
import "./About.css";
import { Row, Col } from "react-bootstrap";
import Nilou from "../../assets/images/about.jpg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";
import SkillBar from "./SkillBar";
import Counter from "./Counter";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        <div
          className="about-container"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h2 className="header">About</h2>
          <p className="txt-align-center">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
          </p>
          <Row className="my-5">
            <Col className="img-container" lg={4}>
              <img src={Nilou} alt="" className="img-fluid about-img my-3" />
            </Col>
            <Col lg={8}>
              <Row>
                <h3 className="my-3">Illustrator & UI/UX Designer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Row>
              <Row className="personalInfo">
                <Col>
                  <ul>
                    <li>
                      <strong>Birthday:</strong> 1 May 1995
                    </li>
                    <li>
                      <strong>Website:</strong> www.example.com
                    </li>
                    <li>
                      <strong>Phone:</strong>
                      +123 456 7890
                    </li>
                    <li>
                      <strong>City:</strong>
                      New York, USA
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li>
                      <strong>Age:</strong> 30
                    </li>
                    <li>
                      <strong>Degree: </strong>
                      Master
                    </li>
                    <li>
                      <strong>PhEmailone:</strong> email@example.com
                    </li>
                    <li>
                      <strong>Freelance:</strong> Available
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <p>
                  Officiis eligendi itaque labore et dolorum mollitia officiis
                  optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                  accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et
                  consectetur qui quia repellendus itaque neque. Aliquid amet
                  quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                  culpa magni laudantium dolores.
                </p>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="skills-container">
          <h2 className="header">Skills</h2>
          <p className="txt-align-center">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
          <Row className="skillbar-container">
            <Col lg={6}>
              <div className="skillbar-body">
                <h3>HTML</h3>
                <SkillBar persentage={92} />
              </div>
              <div className="skillbar-body">
                <h3>CSS</h3>
                <SkillBar persentage={75} />
              </div>
              <div className="skillbar-body">
                <h3>Bootstrap</h3>
                <SkillBar persentage={85} />
              </div>
            </Col>
            <Col lg={6}>
              <div className="skillbar-body">
                <h3>Javascript</h3>
                <SkillBar persentage={80} />
              </div>
              <div className="skillbar-body">
                <h3>React.js</h3>
                <SkillBar persentage={90} />
              </div>
              <div className="skillbar-body">
                <h3>Node.js</h3>
                <SkillBar persentage={70} />
              </div>
            </Col>
          </Row>
        </div>
        <div className="fact-container">
          <h2 className="header">Facts</h2>
          <p className="txt-align-center">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
          <div className="fact-body">
            <Row>
              <Col>
                <Counter number={232} />
                <h4>clients</h4>
              </Col>
              <Col>
                <Counter number={521} />
                <h4>Projects</h4>
              </Col>
              <Col>
                <Counter number={1463} />
                <h4>Hours Of Support</h4>
              </Col>
              <Col>
                <Counter number={15} />
                <h4>Hard Workers</h4>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default About;
