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



        setFilteredReservations(
            reservations.filter((reservation) => {
                if (!idReservationInputValue) {
                    return true
                }
                return reservation.id === idReservationInputValue.trim()
            })
        )
    }

    const handleSubmitSearchBedroomByNameUser = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const nameUserInputValue = formData.get('name_user') as string

        console.log(nameUserInputValue, 'nameUserInputValue')

        setFilteredReservations(
            reservations.filter((reservation) => {

                if (!nameUserInputValue) {
                    return true
                }
                const nameComplete = `${reservation.user.firstName} ${reservation.user.lastName}`
                console.log(nameComplete)
                return nameComplete.includes(nameUserInputValue.trim().toLowerCase())
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
        handleSubmitSearchBedroomByNameUser,
        filteredReservations
    }
}
