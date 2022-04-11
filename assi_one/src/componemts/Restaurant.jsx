import { useState , useEffect } from "react";
import axios from "axios";

export const Restaurant = ()=>{
    
    const [ detail , setDetail] = useState([]);
   const [page , setPage] = useState(1);
   const [rating , setRating] = useState();
   const [order , setOrder] = useState()
   const [payment , setPayment] = useState()
   const [cost , setCost] = useState("cost");
      let pagelimit = 4;

    useEffect(()=>{
       
        axios.get("http://localhost:8080/Restaurant",{
            params:{
                _page: page,
                 _limit:pagelimit,
                 _sort:cost,
                 _order:order,
                 rating_gte:rating,
                 payment:payment
            }
        }).then(Response=>setDetail(Response.data))
        
    },[order,rating,payment,page])

   
    
    return (
        <>

        <button onClick={()=>{setRating(4)}}>4 star</button><button onClick={()=>{setRating(3)}}>3 star</button><button onClick={()=>{setRating(2)}}>2 start</button>
        <br></br>
        <button onClick={()=>{setPayment("cash")}}>Cash</button><button onClick={()=>{setPayment("card")}}>Card</button><button onClick={()=>{setPayment("upi")}}>UPI</button><button onClick={()=>{setPayment("all")}}>All Methods</button>
        <br></br>
        <button onClick={()=>{setOrder("desc")}}>High to Low</button><button onClick={()=>{setOrder("asc")}}>Low to High</button>
        <br></br>

        <div>
        {
           detail.map((e)=>(
               <div key={e.id} style={{display:"flex" , width:"100%", height:"210px" , border:"1px solid gray" , }}>
                   <div key={e.id}><img src={e.image} style={{width:"200px" , height:"180px" , margin:"13px" , borderRadius:"5px"}}/></div>
                   <div style={{display:"flex", gap:"50px"}}>
                       <div style={{textAlign:"left" }}><h2 style={{color:""}}>{e.Restaurantname}</h2>
                   <h5>{e.category}</h5>
                   <h5>Cost ₹{e.cost} for one</h5>
                   <h5>Accepts {e.payment} payment</h5>
                   </div>
                   <div >
                   <h3 style={{ background:"#72a02b" , width:"70px", borderRadius:"4px", height:"30px"}}>{e.rating} ⭐</h3>
                   <h5 style={{textAlign:"left"}}>{e.votes} votes</h5>
                   <h5 style={{textAlign:"left"}}>{e.Reviews} reviews</h5>
                   
                   </div>

                   </div>

               </div>

           ))
        }

        <button disabled={page === 1} 
        onClick={()=>setPage((page)=> page-1)}
        >Prev</button>

        <button onClick={()=>setPage((page)=>page+1)}>Next</button>
        </div>
        </>
    )
}