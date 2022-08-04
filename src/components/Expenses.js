import '../components/Expenses.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem';


function Expenses(props) {

    const expenseList = props.expensesList;

    return (
        <Card className='expenses'>
            <ExpenseItem expenseItem={expenseList[0]} />
            <ExpenseItem expenseItem={expenseList[1]} />
            <ExpenseItem expenseItem={expenseList[2]} />
        </Card>
    );
}

export default Expenses;
