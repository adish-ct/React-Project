import React, { useState, useRef, useEffect } from 'react'
import '../components/css/InputForm.css'
import InputTable from './InputTable'

function InputForm(props) {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')


    const nameRef = useRef(null)
    const phoneRef = useRef(null)

    useEffect(() => {
        nameRef.current.focus()
    }, [name])

    const formSubmit = () => {
        if (nameRef.current.value) {
            if (phoneRef.current.value) {
                setPhone(phoneRef.current.value + '')
                setName(nameRef.current.value + '')
            } else {
                alert("phone required")
                phoneRef.current.focus()
                return false
            }

        } else {
            alert("name required")
            nameRef.current.focus()
            return false
        }
        nameRef.current.value = ''
        phoneRef.current.value = ''
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
            <InputTable name={name} phone={phone} />
        </div>
    )
}

export default InputForm
