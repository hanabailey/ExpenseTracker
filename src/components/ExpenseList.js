import React, { useLayoutEffect } from 'react'
import ExpenseItem from './ExpenseItem'
import styles from './Expenselist.module.css'
import Card from './UI/Card'

const ExpenseList = (props) => {


  if(props.expense.length === 0){
    return <h2 className={styles.expenseList__fallback}>No expense founded</h2>
  }
  return (
    <ul className={styles.expenseList}>
       { props.expense.map((expense,index) => (
      <ExpenseItem
        key={expense.index}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ))}
    </ul>
  )
}

export default ExpenseList