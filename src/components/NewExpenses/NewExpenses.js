import React from 'react';
import styles from './NewExpenses.module.css';
import Card from '../UI/Card';
import ExpensesForm from './ExpensesForm';

function NewExpenses(props) {
  const ExpensesDataHandler =(savedExpensesData )=>{
    const expenseData ={
      ...savedExpensesData,
      id: Math.random.toString()
    }
   

    // 아래코드에서 매개변수로 원하는 정보 넘겨주는거 잊으면 안된다!
    props.onAddExpenseData(expenseData);
    }
  return (
    <Card className={styles.formCard}>
      <ExpensesForm onSaveExpesesData ={ExpensesDataHandler}/>
    </Card>
    
  )
}

export default NewExpenses