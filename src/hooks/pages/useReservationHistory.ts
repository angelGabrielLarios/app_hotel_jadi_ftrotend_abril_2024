import { useEffect, useState } from "react"
import { getReservationHistorial, ReservationHistorialResponse } from "../../API"
import { useAuth } from "../context"


export const useReservationHistory = () => {

    const [reservations, setReservations] = useState<ReservationHistorialResponse[]>([])

    const { user } = useAuth()
    useEffect(() => {
        (async () => {
            const newReservations = await getReservationHistorial({ userId: user.id })
            setReservations(newReservations)
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return {
        reservations
    }
}
