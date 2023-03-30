import React from 'react'
import ExpenseDate from './ExpenseDate'
import styles from './ExpenseItem.module.css'

function ExpenseItem(props) {
  return (
    <div className={styles.card}>
      <ExpenseDate date={props.date}/>
      <div>{props.title}</div>
      <div>{props.amount}</div>
    </div>
  )
}

export default ExpenseItem