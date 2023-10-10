import React, { useState, useEffect } from 'react'
import ExpenseItem from './ExpenseItem'
import './css/ExpenseComponent.css'

function ExpenseComponent(props) {

    return (
        <div className='expence-body-main'>

            {props.items.map((item) => (
                <ExpenseItem key={item.id}
                    title={item.title}
                    date={item.date}
                    amount={item.amount}
                />
            ))}

        </div>
    )
}

export default ExpenseComponent 
