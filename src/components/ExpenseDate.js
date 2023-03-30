import React from 'react'
import styles from './ExpenseDate.module.css'

function ExpenseDate(props) {
  const year= props.date.getFullYear();
  const month= props.date.toLocaleString('en-us',{ month: "long" });
  const day= props.date.toLocaleString('en-us',{ day:"2-digit"})
 
  return (
    <div className={styles.dateFrame}>
      <div className={styles.yearFont}>{year}</div>
      <div className={styles.monthFont}>{month}</div>
      <div className={styles.dayFont}>{day}</div>

    </div>
  )
}

export default ExpenseDate