import React from "react";
import './ExpenseDate.css'

const ExpenseDate = (props) => {
  // eslint-disable-next-line react/prop-types
  const month = props.date.toLocaleString('en-US', {month: 'long'})
  // eslint-disable-next-line react/prop-types
  const day = props.date.toLocaleString({day: '2-digit'}, 'en-US')
  // eslint-disable-next-line react/prop-types
  const year = props.date.getFullYear()
  return (
      <div className="expense-date">
        <div className="expense-date-month">{month}</div>
        <div className="expense-date-day">{day}</div>
        <div className="expense-date-year">{year}</div>
      </div>
  )
}

export default ExpenseDate
