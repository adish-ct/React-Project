import React from 'react'
import Navbar from '../components/NavSideBars/Navbar'
import SideBar from '../components/NavSideBars/SideBar'

function HomePage() {
    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="col-2">
                    <SideBar />
                </div>
                <h1>HOME</h1>
            </div>
        </div>
    )
}

export default HomePage
