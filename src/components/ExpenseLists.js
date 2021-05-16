/* eslint-disable react/prop-types */
import React from 'react'
import ExpenseItems from './ExpenseItems'

const ExpenseLists = (props) => {
    if(props.items.length === 0) {
        <h2 className="expense-list-fallback"> No expense</h2>
    }

    return (
      <ul className="expense-list">
        {
          props.items.map(expense => {
            return <ExpenseItems
              key={expense.id}
              amount={expense.amount}
              date={expense.date}
              title={expense.title} />
          })
        } 
      </ul>
    )
}

export default ExpenseLists