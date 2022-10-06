import { useState } from "react";
import Expenses from "../Expense/Expenses";
// import NewExpense from "./NewExpense";
import "./ExpenseForm.css";



function ExpenseForms(props)
{

const [x1,setx1]=useState('')
const [x2,setx2]=useState('')
const [x3,setx3]=useState('')


function chg(event){
    setx1(event.target.value)
}

function chg1(event){
    setx2(event.target.value)
}

function chg2(event){
    setx3(event.target.value)
}




function prvn(event){
    event.preventDefault();
    const expenseData={
        title:x1,
        amnt:x2,
        date:new Date(x3),
        id:Math.random()*100
        }
        props.onChg(expenseData);
        // console.log(expenseData)
    // console.log(x1)
    // console.log(x2)
    // console.log(x3)
    setx1("")
    setx2("")
    setx3("")
    

}  






return (
    
     <div id="For">
 
 <form   onSubmit={prvn}>
    <div id="here">

      <label>  TITLE:      
     <input  type="text" value={x1}  onChange={chg}  />
    </label>

      <label>AMT: 
    <input type="number" value={x2} onChange={chg1}  /> 
    </label>
    
      <label>DATE:
    <input type="date"  value={x3}   min="2020-01-01"  max="2023-12-31"    onChange={chg2}  /> 
    </label>
    
     </div>

     <p>     <button type="submit" >ADD</button>

<button  type="button"  onClick={props.cancel} >CANCEL</button></p>
 




</form>
{/* <Expenses></Expenses> */}
{/* <NewExpense></NewExpense> */}


     </div>


)
}
export default ExpenseForms;