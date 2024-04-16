
// import MakeAppointmentCard from "./MakeAppointmentCard/MakeAppointmentCard";

import Banner from "./Banner/Banner";
import DentalcareHomePage from "./DentalCareHomePage/DentalCareHomePage";
import InfoCards from "./InfoCards/InfoCards";
import MakeAppointmentHomeCard from "./MakeAppointmentHomeCard/MakeAppointmentHomeCard";
import Services from "./Services/Services";

// import React from 'react';
const Home = () => {
    return (
        <div className="mx-5">
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalcareHomePage></DentalcareHomePage>
            <MakeAppointmentHomeCard></MakeAppointmentHomeCard>
        </div>
    );
};

export default Home;