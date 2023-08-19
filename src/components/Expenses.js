import React, { useState } from "react";
import styles from "./Expenses.module.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./UI/Card";
import ExpensesFilter from "./NewExpenses/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const onFilteredYear = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense =>{
    return( expense.date.getFullYear().toString()===selectedYear)
  })
  
  // 변수 만들고 바로 if문 써서 덮어씌우는 형식으로 만들기
  let expenseList = <p>No expense founded</p>

  if(filteredExpenses.length>0){
    expenseList = filteredExpenses.map((expense,index) => (
      <ExpenseItem
        key={expense.index}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ))
  }
  return (
    
    <Card className={styles.expenseCard}>
      <ExpensesFilter
        selectedYear={selectedYear}
        onFilteredYear={onFilteredYear}
      ></ExpensesFilter>
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList expense ={filteredExpenses}/>


      {/* 삼항연산자로 그냥 필터링하는 방법 */}
      {/* {filteredExpenses.length === 0? (<p>No expense founded.</p> ):
      (filteredExpenses.map((expense,index) => (
        <ExpenseItem
          key={expense.index}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      )))
    }    */}


    </Card>
  );
}

export default Expenses;
