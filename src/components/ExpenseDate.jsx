import React from 'react'
import './css/ExpenseDate.css'

function ExpenseDate(props) {

    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { day: 'numeric' })
    const year = props.date.getFullYear()

    return (
        <div className='expence-item-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    )
}

export default ExpenseDate
