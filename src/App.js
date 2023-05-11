import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {

  return (
    <div>
      <h2> Lets get started </h2>
      <Expenses items="{expenses}"
      />
    </div>
  );
}

export default App;
