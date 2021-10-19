import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './GetAppointment.css'
import image from './appointment.jpg'
const GetAppointment = () => {
    return (
        <div className="contacts container">
            <div className="contact">
                <h3 className="text-danger fw-bold">Get Appointment From Your Advisor</h3>
                <h4>Keep in Touch</h4>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Your Name" />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="phone" placeholder="Enter your Mobile Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button className="btn btn-danger fw-bold">Submit Appointment</Button>{' '}
                    </Form>
                </div>
            </div>
            <div className="contact image">
                <img src={image} alt="" />
                
            </div>
        </div>
    );
};

export default GetAppointment;