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
      <button className="icon-container" onClick={editExpenseHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="edit-icon"
          viewBox="0 0 24 24"
        >
          <path d="M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z"></path>
        </svg>
      </button>
      <button
        className="icon-container icon-container-delete"
        onClick={deleteExpenseHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="delete-icon"
          viewBox="0 0 24 24"
        >
          <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path>
        </svg>
      </button>
    </Card>
  );
};

export default ExpenseItem;
