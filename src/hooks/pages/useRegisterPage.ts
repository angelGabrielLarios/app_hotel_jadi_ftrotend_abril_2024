import { useEffect, useRef, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { registerAPI } from "../../API/functions"
import { getProfileAPI } from "../../API/functions/getProfileAPI"
import { useAuth } from "../context"
import { ExceptionNestjs } from '../../API';
import { TypesModal } from "../../components/types"
import { useNavigate } from "react-router-dom"

interface IFormInputs {
    firstName: string
    lastName: string
    address: string
    email: string
    phone: string
    password: string
    confirm_password: string
}
export const useRegisterPage = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm<IFormInputs>()


    const [isLoading, setIsLoading] = useState(false)

    const modalRef = useRef<HTMLDialogElement>(null)

    const [isShowPassword, setIsShowPassword] = useState(false)

    const [modalMessage, setModalMessage] = useState('')

    const modalType: TypesModal = 'error'

    const { login } = useAuth()

    const navigate = useNavigate()


    console.log(errors)


    useEffect(() => {
        document.title = 'Crear una cuenta nueva'
    }, [])

    const [errorNoMatchPassword, setErrorNoMatchPassword] = useState(false)

    useEffect(() => {
        if (watch('password') !== watch('confirm_password')) {
            setErrorNoMatchPassword(true)
        } else {
            setErrorNoMatchPassword(false)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch('password'), watch('confirm_password')])

    const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {

        if (watch('password') !== watch('confirm_password')) {
            return
        }

        setIsLoading(true)

        try {

            const { access_token } = await registerAPI({
                firstName: data.firstName.trim().toLocaleLowerCase(),
                lastName: data.lastName.trim().toLocaleLowerCase(),
                address: data.address.trim().toLocaleLowerCase(),
                email: data.email.trim(),
                password: data.password.trim(),
                phone: data.phone.trim(),
            })

            const user = await getProfileAPI({ access_token })
            login({ ...user, isAuth: true })

            reset()
            navigate('/')

        } catch (error) {

            if (error instanceof ExceptionNestjs) {
                if (error.message === 'already_phone') {
                    setModalMessage('El número télefonico ya ha sido registrado')
                }
                else if (error.message === 'already_email') {
                    setModalMessage('El correo electronico ya ha sido registrado')
                }
                else {
                    setModalMessage('Algo salio mal intenta de nuevo o mas tarde')
                }
            }
            else {
                setModalMessage('Algo salio mal intenta de nuevo o mas tarde')
            }

            modalRef.current?.show()

        }
        finally {
            setIsLoading(false)
        }
    }

    return {
        register,
        handleSubmit,
        onSubmit,
        isShowPassword,
        setIsShowPassword,
        isLoading,
        errors,
        modalRef,
        modalType,
        modalMessage,
        errorNoMatchPassword
    }
} 