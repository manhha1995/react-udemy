/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Card from "../UI/Card";
import './ExpenseDate.css'
import ExpensesFilter from './ExpenseFilter';
import ExpenseLists from './ExpenseLists';
import ExpenseChart from './ExpenseChart';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState(2020)

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filterExpense = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)

  return (
    <div>
      <Card classname='expenses'>
        <ExpensesFilter
            onSelected={filteredYear}
            onFilterChange={filterChangeHandler}
        />
        <ExpenseChart expenses={filterExpense} />
        <ExpenseLists items={filterExpense} />
      </Card>
  </div>
  )
}
export default Expense
