import { IconSettings, IconTicket } from "@tabler/icons-react"
import { useDropdownUser } from "../hooks"
import { IconUser } from '@tabler/icons-react'
import { IconCircle } from "@tabler/icons-react"
import { IconLogout } from "@tabler/icons-react"
import { NavLink } from "react-router-dom"

export const DropdownUser = () => {

    const { user, logout, isActiveReservationGlobal } = useDropdownUser()
    return (
        <>
            <div className=" dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                    <IconUser />

                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2  menu menu-sm dropdown-content border-primary bg-white rounded-md shadow-lg w-52 text-black-custom">
                    <li>
                        <a className="capitalize">
                            <IconUser className="text-primary" /> {`${user.firstName} ${user.lastName}`}
                        </a>
                    </li>

                    <li>
                        <a href="">
                            {
                                isActiveReservationGlobal
                                    ? <><IconCircle className="text-primary" /> Reservacion Activa</>
                                    : <>
                                        <span className="inline-block bg-red-600 rounded-full size-2"></span> Reservacion Activa
                                    </>
                            }
                        </a>
                    </li>
                    <li>


                        <NavLink to={`/reservation-history`}>
                            <IconTicket className="text-primary" />
                            Historial de reservaciones
                        </NavLink>
                    </li>
                    <li

                    >
                        <a className="">
                            <IconSettings className="text-primary" />
                            Configuración
                        </a>
                    </li>
                    <li
                        onClick={logout}
                    >
                        <a className="text-error">
                            <IconLogout />
                            Cerrar Sesion
                        </a>
                    </li>

                </ul>
            </div>
        </>
    )
}
