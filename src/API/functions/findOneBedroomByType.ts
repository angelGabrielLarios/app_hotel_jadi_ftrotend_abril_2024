import { ExceptionNestjs, IExceptionNestJs } from "../errors"
import { URL_API } from "../url"


export interface BedroomResponseAlternate {
    id: string;
    status: string;
    num_bedroom: number;
}


export const findOneBedroomByType = async ({ type }: { type: string }) => {

    const response = await fetch(`${URL_API}/bedrooms/bedroom-available-by-type/${type}`)

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }
    const data: BedroomResponseAlternate = await response.json() as BedroomResponseAlternate
    return data

}
