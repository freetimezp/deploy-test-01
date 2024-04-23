import React from 'react';
import './whyUs.css';

import WhyUsCard from '../components/WhyUsCard';
import SectionTitle from '../components/SectionTitle';

async function getWhyUsData() {
    const res = await fetch('http://localhost:3000/api/whyus');
    return res.json();
}

export default async function WhyUs() {
    const items: [] = await getWhyUsData();

    return (
        <section id="why-us" className='why-us'>
            <div className="container">
                <SectionTitle title="Why Us" subtitle="Why choose our restaurant" />

                <div className="row">
                    {items && items.length > 0 &&
                        items.map((item: { id: number; title: string; content: string }) => (
                            <WhyUsCard item={item} key={item.id} />
                        ))}
                </div>
            </div>
        </section>
    );
}


