import React, { useEffect, useState } from 'react';
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
        <div className='container mx-auto row  row-cols-1 row-cols-md-3'>
            {doctors.map((doctor) => (
                <Doctor key={doctor.id} doctor={doctor}></Doctor>
            ))}
        </div>
    );
};

export default Doctors;