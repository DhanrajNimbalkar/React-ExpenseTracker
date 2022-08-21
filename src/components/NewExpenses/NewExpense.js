import ExpenseForm from "./ExpenseForm";
import "./ExpenseForm.css";
import "./NewExpense.css";
import { useState } from "react";

function NewExpense(props) {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const cancelAddNewExpenseHandler = () => {
    setAddNewExpense(false);
  };
  const addNewExpenseHandler = () => {
    setAddNewExpense(true);
  };

  return (
    <div className="new-expense">
      {!addNewExpense && (
        <button type="button" onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      )}
      {addNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelAddNewExpense={cancelAddNewExpenseHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
