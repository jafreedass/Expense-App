import { useState } from "react";
// import ExpenseDate from "./ExpenseDate";
// import ExpenseDate from "./ExpenseDate";
import "./ExpenseFilter.css";

function ExpenseFilter(props){

function filt(event){
    // console.log(event.target.value)
   props.onfilt(event.target.value)
}

    return(


        <div style={{display:"flex"}}>
        <h3 style={{color:"white",textDecoration:"underline"}}>EXPENSE FILTER</h3>
        {/* <input ></input> */}
       <p><select id='jeff1' value={props.filts} onChange={filt}>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            
        </select></p>


<div>

    


</div></div>





    )
} 
export default ExpenseFilter;