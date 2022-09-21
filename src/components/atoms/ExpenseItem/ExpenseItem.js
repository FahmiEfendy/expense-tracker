import "./ExpenseItem.css";
import Card from "../../templates/Card";
import { ExpenseDate } from "../";

const ExpenseItem = (props) => {
  const { date, item, price } = props;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <h2>{item}</h2>
      <div className=".expense-item__description">
        <div className="expense-item__price">
          Rp{price.toLocaleString("id-ID")},00
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
