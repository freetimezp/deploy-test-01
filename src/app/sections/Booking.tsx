"use client";
import React, { useState } from 'react';
import './booking.css';
import SectionTitle from '../components/SectionTitle';

const Booking = () => {
    const initialState = {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        people: '',
        message: '',
        validate: ''
    };

    const [text, setText] = useState(initialState);

    const handleTextChange = (e: Event | any) => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value, validate: '' });
    };

    const handleSubmitBooking = async (e: Event | any) => {
        e.preventDefault();

        if (text.name === '' || text.email === '' || text.date === '' || text.time === '') {
            setText({ ...text, validate: 'incomplete' });
            return;
        }

        try {
            const response = await fetch('https://deploy-test-01.vercel.app/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(text)
            });

            setText({ ...text, validate: 'loading' });

            const result = await response.json();
            console.log(result);
            if (result) {
                setText({ ...text, validate: 'success' });
                console.log('Success', result);
            }
        } catch (error) {
            setText({ ...text, validate: 'error' });
            console.log('Error', error);
        }
    };

    return (
        <section id="book-a-table" className='book-a-table'>
            <div className='container' data-aos="fade-up">
                <SectionTitle title="Reservation" subtitle="Book a Table" />

                <form
                    onSubmit={handleSubmitBooking}
                    className='booking-form'
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="row">
                        <div className="col-lg-4 col-md-6 form-group">
                            <input
                                type="text"
                                name='name'
                                placeholder='Your Name'
                                className='form-control'
                                value={text.name}
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input
                                type="email"
                                name='email'
                                placeholder='Your Email'
                                className='form-control'
                                value={text.email}
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input
                                type="text"
                                name='phone'
                                placeholder='Your Phone'
                                className='form-control'
                                value={text.phone}
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input
                                type="date"
                                name='date'
                                placeholder='Date'
                                className='form-control'
                                value={text.date}
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input
                                type="time"
                                name='time'
                                placeholder='Time'
                                className='form-control'
                                value={text.time}
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input
                                type="number"
                                name='people'
                                placeholder='# of People'
                                className='form-control'
                                value={text.people}
                                onChange={handleTextChange}
                            />
                        </div>
                    </div>
                    <div className="mt-3 form-group">
                        <textarea
                            className='form-control'
                            name="message"
                            value={text.message}
                            rows={5}
                            placeholder='Message'
                            onChange={handleTextChange}
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        {text.validate === 'loading' && (
                            <div className='loading'>Send Booking</div>
                        )}
                        {text.validate === 'incomplete' && (
                            <div className='error-message'>
                                Please fill in all above details for booking a table
                            </div>
                        )}
                        {text.validate === 'success' && (
                            <div className='sent-message'>
                                Your booking request was sent. We will call back or send an
                                email to confirm your reservation. Thank You!
                            </div>
                        )}
                        {text.validate === 'error' && (
                            <div className='error-message'>Server error</div>
                        )}
                    </div>
                    <div className="text-center">
                        <button type="submit">Book a Table</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Booking;
