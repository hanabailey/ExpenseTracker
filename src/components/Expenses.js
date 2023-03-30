import React from "react";
import styles from "./Expenses.module.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className={styles.expenseCard}>
      <ExpenseItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        amount={props.expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        amount={props.expenses[2].amount}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;