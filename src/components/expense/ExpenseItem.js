import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../containers/Card";

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
