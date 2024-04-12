
import { ExceptionNestjs, IExceptionNestJs } from '../errors'
import { URL_API } from '../url'

export interface IBedroomResponse {
    id: string;
    type: string;
    price_for_one_night: number;
    num_single_beds: number;
    num_king_size_beds: number;
    num_restroom: number;
    num_tv: number;
    url_image: string;
}
export const getBedroomsAPI = async () => {
    const response = await fetch(`${URL_API}/bedroom-type`)

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }

    const data: IBedroomResponse[] = await response.json() as IBedroomResponse[]
    return data
}
