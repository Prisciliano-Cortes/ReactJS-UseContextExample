import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useUserContext } from '../context/userContext'

export const LayoutPrivate = () => {

    const { user } = useUserContext();

    return (
        <div>
            {
                user ? <Outlet /> : <Navigate to="/" />
            }
        </div>
    )
}
