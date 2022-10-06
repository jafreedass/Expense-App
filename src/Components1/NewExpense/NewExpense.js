import { useState } from "react";
import ExpenseForms from "./ExpenseForms";
import "./NewExpenses.css"

function NewExpense(props)
{
  const[edit,setEdit]=useState(false)

function editing(){
    setEdit(true)
}

function cancel(){
    setEdit(false)
}

    function chang(expen){
        const expenseData={
            ...expen
        }
        props.chang(expenseData)
        setEdit(false)
        // console.log('in newexp.js')
        // console.log(expenseData)


    }

return(
    <div>
       
      {!edit && <button id="b1" onClick={editing}><h3>ADD EXPENSES</h3> </button>}

{edit && <ExpenseForms onChg = {chang} cancel={cancel}></ExpenseForms> }


</div>
)

}
export default NewExpense;