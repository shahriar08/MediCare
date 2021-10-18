import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Doctor.css'

const Doctor = (props) => {
    const {id,name,image,specialist,doctorInfo } = props.doctor;
    const history = useHistory();

    const handleDoctorClick = () => {
        history.push(`/doctor/${id}`);
    };

    return (
        <div className='col my-3 cardd'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {doctorInfo}
                        </Card.Text>
                        <Button onClick={handleDoctorClick} variant="primary">Get Appointment</Button>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Doctor;