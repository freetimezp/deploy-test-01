import React from 'react';
import './specialItem.css';
import Image from 'next/image';

const SpecialItem = ({ item }: {
    item: {
        id: number;
        image: string;
        title: string;
        subtitle: string;
        content: string;
        active: boolean;
    }
}) => {
    return (
        <div id={`tab-${item.id.toString()}`}
            className={`tab-pane ${item.active ? 'active show' : ''}`}>
            <div className="row">
                <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>{item.title}</h3>
                    <p className='fst-italic'>{item.subtitle}</p>
                    <p>{item.content}</p>
                </div>
                <div className="col-lg-4 text-center order-1 order-lg-2">
                    <Image src={item.image} alt="special" className='img-fluid' width={200} height={200} />
                </div>
            </div>
        </div>
    );
}

export default SpecialItem;
