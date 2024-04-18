import React from 'react';
import bgFooter from "../../../assets/images/footer.png"

const Footer = () => {
    return (
        <div className='my-10 '>
            <section className="footer flex justify-between p-10 bg-base-300 text-base-content" style={{
                background: `url(${bgFooter})`,
                backgroundSize:"cover"
        }}>
  <nav className=' '>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Emergency Checkup</a>
    <a className="link link-hover">Monthly Checkup</a> 
    <a className="link link-hover">Weekly Checkup</a>
    <a className="link link-hover">Deep Checkup</a>
  </nav> 
  <nav>
    <h6 className="footer-title">ORAL HEALTH</h6> 
    <a className="link link-hover">Fluoride Treatment</a>
    <a className="link link-hover">Cavity Filling</a>
    <a className="link link-hover">Teath Whitening</a>
   
  </nav> 
  <nav>
    <h6 className="footer-title">Our Addre</h6> 
    <a className="link link-hover">New York - 101010 Hudson</a>

  </nav> 
  
            </section>
            <h2 className='text-center'>Copyright 2022 All Rights Reserved</h2>
        </div>
    );
};

export default Footer;