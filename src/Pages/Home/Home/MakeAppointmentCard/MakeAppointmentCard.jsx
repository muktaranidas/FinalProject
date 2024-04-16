import React from 'react';
import treatment from "../../../../assets/images/treatment.png"

const MakeAppointmentCard = () => {
    return (
        <div>
            <div className="hero my-12 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center w-[500px] lg:text-left lg:ml-[102px] ">
      <h1 className="text-5xl  font-bold  ">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturiProvident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
            </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <img src={treatment} alt="" />
              
            </div>
            
  </div>
</div>
        </div>
    );
};

export default MakeAppointmentCard;