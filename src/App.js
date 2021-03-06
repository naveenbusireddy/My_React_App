// import logo from './logo.svg';
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    { title : "Car Insurance",
      amount : 294.63,
      date : new Date(2022, 2, 10)  
    },
    { title : "Bike Insurance",
      amount : 105.63,
      date : new Date(2021, 11, 30),  
    },
    { title : "Accidental Insurance",
      amount : 94.63,
      date : new Date(2020, 7, 30),  
    },

  ]
  return (
    <div>
      <h2>Welcome to React App.</h2>
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}></ExpenseItem>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}></ExpenseItem>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
