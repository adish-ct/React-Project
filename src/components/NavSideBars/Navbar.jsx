import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-dark'>
            <ul className="d-flex justify-content-center gap-5">
                <li className='text-white '>Home</li>
                <li className='text-white '>Sidebar</li>
                <li className='text-white '>Expence Tracker</li>
            </ul>
        </div>
    )
}

export default Navbar
