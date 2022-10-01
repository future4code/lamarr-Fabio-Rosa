import React from "react"
import { useNavigate } from "react-router-dom"
import * as Route from "./Coodinator"

const TripDetailsPage=()=>{
   
    const navigate=useNavigate();

    

    return(
        <>
            <h1>TripDetailsPage</h1>
            <button onClick={()=>{Route.goToAdminHome(navigate)}}>AdminHome</button>
            <button onClick={()=>{Route.goToApplicationForm(navigate)}}>ApplicationForm</button>
            <button onClick={()=>{Route.goToListTrips(navigate)}}>ListTrips</button>
            <button onClick={()=>{Route.goToLogin(navigate)}}>Login</button>
            <button onClick={()=>{Route.goToCreateTrip(navigate)}}>CreateTrip</button>
            <button onClick={()=>{Route.goToback(navigate)}}>Voltar</button>
            <button onClick={()=>{Route.goToPageHome(navigate)}}>PageHome</button>
            
        </>
    )
}
export default TripDetailsPage;