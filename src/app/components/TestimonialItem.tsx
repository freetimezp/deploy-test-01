/* eslint-disable @next/next/no-img-element */
import React from 'react';
import './testimonialItem.css';

const TestimonialItem = ({ item }: {
    item: {
        id: number;
        content: string;
        avatar: string;
        client: string;
        position: string;
    }
}) => {
    return (
        <div className='testimonial-item'>
            <p>
                <i className="bx bxs-quote-all-left qoute-icon-left"></i>
                {item.content}
                <i className="bx bxs-quote-all-right qoute-icon-right"></i>
            </p>
            <img src={item.avatar} alt="avatar" className='testimonial-img' />
            <h3>{item.client}</h3>
            <h4>{item.position}</h4>
        </div>
    );
}

export default TestimonialItem;
