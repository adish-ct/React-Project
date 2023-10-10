import React from 'react'
import InputForm from '../components/InputForm'

function InputFormPage() {
    return (
        <div>
            <Navbar />
            <div className="row w-100">
                <div className="col-2 side-bar">
                    <SideBar />
                </div>
                <InputForm />
            </div>
        </div>
    )
}

export default InputFormPage
