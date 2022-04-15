import './ExpenseDate.css'
const ExpenseDate = (props) => {
    const expenseMonth = props.date.toLocaleString('en-US', { month: 'long' });
    const expenseYear = props.date.toLocaleString('en-US', { year: 'numeric'});
    const expenseDay = props.date.toLocaleString('en-US', { day: 'numeric' });
    return(
        <div className="expense-date">
                <div className='expense-date__month'>{expenseMonth}</div>
                <div className='expense-date__year'>{expenseYear}</div>
                <div className='expense-date__day'>{expenseDay}</div>
            </div>
    );
}

export default ExpenseDate;