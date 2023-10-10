import React from 'react'

function SideBar() {
    return (
        <div className='d-flex side-bar'>
            <div className="text-center">
                <ul className='list-unstyled d-flex flex-column gap-5 align-items:center justify-content:center text-white'>
                    <li className='active'>Home</li>
                    <li>Service</li>
                    <li>About</li>
                    <li>Logout</li>
                </ul>
            </div>

        </div>
    )
}

export default SideBar
