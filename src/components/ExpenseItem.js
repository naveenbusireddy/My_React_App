import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    // const expenseTitle = "Car Insurance";
    // const expenseDate = new Date(2022, 2, 11);
    // const expenseAmount = 298.65;

    // const month = props.date.toLocaleDateString('en-US', {month : "long"});  //date.toLocaleDateString('en-US', options)
    // const day = props.date.toLocaleDateString('en-US', {day: "2-digit"});
    // const year = props.date.toLocaleDateString('en-US', {year: "numeric"});
  return (
    <div className='expense-item'>
      <ExpenseDate expenseDate={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
