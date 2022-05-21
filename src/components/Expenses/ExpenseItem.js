import React, { useState } from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  console.log("Expense item is called");
  const [title, setTitle] = useState(props.title);
  const eventHandler = () => {
    setTitle("Updated!");
    console.log("after settile");
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={eventHandler}>Click Me!</button>
    </Card>
  );
}

export default ExpenseItem;
