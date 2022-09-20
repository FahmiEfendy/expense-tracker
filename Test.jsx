.wrapper {
    margin: 20px;
}

const WrapperComponent = (props) => {
    const { children, className }

    const newClassName = "wrapper " + className

    return (
        <div className={newClassName}>{children}</div>
    )
}


// using WrapperComponent
.card {
    background-color: "red";
}

const Test = () => {
  return (
    <WrapperComponent className="card">
      <h1>Testing!!!</h1>
    </WrapperComponent>
  );
};

export default Test


