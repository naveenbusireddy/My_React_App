import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => 
    {
        setEnteredTitle(event.target.value);
        // console.log(event.target.value);
    };    
    const amountChangeHandler = (event) => 
    {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => 
    {
        setEnteredDate(event.target.value);
    };


  return (
    <form>
      <div>
        <div className="new-expense__controls"></div>
        <div className="new-expense__control label">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control label">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control label">
          <label>Date</label>
          <input type="date" min='2019-01-01' max='2022-03-11' onChange={dateChangeHandler}/>
        </div>
        <div>
            <button type="submit">Add Expenses</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;