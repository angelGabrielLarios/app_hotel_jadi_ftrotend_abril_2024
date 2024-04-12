import {
    Drawer,
    Button,
} from "@material-tailwind/react";
import { IconHome, IconTicket } from "@tabler/icons-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


export function DrawerAdmin() {
    const [open, setOpen] = useState(false);


    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <>
            <Button onClick={openDrawer}>Open Drawer</Button>
            <Drawer open={open} onClose={closeDrawer} className="z-50 p-4 bg-primary " >
                {/*  <div className="flex items-center justify-between mb-6 ">
                    <Typography variant="h5" color="blue-gray">
                        Material Tailwind
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <Typography color="gray" className="pr-4 mb-8 font-normal">
                    Material Tailwind features multiple React and HTML components, all
                    written with Tailwind CSS classes and Material Design guidelines.
                </Typography>
                <div className="flex gap-2">
                    <Button size="sm" >
                        Documentation
                    </Button>
                    <Button size="sm">Get Started</Button>
                </div> */}
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

                        </ul>
                    </div>
                </aside>
            </Drawer>
        </>
    );
}