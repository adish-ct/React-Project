import React, { useState, useRef, useEffect } from "react";
import InputForm from "./InputForm";

function InputComponent(props) {
    const [input, setInput] = useState('')
    const [phone, setPhone] = useState('')
    const inputRef = useRef(null)
    const phoneRef = useRef(null)



    return (
        <div className="text-center">
            <div className="m-5 text-center">
                <h1>FORM</h1>
                <InputForm />
                
            </div>
        </div>
    )
}

export default InputComponent