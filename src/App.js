import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "./components/Expenses/expenseSlice";

import "./index.css";
import { Expenses } from "./components/Expenses";
import { NewExpense } from "./components/NewExpense";

function App() {
  const dispatch = useDispatch();

  const expenses = useSelector((state) => state.expenses);

  const retrieveExpenseHandler = (newExpense) => {
    dispatch(addExpense(newExpense));
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
