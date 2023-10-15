import React, { useState, useEffect } from 'react'
import '../components/css/InputTable.css'

function InputTable(props) {

    console.log("name", props.name);
    const [nameArr, setNameArr] = useState([])

    useEffect(() => {
        const name = [...nameArr, { name: props.name, phone: props.phone }]
        setNameArr(name)
    }, [props.name, props.phone])

    return (
        <div>
            <table className='input-table'>
                <thead >
                    <th>Name</th>
                    <th>Phone</th>
                </thead>
                <tbody>
                    {nameArr.map((item, index) => (
                        <tr key={index}>
                            <td> {item.name} </td>
                            <td> {item.phone} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default InputTable
