import Expense from './components/Expense'
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

function App() {
  const EXPENSE = [
  {
    id: 1,
    title: 'Car',
    amount: 20000,
    date: new Date(2021, 4, 24)
  },
  {
      id: 2,
      title: 'House',
      amount: 2000000,
      date: new Date(2021, 5, 24)
  }
]
   const [expenses, setExpenses] = useState(EXPENSE)
   const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense]
    })
  }
  return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expense items={expenses}/>
      </div>
  );
}

export default App;
