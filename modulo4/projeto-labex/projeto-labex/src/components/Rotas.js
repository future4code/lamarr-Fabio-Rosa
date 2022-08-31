import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ListTripsPage from "./ListTripsPage";
import PageHome from "./PageHome";
import ApplicationFormPage from "./ApplicationFormPage";
import LoginPage from "./LoginPage";
import TripDetailsPage from "./TripDetailsPage";
import CreateTripPage from "./CreateTripPage";
import AdminHomePage from "./AdminHomePage"

const Rotas=()=>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageHome/>} />
                <Route path="/ApplicationForm" element={<ApplicationFormPage/>} />
                <Route path="/ListTrips" element={<ListTripsPage/>} />
                <Route path="/Login" element={<LoginPage/>} />
                <Route path="/TripDetails" element={<TripDetailsPage/>} />
                <Route path="/CreateTrip" element={<CreateTripPage/>} />
                <Route path="/AdminHome" element={<AdminHomePage/>} />
            </Routes>
        </BrowserRouter>
    )
}
 export default Rotas;