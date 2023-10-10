import React, { useState, useRef, useEffect } from "react";

function InputComponent(props) {
    const [input, setInput] = useState('')
    const [phone, setPhone] = useState('')
    const inputRef = useRef(null)
    const phoneRef = useRef(null)

    useEffect(() => {
        if (input.length > 10) {
            alert("exceed")
        }
    }, [input])

    useEffect(() => {
        if (phone.length > 10)
            alert("success")
    }, [phone])

    const nameChange = () => {
        setInput(inputRef.current.value)
    }

    const phoneChange = () => {
        setPhone(phoneRef.current.value)
    }

    return (
        <div className="text-center">
            <div className="m-5 text-center">
                <h1>Form</h1>
                <div className="d-flex">
                    <input type="text" className="form-control w-50 " ref={inputRef} onChange={nameChange} placeholder="Enter your name " />
                    <h2> {input} </h2>
                </div>
                <div className="d-flex">
                    <input type="text" className="form-control w-50 " onChange={phoneChange} ref={phoneRef} placeholder="Enter your mobile " />
                    <h2> {phone} </h2>
                </div>
            </div>
        </div>
    )
}

export default InputComponent