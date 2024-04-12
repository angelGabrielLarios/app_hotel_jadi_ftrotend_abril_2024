import { IconDiamond } from "@tabler/icons-react"


export const ReservationTicket = () => {
    return (
        <main className="flex flex-col w-screen h-screen">
            <section className="flex items-center justify-center flex-grow w-full p-4 bg-white-custom">
                <div className="flex w-full h-64 max-w-3xl border border-primary">
                    <div className="flex items-center justify-center h-full px-8 bg-white-custom rounded-l-3xl">

                    </div>
                    <div className="relative flex flex-col items-center justify-between h-full border-2 border-dashed bg-zinc-900 border-zinc-50">
                        <div className="absolute w-8 h-8 rounded-full -top-5" />
                        <div className="absolute w-8 h-8 rounded-full -bottom-5" />
                    </div>
                    <div className="flex flex-col flex-grow h-full px-10 py-8 bg-white-custom rounded-r-3xl">
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <IconDiamond className="text-primary" /> <span className="text-primary">Hotel Jadi</span>
                            </div>
                        </div>

                        <div>
                            <p>Codigo de reservación</p>
                            <p>4df13151-2d5f-4513-8aa8-09554e99f774</p>
                        </div>
                        <div className="flex justify-between w-full mt-auto">
                            <div className="flex flex-col">
                                <span className="text-xs ">Fecha de Entrada</span>
                                <span className="font-mono">09/06/2023</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs ">Fecha de Salida</span>
                                <span className="font-mono">09/06/2023</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs ">Departure</span>
                                <span className="font-mono">17:45</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs ">Cliente</span>
                                <span className="font-mono">Rob Stinson</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs ">Pagado</span>
                                <span className="font-mono">60</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

    )
}
