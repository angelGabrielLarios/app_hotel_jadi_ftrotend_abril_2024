
import { IconEdit, IconReload } from "@tabler/icons-react"
import { StatusResponse, TypeBedResponse } from "../../API"
import { CardInfoDA } from "../../components"
import { useBedroomsAdminView } from "../../hooks"


export const BedroomsAdminView = () => {

    const {
        statisticsBedrooms,
        filteredBedrooms,
        setByStatus,
        setByType,
        handleSubmitSearchBedroomByNumber,
        numberBedroomForModal,
        setNumberBedroomForModal,
        modalEditStatusRef,
        setStatusBedroomForModal,
        statusBedroomForModal,
        onSubmitUpdateStatusBedroom
    } = useBedroomsAdminView()
    return (
        <>
            <section className="container mx-auto mb-8">
                <article>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <CardInfoDA type="available" num={statisticsBedrooms.number_available_bedrooms} />
                        <CardInfoDA type="busy" num={statisticsBedrooms.number_occupied_bedrooms} />
                        <CardInfoDA type="total" num={statisticsBedrooms.number_total_bedrooms} />
                    </div>
                </article>
            </section>

            <section className="container mx-auto">
                <article>
                    <div className="mb-6">
                        <p className="text-center">Filtrar por:</p>
                        <div className="flex items-end gap-4">
                            <div>
                                <label htmlFor="select-status" className="block mb-2 text-sm">
                                    Estatus:
                                </label>
                                <select id="select-status" className="w-full max-w-xs select select-primary select-sm" onChange={(event) => {
                                    const value = event.target.value
                                    setByStatus(value)
                                }}>
                                    <option value={''}>Todas</option>
                                    <option value={StatusResponse.Available}>Disponible</option>
                                    <option value={StatusResponse.Busy}>Ocupada</option>

                                </select>
                            </div>

                            <div>
                                <label htmlFor="select-type" className="block mb-2 text-sm">
                                    tipo:
                                </label>
                                <select id="select-type" className="w-full max-w-xs select select-primary select-sm" onChange={(event) => {
                                    const value = event.target.value
                                    setByType(value)
                                }}>
                                    <option value={''} selected>Todas</option>
                                    <option value={TypeBedResponse.Sencilla}>Sencilla</option>
                                    <option value={TypeBedResponse.Doble}>Doble</option>
                                    <option value={TypeBedResponse.KingSize}>King Size</option>
                                    <option value={TypeBedResponse.Triple}>Triple</option>

                                </select>
                            </div>

                            <form
                                method="get"
                                className="flex items-center gap-4"
                                onSubmit={handleSubmitSearchBedroomByNumber}
                            >
                                <input type="number" name="number_bedroom" className="w-[14rem] input input-bordered input-sm" placeholder="Buscar número de habitación" />
                                <button type="submit" className="btn btn-sm btn-primary">Buscar</button>
                            </form>
                        </div>
                    </div>

                    <div className="overflow-x-auto h-96">
                        <table className="static z-20 table table-pin-rows">
                            <thead className="static">
                                <tr className="static">

                                    <th className="p-2 text-xs font-bold border border-collapse font-raleway md:text-sm">
                                        <div className="">

                                            Número
                                        </div>
                                    </th>
                                    <th className="p-2 text-xs font-bold border border-collapse font-raleway md:text-sm">
                                        <div className="">
                                            Tipo
                                        </div>
                                    </th>
                                    <th className="p-2 text-xs font-bold border border-collapse font-raleway md:text-sm">
                                        <div className="">
                                            Estatus
                                        </div>
                                    </th>

                                    <th className="p-2 text-xs font-bold border border-collapse font-raleway md:text-sm">
                                        <div className="">
                                            Editar
                                        </div>
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="">

                                {
                                    filteredBedrooms.map(bedroom => {
                                        return (
                                            <tr
                                                className="static"
                                                key={bedroom.id}
                                            >
                                                <td className="p-2 border border-collapse ">
                                                    <div className="flex items-center justify-center mx-auto text-xs border rounded-full size-6 border-primary text-primary">
                                                        {bedroom.num_bedroom}
                                                    </div>
                                                </td>
                                                <td className="p-2 border border-collapse ">{bedroom.bedroomType.type}</td>
                                                <td className="p-2 border border-collapse ">
                                                    {bedroom.status === 'available' ? <span className="px-1 text-green-800 border rounded-full">Disponible</span> : null}
                                                    {bedroom.status === 'busy' ? <span className="px-1 text-yellow-500 border rounded-full">Ocupada</span> : null}
                                                    { }
                                                </td>

                                                <td className="p-2 text-center border border-collapse">
                                                    <button onClick={() => {
                                                        setNumberBedroomForModal(bedroom.num_bedroom)
                                                        setStatusBedroomForModal(bedroom.status)
                                                        modalEditStatusRef.current?.showModal()

                                                    }
                                                    }>
                                                        <IconEdit className="text-primary" />
                                                    </button>
                                                </td>

                                            </tr>
                                        )
                                    })
                                }
                                {
                                    filteredBedrooms.length === 0
                                        ? <div role="alert" className="text-xs alert alert-warning md:text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current shrink-0" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                            <span>No aparecieron resultados</span>
                                        </div>
                                        : null
                                }


                            </tbody>
                        </table>
                    </div>

                </article>
            </section>

            <dialog className="modal" ref={modalEditStatusRef}>
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                    </form>

                    <form
                        action=""
                        className="space-y-4"
                        onSubmit={onSubmitUpdateStatusBedroom}
                    >
                        <div>
                            <label htmlFor="num_bedroom" className="block mb-2 text-xs md:text-sm">Número de Habitación:</label>
                            <input type="text" placeholder="Type here" className="block w-full text-xs input-sm input input-bordered md:text-sm disabled" value={numberBedroomForModal} readOnly />
                        </div>

                        <div>
                            <label htmlFor="num_bedroom" className="block mb-2 text-xs md:text-sm">Número de Habitación:</label>
                            <select className="block w-full select select-bordered select-sm" value={statusBedroomForModal} onChange={(event) => {
                                const value = event.target.value
                                setStatusBedroomForModal(value as StatusResponse)
                            }}>
                                <option value={StatusResponse.Available} className="text-green-800">Disponible</option>
                                <option value={StatusResponse.Busy} className="text-yellow-400">Ocupada</option>
                            </select>

                        </div>

                        <button type="submit" className="flex items-center justify-center w-full gap-2 btn btn-primary text-white-custom">
                            Actualizar <IconReload className="text-white-custom" />
                        </button>
                    </form>

                </div>
            </dialog>
        </>
    )
}
