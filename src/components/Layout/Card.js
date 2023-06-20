import "./Card.css";

const Card = (props) => {
  const { children, className } = props;

  const newClass = "card " + className;

  return <div className={newClass}>{children}</div>;
};

export default Card;
