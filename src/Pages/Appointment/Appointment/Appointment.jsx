import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AppointmentBanner/AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointments selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}></AvailableAppointments>
        </div>
    );
};

export default Appointment;