import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import  '../App.css'
import React from 'react';

function Cardcomponent() {
    return (
        <Container  fluid className="card-container" id='cards'>
            <Col md={3}  >

                <Card className="card">
                    <Card.Img  className="card-img" variant="top" src="https://images.rosewoodhotels.com/is/image/rwhg/premier-room-2-2" />
                    <Card.Body>
                        <Card.Title  className="card-title">VIP</Card.Title>
                        <Card.Text>
                            Some quick example 
                        </Card.Text>
                        <Button  className="card-button">Book Now</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={3}>
                <Card  className="card">
                    <Card.Img  className="card-img" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/5/52/Hotel_Room_(9638499309).jpg" />
                    <Card.Body>
                        <Card.Title className="card-title">Guest Room</Card.Title>
                        <Card.Text>
                            Some quick example
                        </Card.Text>
                        <Button   className="card-button  custom-button" variant="primary">Book Now</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card  className="card">
                    <Card.Img  className="card-img"  variant="top" src="https://images.rosewoodhotels.com/is/image/rwhg/premier-room-2-2" />
                    <Card.Body>
                        <Card.Title className="card-title">Card Title</Card.Title>
                        <Card.Text>
                            Some quick example 
                        </Card.Text>
                        <Button  className="card-button  custom-button"  variant="primary">Book Now</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card  className="card">
                    <Card.Img className="card-img"  variant="top" src="https://i.ytimg.com/vi/vbd8BdZXZsY/maxresdefault.jpg" />
                    <Card.Body>
                        <Card.Title className="card-title">Card Title</Card.Title>
                        <Card.Text>
                            Some quick example
                        </Card.Text>
                        <Button  className="card-button  custom-button" variant="primary">Book Now</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card  className="card">
                    <Card.Img className="card-img"  variant="top" src="https://res.cloudinary.com/resortsandlodges/image/fetch/w_800,h_520,c_fill/https://media.travelnetsolutions.com/26d271985cb422d8333e39f0d47ed534/original.jpg" />
                    <Card.Body>
                        <Card.Title className="card-title">VIp</Card.Title>
                        <Card.Text>
                            Some quick example 
                        </Card.Text>
                        <Button  className="card-button  custom-button" variant="primary">Book Now</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card  className="card">
                    <Card.Img  className="card-img" variant="top" src="https://images.rosewoodhotels.com/is/image/rwhg/premier-room-2-2" />
                    <Card.Body>
                        <Card.Title className="card-title">Primium</Card.Title>
                        <Card.Text>
                            Some quick example
                        </Card.Text>
                        <Button  className="card-button  custom-button" variant="primary">Book Now</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card  className="card">
                    <Card.Img  className="card-img" variant="top" src="https://www.naplesgrande.com/resources/media/user/1491867294-Signature_Gulf_View_gallery_thumbnail.jpg" />
                    <Card.Body>
                        <Card.Title className="card-title">Delux</Card.Title>
                        <Card.Text>
                            Some quick example 
                        </Card.Text>
                        <Button className="card-button " variant="primary">Book Now</Button>
                    </Card.Body>
                </Card>
            </Col>

        </Container>

    );
}


export default Cardcomponent;