// import logo from './logo.svg';
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  const expensesList = [
    {
      title: "Car Insurance",
      amount: 294.63,
      date: new Date(2022, 2, 10),
    },
    {
      title: "Bike Insurance",
      amount: 105.63,
      date: new Date(2021, 11, 30),
    },
    {
      title: "Accidental Insurance",
      amount: 94.63,
      date: new Date(2020, 7, 30),
    },
  ];
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }
  return (
    <div>
      <h2>Welcome to React App.</h2>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expenses items={expensesList}></Expenses>
    </div>
  );
}

export default App;
