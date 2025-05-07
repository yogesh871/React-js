  import 'bootstrap/dist/css/bootstrap.min.css';


  import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '300px' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/612hBRDvC5L.jpg" />
      <Card.Body>
        <Card.Title>LED TV</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="info mx-3">More Detail</Button>
        <Button variant="dark">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;