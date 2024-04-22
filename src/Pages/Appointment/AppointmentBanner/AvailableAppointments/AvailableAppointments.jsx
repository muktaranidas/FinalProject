import React from 'react';

const AvailableAppointments = () => {
    return (
        <div>
            <p className='text-center'>You have selected date: {format(selectedDate,"PP")} </p>
        </div>
    );
};

export default AvailableAppointments;