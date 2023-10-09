import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext'

export const Home = () => {
    const { setUser } = useUserContext();

    const navigate = useNavigate()

    const handleLogin = () => {
        setUser({
            name: 'Test',
            email: "test@test.com"
        });
        navigate("/dashboard");
    }

    return (
        <>
            <div>home</div>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}
