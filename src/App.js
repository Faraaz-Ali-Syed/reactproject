import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import React from 'react';

function App() {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, {items: Expenses})
  );

  // return (
  //   <div>
  //     <h2> Lets get started </h2>
  //     <Expenses items="{expenses}"
  //     />
  //   </div>
}

export default App;
