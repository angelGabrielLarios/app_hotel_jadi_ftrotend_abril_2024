import { User } from "./user.interface";

export interface AuthContextType {
    user: User;
    login: (user: User) => void;
    logout: () => void
}