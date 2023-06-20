import "boxicons";
import { useDispatch } from "react-redux";

import "./ExpenseItem.css";
import { ExpenseDate } from "../";
import Card from "../../Layout/Card";
import { deleteExpense } from "../expenseSlice";
import { onEditState } from "../editStateSlice";

const ExpenseItem = (props) => {
  const dispatch = useDispatch();

  const { id, date, item, price } = props;

  const editExpenseHandler = () => {
    dispatch(onEditState({ onEdit: "edit", editId: id }));
  };

  const deleteExpenseHandler = () => {
    dispatch(deleteExpense({ id }));
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <h2>{item}</h2>
      <div className=".expense-item__description">
        <div className="expense-item__price">
          Rp{price.toLocaleString("id-ID")},00
        </div>
      </div>
      <button className="icon-container edit-icon" onClick={editExpenseHandler}>
        <box-icon name="pencil" type="solid" color="black"></box-icon>
      </button>
      <button
        className="icon-container delete-icon"
        onClick={deleteExpenseHandler}
      >
        <box-icon type="solid" name="trash" color="#FFFFFF"></box-icon>
      </button>
    </Card>
  );
};

export default ExpenseItem;
