import React from 'react';
import bg from "../../../../assets/images/appointment.png"
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <div className="py-16" style={
            {
                background:`url(${bg})`
            }
        }> 
            <div className=''>
                
                <div>
                    <h2 className='text-secondary font-bold text-center'>Contact Us</h2>
                <h3 className='text-white text-3xl font-xl mb-6 text-center'>Stay Connected with us</h3>
                </div>
                <div className='grid gap-4 justify-center  '>
                    
                <input type="email" placeholder="Email Address" className="input input-bordered w-96" />
                <input type="text" placeholder="Subject" className="input input-bordered  w-96" />
                <input type="text" placeholder="Your message" className="input input-bordered  w-96" />
                  <div className='mx-auto'>
                     <PrimaryButton className="">Get Started</PrimaryButton>
                </div> 
               
                </div>
                
          </div>
            
        </div>
    );
};

export default ContactUs;