import { useEffect, useRef, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { resetPasswordAPI, validateTokenAPI } from "../../API"
import { TypesModal } from "../../components/types"
import { useNavigate } from "react-router-dom"



interface IFormInputs {
    password: string
    confirm_password: string
}
export const useResetPasswordPage = () => {


    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm<IFormInputs>()

    const [isLoading, setIsLoading] = useState(false)

    const modalRef = useRef<HTMLDialogElement>(null)
    const modalSuccessRef = useRef<HTMLDialogElement>(null)

    const [modalMessage, setModalMessage] = useState('')



    const modalType: TypesModal = 'error'

    const [isShowPassword, setIsShowPassword] = useState(false)

    const navigate = useNavigate()

    const tokenParamRef = useRef('')
    const emailParamRef = useRef('')

    const [errorNoMatchPassword, setErrorNoMatchPassword] = useState(false)

    useEffect(() => {


        if (watch('password') !== watch('confirm_password')) {
            setErrorNoMatchPassword(true)
        } else {
            setErrorNoMatchPassword(false)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch('password'), watch('confirm_password')])

    useEffect(() => {
        document.title = 'Recuperar contraseña'
        const urlParams = new URLSearchParams(location.search);
        tokenParamRef.current = urlParams.get('token') || '';
        emailParamRef.current = urlParams.get('email') || '';

        console.log(emailParamRef.current)
        console.log(tokenParamRef.current);

        (async () => {
            try {
                await validateTokenAPI({ token: tokenParamRef.current, email: emailParamRef.current })
                reset()
            } catch (error) {
                navigate('/auth/error-token')
            }
        })();


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {

        const { password } = data

        if (watch('password') !== watch('confirm_password')) {
            return
        }
        setIsLoading(true)
        try {

            await resetPasswordAPI({ token: tokenParamRef.current, email: emailParamRef.current, newPassword: password })

            modalSuccessRef.current?.showModal()


        } catch (error) {


            setModalMessage('Algo salio mal intenta de nuevo o mas tarde')


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
        modalType,
        errorNoMatchPassword,
        modalSuccessRef,
        navigate
    }
}