import React from 'react'
import '../components/css/InputTable.css'

function InputTable(props) {
    return (
        <div>
            <table className='input-table'>
                <thead >
                    <th>Name</th>
                    <th>Phone</th>
                </thead>
                <tbody>
                    <tr>
                        <td> {props.name} </td>
                        <td> {props.phone} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InputTable
