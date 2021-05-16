import React from 'react'
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData
    }
    // eslint-disable-next-line react/prop-types
    props.onAddExpense(expenseData)
  }

  return (
      <div className='new-expense'>
        <ExpenseForm onSaveExpenseData = {saveExpenseHandler}/>
      </div>
  )
}

export default NewExpense
