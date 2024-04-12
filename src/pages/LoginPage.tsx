
import { Link } from "react-router-dom"
import { useMobileResolution } from "../hooks/global"
import { useLoginPage } from "../hooks/pages"
import { IconErrorInput, Modal } from "../components"


export const LoginPage = () => {

    const { register,
        handleSubmit,
        onSubmit,
        isShowPassword,
        setIsShowPassword,
        isLoading,
        errors,
        modalRef,
        modalMessage,
        modalType
    } = useLoginPage()

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
                        Iniciar Sesion
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
                            Iniciar Sesión
                            {isLoading ? <span className="loading loading-dots loading-xs"></span> : null}

                        </button>

                        <p
                            className="text-xs text-center md:text-sm"
                        >
                            ¿No tiene una cuenta?
                            <Link
                                to={'/auth/register'}
                                className="ml-1 font-bold text-primary "
                            >
                                Registrarse
                            </Link>
                        </p>

                        <p
                            className="text-xs text-center md:text-sm"
                        >
                            ¿No te acuerdas de tu contraseña?
                            <Link
                                to={'/auth/recovery-password'}
                                className="ml-1 font-bold text-primary"
                            >
                                Recuperar contraseña
                            </Link>
                        </p>
                    </div>
                </form>


            </main>
            <Modal
                modalRef={modalRef}
                message={modalMessage}
                type={modalType}
            />
        </>
    )
}
