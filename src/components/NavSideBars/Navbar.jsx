import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-dark p-3'>
            <ul className="d-flex justify-content-center gap-5 list-unstyled">
                <Link to="/" ><li className='text-white '>Home</li></Link>
                <li className='text-white '>Count</li>
                <Link to="/expense-track"><li className='text-white ' >Expence Tracker</li></Link>
            </ul>
        </div>
    )
}

export default Navbar
