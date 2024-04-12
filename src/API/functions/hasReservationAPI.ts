
import { formatDateNow } from "../../helpers"
import { ExceptionNestjs, IExceptionNestJs } from "../errors"
import { URL_API } from "../url"
import { headers_common } from "./headers_common"

export interface IResponseHasReservationAPI {
    hasReservation: boolean

}

export const hasReservationAPI = async ({ userId }: { userId: string }) => {
    const response = await fetch(`${URL_API}/reservations/hasReservation`, {
        method: 'POST',
        body: JSON.stringify({ userId, currentDate: formatDateNow({ date: new Date(), format: 'yyyy-mm-dd' }) }),
        headers: headers_common,
    })

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }

    const data = await response.json() as IResponseHasReservationAPI
    return data
}
