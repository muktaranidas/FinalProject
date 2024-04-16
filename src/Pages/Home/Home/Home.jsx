import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";
import MakeAppointmentCard from "./MakeAppointmentCard/MakeAppointmentCard";

// import React from 'react';
const Home = () => {
    return (
        <div className="mx-5">
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppointmentCard></MakeAppointmentCard>
        </div>
    );
};

export default Home;