import React from 'react';
import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: "Opening Hours",
            description: "Open 9.00 am to 5.00pm everyday",
            icon: clock,
            bgClass: "bg-gradient-to-r from-primary to-secondary",
        },
        {
            id: 2,
            name: "Visit our location",
            description: "Open 9.00 am to 5.00pm everyday",
            icon: marker,
            bgClass: "bg-gradient-to-r from-primary to-secondary",
        },
        {
            id: 3,
            name: "Contact us now",
            description: "Open 9.00 am to 5.00pm everyday",
            icon: phone,
            bgClass: "bg-gradient-to-r from-primary to-secondary",
        },
    ]
    return (
        <div className='grid gap-6 mt-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                cardData.map(card => 
                    <InfoCard
                        key={card.id}
                        card={card}
                    >

                    </InfoCard>
                )
            }
        </div>
    );
};

export default InfoCards;