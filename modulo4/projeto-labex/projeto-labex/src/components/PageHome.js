import React from "react"
import { useNavigate } from "react-router-dom"
import * as Route from "./Coodinator"

const PageHome=()=>{
    const navigate=useNavigate();

    return(
        <>
            <h1>Página Home!</h1>
            <button onClick={()=>{Route.goToListTrips(navigate)}}>ListTrips</button>
            <button onClick={()=>{Route.goToLogin(navigate)}}>Login</button>
            
        </>
    )
}
export default PageHome;