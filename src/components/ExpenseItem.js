import './ExpenseItem.css';


function ExpenseItem() {
const expenseDate = new Date(2021,2,28);
const expenseTitle = 'Car Insurance';
const expenseAmount = 298.91;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className ="expense-item-desc">
        <h2>{expenseTitle}</h2>
        <div>{expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
