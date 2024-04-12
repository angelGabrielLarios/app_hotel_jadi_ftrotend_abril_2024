
import { IconBed, IconCaretDown, IconCaretUp, IconQuestionMark, IconScan, IconUser } from "@tabler/icons-react"
import { useReservationsAdminView } from "../../hooks"
import { format, isAfter } from "@formkit/tempo"

export const ReservartionsAdmin = () => {
    const {
        filteredReservations,
        modalRef,
        numBedroom,
        handleSubmitSearchBedroomByCodeReservations,
        handleSubmitSearchBedroomByNameUser
    } = useReservationsAdminView()
    return (
        <>




            <section className="container mx-auto ">

                <div className="flex items-center gap-4 mb-6">
                    <form
                        method="get"
                        className="flex items-center gap-2"
                        onSubmit={handleSubmitSearchBedroomByCodeReservations}
                    >
                        <input type="text" name="id_reservation" className="w-[14rem] input input-bordered input-sm" placeholder="Buscar por código de reservación" />
                        <button type="submit" className="btn btn-sm btn-primary">Buscar</button>
                    </form>

                    <form
                        method="get"
                        className="flex items-center gap-2"
                        onSubmit={handleSubmitSearchBedroomByNameUser}
                    >
                        <input type="text" name="name_user" className="w-[14rem] input input-bordered input-sm" placeholder="Buscar por nombre del cliente" />
                        <button type="submit" className="btn btn-sm btn-primary">Buscar</button>
                    </form>
                </div>
                <article>
                    <div className="">
                        <table className="static z-20 table table-pin-rows">
                            <thead className="static">
                                <tr className="static">

                                    <th className="border border-collapse text-primary"><IconScan /> Código de reservación</th>
                                    <th className="border border-collapse text-primary"><IconUser /> Cliente</th>

                                    <th className="border border-collapse text-primary"><IconQuestionMark /> Fecha de Entrada</th>

                                    <th className="border border-collapse text-primary"><IconCaretDown /> Fecha de Salida</th>

                                    <th className="border border-collapse text-primary"><IconCaretUp />Numero de Habitación</th>

                                    <th className="border border-collapse text-primary"><IconBed /> ¿Ya se venció la estadia del cliente?</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    filteredReservations.map(reservation => {
                                        return (
                                            <tr
                                                className=""
                                                key={reservation.id}
                                            >
                                                <td className="border border-collapse">{reservation.id}</td>
                                                <td className="capitalize border border-collapse">{`${reservation.user.firstName} ${reservation.user.lastName}`}</td>
                                                <td className="border border-collapse">{format(new Date(reservation.check_in_date), 'full')}</td>
                                                <td className="border border-collapse">{format(new Date(reservation.check_out_date), 'full')}</td>
                                                <td className="text-center border border-collapse text-primary">{reservation.bedroom.num_bedroom}</td>
                                                <td className="text-center border border-collapse ">{
                                                    isAfter(new Date(), new Date(reservation.check_out_date))
                                                        ? 'si'
                                                        : 'no'
                                                }</td>
                                            </tr>
                                        )
                                    })
                                }
                                {
                                    !filteredReservations.length
                                        ? <tr>
                                            <th colSpan={6}>
                                                <div role="alert" className="w-full alert alert-warning">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current shrink-0" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                                    <span>No aparecieron resultados</span>
                                                </div>
                                            </th>
                                        </tr>
                                        : null
                                }
                            </tbody>
                        </table>
                    </div>

                    <dialog
                        ref={modalRef}
                        className=" bg-opacity-10 bg-slate-600 modal"

                    >
                        <section className="bg-white border rounded-md shadow-lg modal-box">
                            <article
                                className='flex items-center justify-center mb-4'
                            >
                                <IconQuestionMark className="text-primary size-12" />
                            </article>

                            <form method="dialog">
                                <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                            </form>

                            <h3 className={`font-bold text-center text-xs sm:text-sm md:text-2xl text-primary mb-3`}>
                                Actualizar estado de la habitación
                            </h3>
                            <p className="mb-3 text-xs md:text-sm">
                                Si desea actualizar el estado de la habitación de número <span className="font-mono font-bold text-primary">{numBedroom}</span>,
                                presione el boton de <span className="text-primary font-open">continuar</span>, y sino <span className="text-error font-open">cancelar</span>
                            </p>

                            <div className="flex items-center justify-end gap-2">
                                <button className="text-xs capitalize btn btn-neutral btn-sm md:text-sm" onClick={() => modalRef.current?.close()}>
                                    cancelar
                                </button>
                                <button className="text-xs capitalize btn btn-primary btn-sm md:text-sm">
                                    continuar
                                </button>

                            </div>

                        </section>
                    </dialog>
                </article>
            </section>



        </>
    )
}
