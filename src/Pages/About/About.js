import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './About.css'

const About = () => {
    const {services,doctors}=useAuth();
    const slicedServices = services.slice(0, 4);

    return (
        <div className="text-start">
            <Header/>
            <div className="section-header">
                <div className="d-flex justify-content-center align-items-center flex-column"> 
                    <h5>About us</h5>
                    <div className="divider"></div>
                    <h1>About Us</h1>
                </div>
            </div>

            <div class="container p-4 my-4">
                <div class="row">
                    <div class="col-lg-4">
                        <h2 class="title-color">Personal care for your healthy living</h2>
                    </div>
                    <div class="col-lg-8">
                        <p>MediCare HealthCare was established in 1964 and has grown to become a global hospital group operating 480 facilities across 11 countries, making it one of the largest and most diverse private healthcare companies in the world.</p>
                        <img src="https://i.ibb.co/ZBJ3fWb/sign.png" alt="" class="img-fluid"/>
                    </div>
                </div>
            </div>

            {/* Sevices */}
            <Container>
                <Row xs={1} md={4} className="g-4 my-4 py-4">
                    {slicedServices.map(service => (
                        <Col>
                        <Card>
                            <Card.Img variant="top" src={service.img} />
                            <Card.Body>
                            <Card.Title>{service.name}</Card.Title>
                                <Card.Text>
                                    {`${service.description.slice(0,145)}...`}
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

            {/* awards */}
            <div class="container py-4 my-4">
                <div class="row align-items-center">
                    <div class="col-lg-4">
                        <h2 class="title-color">Our Doctors achievements </h2>
                        <div class="divider mt-4 mb-5 mb-lg-0"></div>
                    </div>
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="award-img">
                                    <img src="https://i.ibb.co/GVbvyJx/1.png" alt="" class="img-fluid"/>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="award-img">
                                    <img src="https://i.ibb.co/hdM4cpt/2.png" alt="" class="img-fluid"/>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="award-img">
                                    <img src="https://i.ibb.co/wzmbxwx/6.png" alt="" class="img-fluid"/>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="award-img">
                                    <img src="https://i.ibb.co/w7w0dW5/5.png" alt="" class="img-fluid"/>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="award-img">
                                    <img src="https://i.ibb.co/YdVNzCf/3.png" alt="" class="img-fluid"/>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="award-img">
                                    <img src="https://i.ibb.co/JpHtJxC/4.png" alt="" class="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Doctors */}
            <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section-title text-center">
                        <h2 class="mb-4">Meet Our Specialist</h2>
                        <div class="divider mx-auto my-4"></div>
                        <p>Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles</p>
                    </div>
                </div>
            </div>

            <Row xs={1} md={3} className="g-4 my-4 py-4">
                    {doctors.map(doctor => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={doctor.img} height="400px" />
                                <Card.Body>
                                <Card.Title>{doctor.name}</Card.Title>
                                    <Card.Text>
                                        <h6>{doctor.specialty}</h6>
                                    </Card.Text>
                                    <Link to={`/doctor/${doctor.id}`}>
                                        <button className="btn btn-primary btn-sm"> View Details </button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <Footer/>
        </div>
    );
};

export default About;