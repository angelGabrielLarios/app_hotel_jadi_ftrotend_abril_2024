import { ExceptionNestjs, IExceptionNestJs } from "../errors"
import { URL_API } from "../url"
import { StatusResponse } from "./getBedroomStatusAPI"
import { headers_common } from "./headers_common"

export interface UpdateStatusBedroomResponse {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    generatedMaps: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    raw: any[];
    affected: number;
}
export const updateStatusBedroom = async ({ num_bedroom, status }: { num_bedroom: number, status: StatusResponse }) => {
    const response = await fetch(`${URL_API}/bedrooms/update-status`, {
        method: 'PATCH',
        body: JSON.stringify({ num_bedroom, status }),
        headers: headers_common,
    })

    if (!response.ok) {
        const data: IExceptionNestJs = await response.json()
        throw new ExceptionNestjs(data)
    }
    const data: UpdateStatusBedroomResponse = await response.json() as UpdateStatusBedroomResponse
    return data
}
