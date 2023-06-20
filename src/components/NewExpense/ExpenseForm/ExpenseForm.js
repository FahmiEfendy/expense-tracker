import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const { newExpenseHandler, isEditing, setIsEditing } = props;

  const [enteredItem, setEnteredItem] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  const itemChangeHandler = (e) => {
    setEnteredItem(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setEnteredPrice(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newExpense = {
      item: enteredItem,
      price: +enteredPrice,
      date: new Date(enteredDate),
    };

    newExpenseHandler(newExpense);

    setEnteredItem("");
    setEnteredPrice("");
    setEnteredDate("");

    setIsEditing(!isEditing);
  };

  const buttonHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <form onSubmit={submitHandler}>
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
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
