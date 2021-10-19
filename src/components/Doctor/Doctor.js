import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Doctor.css'

const Doctor = (props) => {
    const {id,name,image,specialist,degree } = props.doctor;
    const history = useHistory();

    const handleDoctorClick = () => {
        history.push(`/doctor/${id}`);
    };

    return (
        <div className='col text-center my-3 card-div g-5'>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className='fw-bold'>{name}</Card.Title>
                        <Card.Text className='text-danger fw-bold'>
                            {specialist}
                        </Card.Text>
                        <Card.Text className='fw-bold'>
                            {degree}
                        </Card.Text>
                        <Button onClick={handleDoctorClick} variant="warning">Get Appointment</Button>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Doctor;