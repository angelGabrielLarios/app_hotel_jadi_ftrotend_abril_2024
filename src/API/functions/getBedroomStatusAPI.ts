
import { ExceptionNestjs, IExceptionNestJs } from '../errors'
import { URL_API } from '../url'


export interface BedroomStatusResponse {
    id: string;
    status: StatusResponse;
    num_bedroom: number,
    bedroomType: BedroomTypeResponse;
}

export interface BedroomTypeResponse {
    id: string;
    type: TypeBedResponse;
}

export enum TypeBedResponse {
    Doble = "doble",
    KingSize = "king size",
    Sencilla = "sencilla",
    Triple = "triple",
}

export enum StatusResponse {
    Available = "available",
    Busy = "busy",
}

export const getBedroomsStatusAPI = async () => {
    const response = await fetch(`${URL_API}/bedrooms`)

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }

    const data: BedroomStatusResponse[] = await response.json() as BedroomStatusResponse[]
    return data
}
