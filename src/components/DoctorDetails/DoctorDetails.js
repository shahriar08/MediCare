import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
const DoctorDetails = () => {
    const { doctorId } = useParams();
    const [doctor, setDoctor] = useState({});
    const history = useHistory();

    useEffect(() => {
        fetch('/fakedata.json')
            .then((res) => res.json())
            .then((data) => {
                const doctorById = data.filter((doctor) => doctor.id === Number(doctorId));
                setDoctor(doctorById.length ? doctorById[0] : {});
            });
    }, []);

    const handleClick = () => {
        history.push(`/doctors`);
    };
    return (
        <div>
            <div className="contacts container">
                <div className="contact">
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={doctor.image} />
                            <Card.Body>
                                <Card.Title className='fw-bold'>{doctor.name}</Card.Title>
                                <Card.Title className='text-danger'>{doctor.degree}</Card.Title>
                                <Card.Title>{doctor.specialist}</Card.Title>
                                <Card.Text>
                                    {doctor.doctorInfo}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="contact">
                    <h3 className="address text-danger fw-bold">Address</h3>
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
            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={doctor.image} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{doctor.name}</Card.Title>
                    <Card.Title className='text-danger'>{doctor.degree}</Card.Title>
                    <Card.Title>{doctor.specialist}</Card.Title>
                    <Card.Text>
                        {doctor.doctorInfo}
                    </Card.Text>
                </Card.Body>
            </Card> */}
        </div>
    );
};

export default DoctorDetails;