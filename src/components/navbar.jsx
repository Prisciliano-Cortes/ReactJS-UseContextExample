import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/userContext";

export const Navbar = () => {
	const { user, setUser } = useUserContext();

	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			{user && (
				<>
					<NavLink to="/dashboard">Dashboard</NavLink>
					<button onClick={() => setUser(null)}>Logout</button>
				</>
			)}
		</nav>
	);
};
