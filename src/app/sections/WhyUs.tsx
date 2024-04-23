import React, { useState, useEffect } from 'react';
import './whyUs.css';

import WhyUsCard from '../components/WhyUsCard';
import SectionTitle from '../components/SectionTitle';

// async function getWhyUsData() {
//     const res = await fetch('http://localhost:3000/api/whyus');
//     return res.json();
// }

const whyUs = [
    {
        id: 1,
        title: 'Lorem Ipsum',
        content: `Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
          consectetur ducimus vero placeat`,
    },
    {
        id: 2,
        title: 'Repellat Nihil',
        content: `Dolorem est fugiat occaecati voluptate velit esse. Dicta
      veritatis dolor quod et vel dire leno para dest`,
    },
    {
        id: 3,
        title: 'Ad ad velit qui',
        content: `Molestiae officiis omnis illo asperiores. Aut doloribus vitae
      sunt debitis quo vel nam quis`,
    },
];


export default function WhyUs() {
    const [items, setItems] = useState<[] | any>([]);

    useEffect(() => {
        setItems(whyUs);
    }, []);

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


