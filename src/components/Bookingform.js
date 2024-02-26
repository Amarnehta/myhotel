import React, { useState } from 'react';
import { Form, InputGroup, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css'

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
  };

  const handleAdultsChange = (e) => {
    setAdults(parseInt(e.target.value, 10));
  };

  const handleChildrenChange = (e) => {
    setChildren(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container id='Bookingform' className='Booking-container'>
      <Row>
        <Col  className="custom-row">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="checkInDate">
              <Form.Label className='form-labels'>Check-in Date</Form.Label>
              <DatePicker selected={checkInDate} onChange={handleCheckInChange} className="form-control" />
            </Form.Group>
          </Form>
        </Col>

        <Col className="custom-col">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="checkOutDate">
              <Form.Label className='form-labels'>Check-out Date</Form.Label>
              <DatePicker selected={checkOutDate} onChange={handleCheckOutChange} className="form-control" />
            </Form.Group>
          </Form>
        </Col>

        <Col  className="custom-col">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="adults">
              <Form.Label className='form-labels'>Adults</Form.Label>
              <InputGroup>
                <FormControl type="number" value={adults} onChange={handleAdultsChange} min={1} />
              </InputGroup>
            </Form.Group>
          </Form>
        </Col>

        <Col className="custom-col">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="children">
              <Form.Label className='form-labels'>Children</Form.Label>
              <InputGroup>
                <FormControl type="number" value={children} onChange={handleChildrenChange} min={0} />
              </InputGroup>
            </Form.Group>
          </Form>
        </Col>

        <Col >
          <Button className='form-btn' variant="primary" type="submit">
            Check Availability
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingForm;
