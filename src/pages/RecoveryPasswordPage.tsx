
import { useMobileResolution } from "../hooks/global"
import { useRecoveryPasswordPage } from "../hooks/pages"
import { IconErrorInput, Modal } from "../components"
import { IconCheck } from "@tabler/icons-react"


export const RecoveryPasswordPage = () => {

    const { register,
        handleSubmit,
        onSubmit,
        isLoading,
        errors,
        modalRef,
        modalSuccessRef,
        modalMessage,
        modalType,
        emailRecovery
    } = useRecoveryPasswordPage()

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
                        Recuperar contraseña
                    </h1>

                    <div className="space-y-4">
                        <input
                            disabled={isLoading}
                            type="email"
                            placeholder="Correo Electrónico:"
                            className={
                                `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.email ? 'input-error' : ''}`
                            }
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}

                        />

                        {
                            errors?.email
                                ?
                                <p
                                    className="flex items-center justify-end gap-2 text-xs text-error"
                                >
                                    {errors?.email?.message} <IconErrorInput width={24} height={24} />
                                </p>
                                : null
                        }

                        <button
                            disabled={isLoading}
                            type="submit"
                            className={`btn ${isMobile ? 'btn-sm' : ''} btn-primary w-full text-white-custom text-xs md:text-sm`}
                        >
                            Enviar correo de recuperación
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
                            Correo de recuperación enviado correctamente
                        </h3>

                        <p className="mb-4 text-xs md:text-sm">
                            Verifica el correo <span className="font-bold">{emailRecovery}</span>
                        </p>
                        <button
                            className="btn bg-success hover:bg-green-800"
                            onClick={() => modalSuccessRef.current?.close()}
                        >
                            continuar
                        </button>
                    </div>

                </div>
            </dialog>
        </>
    )
}
