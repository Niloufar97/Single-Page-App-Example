import "./Home.css";
import Navigation from "../../components/Navbar/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import progImg from "../../assets/images/progImg.svg";
import CourseItem from "../../components/courses/CourseItem.js";
import { useState } from "react";
import Footer from "../../components/Footer/Footer.js";
import { courseData } from "../../data";


function Home() {
  const [courses , setCourses] = useState(courseData)
  return (
    <>
      <Navigation />
      <Container className="my-container">
        <Row className="my-5 align-items-center">
          <Col  xs={12} md={6}>
            <h1>Niloufar</h1>
            <p >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              alias aliquid error pariatur dolores dicta officiis nesciunt hic
              voluptates sequi non praesentium ad consequatur molestiae, dolorum
              corrupti quisquam commodi placeat. Tempora nemo aliquid facere.
              Soluta, ipsam id esse sapiente voluptatibus perspiciatis
              temporibus sequi libero totam nobis illo placeat possimus,
              molestias exercitationem nulla laudantium necessitatibus. Itaque
              minus perspiciatis ut modi fugit.Eni alias aliquid error pariatur dolores dicta officiis nesciunt hic
              voluptates sequi non praesentium ad consequatur molestiae, dolorum
              corrupti quisquam commodi placeat. Tempora nemo aliquid facere.
            </p>
          </Col >
          <Col className="py-5" xs={12} md={6}>
            <img src={progImg} className="img-fluid" alt="" />
          </Col>
        </Row>
        <Row className="my-5">
          <h2 className="my-5 " >Courses</h2>
          {
            courses.map( course =>
              (
                <Col key={course.id} sm={6} md={4} lg={3} className="py-3">
                  <CourseItem {...course}/>
                </Col>
              )
            )
          }
        </Row>
      </Container>
      <Footer/>
    </>
  );
}
export default Home;
