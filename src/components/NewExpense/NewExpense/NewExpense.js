import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./NewExpense.css";
import { ExpenseForm } from "../";
import { onEditState } from "../../Expenses/editStateSlice";

const NewExpense = (props) => {
  const { retrieveExpenseHandler } = props;

  const dispatch = useDispatch();

  const isEditing = useSelector((state) => state.editState.value);

  const newExpenseHandler = (newExpense) => {
    retrieveExpenseHandler(newExpense);
  };

  const addExpenseButtonHandler = () => {
    dispatch(onEditState({ onEdit: "add" }));
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm newExpenseHandler={newExpenseHandler} />
      ) : (
        <button onClick={addExpenseButtonHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
