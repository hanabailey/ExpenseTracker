import React from 'react'
import ExpenseDate from './ExpenseDate'
import styles from './ExpenseItem.module.css'
import Card from './UI/Card';

function ExpenseItem(props) {
  return (
    <Card className={styles.item}>
      <ExpenseDate date={props.date}/>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.amount}>${props.amount}</div>
    </Card>
  )
}

export default ExpenseItem