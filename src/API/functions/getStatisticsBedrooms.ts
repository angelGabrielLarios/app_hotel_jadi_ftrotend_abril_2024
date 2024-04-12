import { ExceptionNestjs, IExceptionNestJs } from "../errors"
import { URL_API } from "../url"

export interface StatisticsBedroomsResponse {
    number_total_bedrooms: number;
    number_occupied_bedrooms: number;
    number_available_bedrooms: number;
}

export const getStatisticsBedrooms = async () => {
    const response = await fetch(`${URL_API}/bedrooms/statistics`)

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }

    const data: StatisticsBedroomsResponse = await response.json() as StatisticsBedroomsResponse
    return data
}
