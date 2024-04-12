import { ExceptionNestjs, IExceptionNestJs } from "../errors"
import { URL_API } from "../url"
import { headers_common } from "./headers_common"
import { ILoginResponse } from "./loginAPI"


export const registerAPI = async ({ firstName, lastName, address, phone, email, password }: { firstName: string, lastName: string, address: string, phone: string, email: string, password: string }) => {


    const response = await fetch(`${URL_API}/auth/register`, {
        method: 'POST',
        headers: headers_common,
        body: JSON.stringify({ firstName, lastName, phone, email, password, address }),

    })

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }

    const data: ILoginResponse = await response.json() as ILoginResponse
    return data

}
