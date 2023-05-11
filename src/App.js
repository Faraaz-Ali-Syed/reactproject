import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.23,
      date: new Date(2020, 13, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 924.23,
      date: new Date(2022, 13, 11),
    },
    {
      id: "e3",
      title: "TV",
      amount: 54.21,
      date: new Date(2023, 1, 1),
    },
    {
      id: "e4",
      title: "Mobile",
      amount: 94.23,
      date: new Date(2020, 1, 14),
    },
  ];

  return (
    <div>
      <h2> Lets get started </h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date} 
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>

    </div>
  );
}

export default App;
