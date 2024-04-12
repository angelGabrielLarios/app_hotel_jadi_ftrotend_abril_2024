import { useMobileResolution } from "../hooks/global"
import { useReserveRoomPage } from "../hooks/pages"
import { convertToCurrency, formatDateNow } from "../helpers"
import { ButtonPaypal, IconErrorInput } from "../components"


export const ReserveRoomPage = () => {

    const { register,
        isLoading,
        errors,
        bedroom,
        priceTotal,
        days,
        watch,
        user,
        createReservation,
        errorMaxDays,
        errorNegativeDays,
        maximumDays,

    } = useReserveRoomPage()


    const { isMobile } = useMobileResolution()

    return (
        <>
            <main className="flex flex-col items-center justify-start min-h-screen md:justify-center bg-white-custom">
                <form
                    className="mt-10 md:mt-0 p-6 shadow-lg border border-primary rounded-md text-black-custom w-11/12 md:w-8/12 lg:w-[40rem]"
                    autoComplete="off"
                >
                    <h1
                        className="mb-6 text-xl font-bold text-center text-primary sm:text-2xl md:3xl lg:text-4xl font-header"
                    >
                        Reservar habitación
                    </h1>

                    <p className="text-xs italic text-gray-700 md:text-sm"><span className="text-xs uppercase badge badge-primary md:text-sm">nota</span> Solo se permite realizar como minimo 1 dia de estancia y 6 dias como MAXIMO</p>

                    <div className="space-y-4 text-xs md:text-sm">


                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">



                            <label className="w-full form-control ">
                                <div className="text-xs label md:text-sm">
                                    <span className="text-xs label-text text-black-custom label md:text-sm">Fecha de entrada</span>



                                </div>

                                <input
                                    disabled={isLoading}
                                    type="date"
                                    defaultValue={formatDateNow({ date: new Date(), format: 'yyyy-mm-dd' })}
                                    min={formatDateNow({ date: new Date(), format: 'yyyy-mm-dd' })}

                                    className={
                                        `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.check_in_date?.message ? 'input-error' : ''} ${errorMaxDays ? 'border-error' : ''}`
                                    }
                                    {...register('check_in_date', {
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        }
                                    })}

                                />

                                {
                                    errors?.check_in_date?.type === 'required'
                                        ?
                                        <p
                                            className="flex items-center justify-end gap-2 text-xs text-error"
                                        >
                                            {errors?.check_in_date?.message} <IconErrorInput
                                                height={24}
                                                width={24}
                                            />
                                        </p>
                                        : null
                                }

                            </label>


                            <label className="w-full form-control">
                                <div className="text-xs label md:text-sm">
                                    <span className="text-xs label-text text-black-custom label md:text-sm">Fecha de salida</span>
                                </div>

                                <input
                                    disabled={isLoading}
                                    type="date"
                                    defaultValue={formatDateNow({ date: new Date(new Date().setDate(new Date().getDate() + 1)), format: 'yyyy-mm-dd' })}

                                    min={formatDateNow({ date: new Date(new Date().setDate(new Date().getDate() + 1)), format: 'yyyy-mm-dd' })}

                                    className={
                                        `input input-bordered ${isMobile ? 'input-sm' : ''} w-full bg-inherit text-xs lg:text-sm placeholder:text-xs placeholder:lg:text-sm ${errors?.check_in_date?.message ? 'input-error' : ''} ${errorMaxDays ? 'border-error' : ''}`
                                    }
                                    {...register('check_out_date', {
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        }
                                    })}

                                />

                                {
                                    errors?.check_out_date?.type === 'required'
                                        ?
                                        <p
                                            className="flex items-center justify-end gap-2 text-xs text-error"
                                        >
                                            {errors?.check_out_date?.message} <IconErrorInput
                                                height={24}
                                                width={24}
                                            />
                                        </p>
                                        : null
                                }
                            </label>


                        </div>



                        <div className="grid grid-cols-1 gap-10 text-xs md:grid-cols-2 md:text-sm">
                            <div className={`${errorMaxDays ? 'hidden' : 'grid'} ${errorNegativeDays ? 'hidden' : 'grid'}`}>

                                <p className="text-xs text-right md:text-sm">
                                    <span>Precio por noche: </span>
                                    <span className="font-bold text-primary">{convertToCurrency({ amount: bedroom?.price_for_one_night || 0, locales: 'en', currencyCode: 'MXN' })}</span>
                                </p>

                                <p className="text-xs text-right md:text-sm">
                                    <span>Dias de estancias: </span>
                                    <span className="font-bold text-primary">{days}</span>
                                </p>

                                <p className="text-xs text-right md:text-sm">
                                    <span>Total: </span>
                                    <span className="font-bold text-primary">{convertToCurrency({ amount: priceTotal, locales: 'en', currencyCode: 'MXN' })}</span>
                                </p>
                            </div>
                            <div className={`flex flex-col items-stretch gap-4 ${errorMaxDays ? 'hidden' : 'grid'} ${errorNegativeDays ? 'hidden' : 'grid'}`}>
                                <ButtonPaypal
                                    amount_value={priceTotal}
                                    fn={() => createReservation({ typeBedroom: bedroom?.type || '', userId: user.id, check_in_date: watch('check_in_date'), check_out_date: watch('check_out_date') })}
                                />
                            </div>

                            {
                                errorMaxDays
                                    ? <p
                                        className="flex items-center justify-end gap-2 text-xs md:text-sm text-error"
                                    >
                                        Ha excedido el limite de dias de estancia que son {maximumDays} <IconErrorInput width={24} height={24} />
                                    </p>
                                    : null
                            }
                            {

                                errorNegativeDays
                                    ? <p
                                        className="flex items-center justify-end gap-2 text-xs md:text-sm text-error"
                                    >
                                        Aegurate que la fecha de salida sea mayor que la fecha de salida
                                        <IconErrorInput width={24} height={24} />
                                    </p>
                                    : null
                            }

                        </div>

                    </div>
                </form>


            </main>
        </>
    )
}
