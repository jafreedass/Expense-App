// import ExpenseForm from './ExpenseForm';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';

const Expenses = (props) => {
    
const [filter,setFilter]=useState("2023")


const filte=(filteed)=>{
    setFilter(filteed) 
}

const filterExpenses=props.expenses.filter((expense)=>
{
    return expense.date.getFullYear().toString() === filter;
})



    return(


        // <div>
        //      <ExpenseForm  ></ExpenseForm>
        // </div>





<div id="jeff" >
   

   <ExpenseFilter filts={filter} onfilt={filte} ></ExpenseFilter>
   {  filterExpenses.length === 0 ?  (<h3 style={{textAlign:"center",color:"white"}}>expense not found</h3>) : (filterExpenses.map((expe)=>(
    <ExpenseItem
    key ={expe.id}
    A={expe.date}
    B={expe.title}
    C={expe.amnt}
    />
   )))}
{/* 
<ExpenseItem A={props.expenses[0].date} B={props.expenses[0].title} C={props.expenses[0].amnt}></ExpenseItem>
<ExpenseItem A={props.expenses[1].date} B={props.expenses[1].title} C={props.expenses[1].amnt}></ExpenseItem>
<ExpenseItem A={props.expenses[2].date} B={props.expenses[2].title} C={props.expenses[2].amnt}></ExpenseItem>
<ExpenseItem A={props.expenses[3].date} B={props.expenses[3].title} C={props.expenses[3].amnt}></ExpenseItem>
<ExpenseItem A={props.expenses[4].date} B={props.expenses[4].title} C={props.expenses[4].amnt}></ExpenseItem> */}
</div>
    )}

export default Expenses;