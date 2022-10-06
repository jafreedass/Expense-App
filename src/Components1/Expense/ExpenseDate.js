import {useState} from "react";
import './ExpenseDate.css';
// import ExpenseItem from "./ExpenseItem";

function ExpenseDate(props) 
{
    const month=props.q.toLocaleString("en-US",{month:"long"});
    const date=props.q.toLocaleString("en-US",{day:"2-digit"});
    const year=props.q.getFullYear();

    // const [m1, setm1]=useState(month)


    
    // function  sub()
     
    // {
        
    //     setm1 ("updated")
    //     console.log(m1)

    // }

    return (
        <div>
        <div>
            
            <div id="main">

            <p id="a">{month}<br></br> {date}<br>
            </br>
            {year}
            
            {/* <button id="btn1" type="button" onClick={sub} > <h3>UPDATE</h3>
                </button> */}
                
                </p>
            </div></div></div>
    )}

    export default ExpenseDate;