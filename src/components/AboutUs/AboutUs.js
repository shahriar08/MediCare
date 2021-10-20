import React from 'react';
import './AboutUs.css'
import image from './successful-medical-team.jpg'
const AboutUs = () => {
    return (
        <div className="container">
            <div className='mb-4 mb-md-0'>
                <h2 className="d-flex justify-content-center text-danger fw-bolder mt-3 fs-2">About us</h2>
                <h4 className="d-flex justify-content-center">Your Health, Our First Priority</h4>
                <p className="d-flex justify-content-center " >
                MediCare has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT Division through paperless medical records. The skilled nurses, technologists and administrators of Bangladesh Specialized Hospital, aided by state-of-the-art equipments, provide a congenial infrastructure for the medical professionals in providing healthcare of international standards.</p>
            </div>

            <div className="d-flex justify-content-center about-img mb-4 mb-md-0">
                <img className='w-50 mt-2 mb-2' src={image} alt="" />
            </div>
            <div>

            </div>
        </div>
    );
};

export default AboutUs;