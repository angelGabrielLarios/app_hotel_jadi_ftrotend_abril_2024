import { IUserResponse } from "../../API/functions/getProfileAPI";

export interface User extends IUserResponse {
    isAuth: boolean
}
