import { ExceptionNestjs, IExceptionNestJs } from "../errors"
import { URL_API } from "../url"

export interface IPriceResponse {
    price_for_one_night: number
}

export const getPriceByTypeBedroomAPI = async ({ type }: { type: string }) => {
    const response = await fetch(`${URL_API}/bedroom-type/type/${type}`)

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }

    const data: IPriceResponse = await response.json() as IPriceResponse
    return data

}
