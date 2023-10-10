import React, { useState, useRef, useEffect } from 'react'
import '../components/css/InputForm.css'

function InputForm(props) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const nameRef = useRef(null)
    const phoneRef = useRef(null)

    useEffect(() => {
        nameRef.current.focus()
    }, [name])

    const formSubmit = () => {
        console.log(nameRef.current.value);
        setName(nameRef.current.value + '')
        console.log(name);
    }

    return (
        <div>
            <form action="" onSubmit={(e) => { e.preventDefault() }}>
                <input type="text" ref={nameRef} className='input-field' />
                <input type="text" ref={phoneRef} className='input-field' />
                <div className="text-center">
                    <button type='sumbit' className='btn btn-large btn-secondary' onClick={formSubmit} > Submit </button>
                </div>
            </form>
        </div>
    )
}

export default InputForm