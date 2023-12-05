import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem=(props)=> {
    const clickHandler = () => {
        console.log('Delete');
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'> ${props.amount}</div>
            </div>
            <button className='btn'   onClick={clickHandler}>Delete</button>
        </Card>
    );
}

export default ExpenseItem; 
