import React from 'react'
import ExpenseTrackHead from '../components/ExpenseTrackHead'
import ExpenseTracker from '../components/ExpenseTracker'
import SubmitButton from '../components/SubmitButton'
import ExpenseComponent from '../components/ExpenseComponent'
import InputComponent from '../components/InputComponent'
import Navbar from '../components/NavSideBars/Navbar'

function ExpenseTrackerPage() {
    const expenseData = [
        {
            id: "e1",
            title: "Car Insurance",
            amount: 238.34,
            date: new Date(2023, 2, 23),
        },
        {
            id: "e2",
            title: "Bike Insurance",
            amount: 287.34,
            date: new Date(2023, 2, 28),
        },
        {
            id: "e3",
            title: "bus Insurance",
            amount: 248.85,
            date: new Date(2023, 2, 23),
        },
    ];

    return (
        <div>
            <Navbar />
            <ExpenseTracker />
            <ExpenseTrackHead />
            <ExpenseComponent items={expenseData} />
            <SubmitButton />
            <InputComponent />
        </div>
    )
}

export default ExpenseTrackerPage
