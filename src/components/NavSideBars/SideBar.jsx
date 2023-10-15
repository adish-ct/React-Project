import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <div className='d-flex side-bar'>
            <div className="text-center">
                <ul className='list-unstyled d-flex flex-column gap-5 align-items:center justify-content:center text-white'>
                    <li className='active'>Home</li>
                    <Link className='nav-link' to="/user-form"><li>Form</li></Link>
                    <li>About</li>
                    <li>Logout</li>
                </ul>
            </div>

        </div>
    )
}

export default SideBar
