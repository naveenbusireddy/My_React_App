import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const month = props.expenseDate.toLocaleDateString("en-US", { month: "long" }); //date.toLocaleDateString('en-US', options)
  const day = props.expenseDate.toLocaleDateString("en-US", { day: "2-digit" });
  const year = props.expenseDate.toLocaleDateString("en-US", { year: "numeric" });

  return (
    <div className='expense-date'>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
}

export default ExpenseDate;