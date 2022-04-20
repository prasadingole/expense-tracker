import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');
    const filterYearHandler = (filteredYear) => {
        console.log(filteredYear);
        setFilteredYear(filteredYear);
    }

    const expenseElements = props.expenses
    .filter(exp1 => exp1.date.getFullYear() === parseInt(filteredYear))
    .map(expense => 
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
    );

    return (
        <div className="expenses">
            <ExpenseFilter filteredYear={filteredYear} onSelectYear={filterYearHandler} />
            <Card>{expenseElements}</Card>
        </div>
    );
}

export default Expenses;