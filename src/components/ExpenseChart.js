import React from 'react'
import { Chart } from './Chart/Chart'

function ExpenseChart(props) {
  const chartDataPoints =[
    {label:'jan', value: 0},
    {label:'feb', value: 0},
    {label:'mar', value: 0},
    {label:'Apr', value: 0},
    {label:'may', value: 0},
    {label:'jun', value: 0},
    {label:'jul', value: 0},
    {label:'Aug', value: 0},
    {label:'sep', value: 0},
    {label:'oct', value: 0},
    {label:'nov', value: 0},
    {label:'dec', value: 0}
  ];

  for(const expense of props.expenses){
    const expenseMonth = expense.date.getMonth(); // starting at 0 라서 jan은 0임
    chartDataPoints[expenseMonth].value += expense.amount;
  }



  return (
    <Chart dataPoints={chartDataPoints} />
  )
}

export default ExpenseChart