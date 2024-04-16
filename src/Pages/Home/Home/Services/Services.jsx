import React from 'react';
import fluoride from "../../../../assets/images/fluoride.png"
import cavity from "../../../../assets/images/cavity.png"
import whitening from "../../../../assets/images/whitening.png"
import Service from './Service';


const Services = () => {
    const ServicesData = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: "In ed to demonstratlying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
            img:fluoride,
        },
        {
            id: 2,
            name: "Cavity",
            description: "Ied to demonstrateg on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
            img:cavity,
        },
        {
            id: 3,
            name: "Whitening",
            description: "In ptolying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
            img:whitening,
        },
    ]

    return (
        <div className='my-16'>
            <div className='text-center'>
                <h3 className=' text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-[34px] lg:grid-cols-3 md:grid-cols-3 grid-cols-3'>
                {
                    ServicesData.map(service => <Service
                    key={service.id}
                    service={service}>

                    </Service>)
             }

            </div>

            
        </div>
    );
};

export default Services;