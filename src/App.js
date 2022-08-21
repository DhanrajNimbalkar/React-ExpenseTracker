import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h1>Expense Visualiser</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesList={expenses} />
    </div>
  );
}

export default App;
