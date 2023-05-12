import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

function Expenses(props) {
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
          date: new Date(2019, 1, 1),
        },
        {
          id: "e3",
          title: "TV",
          amount: 54.21,
          date: new Date(2023, 1, 5),
        },
        {
          id: "e4",
          title: "Mobile",
          amount: 94.23,
          date: new Date(2020, 2, 14),
        },
      ];
      return (
        <Card className="expenses">
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
        </Card>
      );

}

export default Expenses;