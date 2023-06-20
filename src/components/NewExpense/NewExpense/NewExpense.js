import React, { useState } from "react";

import "./NewExpense.css";
import { ExpenseForm } from "../";

const NewExpense = (props) => {
  const { retrieveExpenseHandler } = props;

  const [isEditing, setIsEditing] = useState(false);

  const newExpenseHandler = (newExpense) => {
    newExpense = { ...newExpense, id: Math.random().toString() };
    retrieveExpenseHandler(newExpense);
  };

  const addExpenseButtonHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          newExpenseHandler={newExpenseHandler}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      ) : (
        <button onClick={addExpenseButtonHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
