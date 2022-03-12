function ExpenseDate(props) {
  const month = props.expenseDate.toLocaleDateString("en-US", { month: "long" }); //date.toLocaleDateString('en-US', options)
  const day = props.expenseDate.toLocaleDateString("en-US", { day: "2-digit" });
  const year = props.expenseDate.toLocaleDateString("en-US", { year: "numeric" });

  return (
    <div>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;