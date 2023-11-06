import Navigation from "../../components/Navbar/Navbar";
import { Container,Row,Col } from "react-bootstrap";
import { courseData } from "../../data";
import { useParams } from "react-router-dom";

function Course (){ 
    let courseId = useParams().courseId
    const courseInfo = courseData.filter(x => x.id === courseId)
    console.log(courseInfo)
    return(
        
       <>
        <Navigation/>
        <Container>
            <Row>
                <Col>

                </Col>
            </Row>
        </Container>
       
       </>
    )
}
export default Course;