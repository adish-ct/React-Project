import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './css/ExpenseComponent.css'

function ExpenseComponent(props) {
    console.log(props);
    const [item, setItem] = useState()

    console.log(item);
    return (
        <div className='expence-body-main'>
            <ExpenseItem
                date={props.items[0].date}
                amount={props.items[0].amount}
                title={props.items[0].title}
            />


        </div>
    )
}

export default ExpenseComponent
