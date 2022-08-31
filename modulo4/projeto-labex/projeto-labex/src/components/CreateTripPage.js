import React from "react"
import { useNavigate } from 'react-router-dom';
import * as Route from "./Coodinator"

const CreateTripPage=()=>{
   
const navigate=useNavigate();

    

    return(
        <>
            <h1>CreateTripPage</h1>
            <button onClick={()=>{Route.goToAdminHome(navigate)}}>AdminHome</button>
            <button onClick={()=>{Route.goToApplicationForm(navigate)}}>ApplicationForm</button>
            <button onClick={()=>{Route.goToListTrips(navigate)}}>ListTrips</button>
            <button onClick={()=>{Route.goToLogin(navigate)}}>Login</button>
            <button onClick={()=>{Route.goToTripDetails(navigate)}}>TripDetails</button>
            <button onClick={()=>{Route.goToback(navigate)}}>Voltar</button>
            <button onClick={()=>{Route.goToPageHome(navigate)}}>PageHome</button>
        </>
    )
}
export default CreateTripPage;