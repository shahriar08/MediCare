import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4">
                    <center>
                        <h1>MediCare</h1>
                        <h5 className="mb-5">Your Health,Our First Priority</h5>
                    </center>
                        <div className="row">

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 footer-div">
                                <h5 class="text-uppercase">About</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">About us</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Terms & Policy</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Community</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Community </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 footer-div">
                                <h5 className="text-uppercase">Support</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Help</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Community</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 footer-div">
                                <h5 className="text-uppercase">Contact</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Call Center</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Email Us</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Help Center</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Call Center</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 footer-div icon">
                                <div>
                                    <h5>Find Us</h5>
                                    <p><i className="fab fa-facebook social"></i></p>
                                    <p><i className="fab fa-instagram social"></i></p>
                                    <p><i className="fab fa-twitter social"></i></p>
                                </div>
                            </div>

                        </div>

                </div>

                <div className="text-center p-3">
                    © 2021 Copyright: Al-Shahriar
                    <p className="text-white">MediCare.com</p>
                </div>

            </footer>
        </div>
    );
};

export default Footer;
