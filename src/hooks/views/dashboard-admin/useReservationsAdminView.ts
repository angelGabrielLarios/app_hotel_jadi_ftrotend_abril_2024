import { FormEvent, useEffect, useRef, useState } from "react"
import { getAllReservationsAPI, IReservationResponse } from "../../../API";


export const useReservationsAdminView = () => {
    const [reservations, setReservations] = useState<IReservationResponse[] | []>([])
    const [filteredReservations, setFilteredReservations] = useState<IReservationResponse[]>([])
    const modalRef = useRef<HTMLDialogElement | null>(null)

    const [numBedroom, setNumBedroom] = useState(0)

    const changeNumBedroom = (newNumBedroom: number) => {
        setNumBedroom(newNumBedroom)
    }


    const handleSubmitSearchBedroomByCodeReservations = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const idReservationInputValue = formData.get('id_reservation') as string

        console.log(idReservationInputValue, 'idReservationInputValue')

        setFilteredReservations(
            reservations.filter((reservation) => {
                if (!idReservationInputValue) {
                    return true
                }
                return reservation.id === idReservationInputValue.trim()
            })
        )
    }
    useEffect(() => {
        (async () => {
            const resultReservations = await getAllReservationsAPI()
            setReservations(resultReservations)
            setFilteredReservations(resultReservations)
        })();
    }, [])




    return {
        reservations,
        modalRef,
        numBedroom,
        changeNumBedroom,
        handleSubmitSearchBedroomByCodeReservations,
        filteredReservations
    }
}
