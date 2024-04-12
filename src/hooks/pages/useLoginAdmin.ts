import { useEffect, useRef, useState } from "react"
import { useAuth } from "../context"
import { TypesModal } from "../../components/types"
import { useNavigate } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"
import { ExceptionNestjs, loginAPI } from "../../API"
import { getProfileAPI } from "../../API/functions/getProfileAPI"

interface IFormInputs {
    email: string
    password: string
}
export const useLoginAdmin = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm<IFormInputs>()
    const { login } = useAuth()
    const [isLoading, setIsLoading] = useState(false)

    const modalRef = useRef<HTMLDialogElement>(null)

    const [modalMessage, setModalMessage] = useState('')

    const modalType: TypesModal = 'error'

    const [isShowPassword, setIsShowPassword] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Iniciar Sesión'
    }, [])

    const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {

        const { email, password } = data
        setIsLoading(true)
        try {

            const { access_token } = await loginAPI({ email: email.trim(), password: password.trim() })
            const user = await getProfileAPI({ access_token })

            if (user.role === 'admin') {
                login({ ...user, isAuth: true })
                reset()
                navigate('/admin')
            }

            else if (user.role === 'normal') {
                setModalMessage('Solo puede iniciar sesión como administrador')
                modalRef.current?.show()
            }



        } catch (error) {

            if (error instanceof ExceptionNestjs) {
                if (error.message === 'error_credentials') {
                    setModalMessage('El correo electronico o la contraseña incorrectos')
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
        modalMessage,
        modalType
    }
}
