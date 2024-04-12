
import { useMobileResolution, useResetPasswordPage } from "../hooks/"
/* import { useRecoveryPasswordPage } from "../hooks/pages" */
import { IconErrorInput, Modal } from "../components"
import { IconCheck } from "@tabler/icons-react"


export const ResetPasswordPage = () => {

    const { register,
        handleSubmit,
        onSubmit,
        isLoading,
        errors,
        modalRef,
        modalMessage,
        modalSuccessRef,
        modalType,
        isShowPassword,
        errorNoMatchPassword,
        setIsShowPassword,
        navigate
    } = useResetPasswordPage()

    const { isMobile } = useMobileResolution()

    return (
        <>
            <main className="min-h-screen flex flex-col items-center justify-start md:justify-center bg-[#F6F7FB]">
                <form
                    className="mt-10 md:mt-0 p-6 rounded-md bg-white w-11/12 md:w-8/12 lg:w-[40rem]"
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                >
                    <h1
                        className="mb-6 text-xl font-bold text-center text-primary sm:text-2xl md:3xl lg:text-4xl "
                    >
                        Reestablecer contraseña
                    </h1>

                    <div className="space-y-4">

                        <input
                            disabled={isLoading}
                            type={isShowPassword ? 'text' : 'password'}
                            placeholder="Contraseña"
                            className={
                                `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.password?.message ? 'input-error' : ''}`
                            }
                            {...register('password', {
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                },
                                maxLength: {
                                    value: 90,
                                    message: 'Solo se permiten 90 caracteres'
                                },
                                minLength: {
                                    value: 8,
                                    message: 'La contraseña debe ser minimo de 8 caracteres'
                                }
                            })}

                        />

                        {
                            errors?.password
                                ?
                                <p
                                    className="flex items-center justify-end gap-2 text-xs text-error"
                                >
                                    {errors?.password?.message} <IconErrorInput width={24} height={24} />
                                </p>
                                : null
                        }


                        <input
                            disabled={isLoading}
                            type={isShowPassword ? 'text' : 'password'}
                            placeholder="Confirmar contraseña"
                            className={
                                `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.confirm_password?.message ? 'input-error' : ''}`
                            }
                            {...register('confirm_password', {
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                },


                            })}

                        />

                        {
                            errors?.confirm_password
                                ?
                                <p
                                    className="flex items-center justify-end gap-2 text-xs text-error"
                                >
                                    {errors?.confirm_password?.message} <IconErrorInput width={24} height={24} />
                                </p>
                                : null
                        }

                        {
                            errorNoMatchPassword
                                ? <p
                                    className="flex items-center justify-end gap-2 text-xs text-error"
                                >
                                    Las contraseñas no coinciden <IconErrorInput width={24} height={24} />
                                </p> : null
                        }
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                onChange={(e) => setIsShowPassword(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary" />
                            <span className="text-xs font-medium md:text-sm ms-3 text-black-custom ">Mostrar contraseña</span>
                        </label>


                        <button
                            disabled={isLoading}
                            type="submit"
                            className={`btn ${isMobile ? 'btn-sm' : ''} btn-primary w-full text-white-custom text-xs md:text-sm`}
                        >
                            Reestablecer contraseña
                            {isLoading ? <span className="loading loading-dots loading-xs"></span> : null}

                        </button>

                    </div>
                </form>


            </main>
            <Modal
                modalRef={modalRef}
                message={modalMessage}
                type={modalType}
            />

            <dialog className="modal" ref={modalSuccessRef}>
                <div className="modal-box">

                    <div className="flex flex-col items-center space-y-2">
                        <IconCheck className="mx-auto text-success size-16" />
                        <h3 className="mb-4 text-base font-bold text-center md:text-lg text-success">
                            Contraseña Correctamente Reestablecida
                        </h3>
                        <p className="mb-4 text-xs md:text-sm">
                            Ahora inicia sesión con tu nueva contraseña que acabas de cambiar
                        </p>

                        <button
                            className="btn bg-success hover:bg-green-800"
                            onClick={() => {
                                modalSuccessRef.current?.close()
                                navigate('/auth/login')
                            }}
                        >
                            continuar
                        </button>
                    </div>

                </div>
            </dialog>
        </>
    )
}
