import { useEffect } from "react";
import { hasReservationAPI } from "../../API";
import { useAuth, useIsActiveReservation } from "../context";


export const useDropdownUser = () => {


    const { user, logout } = useAuth()
    const { setIsActiveReservationGlobal, isActiveReservationGlobal } = useIsActiveReservation()
    useEffect(() => {
        (async () => {
            try {
                const { hasReservation } = await hasReservationAPI({ userId: user.id })

                setIsActiveReservationGlobal(hasReservation)


            } catch (error) {
                console.error(error)
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return {
        user,
        isActiveReservationGlobal,
        logout
    }
}
