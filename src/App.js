import ExpenseItem from "./components/ExpenseItem";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import { useState } from "react";


function App() {
  
  //data들을 배열->객체에 담아서 사용할 것
  const dummy_expenses= [
    {
      id: Math.random(),
      title: "car cleaning",
      date: new Date(2023, 2, 30),
      amount: 47.56,
    },
    {
      id: Math.random(),
      title: "grocery shopping",
      date: new Date(2021, 2, 2),
      amount:25.64,
    },
    {
      id: Math.random(),
      title: "getting clothes",
      date: new Date(2022, 2, 15),
      amount: 60.43,
    }
  ];
  
  const [expenses, setExpenses] = useState(dummy_expenses)
  
  const addExpenseHanlder =(expense)=>{
      setExpenses((prevExpenses) =>{
        return([expense, ...prevExpenses])
      })
  }
  return (
    <div>
      <h1 className='h1'>가계부 REACT Practice</h1>
      <NewExpenses onAddExpenseData = {addExpenseHanlder}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
