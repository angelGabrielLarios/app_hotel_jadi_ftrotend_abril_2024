

import { ExceptionNestjs, IExceptionNestJs } from "../errors"

import { URL_API } from "../url"
import { headers_common } from "./headers_common"

export interface ILoginResponse {
    access_token: string
}
export const loginAPI = async ({ email, password }: { email: string, password: string }) => {

    const response = await fetch(`${URL_API}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: headers_common,
    })

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }

    const data: ILoginResponse = await response.json() as ILoginResponse
    return data


}