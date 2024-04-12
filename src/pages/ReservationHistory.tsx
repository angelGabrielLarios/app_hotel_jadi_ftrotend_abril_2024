import { format } from "@formkit/tempo"
import { useReservationHistory } from "../hooks"


export const ReservationHistory = () => {

    const { reservations } = useReservationHistory()
    return (
        <>
            <section className="container py-8 mx-auto">
                <h1 className="py-3 mb-10 text-xl font-bold text-center capitalize text-primary sm:text-2xl md:3xl lg:text-4xl">
                    mi historial de reservaciones
                </h1>
                <article className="h-screen overflow-x-auto">
                    <table className="table table-pin-rows">
                        <thead >
                            <tr className="text-center text-primary font-raleway">

                                <th
                                    className="border border-collapse"
                                >
                                    <div className="">

                                        Código de Reservación
                                    </div>
                                </th>

                                <th
                                    className="border border-collapse"
                                >
                                    <div className="">

                                        Número de Habitación
                                    </div>
                                </th>

                                <th
                                    className="border border-collapse"
                                >
                                    <div className="">
                                        Fecha de Entrada
                                    </div>
                                </th>
                                <th
                                    className="border border-collapse"
                                >
                                    <div className="">
                                        Fecha de Salida
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody >

                            {
                                reservations.map(reservation => {
                                    return (
                                        <tr
                                            key={reservation.id}
                                        >
                                            <td className="border border-collapse">{reservation.id}</td>
                                            <td className="border border-collapse">

                                                <div className="flex items-center justify-center mx-auto text-xs border rounded-full size-6 border-primary text-primary">{reservation.bedroom.num_bedroom}</div>
                                            </td>
                                            <td className="border border-collapse">{format(new Date(reservation.check_in_date), 'long')}</td>
                                            <td className="border border-collapse">{format(new Date(reservation.check_out_date), 'long')}</td>

                                        </tr>

                                    )
                                })
                            }


                        </tbody>
                    </table>
                </article>
            </section>

        </>
    )
}
