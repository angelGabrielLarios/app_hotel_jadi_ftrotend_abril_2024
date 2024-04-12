import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"
import { IBedroomResponse, createReservationAPI } from "../../API"
import { diffDateDays } from "../../helpers"
import { useAuth } from "../context"



export interface IFormInputs {
    check_in_date: string
    check_out_date: string
}
export const useReserveRoomPage = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { register, formState: { errors, }, watch } = useForm<IFormInputs>()

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)


    const { user } = useAuth()
    const modalAlertRef = useRef<HTMLDialogElement>(null)

    const [isShowPassword, setIsShowPassword] = useState(false)

    const [priceTotal, setPriceTotal] = useState(0)

    const priceTotalRef = useRef(0)

    const location = useLocation()

    const bedroom: IBedroomResponse = location.state.bedroom as IBedroomResponse
    const maximumDays = 6

    const [days, setDays] = useState(0)

    const [errorMaxDays, setErrorMaxDays] = useState(false)

    const [errorNegativeDays, setErrorNegativeDays] = useState(false)


    const modalPaymentSuccessRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        document.title = 'Reservar Habitación';
        const newDays = diffDateDays({ endDate: watch(`check_out_date`), initialDate: watch(`check_in_date`) })
        console.log(newDays)
        console.log(newDays > maximumDays, 'newDays > maximumDays')
        if (newDays > maximumDays) {
            setErrorMaxDays(true)
        }
        if (newDays <= maximumDays) {
            setErrorMaxDays(false)
        }
        if (newDays <= 0) {
            setErrorNegativeDays(true)
        }
        if (newDays > 0) {
            setErrorNegativeDays(false)
        }
        setDays(newDays)


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch('check_in_date'), watch(`check_out_date`)])

    useEffect(() => {
        setPriceTotal(() => (bedroom?.price_for_one_night || 0) * days);

    }, [days, bedroom?.price_for_one_night, priceTotal])


    useEffect(() => {
        if (!user.isAuth) {
            navigate('/auth/login')
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const createReservation = async ({ typeBedroom, userId, check_in_date, check_out_date }: { typeBedroom: string, userId: string, check_in_date: string, check_out_date: string }) => {

        setIsLoading(true)
        try {
            const result = await createReservationAPI({ typeBedroom, userId, check_in_date, check_out_date })

            console.log(result)

        } catch (error) {

            console.error(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    return {
        register,
        user,
        createReservation,
        isShowPassword,
        setIsShowPassword,
        isLoading,
        errors,
        modalAlertRef,
        priceTotal,
        priceTotalRef,
        bedroom,
        days,
        watch,
        errorMaxDays,
        errorNegativeDays,
        maximumDays,
        modalPaymentSuccessRef
    }
}