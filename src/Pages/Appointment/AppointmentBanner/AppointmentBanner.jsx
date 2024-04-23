// import React, { useState } from 'react';
import appointmentBannerChair from "../../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
  
    return (
        <div>
            <div className="hero my-6 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={appointmentBannerChair} className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" />
    <div className='mr-6'>
              <DayPicker
                mode='single'
                selected={selectedDate}
                onSelect={setSelectedDate}

              />
              
             
              
    </div>
  </div>
</div>
        </div>
    );
};

export default AppointmentBanner;