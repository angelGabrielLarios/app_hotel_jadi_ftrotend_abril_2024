
import { createContext } from "react";
import { AuthContextType } from "./AuthContextType";
import { User } from "./user.interface";

export const defaultUser: User = {
    iat: 0,
    firstName: '',
    lastName: '',
    phone: '',
    role: 'normal',
    email: '',
    id: '',
    isAuth: false
}

export const AuthContext = createContext<AuthContextType>({
    user: defaultUser,
    login: (user: User) => { user },
    logout: () => { }

});