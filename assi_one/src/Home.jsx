
import { useNavigate } from "react-router-dom"
export const Home = ()=>{
      const navigate = useNavigate();
    return(
         <div style={{background:"green"}}>
        <button onClick={()=>{navigate("/add-details")}}> show data</button>
        <button onClick={()=>{navigate("/restaurants")}}>add data</button>
        </div>
    )
}