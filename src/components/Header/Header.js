import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from './logo.png'
import './Header.css'

const Header = () => {
    const { user,logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                        src={logo}
                            alt=""
                            width="35"
                            height="35"
                            className="d-inline-block align-top"
                        />{' '}
                        MediCare
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/home" className="items">Home</Link>
                            <Link to="/doctors" className="items">Doctors</Link>
                            <Link to="/appointment" className="items">Get Appointment</Link>
                            <Link to="/about" className="items">About Us</Link>
                            <Link to="/contact" className="items">Contact</Link>
                            {!user?.email && <Link to="/login" className="items" variant="danger">Sign In</Link>}
                        </Nav>
                        <Nav className="d-flex">
                            <span className="items">{user.displayName}</span>
                            {user?.email && <Button onClick={logOut} className='ms-2' variant="danger">Sign Out</Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;