import { ExceptionNestjs, IExceptionNestJs } from "../errors"
import { URL_API } from "../url"
import { IBedroomResponse } from "./getBedroomsAPI"


export const getOneBedroomAPI = async ({ id }: { id: string }) => {
    const response = await fetch(`${URL_API}/bedroom-type/id/${id}`)

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }

    const data: IBedroomResponse = await response.json() as IBedroomResponse
    return data

}
