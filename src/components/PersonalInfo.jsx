import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'; 

 function PersonalInfo( props ) {

    return ( 
        <>    

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                   
                    <ListGroup variant="flush">
                        <ListGroup.Item>Data urodzin: {props.birth}</ListGroup.Item>
                        <ListGroup.Item>Kolor Oczu: {props.eyes}</ListGroup.Item>
                    </ListGroup>
                    <Button  variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </>
     );
}

export default PersonalInfo;