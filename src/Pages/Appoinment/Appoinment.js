import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Appoinment.css'
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Appoinment = () => {
    const {user} = useAuth();
    return (
        <>
        <Header/>

        <div className="section-header">
                <div className="d-flex justify-content-center align-items-center flex-column"> 
                    <h5>Book your Seat</h5>
                    <div className="divider"></div>
                    <h1>Appoinment</h1>
                </div>
            </div>


            <Container className="my-4 pb-4">
                <Row className="d-flex align-items-center">
                    <div className="col-md-4">
                        <div className="mt-3">
                            <div className="mb-3">
                                <i className="fas fa-phone-volume fs-1 text-lg"></i>
                            </div>
                            <span className="h3">Call for an Emergency Service!</span>
                            <h2 className="text-color mt-3">+84 789 1256 </h2>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="mt-5">
                            <h2 className="mb-2">Book an appoinment</h2>
                            <p className="mb-4">Book your Hotel in Hospital online. No reservation costs. Great rates. Read Real Guest Reviews. Get Instant Confirmation. Apartments. No Booking Fees.</p>
                            <div className="default-form">
                                
                            <form method="" action="">
                                <div className="row clearfix">
                                
                                    <div className="column col-md-6 col-sm-6 col-xs-12">
                                        
                                        <div className="form-group">
                                            <input type="text" value={user.name||user.displayName} name="username" placeholder="Name" required/>
                                        </div>
                                        
                                        <div className="form-group">
                                            <select className="custom-select-box">
                                                <option>Service Catogaries</option>
                                                <option>Category One</option>
                                                <option>Category Two</option>
                                                <option>Category Three</option>
                                                <option>Category Four</option>
                                            </select>
                                        </div>
                                        
                                        <div className="form-group">
                                            <input type="text"  className="datepicker" name="text" placeholder="Schedule Date" required/>
                                            <i className="far fa-calendar-alt"></i>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="column col-md-6 col-sm-6 col-xs-12">
                                        
                                        <div className="form-group">
                                            <input type="email" value={user.email} name="email" placeholder="Email" required/>
                                        </div>
                                        
                                        <div className="form-group">
                                            <input type="text" name="phone" placeholder="Phone" required/>
                                        </div>
                                        
                                        <div className="form-group">
                                            <input className="timepicker" type="text" name="schedule" placeholder="Schedule Time"/>
                                            <i className="far fa-clock"></i>
                                        </div>
                                        
                                    </div>
                                

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                    <Link to="/confirmation">
                                            <button className="btn btn-primary" type="submit" name="submit-form">
                                                Fix An Appoinment
                                            </button></Link>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                           
                        </div>
                    </div>
                </Row>
            </Container>
        <Footer/>
        </>
    );
};

export default Appoinment;