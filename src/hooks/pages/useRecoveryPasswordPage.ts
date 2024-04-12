import { useEffect, useRef, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { ExceptionNestjs, recoveryPasswordAPI } from "../../API"
import { TypesModal } from "../../components/types"
import { useNavigate } from "react-router-dom"



interface IFormInputs {
    email: string
    password: string
}
export const useRecoveryPasswordPage = () => {


    const { register, reset, handleSubmit, formState: { errors } } = useForm<IFormInputs>()

    const [isLoading, setIsLoading] = useState(false)

    const modalRef = useRef<HTMLDialogElement>(null)

    const modalSuccessRef = useRef<HTMLDialogElement>(null)

    const [modalMessage, setModalMessage] = useState('')

    const modalType: TypesModal = 'error'

    const [emailRecovery, setEmailRecovery] = useState('')

    const [isShowPassword, setIsShowPassword] = useState(false)

    const navigate = useNavigate()
    console.log(navigate)

    useEffect(() => {
        document.title = 'Recuperar contraseña'
    }, [])

    const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {

        const { email } = data
        setIsLoading(true)
        try {

            const responseAPI = await recoveryPasswordAPI({ email })
            if (responseAPI.status) {
                setEmailRecovery(email)
                modalSuccessRef.current?.showModal()
                reset()
            }


        } catch (error) {

            if (error instanceof ExceptionNestjs) {
                if (error.message === 'the_email_address_does_not_exist') {
                    setModalMessage('El email no ha sido registrado')
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
        modalSuccessRef,
        modalMessage,
        emailRecovery,
        modalType
    }
}