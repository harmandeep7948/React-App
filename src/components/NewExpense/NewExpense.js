import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };

  const handleAddNewExpenseButton = () => {
    setShowForm(true);
  };

  const showTrend = () => {
    setShowForm(false);
  };
  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          trend={showTrend}
        />
      )}
      {!showForm && (
        <button type="button" onClick={handleAddNewExpenseButton}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
