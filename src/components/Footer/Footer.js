import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <center>
                <h2>MediCare</h2>
                <p>Your Health, Our First Priority</p>
            </center>

            <div className='container footers-div'>
                <div className='footer-div'>
                    <ul>
                        <h5>About</h5>
                        <p>About us</p>
                        <p>Terms & Policy</p>
                        <p>Community</p>
                    </ul>
                </div>

                <div className='footer-div'>
                    <h5>Support</h5>
                    <p>Help</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>

                <div className='footer-div'>
                    <h5>Contact</h5>
                    <p>Call Center</p>
                    <p>Email Us</p>
                    <p>Help Center</p>
                </div>
                <div className='footer-div'>
                    <h5>Find Us</h5>

                    <div className='icon'>
                        <p><i className="fab fa-facebook social"></i></p>
                        <p><i className="fab fa-instagram social"></i></p>
                        <p><i className="fab fa-twitter social"></i></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
