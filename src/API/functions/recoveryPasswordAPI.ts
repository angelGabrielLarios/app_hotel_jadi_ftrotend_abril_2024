import { ExceptionNestjs, IExceptionNestJs } from "../errors"
import { URL_API } from "../url"
import { headers_common } from "./headers_common"

export interface RecoveryPasswordResponse {
    status: boolean;
    token: string;
    email: string;
    message: string;
}

export const recoveryPasswordAPI = async ({ email }: { email: string }) => {
    const response = await fetch(`${URL_API}/auth/recovery-password`, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: headers_common,
    })

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }

    const data: RecoveryPasswordResponse = await response.json() as RecoveryPasswordResponse
    return data
}
