import {Card, Button} from 'react-bootstrap'
function CardKegiatan(props){
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.judul}</Card.Title>
          </Card.Body>
        </Card>
      );
}

export default CardKegiatan