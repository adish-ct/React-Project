import React from 'react'
import InputForm from '../components/InputForm'
import SideBar from '../components/NavSideBars/SideBar'
import Navbar from '../components/NavSideBars/Navbar'

function InputFormPage() {
    return (
        <div>
            <Navbar />
            <div className="row w-100">
                <div className="row">
                    <div className="col-2 side-bar">
                        <SideBar />
                    </div>
                    <div className="col-10 mt-5">
                        <h1 className='text-success'>User Form</h1>
                        <InputForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputFormPage
