import React from 'react';
import styles from './NewExpenses.module.css';
import Card from '../UI/Card';
import ExpensesForm from './ExpensesForm';

function NewExpenses() {
  return (
    <Card className={styles.formCard }>
      <ExpensesForm/>
    </Card>
    
  )
}

export default NewExpenses