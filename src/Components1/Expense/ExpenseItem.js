import ExpenseDate from "./ExpenseDate"; 
import {useState} from "react";
import Card from "../UI/Card";
import './ExpenseItem.css';

function ExpenseItem(props) {
    // const month=props.A.toLocaleString("en-US",{month:"long"});
    // const date=props.A.toLocaleString("en-US",{day:"2-digit"});
    // const year=props.A.getFullYear();
        // const title=props.B;
        // const amnt=props.C;
    // const [title , settitle]=useState(props.B)


    
    // function add()
     
    // {
        
    //     settitle ("updated")
    //     console.log(title)

    // }

    
    
        return (
            
            <div>
                
                <Card id="main">

                {/* <ExpensuuDate ></ExpensuuDate> */}
                
                <ExpenseDate q={props.A}/>
                
                <h3 id="b">{props.B}</h3>
                <h4 id="c"> ₹{props.C}</h4>

                {/* <div id="has"> */}
                {/* <button type="button"  onClick={add}> <h4>UPDATE</h4> */}
                {/* </button> */}
                {/* </div> */}
               
 
    
            </Card>
            <br></br>
            </div>
    
        );
    
    }
    export default ExpenseItem;