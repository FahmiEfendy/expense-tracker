import "./Expenses.css";
import { ExpenseItem } from "../../atoms";
import { NewExpense } from "../";
import Card from "../../templates/Card";

const Expenses = (props) => {
  const { expenses } = props;

  return (
    <Card className="expenses">
      <NewExpense />
      <ExpenseItem
        date={expenses[0].date}
        item={expenses[0].item}
        price={expenses[0].price}
      />
      <ExpenseItem
        date={expenses[1].date}
        item={expenses[1].item}
        price={expenses[1].price}
      />
      <ExpenseItem
        date={expenses[2].date}
        item={expenses[2].item}
        price={expenses[2].price}
      />
      <ExpenseItem
        date={expenses[3].date}
        item={expenses[3].item}
        price={expenses[3].price}
      />
      <ExpenseItem
        date={expenses[4].date}
        item={expenses[4].item}
        price={expenses[4].price}
      />
    </Card>
  );
};

export default Expenses;
