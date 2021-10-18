import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
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
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={doctor.image} />
                <Card.Body>
                    <Card.Title>{doctor.name}</Card.Title>
                    <Card.Text>
                        {doctor.doctorInfo}
                    </Card.Text>
                    <Button onClick={handleClick} variant="primary">Get Appointment</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DoctorDetails;