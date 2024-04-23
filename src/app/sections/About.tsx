"use client";
import React from 'react';
import './about.css';

import aboutImage from '../../../public/assets/images/about.jpg';
import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className='about'>
            <div className='container' data-aos="fade-up">
                <div className='row'>
                    <div className='col-lg-6 order-1 order-lg-2' data-aos="zoom-in"
                        data-aos-delay="100">
                        <div className='about-img'>
                            <Image src={aboutImage} alt="about" />
                        </div>
                    </div>
                    <div className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content'>
                        <h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h3>
                        <p className="fst-italic">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
                            tempora commodi aspernatur odit dignissimos numquam quasi facere
                            velit omnis ab!
                        </p>
                        <ul>
                            <li>
                                <i className="bi bi-check-circle"></i>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit asae.
                            </li>
                            <li>
                                <i className="bi bi-check-circle"></i>
                                Lorem ipsum dolor sit, amet consectetur volupe adipisicing elit asae.
                            </li>
                            <li>
                                <i className="bi bi-check-circle"></i>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum,
                                voluptates ut quae, quas laboriosam impedit debitis nesciunt accusantium
                                magni, laudantium porro consequuntur laborum voluptate!
                            </li>
                        </ul>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iusto
                            reiciendis magni assumenda alias ipsum perspiciatis doloribus perferendis.
                            Sint saepe maiores provident eos consectetur necessitatibus voluptatum pariatur
                            officia tempora, dolores, doloremque voluptas nobis quos eligendi magni dolorem
                            praesentium, nihil iure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
