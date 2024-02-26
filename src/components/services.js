import React from 'react';
import { Container, Col, Row, } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../App.js'
const ServicesComponent = () => {
  return (
    <Container fluid id="services" className="services">
      <Row >
        <h3>Facilities that we provide</h3>
        <h4 >Most popular facilities</h4>
        <Col>
          <h6><i className="bi bi-wifi"></i> Free Wifi</h6>
        </Col>
        <Col >
          <h6><i class="bi bi-house-check-fill"></i> Family Rooms</h6>
        </Col>
        <Col >
          <h6> <i class="bi bi-p-circle-fill"></i>Free Parking</h6>
        </Col>
        <Col>
          <h6><i class="bi bi-fire"></i>Non-Smoking</h6>
        </Col>
        <Col>
          <h6> <i class="bi bi-person-raised-hand"></i>24Hrs Front Desk</h6>
        </Col>
        <Col>
          <h6> <i class="bi bi-cup-hot-fill"></i> Fabulous Breakfast</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4><i class="bi bi-cup-straw"></i>Food&Drink</h4>
          <h6><i class="bi bi-check2"></i>Breakfast in the room</h6>
        </Col>
        <Col>
          <h4><i class="bi bi-person-check-fill"></i>Services</h4>
          <h6><i class="bi bi-check2"></i>Luggage storage</h6>
          <h6><i class="bi bi-check2"></i>Ironing service</h6>
          <h6><i class="bi bi-check2"></i>Additional charge</h6>
          <h6><i class="bi bi-check2"></i>Dry cleaning</h6>
          <h6><i class="bi bi-check2"></i>Additional charge</h6>
          <h6><i class="bi bi-check2"></i>Laundry</h6>
          <h6><i class="bi bi-check2"></i>Additional charge</h6>
          <h6><i class="bi bi-check2"></i>24-hour front desk</h6>
          <h6><i class="bi bi-check2"></i>Room service</h6>
  

        </Col>
        <Col>
          <h4><i class="bi bi-info"></i>General</h4>
          <h6><i class="bi bi-check2"></i>Air conditioning</h6>
          <h6><i class="bi bi-check2"></i>Lift</h6>
          <h6><i class="bi bi-check2"></i>Family rooms</h6>
          <h6><i class="bi bi-check2"></i>Non-smoking rooms</h6>


        </Col>
      </Row>
      <Row className='services-row'>
        <Col>
          <h4><i class="bi bi-router"></i>Internet</h4>
          <h6><i class="bi bi-check2"></i>WiFi is available in all areas and is free of charge.</h6>
        </Col>
        <Col>
          <h4><i class="bi bi-cone"></i>Safety&Security</h4>
          <h6><i class="bi bi-check2"></i>Fire extinguishers</h6>
          <h6><i class="bi bi-check2"></i>CCTV outside property</h6>
          <h6><i class="bi bi-check2"></i>CCTV in common areas</h6>
          <h6><i class="bi bi-check2"></i>Smoke alarms</h6>
          <h6><i class="bi bi-check2"></i>24-hour security</h6>
        </Col>
        <Col>
          <h4>Languages Spoken</h4>
        </Col>
      </Row>

    </Container>
  );
};

export default ServicesComponent;
      

