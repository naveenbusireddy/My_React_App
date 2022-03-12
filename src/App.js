// import logo from './logo.svg';
import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  const expensesList = [
    { 
      title: "Car Insurance", 
      amount: 294.63, 
      date: new Date(2022, 2, 10) 
    },
    { 
      title: "Bike Insurance", 
      amount: 105.63, 
      date: new Date(2021, 11, 30) 
    },
    {
      title: "Accidental Insurance",
      amount: 94.63,
      date: new Date(2020, 7, 30),
    },
  ];
  return (
    <div>
      <h2>Welcome to React App.</h2>
      <Expenses items={expensesList}></Expenses>
    </div>
  );
}

export default App;
