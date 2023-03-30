import ExpenseItem from "./components/ExpenseItem";
import "./App.css";
import Expenses from "./components/Expenses";

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
      <h1 className='h1'>가계부 REACT Practice</h1>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
