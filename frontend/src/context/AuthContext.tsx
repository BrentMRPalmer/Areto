import { createContext, useState, useEffect } from "react";
import { getProfile } from "../services/authService.ts";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getProfile()
            .then((data) => setUser(data))
            .catch(() => setUser(null));
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};