import React from 'react'
import Navbar from '../Comonent/Navbar/Navbar'
import Sidebare from '../Comonent/Sidebare/Sidebare'
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div className='home'>
            <Sidebare />
            <div className='homecontainer'>
                <Navbar />
                home container
            </div>

        </div>
    )
}

export default Dashboard