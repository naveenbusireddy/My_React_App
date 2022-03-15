// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const DummyExpenses = [
  {
    id: 1001,
    title: "Car Insurance",
    amount: 294.63,
    date: new Date(2022, 2, 10)
  },
  {
    id: 1002,
    title: "Bike Insurance",
    amount: 105.63,
    date: new Date(2021, 11, 30)
  },
  {
    id: 1003,
    title: "Accidental Insurance",
    amount: 94.63,
    date: new Date(2020, 7, 30)
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    // console.log("In App.js");
    // console.log(expense);
  };

  return (
    <div>
      <h2>Welcome to React App.</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
