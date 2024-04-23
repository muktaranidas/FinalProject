import { format } from 'date-fns';
import React from 'react';
const AvailableAppointments = ({selectedDate,setSelectedDate}) => {
    return (
        <div>
            {/* <p className='text-center'>You have selected date: {format(selectedDate, "PP")} </p> */}
            <p className='text-center text-secondary  font-bold'>Available Services on {format(setSelectedDate,'PP')}</p>
        </div>
    );
};
export default AvailableAppointments;