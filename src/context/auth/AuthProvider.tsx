import { ReactElement, useState } from "react";
import { AuthContext, defaultUser } from "./AuthContext";
import { User } from "./user.interface";
import { userNameApp } from "../../constants/constants";

export const AuthProvider = ({ children }: { children: ReactElement }) => {


    const init = JSON.parse(localStorage.getItem(userNameApp) || 'null') || defaultUser


    const [user, setUser] = useState<User>(init);

    const login = (user: User) => {
        localStorage.setItem(userNameApp, JSON.stringify(user));
        setUser(user);
    };


    const logout = () => {
        localStorage.removeItem(userNameApp)
        setUser(defaultUser)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};