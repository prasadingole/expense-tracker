
const AddExpense = (props) => {
    const buttonClickHandler = () => {
        console.log("Add Expense Button Clicked");
        props.addExpenseClick(true);
    }
    return <button onClick={buttonClickHandler}>Add New Expense</button>
}

export default AddExpense;