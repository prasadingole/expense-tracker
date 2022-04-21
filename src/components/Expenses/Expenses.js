import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css'


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');
    const filterYearHandler = (filteredYear) => {
        console.log(filteredYear);
        setFilteredYear(filteredYear);
    }

    const filteredExpenses = props.expenses
        .filter((expense) => {
            return expense.date.getFullYear().toString() === filteredYear;
        });

    return (
        <div className="expenses">
            <ExpenseFilter filteredYear={filteredYear} onSelectYear={filterYearHandler} />
            <li>
                <Card><ExpensesList expenses={filteredExpenses} /></Card> </li>
        </div>
    );
}

export default Expenses;