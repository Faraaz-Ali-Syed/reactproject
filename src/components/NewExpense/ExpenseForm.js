import React, { useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangesHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangesHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangesHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    return (<form>
        <div className="new-expense__controls">
            <div className="new-expense__control"></div>
            <label>Title</label>
            <input type='text' onChange={titleChangesHandler}></input>
            <div className="new-expense__control"></div>
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01'></input>
            <div className="new-expense__control"></div>
            <label>Date</label>
            <input type='date' min='2000-1-1' max='2023-5-5'></input>
        </div>
        <div classname='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>

    </form>);
}

export default ExpenseForm;