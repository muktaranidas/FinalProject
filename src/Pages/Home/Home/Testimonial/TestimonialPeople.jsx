import React from 'react';

const TestimonialPeople = ({ review }) => {
    const  { name, img, reviewData, location } = review;
    return (
        <div className="card  shadow-xl">
  <div className="card-body">
    {/* <h2 className="card-title">Card title!</h2> */}
                <p>{reviewData}</p>
    <div className="flex mt-6">
                    <div className='flex items-center'>
                        <div className="avatar">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img} />
  </div>
</div>
                    </div>
                    <div className=' ml-6 flex flex-col justify-center '>
                        <h2>{name}</h2>
                        <h3>{ location}</h3>
                    </div>
    </div>
  </div>
</div>
    );
};

export default TestimonialPeople;