import React from 'react';
import './Footer.css'
import logo from '../../../images/logol.png'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer p-4">
            <Container>
                <Row className="d-flex align-items-center">
                    <div className="col-md-5 text-start">
                        <div>
                            <div>
                            <img src={logo} alt="" width="250px" />
                            </div>
                            
                            <p>U.S. News & World Report has again recognized MediCare Health Care as the No. 1 hospital overall and top ranked in fourteen specialties.  MediCare Health Care is a destination for all who need certainty, options and hope. MediCare Health Care care is covered by most insurance plans.</p>

                            <div className="social-link">
                                <i className="text-primary fab fa-facebook-square fs-1"></i>
                                <i className="text-primary fab fa-youtube-square fs-1 mx-4"></i>
                                <i className="text-primary fab fa-linkedin fs-1"></i>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4">
                        <Row>
                            <div className="col-md-6 d-flex flex-column align-items-start">
                                <h4   className="text-uppercase mb-3">Services</h4>
                                <div   className="divider mb-4"></div>
                                    
                                <ul className="list-unstyled text-start lh-35">
                                    <Link className="text-decoration-none" to="/service/service-1">
                                        <li className="text-primary fw-bold">Home Care</li>
                                    </Link>
                                    <Link className="text-decoration-none" to="/service/service-2">
                                        <li className="text-primary fw-bold">Nurse Staffing</li>
                                    </Link>
                                    <Link className="text-decoration-none" to="/service/service-3">
                                        <li className="text-primary fw-bold">Geriatric Care</li>
                                    </Link>
                                    <Link className="text-decoration-none" to="/service/service-4">
                                        <li className="text-primary fw-bold">Pediatric Care</li>
                                    </Link>
                                    <Link className="text-decoration-none" to="/service/service-5">
                                        <li className="text-primary fw-bold">Physical Therapy</li>
                                    </Link> 
                                </ul>
                            </div>
                            
                            <div className="col-md-6 d-flex flex-column align-items-start">
                                <h4 className="text-uppercase mb-3">Support</h4>
                                <div className="divider mb-4"></div>

                                <ul className="list-unstyled text-start lh-35">
                                    <Link className="text-decoration-none" to="/about">
                                        <li className="text-primary fw-bold">About Us</li>
                                    </Link> 

                                    <Link className="text-decoration-none" to="/contact">
                                        <li className="text-primary fw-bold">Contact Us</li>
                                    </Link> 

                                    <Link className="text-decoration-none" to="/appoinment">
                                        <li className="text-primary fw-bold">Appoinnemt</li>
                                    </Link> 

                                    <Link className="text-decoration-none" to="/login">
                                        <li className="text-primary fw-bold">Login</li>
                                    </Link> 

                                    <Link className="text-decoration-none" to="/about">
                                        <li className="text-primary fw-bold">About Us</li>
                                    </Link> 
                                </ul>
                            </div>
                        </Row>
                    </div>

                    <div className="col-md-3 d-flex flex-column align-items-start">
                        <h4 className="text-uppercase mb-3">Get in Touch</h4>
                        <div className="divider mb-4"></div>

                        <div className="footer-contact-block mb-4">
                        
                            <div className="icon d-flex align-items-center">
                            <i class="far fa-envelope me-2"></i>
                                <span className="h6 mb-0">Support Available for 24/7</span>
                            </div>
                                <h4 className="mt-2 text-primary">support@medicare.com</h4>
                            </div>

                            <div className="icon d-flex align-items-center">
                            <i class="fas fa-phone-volume me-2"></i>
                                <span className="h6 mb-0 ">Mon to Fri : 08:30 - 18:00</span>
                            </div>
                            <h4 className="mt-2 text-primary">+88-234-6588</h4>
                    </div>
                </Row>
                <Row>
                    <div class="copyright">
                        <span>&copy; Design & Develped by </span>
                            <Link to="/" className="text-decoration-none"><span class="text-color"> Rakib</span>
                        </Link>   
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;