import React from 'react'
import Navbar from '../components/NavSideBars/Navbar'
import SideBar from '../components/NavSideBars/SideBar'
import '../components/css/SideBar.css'

function HomePage() {
    return (
        <div>
            <Navbar />
            <div className="row w-100">
                <div className="col-2 side-bar">
                    <SideBar />
                </div>
                <h1>HOME</h1>
            </div>
        </div>
    )
}

export default HomePage
