import React from 'react'
import './css/ExpenceItem.css'

function ExpenseItem() {
    const expenceDate = new Date(2023, 2, 24)
    const expenceDescription = 'Car Insurance'
    const expenceAmount = 202.47

    return (

        <div className='expence-body-main'>
            <h2 className='expenseItemTitle'> {expenceDate.toISOString()} </h2>
            <h2 className='expenseItemTitle'> {expenceDescription} </h2> 
            <h2 className='expenseItemTitle-price'>$ {expenceAmount} </h2>
        </div>

    )
}

export default ExpenseItem