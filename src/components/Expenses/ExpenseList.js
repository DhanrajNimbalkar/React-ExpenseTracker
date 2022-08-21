import "./ExpenseItem";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.expenseList.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenseList.map((expense) => (
        <ExpenseItem key={expense.id} expenseItem={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
