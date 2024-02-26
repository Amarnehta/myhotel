import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css'

const Aboutcomponent = () => {
  return (
    
      <Container fluid  className="about" id="about" >
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center mb-4">Welcome to Our Hotel</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque nec ipsum
              fermentum ullamcorper. Vestibulum tempor, ligula eu ultrices suscipit, ipsum velit
              ultrices est, at blandit magna magna ac nunc.
            </p>
            <p className="text-center">
              Proin ultricies auctor eros, eget elementum metus feugiat in. Duis auctor orci a
              nulla volutpat, id ullamcorper nunc volutpat. Donec a lorem quis nulla aliquam
              placerat.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6} className="text-center">
            <Image src="https://elinsignia.com/wp-content/uploads/2019/06/1246280_16061017110043391702.jpg" fluid />
          </Col>
          <Col md={6}>
            <h3>Our Mission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at neque nec ipsum
              fermentum ullamcorper. Vestibulum tempor, ligula eu ultrices suscipit, ipsum velit
              ultrices est, at blandit magna magna ac nunc.
            </p>
            <h3>Our Vision</h3>
            <p>
              Proin ultricies auctor eros, eget elementum metus feugiat in. Duis auctor orci a
              nulla volutpat, id ullamcorper nunc volutpat. Donec a lorem quis nulla aliquam
              placerat.
            </p>
          </Col>
        </Row>
      </Container>
    
  );
};

export default Aboutcomponent;
