import React from 'react'
import styles from './ExpensesForm.module.css'

function ExpensesForm() {
  return (
    <form>
      <div className={styles.container}>
        <div className={styles.formControls}>
          <label className={styles.formLabel}>Title</label>
          <input type="text" />
        </div>
        <div className={styles.formControls}>
          <label className={styles.formLabel}>Amount</label>
          <input type="number" min="0" step='0.01'/>
        </div>
        <div className={styles.formControls}>
          <label className={styles.formLabel}>Date</label>
          <input type="date" min="2023-01-01" />
        </div>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default ExpensesForm