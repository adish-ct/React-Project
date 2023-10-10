import React from 'react'
import SubmitButton from '../components/SubmitButton'
import InputComponent from '../components/InputComponent'
import Navbar from '../components/NavSideBars/Navbar'
import SideBar from '../components/NavSideBars/SideBar'

function CountPage() {
    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="col-2 bg-dark text-white">
                    <SideBar />
                </div>
                <div className="col-10">
                    <SubmitButton />
                    <InputComponent />
                </div>
            </div>
        </div>
    )
}

export default CountPage
