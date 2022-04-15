import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem = (props) => {
    const expenseTitle = props.title;
    const expenseAmount = props.amount;
    const expenseDate = props.date;
    return (
        <Card className='expense-item'>
            <ExpenseDate date={expenseDate}/>
            <div>
                <h2 className='expense-item__description'>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;