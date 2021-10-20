import React from 'react';
import { Accordion } from 'react-bootstrap';
import './FAQ.css'

const FAQ = () => {
    return (
        <div className="container">
            <h1 className=" text-center mt-5 pt-5 text-danger">Frequently Asked Questions</h1>
            <div className="row d-flex align-items-top faq mt-5 pt-3">
                <div className="col-md-6 col-sm-12 header-bike  mb-5 d-flex justify-content-center">
                    <img
                        src="https://i.ibb.co/T28sJRk/3568984.jpg"
                        className="faq-img"
                        alt="..."
                    />
                </div>
                <div className="col-md-6 col-sm-12">
                    <div>
                        <div className="accordion-item my-3 rounded">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="fw-bold">Can i directly went to hospital for doctor</Accordion.Header>
                                    <Accordion.Body>
                                        Yes.You can directly come to our hospital for showing doctors.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Can i choose top notch doctor for my diseases</Accordion.Header>
                                    <Accordion.Body>
                                        Oviously.You can select your doctor as per your need.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Is there other way to booking a appointment </Accordion.Header>
                                    <Accordion.Body>
                                        You can book for an appointment by contacting our mobile number.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Can i get all type of health diseases doctor</Accordion.Header>
                                    <Accordion.Body>
                                        Yes.You can show all type of doctor from our hospital. You can visit our website for more details.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FAQ;