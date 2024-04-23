import React from 'react';
import './menuItem.css';
import Image from 'next/image';
import Link from 'next/link';

const MenuItem = ({ item }: {
    item: {
        id: number;
        name: string;
        preview: string;
        price: number;
        ingredients: string;
    }
}) => {
    return (
        <div className='col-lg-6 menu-item'>
            <Image src={item.preview} alt="preview" className='menu-img' width={70} height={70} />

            <div className="menu-content">
                <Link href={`/menu/${item.id}`}>
                    {item.name}
                </Link>
                <span>${item.price}</span>
            </div>
            <div className="menu-ingredients">
                {item.ingredients}
            </div>
        </div>
    );
}

export default MenuItem;
