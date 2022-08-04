import '../components/Expenses.css';
import ExpenseItem from './ExpenseItem'

function Expenses(props) {

    const expenseList = props.expensesList;

    return (
        <div className='expenses'>
            <ExpenseItem expenseItem={expenseList[0]} />
            <ExpenseItem expenseItem={expenseList[1]} />
            <ExpenseItem expenseItem={expenseList[2]} />
        </div>
    );
}

export default Expenses;
