/* eslint-disable react/prop-types */
import './ExpenseItems.css'
import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItems = (props) => {

  // eslint-disable-next-line react/prop-types
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Updates')
    console.log('title', title)
  }

  return (
      <Card className='expense-item'>        
          <ExpenseDate date={props.date}/>
          <div className="expense-item-description">
            <h1 >{props.title}</h1>
          </div>
          <div className='expense-item-price'>${props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
  )
}

export default ExpenseItems;
