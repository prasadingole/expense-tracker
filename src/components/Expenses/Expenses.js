import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = (props) => {
    const expenseElements = props.expenses.map(expense => {
        return (
            <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
        )
    });
    return (
        <Card className="expenses">{expenseElements}</Card>
    );
}

export default Expenses;