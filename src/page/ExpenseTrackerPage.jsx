import React from 'react'
import ExpenseTrackHead from '../components/ExpenseTrackHead'
import ExpenseTracker from '../components/ExpenseTracker'
import SubmitButton from '../components/SubmitButton'
import ExpenseComponent from '../components/ExpenseComponent'
import InputComponent from '../components/InputComponent'
import Navbar from '../components/NavSideBars/Navbar'
import SideBar from '../components/NavSideBars/SideBar'

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
            <div className="row">
                <div className="col-2 bg-dark text-white">
                    <SideBar />
                </div>
                <div className="col-10">
                    <ExpenseTracker />
                    <ExpenseTrackHead />
                    <ExpenseComponent items={expenseData} />
                </div>
            </div>
        </div>
    )
}

export default ExpenseTrackerPage
