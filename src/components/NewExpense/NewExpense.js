import { useState } from 'react';
import AddExpense from './AddExpense';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
const NewExpense = (props) => {

    const[newExpenseFormFlag,setNewExpenseFormFlag] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setNewExpenseFormFlag(false);
    };

    const formFlagChangeHandler = (status) => {
        setNewExpenseFormFlag(status);
    }

    const addExpenseButton = <AddExpense  addExpenseClick={formFlagChangeHandler}/>
    const expenseForm = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseData={formFlagChangeHandler} />
    
    return <div className='new-expense'>
       {newExpenseFormFlag ? expenseForm : addExpenseButton }
    </div>
}

export default NewExpense;