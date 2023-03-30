import React from 'react'
import ExpenseDate from './ExpenseDate'
import styles from './ExpenseItem.module.css'

function ExpenseItem(props) {
  return (
    <div className={styles.card}>
      <ExpenseDate date={props.date}/>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.amount}>${props.amount}</div>
    </div>
  )
}

export default ExpenseItem