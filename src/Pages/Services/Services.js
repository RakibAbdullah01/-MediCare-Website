import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Services.css'
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Services = () => {
    const {services}=useAuth();
    console.log(services);
    return (
        <div>

        <Header/>

            <div className="section-header">
                <div className="d-flex justify-content-center align-items-center flex-column"> 
                    <h5>Our Services</h5>
                    <div className="divider"></div>
                    <h1>What we Do</h1>
                </div>
            </div>

            <Container>
                <Row xs={1} md={2} className="g-4 my-4 py-4">
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

            <Footer/>
        </div>
    );
};

export default Services;