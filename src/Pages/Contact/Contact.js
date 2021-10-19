import React from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Contact.css'

const Contact = () => {
    const {user}=useAuth();
    return (
        <div>
            <Header/>
            <div className="section-header">
                <div className="d-flex justify-content-center align-items-center flex-column"> 
                    <h5>Contact Us</h5>
                    <div className="divider"></div>
                    <h1>Get In Touch</h1>
                </div>
            </div>

            <div class="container py-4 my-4">
                <div class="row">
                    <div class="col-lg-4 col-sm-6 col-md-6">
                        <div class="contact-block mb-4 mb-lg-0">
                            <i class="fas fa-phone-volume"></i>
                            <h5>Call Us</h5>
                            +88-234-6588
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-md-6">
                        <div class="contact-block mb-4 mb-lg-0">
                            <i class="far fa-envelope"></i>
                            <h5>Email Us</h5>
                            support@medicare.com
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-md-6">
                        <div class="contact-block mb-4 mb-lg-0">
                            <i class="fas fa-directions"></i>
                            <h5>Location</h5>
                            Joypurpara,Dupchanchia,Bogura-5880
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}

            <section class="contact-form-wrap section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section-title text-center">
                                <h2 class="text-md mb-2">Contact us</h2>
                                <div class="divider mx-auto my-4"></div>
                                <p class="mb-5">Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact form */}
            <div class="container">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <form id="" class="py-4" method="" action="">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input name="name" value={user.name||user.displayName} id="name" type="text" class="form-control" placeholder="Your Full Name" />
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input name="email" value={user.email} id="email" type="email" class="form-control" placeholder="Your Email Address"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input name="subject" id="subject" type="text" class="form-control" placeholder="Your Query Topic"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input name="phone" id="phone" type="text" class="form-control" placeholder="Your Phone Number"/>
                                </div>
                            </div>
                        </div>

                        <div class="form-group-2 mb-4">
                            <textarea name="message" id="message" class="form-control" rows="8" placeholder="Your Message"></textarea>
                        </div>

                        <div class="text-center">
                            <input class="btn btn-primary btn-round-full" name="submit" type="submit" value="Send Messege"></input>
                        </div>
                    </form>
                </div>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Contact;