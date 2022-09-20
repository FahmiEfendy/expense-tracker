import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const { date } = props;

  const day = date.toLocaleString("id-ID", { day: "2-digit" });
  const month = date.toLocaleString("id-ID", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
