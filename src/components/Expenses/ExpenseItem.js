import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
      <ExpenseDate date={props.expenseItem.date} />
      <div className="expense-item__description">
        <h2>{props.expenseItem.title}</h2>
        <div className="expense-item__price">₹{props.expenseItem.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
