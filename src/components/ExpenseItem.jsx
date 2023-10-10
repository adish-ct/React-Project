import React, { useState } from 'react'
import './css/ExpenceItem.css'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
    return (
        <div className='expence-item-main'>
            <ExpenseDate date={props.date} />
            <h2> {props.title} </h2>
            <h2> {props.amount} </h2>

        </div>
    )
}

export default ExpenseItem