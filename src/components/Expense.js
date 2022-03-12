import ExpenseItem from "./ExpenseItem";

function Expense(props)
{
    return (
    <div>
        <ExpenseItem title={props.obj1[0].title} amount={props.obj1[0].amount} date={props.obj1[0].date}></ExpenseItem>
        <ExpenseItem title={props.obj1[1].title} amount={props.obj1[1].amount} date={props.obj1[1].date}></ExpenseItem>
        <ExpenseItem title={props.obj1[2].title} amount={props.obj1[2].amount} date={props.obj1[2].date}></ExpenseItem>
    </div>
    )
    
    
}

export default Expense;