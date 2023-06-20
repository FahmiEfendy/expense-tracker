import React from "react";

import "./ExpenseList.css";
import { ExpenseItem } from "../";

export const ExpenseList = (props) => {
  const { expenses, year } = props;

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(year)
  );

  return (
    <ul className="expenses-list">
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            item={expense.item}
            price={expense.price}
          />
        ))
      ) : (
        <h2 className="expenses-list__fallback">No Expenses Found</h2>
      )}
    </ul>
  );
};
