import React from 'react'
import { useUserContext } from '../context/userContext'

export const Dashboard = () => {

    const { user } = useUserContext()

    return (
        <div>
            <h2>Welcome: { user.name } </h2>
        </div>
    )
}
