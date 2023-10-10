import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-dark p-3'>
            <ul className="d-flex justify-content-center gap-5 list-unstyled">
                <Link to="/" style={{textDecoration: 'none'}}><li className='text-white nav-link'>Home</li></Link>
                <Link to="/count-section" style={{textDecoration: 'none'}}><li className='text-white nav-link'>Count</li></Link>
                <Link to="/expense-track" style={{textDecoration: 'none'}}><li className='text-white nav-link' >Expence Tracker</li></Link>
            </ul>
        </div>
    )
}

export default Navbar
