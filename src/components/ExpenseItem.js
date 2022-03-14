import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("Updated");
  //   console.log(title);
  // };

  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={clickHandler}>Change Title</button>  */}
      </div>
    </div>
  );
}

export default ExpenseItem;
