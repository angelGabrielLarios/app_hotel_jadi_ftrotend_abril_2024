import { useLoaderData } from "react-router-dom"
import { ExceptionNestjs, findOneBedroomByType, IBedroomResponse } from "../../API"
import { useIsActiveReservation } from "../context"
import { useEffect, useState } from "react"


export const useBedroomInfoPage = () => {
    const bedroom: IBedroomResponse = useLoaderData() as IBedroomResponse

    const { isActiveReservationGlobal } = useIsActiveReservation()

    const [isShowAlertError, setIsShowAlertError] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                const data = await findOneBedroomByType({ type: bedroom.type })
                console.log(data)

            } catch (error) {
                if (error instanceof ExceptionNestjs) {
                    if (error.message === 'rooms_not_available') {
                        setIsShowAlertError(true)
                    }

                }

            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        bedroom,
        isActiveReservationGlobal,
        isShowAlertError
    }

}
