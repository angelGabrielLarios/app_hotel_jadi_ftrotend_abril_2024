import { IconHome, IconLamp, IconTicket } from "@tabler/icons-react"
import { NavbarAdmin } from "../components"
import { NavLink, Outlet } from "react-router-dom"

import { Drawer } from "@material-tailwind/react"
import { useState } from "react"


export const DashboardAdminPage = () => {
    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <>
            <NavbarAdmin openDrawer={openDrawer} />
            <Drawer open={open} onClose={closeDrawer} className="p-4 bg-primary" >

                <aside className=""  >
                    <div className="">
                        <ul className="space-y-2 font-medium text-white-custom">




                            <li>
                                <NavLink to={'/admin'} className="flex items-center gap-2 p-2 ">

                                    <IconHome />
                                    <span className="flex-1 whitespace-nowrap">General</span>

                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={'/admin/reservations'} className="flex items-center gap-2 p-2 ">

                                    <IconTicket />
                                    <span className="flex-1 whitespace-nowrap">Reservaciones</span>

                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={'/admin/bedrooms'} className="flex items-center gap-2 p-2 ">

                                    <IconLamp />
                                    <span className="flex-1 whitespace-nowrap">Habitaciones</span>

                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </aside>
            </Drawer>

            <div className="p-4 ">
                <div className="p-1 rounded-lg">

                    <Outlet />

                </div>
            </div>

            {/* <DrawerAdmin /> */}



        </>
    )
}
