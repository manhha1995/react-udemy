import React, { useState } from 'react'
import './ExpenseForm.css'
import './NewExpense'
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (e) => {
       setEnteredTitle(e.target.value)
    }

    const amountChangeHandler = e => {
      setEnteredAmount(e.target.value)
    }

    const dateChangeHandler = e => {
      setEnteredDate(e.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
          title: enteredTitle,
          amount: +enteredAmount,
          date: new Date(enteredDate)
        }

      // eslint-disable-next-line react/prop-types
      props.onSaveExpenseData(expenseData)
      setEnteredDate('')
      setEnteredAmount('')
      setEnteredTitle('')
    }
        return (
        <form onSubmit={submitHandler}>
            <div className = 'new-expense-controls'>
                <div className = 'new-expense-control'>
                    <label htmlFor='title'>Title</label>
                    <input type='text'
                           name = 'title'
                           value={enteredTitle}
                           placeholder='Enter here..'
                           onChange={titleChangeHandler}
                    />
                </div>
                <div className = 'new-expense-control'>
                    <label htmlFor= 'amount'>Amount</label>
                    <input
                        type='number'
                        name='amount'
                        value={enteredAmount}
                        min='0.01' step='0.01'
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className = 'new-expense-control'>
                    <label htmlFor = 'date'>Date</label>
                    <input
                        type='date'
                        name = 'date'
                        value={enteredDate}
                        min='2019-01-01' max='2022-12-31'
                        onChange={dateChangeHandler}/>
                </div>
                <div className = 'new-expense-action'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm
