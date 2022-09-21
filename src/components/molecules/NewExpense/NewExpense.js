import React from "react";
import { ExpenseForm } from "../";
import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
      <button>Add Expense</button>
    </div>
  );
};

export default NewExpense;
