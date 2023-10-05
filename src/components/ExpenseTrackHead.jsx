import React from 'react'
import './css/ExpenseTrackHead.css'

function ExpenseTrackHead() {
    return (
        <div className='expense-table-head'>
            <h2 className='expense-table-head-date'>Date</h2>
            <h2 className='expense-table-head-service'>Service</h2>
            <h2 className='expense-table-head-amount'>Amount</h2>
        </div>
    )
}

export default ExpenseTrackHead
