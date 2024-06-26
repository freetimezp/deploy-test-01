/* eslint-disable @next/next/no-async-client-component */
import React from 'react';
import './chefs.css';
import SectionTitle from '../components/SectionTitle';
import ChefItem from '../components/ChefItem';

async function getChefsData() {
    const res = await fetch('https://deploy-test-01.vercel.app/api/chefs');
    return res.json();
}

export default async function Chefs() {
    const items: [] = await getChefsData();

    return (
        <section id="chefs" className='chefs'>
            <div className="container" data-aos="fade-up">
                <SectionTitle title="Chefs" subtitle="Our Professional Chefs" />

                <div className="row">
                    {items && items.length > 0 && items.map((item: {
                        id: number;
                        name: string;
                        photo: string;
                        position: string;
                        delay: string;
                    }) => (
                        <ChefItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

