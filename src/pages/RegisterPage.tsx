
import { Link } from "react-router-dom"
import { useMobileResolution } from "../hooks/global"
import { useRegisterPage } from "../hooks/pages"
import { IconErrorInput, Modal } from "../components"



export const RegisterPage = () => {

    const { register,
        handleSubmit,
        onSubmit,
        isShowPassword,
        setIsShowPassword,
        isLoading,
        errors,
        modalRef,
        modalMessage,
        modalType,
        errorNoMatchPassword
    } = useRegisterPage()

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
                        className="mb-6 text-xl font-bold text-center text-primary sm:text-2xl md:3xl lg:text-4xl font-header"
                    >
                        Crear una cuenta
                    </h1>

                    <div className="space-y-4">
                        <div
                            className="grid grid-cols-2 gap-2"
                        >
                            <div>
                                <input
                                    disabled={isLoading}
                                    type="text"
                                    placeholder="Nombre(s)"
                                    maxLength={90}
                                    className={
                                        `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.firstName ? 'input-error' : ''}`
                                    }
                                    {...register('firstName', {
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        },
                                        maxLength: {
                                            value: 90,
                                            message: 'Solo se permiten 90 caracteres'
                                        }

                                    })}

                                />

                                {
                                    errors?.firstName
                                        ?
                                        <p
                                            className="flex items-center justify-end gap-2 text-xs text-error"
                                        >
                                            {errors?.firstName?.message} <IconErrorInput width={24} height={24} />
                                        </p>
                                        : null
                                }
                            </div>

                            <div>
                                <input
                                    disabled={isLoading}
                                    type="text"
                                    placeholder="Apellido(s)"
                                    maxLength={90}
                                    className={
                                        `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.lastName ? 'input-error' : ''}`
                                    }
                                    {...register('lastName', {
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        },
                                        maxLength: {
                                            value: 90,
                                            message: 'Solo se permiten 90 caracteres'
                                        }
                                    })}

                                />

                                {
                                    errors?.lastName
                                        ?
                                        <p
                                            className="flex items-center justify-end gap-2 text-xs text-error"
                                        >
                                            {errors?.lastName?.message} <IconErrorInput width={24} height={24} />
                                        </p>
                                        : null
                                }
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <input
                                    disabled={isLoading}
                                    type="text"
                                    placeholder="Télefono"
                                    maxLength={20}
                                    className={
                                        `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.phone ? 'input-error' : ''}`
                                    }
                                    {...register('phone', {
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: 'Solo se permiten 20 caracteres'
                                        }
                                    })}

                                />

                                {
                                    errors?.phone
                                        ?
                                        <p
                                            className="flex items-center justify-end gap-2 text-xs text-error"
                                        >
                                            {errors?.phone?.message} <IconErrorInput width={24} height={24} />
                                        </p>
                                        : null
                                }
                            </div>

                            <div>
                                <input
                                    disabled={isLoading}
                                    type="text"
                                    placeholder="Dirección"
                                    maxLength={200}
                                    className={
                                        `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.address ? 'input-error' : ''}`
                                    }
                                    {...register('address', {
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        },
                                        maxLength: {
                                            value: 200,
                                            message: 'Solo se permiten 200 caracteres'
                                        }
                                    })}

                                />

                                {
                                    errors?.address
                                        ?
                                        <p
                                            className="flex items-center justify-end gap-2 text-xs text-error"
                                        >
                                            {errors?.address?.message} <IconErrorInput width={24} height={24} />
                                        </p>
                                        : null
                                }

                            </div>

                        </div>

                        <input
                            disabled={isLoading}
                            type="email"
                            placeholder="Correo Electrónico:"
                            maxLength={120}
                            className={
                                `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.email ? 'input-error' : ''}`
                            }
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                },
                                maxLength: {
                                    value: 90,
                                    message: 'Solo se permiten 90 caracteres'
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
                            maxLength={90}
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
                            maxLength={90}
                            className={
                                `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.password?.message ? 'input-error' : ''}`
                            }
                            {...register('confirm_password', {
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
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
                            <span className="text-xs font-medium ms-3 text-black-custom md:text-sm">Mostrar contraseña</span>
                        </label>



                        <button
                            disabled={isLoading}
                            type="submit"
                            className={`btn ${isMobile ? 'btn-sm' : ''} btn-primary w-full text-white-custom text-xs md:text-sm`}
                        >
                            Crear Cuenta
                            {isLoading ? <span className="loading loading-dots loading-xs"></span> : null}

                        </button>

                        <p
                            className="text-xs text-center md:text-sm"
                        >
                            ¿Ya tiene una cuenta?
                            <Link
                                to={'/auth/login'}
                                className="ml-1 text-xs font-bold text-primary md:text-sm"
                            >
                                Iniciar Sesión
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
