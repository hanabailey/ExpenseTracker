import React from 'react'
import styles from './ExpensesForm.module.css'
import { useState } from 'react';

function ExpensesForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler =(event)=>{ 
    setEnteredTitle(event.target.value);
  }
  const amountChangeHandler =(event)=>{ 
    setEnteredAmount(event.target.value);
  }
  const dateChangeHandler =(event)=>{ 
    setEnteredDate(event.target.value);
  }

  const submitHandler=(event)=>{
    event.preventDefault();

    //데이터를 저장해줄 object만들어서 들어온 값 넣어주기 
    const expenseData = {
      title : enteredTitle,
      amount : enteredAmount,
      date : new Date(enteredDate)
    }

    props.onSaveExpesesData(expenseData);
    //form이 제출되고 나서 빈칸으로 만들어주기 
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
  }


  return (
    <form onSubmit={submitHandler}>
      <div className={styles.container} >
        <div className={styles.formControls}>
          <label className={styles.formLabel}>Title</label>
          <input type="text" className={styles.input} onChange={titleChangeHandler} value={enteredTitle}/>
        </div>
        <div className={styles.formControls}>
          <label className={styles.formLabel}>Amount</label>
          <input type="number" min="0" step='0.01' className={styles.input} onChange={amountChangeHandler} value={enteredAmount}/>
        </div>
        <div className={styles.formControls}>
          <label className={styles.formLabel}>Date</label>
          <input type="date" min="2023-01-01" className={styles.input} onChange={dateChangeHandler} value={enteredDate}/>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Submit</button>
      </div>
      
    </form>
  )
}

export default ExpensesForm