import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {

  //data들을 배열->객체에 담아서 사용할 것
  const expenses= [
    {
      id: Math.random(),
      title: "car cleaning",
      date: new Date(2023, 2, 30),
      amount: 47.56,
    },
    {
      id: Math.random(),
      title: "grocery shopping",
      date: new Date(2023, 2, 2),
      amount:25.64,
    },
    {
      id: Math.random(),
      title: "getting clothes",
      date: new Date(2023, 2, 15),
      amount: 60.43,
    }
  ];

  return (
    <div>
      <h1>가계부 REACT Practice</h1>
      <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount}></ExpenseItem>
    </div>
  );
}

export default App;
