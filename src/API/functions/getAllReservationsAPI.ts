import { ExceptionNestjs, IExceptionNestJs } from "../errors";
import { URL_API } from "../url";

export interface IReservationResponse {
    id: string;
    check_in_date: Date;
    check_out_date: Date;
    user: IBedroomReservationResponse;
    bedroom: IBedroomReservationResponse;
}

export interface IBedroomReservationResponse {
    id: string;
    status: string;
    num_bedroom: number;
}

export interface IBedroomReservationResponse {
    id: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    phone: string;
    role: string;
}


export const getAllReservationsAPI = async () => {
    const response = await fetch(`${URL_API}/reservations/all`)

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }

    const data: IReservationResponse[] = await response.json() as IReservationResponse[]
    return data
}
