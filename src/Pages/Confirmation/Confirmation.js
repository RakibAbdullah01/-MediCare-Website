import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Confirmation.css'

const Confirmation = () => {
    const {user} = useAuth();
    return (
        <div>
            <Header/>
                <div className="container">
                    <div className="row confirmation d-flex justify-content-center align-items-center">
                    <div className="col-lg-8">
                        <div className="confirmation-content text-center">
                            <i className="fas fa-check-circle fs-1 text-primary"></i>
                            <h2 className="mt-3 mb-4">Thank you for your appoinment</h2>
                            <h1 className="text-danger">{user.displayName||user.name}</h1>
                            <p>We will contact with you soon.</p>
                            <Link to="/home">
                                <button className="btn btn-primary">Back to Home</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
};

export default Confirmation;