import { ExceptionNestjs, IExceptionNestJs } from "../errors"
import { URL_API } from "../url"
import { headers_common } from "./headers_common"

export interface ResetPasswordResponse {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    generatedMaps: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    raw: any[];
    affected: number;
}

export const resetPasswordAPI = async ({ newPassword, token, email }: { newPassword: string, token: string, email: string }) => {
    const response = await fetch(`${URL_API}/auth/reset-password`, {
        method: 'POST',
        body: JSON.stringify({ newPassword, token, email }),
        headers: headers_common,
    })

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }
    const data: ResetPasswordResponse = await response.json() as ResetPasswordResponse
    return data
}
