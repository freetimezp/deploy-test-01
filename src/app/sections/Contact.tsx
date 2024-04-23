import React from 'react';
import './contact.css';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
    return (
        <section id='contact' className='contact'>
            <div className="container" data-aos="fade-up">
                <SectionTitle title="Contact" subtitle="Contact Us" />
            </div>

            <div data-aos="fade-up">
                <iframe src="https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d82345.00325540337!2d23.95343836730957!3d49.837170795155174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e6!4m0!4m4!2s49.837230%2C%2024.035886!3m2!1d49.83723!2d24.035885999999998!5e0!3m2!1suk!2sua!4v1710861216316!5m2!1suk!2sua"
                    style={{ border: 0, width: '100%', height: '350px' }} allowFullScreen></iframe>
            </div>

            <div className="container" data-aos="fade-up">
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>69000, My Street, City, Ukraine</p>
                            </div>
                            <div className="open-hours">
                                <i className="bi bi-clock"></i>
                                <h4>Open Hours:</h4>
                                <p>
                                    Monday-Saturday: <br />
                                    11:00 AM - 23:00 PM
                                </p>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>info@restaurant.com</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+12 345 67890</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0">
                        <form role="form" className='contact-form'>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        className='form-control'
                                        id="name"
                                        placeholder='Your Name'
                                        required
                                    />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        name="email"
                                        className='form-control'
                                        id="email"
                                        placeholder='Your Email'
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    name="subject"
                                    className='form-control'
                                    id="subject"
                                    placeholder='Subject'
                                    required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <textarea
                                    name="message"
                                    className='form-control'
                                    id="message"
                                    rows={8}
                                    placeholder='Message'
                                    required
                                ></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">
                                    Your message has been sent. Thank You.
                                </div>
                            </div>
                            <div className="text-center">
                                <button type='submit'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contact
