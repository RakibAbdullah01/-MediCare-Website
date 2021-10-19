import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Doctor = () => {
    const{id} = useParams();
    const {doctors}=useAuth();
    const doctor = doctors.filter(doctor=>(doctor.id==id))
    const {name,img,specialty,degree,details}=doctor[0];
    console.log(doctor);
    return (
        <div>
            <Header/>
            <div className="section-header">
                <div className="d-flex justify-content-center align-items-center flex-column"> 
                    <h5>Doctor Details</h5>
                    <div className="divider"></div>
                    <h1>{name}</h1>
                </div>
            </div>


            <section className="section my-4 py-4 text-start">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="doctor-img-block">
                                <img src={img} alt="" className="img-fluid w-100"/>

                                <div className="info-block mt-4">
                                    <h4 className="mb-0">{name}</h4>
                                    <p>{specialty}</p>

                                    <ul className="list-inline mt-4 doctor-social-links">
                                        <li className="list-inline-item"><i className="fab fa-facebook-f"></i></li>
                                        <li className="list-inline-item"><i className="fab fa-twitter"></i></li>
                                        <li className="list-inline-item"><i className="fab fa-skype"></i></li>
                                        <li className="list-inline-item"><i className="fab fa-linkedin"></i></li>
                                        <li className="list-inline-item"><i className="fab fa-pinterest"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-6">
                            <div className="doctor-details mt-4 mt-lg-0">
                                <h2 className="text-md">Introducing to myself</h2>
                                <div className="divider my-4"></div>
                                <br />
                                <p>{details}</p>
                                    <br />
                                    <br />
                                    <br />
                                <h5>{degree}</h5>
                                    <br />
                                    <Link to="/appoinment">
                                        <button className="btn btn-primary d-flex justify-content-between align-items-center">
                                            <span>Make appoinment</span> 
                                            <i className="ps-2 fas fa-chevron-right"></i>
                                        </button>
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer/>
        </div>
    );
};

export default Doctor;