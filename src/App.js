
import './App.css';
import ExpenseForms from './Components1/NewExpense/ExpenseForms';
// import ExpenseItem from './Components1/Expense/ExpenseItem';
import Expenses from './Components1/Expense/Expenses';
import NewExpense from './Components1/NewExpense/NewExpense';
import { useState } from 'react';
// import ExpenseDate from './Components/ExpenseDate';







  const exp =[
    {
      id:1,
      date:new Date(2022,1,5),
      title:"tata salt",
      amnt:"200"
    },
    {
      id:2,
      date:new Date(2020,12,5),
      title:"groceries",
      amnt:"20000"
    },
    {
      id:3,
      date:new Date(2022,12,13),
      title:"ambani petrol",
      amnt:"60000"
    },
    {
      id:4,
      date:new Date(2020,7,3),
      title:"george bush",
      amnt:"70000"
    }, 
    {
      id:5,
      date:new Date(2019,9,1),
      title:"dog bark",
      amnt:"1000000"
    }
  ]
  
function App() {

  const[changed,setChanged]=useState(exp)

//   function changed(expen){
   
//     console.log('in App.js')
//     console.log(expen)
   

// }

function addinfo(expe){
  setChanged((previous) =>
  {
    return[expe, ...previous]
  })
}
  

  return (
    <div>
      <h2 style={{color:"white",textDecoration:"underline"}}>EXPENSES FORM VALIDATION</h2>

      <div style={{color:"black"}}>


        <NewExpense chang={addinfo}></NewExpense>
      <Expenses expenses={changed}/>
      </div>

   

     </div>

  );
}

export default App;
