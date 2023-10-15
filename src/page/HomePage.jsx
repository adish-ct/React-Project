import React, { useState } from 'react'
import Navbar from '../components/NavSideBars/Navbar'
import SideBar from '../components/NavSideBars/SideBar'
import '../components/css/SideBar.css'
import axios from 'axios'

function HomePage() {
    const [data, setData] = useState([])

    return (
        <div>
            <Navbar />
            <div className="row w-100">
                <div className="col-2 side-bar">
                    <SideBar />
                </div>
                <h1>HOME</h1>
                <button onClick={() => {
                    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
                        console.log(response.data);
                        setData(response.data)
                    })
                }} >Click</button>
                {data.map((obj, index) => {
                    return (
                        <div className='d-flex'>
                            <h1>{index + 1}</h1>
                            <h4>{obj.title}</h4>
                            <h4>{obj.body}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage
