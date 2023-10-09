import { createContext, useContext, useState } from "react";

//*** Create context */
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);