import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
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
      date: new Date(2023, 5, 12)
    },
    {
      id: 'e3',
      title: 'New TV',
      amount: 724,
      date: new Date(2023, 6, 9)
    },
    {
      id: 'e4',
      title: 'Car',
      amount: 9876,
      date: new Date(2023, 2, 24)
    },
    {
      id: 'e5',
      title: 'New House',
      amount: 34600,
      date: new Date(2023, 4, 26)
    }
  ]
  return (
    <div>
    <h2>Let's get started!</h2>
    <ExpenseItem
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
    />
    <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      />
    <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      />
    <ExpenseItem
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}
      />
  </div>
  );
}

export default App;