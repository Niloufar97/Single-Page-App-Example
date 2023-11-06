import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseItem.css'

function CourseItem ({id, img , title , text}){
    return(
        <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <Button variant="outline-success">
            <Link className='buy-btn' to={`/course/${id}`}>buy</Link>
          </Button>
        </Card.Body>
      </Card>
  
    )
}
export default CourseItem;