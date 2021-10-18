import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = (props) => {
    const [doctors, setDoctors] = useState([]);
    
    useEffect(() => {
        fetch('/fakedata.json')
        .then((res) => res.json())
        .then((data) => {
            const sliceData = data.slice(0, props.limit ?? 100);
            setDoctors(sliceData);
        })
    },[]);
    return (
        <div className='container ml-5 row row-cols-1 row-cols-md-3'>
            {doctors.map((doctor) => (
                <Doctor key={doctor.id} doctor={doctor}></Doctor>
            ))}
        </div>
    );
};

export default Doctors;