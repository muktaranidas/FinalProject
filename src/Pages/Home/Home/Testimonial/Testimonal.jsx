import React from 'react';
import moduleName from "../../../../assets/icons/quote.svg";
import people1 from "../../../../assets/images/people1.png";
import people2 from "../../../../assets/images/people2.png";
import people3 from "../../../../assets/images/people3.png";
import TestimonialPeople from './TestimonialPeople';

const Testimonal = () => {
    const reviewsData = [
        {
            _id:1,
            name: "Sudipto Dey",
            reviewData: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            img: people1,
        },
        {
            _id:2,
            name: "Sudipto Dey",
            reviewData: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            img: people2,
        },
        {
            _id:3,
            name: "Sudipto Dey",
            reviewData: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            img: people3,
        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl font-bold text-secondary'>Testimonial</h4>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={ moduleName} alt="" className='lg:w-48 w-28' />
                </div>



            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {
                    reviewsData.map(review => <TestimonialPeople
                        key={review._id}
                        review={review}
                    >

                    </TestimonialPeople>)
                }
            </div>
            <div>

            </div>

        </section>
    );
};

export default Testimonal;
