
import { ExceptionNestjs, IExceptionNestJs } from '../errors'
import { URL_API } from '../url'


export type typeRoleUserResponse = 'normal' | 'admin'
export interface IUserResponse {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    iat: number;
    role: typeRoleUserResponse
}
export const getProfileAPI = async ({ access_token }: { access_token: string }) => {
    const response = await fetch(`${URL_API}/auth/profile`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${access_token}`
        },
    })

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }

    const data: IUserResponse = await response.json() as IUserResponse
    return data
}
