
import { ExceptionNestjs, IExceptionNestJs } from "../errors"

import { URL_API } from "../url"
import { headers_common } from "./headers_common"
export const createReservationAPI = async ({ check_in_date, check_out_date, userId, typeBedroom }: { check_in_date: string, check_out_date: string, userId: string, typeBedroom: string }) => {

    const response = await fetch(`${URL_API}/reservations`, {
        method: 'POST',
        body: JSON.stringify({ check_in_date, check_out_date, userId, typeBedroom }),
        headers: headers_common,
    })

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }

    const data = await response.json()
    return data

}





