import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const changeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Item</label>
        <input
          type="text"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>
      <div className="new-expense__control">
        <label>Price</label>
        <input
          type="number"
          min={0.01}
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>
    </div>
  );
};

export default ExpenseForm;
