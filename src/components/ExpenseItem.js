import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <div> <ExpenseDate date={props.expenseItem.date}/></div>
            <div className='expense-item__description'>
                <h2>{props.expenseItem.title}</h2>
                <div className='expense-item__price'>${props.expenseItem.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;