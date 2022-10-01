import React from "react"
import { useNavigate } from 'react-router-dom';
import * as Route from "./Coodinator"

const ApplicationFormPage=()=>{
   
const navigate=useNavigate();

    

    return(
        <>
            <h1>ApplicationFormPage</h1>
            <button onClick={()=>{Route.goToListTrips(navigate)}}>ListTrips</button>
            <button onClick={()=>{Route.goToback(navigate)}}>Voltar</button>
            <button onClick={()=>{Route.goToPageHome(navigate)}}>PageHome</button>
            
        </>
    )
}
export default ApplicationFormPage;