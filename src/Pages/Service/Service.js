import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Service.css'

const Service = () => {
    const {id}=useParams();
    const {services}=useAuth();
    const service = services.filter(service=>(service.id==id));
    const {name,img,description}=service[0];
    return (
        <>
        <Header/>
        <div className="section-header">
            <div className="d-flex justify-content-center align-items-center flex-column"> 
                <h5>Service Details</h5>
                <div className="divider"></div>
                <h1>{name}</h1>
            </div>
        </div>

        
        <section className="my-4 py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="department-img">
                            <img src={img} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="row my-4">
                    <div className="col-md-8">
                        <div className="text-start mt-5">
                            <h3 className="text-md">{name}</h3>
                            <div className="divider my-4"></div>
                            <p className="lead">{description}</p>


                            
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="bg-info text-white p-4 mt-5">
                            <h5 className="mb-4">Time Schedule</h5>

                            <ul className="list-unstyled">
                            <li className="d-flex justify-content-between align-items-center">
                                <span>Monday - Friday</span>
                                <span>9:00 - 17:00</span>
                            </li>
                            <li className="d-flex justify-content-between align-items-center">
                                <span>Saturday</span>
                                <span>9:00 - 16:00</span>
                            </li>
                            <li className="d-flex justify-content-between align-items-center">
                                <span>Sunday</span>
                                <span>Closed</span>
                            </li>
                            </ul>

                            <div className="sidebar-contatct-info mt-4">
                                <p className="mb-0">Need Urgent Help?</p>
                                <h3>+23-4565-65768</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12"></div>
                        <div className="my-4">
                            <Link to="/appoinment">
                                <button className="btn btn-primary d-flex justify-content-between align-items-center">
                                    <span>Make appoinment</span> 
                                    <i className="ps-2 fas fa-chevron-right"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
        </section>
        <Footer/>
        </>
    );
};

export default Service;