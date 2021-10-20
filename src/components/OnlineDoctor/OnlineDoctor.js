import React from 'react';
import { Button, Form } from 'react-bootstrap';
import image from './414.jpg'
const OnlineDoctor = () => {
    return (
        <div className="contacts container row d-flex justify-content-center mx-auto mt-5">
            <div className="contact col-lg-4 col-md-8">
                <h3 className="text-danger fw-bold">Get Your Desired Doctor for your Diseases</h3>
                <h4>Find Doctor</h4>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Your Name" />
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="email" placeholder="Enter your phone number" />
                            <Form.Label>Your Problem</Form.Label>
                            <Form.Control type="phone" placeholder="Enter your Diseases Problem" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button className="btn btn-danger fw-bold">Find Online Doctor</Button>{' '}
                    </Form>
                </div>
            </div>
            <div className="contact image col-lg-6 col-md-8">
                <img src={image} alt="" />
                
            </div>
        </div>
    );
};

export default OnlineDoctor;