import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses'


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294,
    date: new Date(2023, 2, 19)
  },
  {
    id: 'e2',
    title: 'New Desk',
    amount: 454,
    date: new Date(2022, 5, 12)
  },
  {
    id: 'e3',
    title: 'New TV',
    amount: 724,
    date: new Date(2021, 6, 9)
  },
  {
    id: 'e4',
    title: 'Car',
    amount: 9876,
    date: new Date(2020, 2, 24)
  },
  {
    id: 'e5',
    title: 'New House',
    amount: 34600,
    date: new Date(2023, 4, 26)
  }
]
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];

    });
  }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},"Let's get Started!"),
  //   React.createElement(Expenses,{items:expenses})
  // )
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;