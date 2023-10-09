import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar'

export const LayoutRoot = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <p>Footer</p>
        </div>
    )
}
