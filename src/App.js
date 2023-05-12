import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import React from 'react';
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: Expenses})
  // );

  return (
    <div>
      <NewExpense />
      <Expenses items="{expenses}"
      />
    </div>)
}

export default App;
