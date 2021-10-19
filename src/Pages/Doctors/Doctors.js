import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Doctors = () => {
    const{doctors}=useAuth();
    return (
        <div>
            <Header/>
            <div className="section-header">
                <div className="d-flex justify-content-center align-items-center flex-column"> 
                    <h5>All Doctors</h5>
                    <div className="divider"></div>
                    <h1>Specalized Doctors</h1>
                </div>
            </div>

            <Container>
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
            </Container>
            <Footer/>
        </div>
    );
};

export default Doctors;