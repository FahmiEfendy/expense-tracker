import React, { useState } from "react";

import "./Expenses.css";
import Card from "../../Layout/Card";
import { ExpenseFilter, ExpenseList, ExpensesChart } from "../";

const Expenses = (props) => {
  const { expenses } = props;

  const [year, setYear] = useState("2023");

  const filteredYear = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter year={year} filteredYear={filteredYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} year={year} />
    </Card>
  );
};

export default Expenses;
