import { useState } from "react"
import axios from "axios"
 
export const RestaurantDetails = ()=>{
        const [formdata, setFormdata] = useState({
            Restaurantname : "",
            category :"",
            cost : "",
            rating:"",
            Reviews:"",
            votes:"",
            image:"",
            payment:""
        })

    const handlechange = (e)=>{
        const {id,value}= e.target;
        setFormdata({...formdata,
            [id]:value})

            //console.log(formdata)
    }

    const handlesubmit = (e)=>{
        e.preventDefault();
        axios.post(" http://localhost:8080/Restaurant",formdata).then(alert("registered successfully"))
        .catch(alert("tryagain"))

    }

        return(
            <div  >
            <form   id="Addrestaurant" onSubmit={handlesubmit}  >
                {/* <input  onChange={handlechange}  type="text" id="Restaurantname" placeholder="Restaurant name" />
                <input  onChange={handlechange}  type="text" name="" id="category"  placeholder="category"/>
                <input  onChange={handlechange}  type="Number" name="" id="cost" placeholder="cost for 1" />
                <input  onChange={handlechange}  type="Number" name="" id="rating" placeholder="rating" />
                <input  onChange={handlechange}  type="Number" id="Reviews" placeholder="Reviews" />
                <input  onChange={handlechange}  type="votes" id="votes" placeholder="votes" />
                <input  onChange={handlechange}  type="url"   id="image" placeholder="image url"/>
                <select onChange={handlechange}   id="payment" placeholder="payment method">
                        <option  value="cash">Cash</option>
                        <option value="card">Card</option>
                        <option value="cash and card">Both</option>
                </select>
                <input    type="submit" value="submit"/> */}
 
                <input onChange={handlechange} type="text" id="Restaurantname" placeholder="Restaurant Name" />
                <input onChange={handlechange} type="text" id="category" placeholder="category" />
                <input onChange={handlechange} type="number" id="cost" placeholder="cost" />
                <input onChange={handlechange} type="number" id="Reviews" placeholder="Reviews" />
                <input onChange={handlechange} type="Number" id="rating" placeholder="rating" />
                <input onChange={handlechange} type="text" id="votes" placeholder="votes" />
                <input onChange={handlechange} type="url" id="image" placeholder="imageUrl" />
                <select onChange={handlechange} id="payment" placeholder="Payment Methods" >
                        <option value="cash">Cash</option>
                        <option value="card">Card</option>
                        <option value="upi">UPI</option>
                        <option value="Online | Offline">All Payment Method</option>
                </select>
                <input type="submit" value="Submit"/>

            </form>
            </div>
        )


}