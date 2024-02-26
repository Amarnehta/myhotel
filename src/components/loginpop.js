import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import SignupPopup from './signup'; // Assuming you have a SignupForm component

const LoginPopup = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleLoginClose = () => setShowLogin(false);
    const handleLoginShow = () => setShowLogin(true);

    const handleSignupClose = () => setShowSignup(false);
    const handleSignupShow = () => {
        setShowLogin(false); // Close login popup
        setShowSignup(true); // Open signup popup
    };

    const handleLogin = () => {
        // Handle login logic here
        // For simplicity, just closing the modal
        setShowLogin(false);
    };

    const handleSignup = () => {
        // Handle signup logic here
        // For simplicity, just closing the modal
        setShowSignup(false);
    };

    return (
        <>
            <Button variant="primary" onClick={handleLoginShow}>
                Login
            </Button>

            <Modal show={showLogin} onHide={handleLoginClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleLoginClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleLogin}>
                        Login
                    </Button>
                    <SignupPopup show={showSignup} handleClose={handleSignupClose} handleSignup={handleSignup} />
                </Modal.Footer>
            </Modal>
            
        </>
    );
};

export default LoginPopup;
