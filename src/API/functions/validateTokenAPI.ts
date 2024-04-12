import { ExceptionNestjs, IExceptionNestJs } from "../errors"
import { URL_API } from "../url"
import { headers_common } from "./headers_common"


export interface ValidateTokenResponse {
    id: string;
    token: string;
    created_at: Date;
    user: { email: string };
}



export const validateTokenAPI = async ({ email, token }: { email: string, token: string }) => {

    const response = await fetch(`${URL_API}/password-reset-token/validate-token`, {
        method: 'POST',
        headers: headers_common,
        body: JSON.stringify({ email, token }),

    })

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json() as IExceptionNestJs
        throw new ExceptionNestjs(data)
    }

    const data: ValidateTokenResponse = await response.json() as ValidateTokenResponse
    return data

}
