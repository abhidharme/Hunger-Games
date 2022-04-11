
import {Restaurant} from "./Restaurant"
import { RestaurantDetails } from "./Adddata"
import { Route , Routes } from "react-router-dom"
export const RouteData =()=>{

    return(
        <>
        <Routes>
            <Route path="/add-details" element={<Restaurant />} />
            <Route path="/restaurants" element={<RestaurantDetails />} />
     
        </Routes>
        </>
    )
}