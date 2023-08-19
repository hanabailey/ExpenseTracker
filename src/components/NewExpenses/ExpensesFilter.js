import React from 'react'
import styles from './ExpensesFilter.module.css'

function ExpensesFilter(props) {

  const filteredYearHanlder =(e)=>{
      props.onFilteredYear(e.target.value)
  }
  return (
    <div className={styles.selectYearContainer}>
      <label>Filtered By Year</label>
      <select className={styles.select} onChange ={filteredYearHanlder} value={props.selectedYear}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  )
}

export default ExpensesFilter