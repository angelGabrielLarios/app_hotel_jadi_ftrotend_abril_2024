import { ExceptionNestjs, IExceptionNestJs } from "../errors"
import { URL_API } from "../url"

export interface ReservationHistorialResponse {

    "id": string
    "check_in_date": string
    "check_out_date": string
    "created_at": string
    "bedroom": {
        "num_bedroom": number
    }

}
export const getReservationHistorial = async ({ userId }: { userId: string }) => {

    const response = await fetch(`${URL_API}/reservations/userId/${userId}`)

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }

    const data: ReservationHistorialResponse[] = await response.json() as ReservationHistorialResponse[]
    return data
}
