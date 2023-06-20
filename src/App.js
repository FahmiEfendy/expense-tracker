import { useState } from "react";

import "./index.css";
import { Expenses } from "./components/Expenses";
import { NewExpense } from "./components/NewExpense";

const initialExpenses = [
  {
    id: 1,
    date: new Date(2022, 9, 20),
    item: "Seblak Bakar",
    price: 20000,
  },
  {
    id: 2,
    date: new Date(2022, 6, 12),
    item: "Buku",
    price: 750000,
  },
  {
    id: 3,
    date: new Date(2021, 2, 10),
    item: "Hadiah Ulang Tahun",
    price: 300000,
  },
  {
    id: 4,
    date: new Date(2020, 12, 1),
    item: "Service Motor",
    price: 20000,
  },
  {
    id: 5,
    date: new Date(2022, 4, 11),
    item: "Smart TV",
    price: 2000000,
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const retrieveExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      return [...prevState, newExpense];
    });
  };

  return (
    <div>
      <h2 className="title">Expense Tracker</h2>
      <NewExpense retrieveExpenseHandler={retrieveExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
