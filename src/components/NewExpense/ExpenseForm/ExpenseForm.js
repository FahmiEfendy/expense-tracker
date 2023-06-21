import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ExpenseForm.css";
import { editExpense } from "../../Expenses/expenseSlice";
import { offEditState } from "../../Expenses/editStateSlice";

const ExpenseForm = (props) => {
  const { newExpenseHandler } = props;

  const dispatch = useDispatch();

  const onEdit = useSelector((state) => state.editState.onEdit);
  const editId = useSelector((state) => state.editState.editId);

  const expenses = useSelector((state) => state.expenses);

  const selectedExpense = expenses.find((expense) => expense.id === editId);

  const [enteredItem, setEnteredItem] = useState(selectedExpense?.item || "");
  const [enteredDate, setEnteredDate] = useState(
    (selectedExpense?.date &&
      new Date(selectedExpense?.date).toLocaleDateString("fr-CA")) ||
      ""
  );
  const [enteredPrice, setEnteredPrice] = useState(
    selectedExpense?.price || ""
  );

  const itemChangeHandler = (e) => {
    setEnteredItem(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setEnteredPrice(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const clearInputHandler = () => {
    setEnteredItem("");
    setEnteredPrice("");
    setEnteredDate("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newExpense = {
      item: enteredItem,
      price: +enteredPrice,
      date: new Date(enteredDate),
    };

    if (onEdit === "add") {
      newExpenseHandler(newExpense);
    } else if (onEdit === "edit") {
      dispatch(editExpense({ id: editId, ...newExpense }));
    }

    clearInputHandler();
    dispatch(offEditState());
  };

  const buttonHandler = () => {
    clearInputHandler();
    dispatch(offEditState());
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>{editId ? "Edit Expense" : "New Expense"}</h2>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Item</label>
          <input
            type="text"
            value={enteredItem}
            required
            onChange={(e) => {
              itemChangeHandler(e);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            value={enteredPrice}
            required
            min={0.01}
            step={0.01}
            onChange={(e) => {
              priceChangeHandler(e);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            required
            onChange={(e) => {
              dateChangeHandler(e);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={buttonHandler}>Cancel</button>
        <button type="submit">
          {onEdit === "edit" ? "Save Changes" : "Add Expense"}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
