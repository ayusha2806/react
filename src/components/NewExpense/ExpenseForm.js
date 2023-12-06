import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle,setEnterdedTitle]=useState('');
    const [enteredAmount,setEnterdedAmount]=useState('');
    const [enteredDate,setEnterdedDate]=useState('');

    const titleChangeHandler = (event) => {
        setEnterdedTitle(event.target.value);

    };
    
    const amountChangeHandler=(event)=>{
        setEnterdedAmount(event.target.value);
    };
    const dateChangeHandler=(event)=>{
        setEnterdedDate(event.target.value);
    };

    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;