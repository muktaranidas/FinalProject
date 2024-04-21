import React, { useState } from 'react';
import appointmentBannerChair from "../../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <div className="hero my-6 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={appointmentBannerChair} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='mr-6'>
              <DayPicker
                mode='single'
                selected={selectedDate}
                onSelect={setSelectedDate}

              />
              <p>You have selected date: {format(selectedDate,"PP")} </p>
              
    </div>
  </div>
</div>
        </div>
    );
};

export default AppointmentBanner;