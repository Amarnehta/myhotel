import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../App.css'; // Import the CSS file for styling

const Logincomponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email and password (you can use any validation library or custom validation logic)
    if (email === 'example@example.com' && password === 'password') {
      // Login successful, navigate to dashboard or perform other actions
      console.log('Login successful');
    } else {
      // Invalid credentials, display error message
      setError('Incorrect email or password');
    }
  };

  return (
    <Container className="login-container">
      <Row>
        <Col md={6} className="login-image">
          <img src="path_to_your_image" alt="Login" />
        </Col>
        <Col md={6} className="login-form">
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn-login">
              Login
            </Button>
            <div className="mt-3">
              <p className="text-center">Don't have an account? <a href="/register">Register here</a></p>
              <p className="text-center">Or login with Google</p>
              {/* Add Google login button here */}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Logincomponent;
