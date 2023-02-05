import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <Topbar />
            <Sidebar />
            <div class="p-4 sm:ml-64">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard