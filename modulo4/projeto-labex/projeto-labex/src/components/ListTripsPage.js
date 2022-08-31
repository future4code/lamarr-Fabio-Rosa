import React from "react"
import { useNavigate } from 'react-router-dom';
import * as Route from "./Coodinator"

const ListTripsPage=()=>{
    const navigate=useNavigate();

   
    return(
        <>
            <h1>ListTripsPage</h1>
            <button onClick={()=>{Route.goToApplicationForm(navigate)}}>ApplicationForm</button>
            <button onClick={()=>{Route.goToback(navigate)}}>Voltar</button>
            <button onClick={()=>{Route.goToPageHome(navigate)}}>PageHome</button>
            
        </>
    )
}
export default ListTripsPage;