import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Content.css'

const Content = () => {
    const {services} = useAuth();
    return (
        <div className="text-start">
            {/* Slide */}
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-xl-7">
                            <div className="block">
                                <div className="divider mb-3"></div>
                                <span className="text-uppercase text-sm letter-spacing text-white">Total Health care solution</span>
                                <h1 className="mb-3 mt-3">Your most trusted health partner</h1>
                                
                                <p className="mb-4 pr-5 text-white">It’s more than what we do, it’s who we are. Everything we do is about striving to deliver the best care. And it's a belief that's as true today as it was when we welcomed our first patients in 1964.</p>
                                <div className="btn-container ">
                                    <Link to="/appoinment">
                                        <button className=" btn btn-primary d-flex justify-content-between align-items-center">
                                            <span>Make appoinment</span> 
                                            <i className="ps-2 fas fa-chevron-right"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About */}
            <section className="my-4 py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-img">
                                <img src="https://i.ibb.co/khnJ0qb/img-1.jpg" alt="" className="img-fluid" />
                                <img src="https://i.ibb.co/PhdJxcm/img-2.jpg" alt="" className="img-fluid mt-4" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-img mt-4 mt-lg-0">
                                <img src="https://i.ibb.co/6XVW0M8/img-3.jpg" alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ps-4 mt-4 mt-lg-0">
                                <h2 className="text-success fs-1">Personal care <br/>& healthy living</h2>
                                <p className="mt-4 mb-5">Our rapid access Saturday service for children and adolescents who have experienced sports and orthopaedic injuries and need fast access to diagnostics and treatment. </p>

                                <Link to="/about" className="text-decoration-none">
                                        <button className="btn btn-success d-flex justify-content-between align-items-center">
                                            <span>About Us</span> 
                                            <i className="ps-2 fas fa-chevron-right"></i>
                                        </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                        <div className="section-title">
                            <h2>Award winning patient care</h2>
                            <div className="divider mx-auto my-4"></div>
                            <p>As an international centre of excellence in cancer treatment, we offer rapid access to expert consultants and leading technology</p>
                        </div>
                    </div>
                </div>

                <Container>
                    <Row xs={1} md={3} className="g-4 my-4 py-4">
                        {services.map(service => (
                            <Col>
                            <Card>
                                <Card.Img variant="top" src={service.img} />
                                <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>
                                        {`${service.description.slice(0,150)}...`}
                                    </Card.Text>
                                    <Link to={`/service/${service.id}`}>
                                        <button className="btn btn-primary btn-sm"> View Details </button>
                                    </Link>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            {/* Appoinment */}
                <div class="container py-4 my-4">
                    <div class="row align-items-center bg-info p-4">
                        <div class="col-lg-6 ">
                            <div class="appoinment-content p-4">
                                <div class="emergency">
                                    <div class="text-lg text-center text-white">
                                        <i class="fas fa-phone-volume fs-3"></i>
                                        <h3>Call Now</h3>
                                        <span>+88-234-6588</span>
                                    </div> 
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-10 ">
                            <div class="appoinment-wrap mt-5 mt-lg-0 text-white">
                                <h2 class="mb-2 title-color">Book appoinment</h2>
                                <p class="mb-4">Book your Hotel in Hospital online. No reservation costs. Great rates. Read Real Guest Reviews. Get Instant Confirmation. Apartments. No Booking Fees.</p>
                                <Link to="/appoinment">
                                    <button className=" btn btn-primary d-flex justify-content-between align-items-center">
                                        <span>Make appoinment</span> 
                                        <i className="ps-2 fas fa-chevron-right"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Content;