import { Link, NavLink } from "react-router-dom"
import { useNavbar } from "../hooks"
import { DropdownUser } from "./DropdownUser"
import { IconDiamond } from "@tabler/icons-react";
export const Navbar = () => {

    const { user } = useNavbar()

    return (
        <>
            <div className="navbar bg-accent text-white-custom">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>

                        {/* mobile */}
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-accent rounded-box w-52">
                            <li >
                                <NavLink to={`/`} className={({ isActive, isPending }) => {
                                    return `px-3 py-1 rounded-full text-xs transition-colors ease-in duration-300 ${isPending ? "bg-primary" : isActive ? "bg-primary" : ""}`
                                }}>Inicio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={`/bedrooms`} className={({ isActive, isPending }) => {
                                    return `px-3 py-1 rounded-full text-xs transition-colors ease-in duration-300  ${isPending ? "bg-primary" : isActive ? "bg-primary" : ""}`
                                }}>Habitaciones</NavLink>

                            </li>
                            <li>
                                <NavLink to={`/location`} className={({ isActive, isPending }) => {
                                    return `px-3 py-1 rounded-full text-xs transition-colors ease-in duration-300 ${isPending ? "bg-primary" : isActive ? "bg-primary" : ""}`
                                }}>¿Dónde estamos?</NavLink>

                            </li>
                            <div className="pt-4 space-y-2">
                                <NavLink to={`/auth/register`} className="w-full px-4 text-xs rounded-full btn btn-primary btn-sm">
                                    Registrarse
                                </NavLink>
                                <NavLink to={`/auth/login`} className="w-full px-4 text-xs rounded-full btn btn-secondary btn-sm">
                                    Iniciar Sesión
                                </NavLink>
                            </div>
                        </ul>


                    </div>
                    <Link to={'/'} className="text-xl btn btn-ghost"><IconDiamond className="text-white-custom" /> Hotel Jadi</Link>
                </div>

                <div className="hidden navbar-center lg:flex">
                    <ul className="flex items-center px-1">
                        <li className="">
                            <NavLink to={`/`} className={({ isActive, isPending }) => {
                                return `px-3 py-1 rounded-full text-sm transition-colors ease-in duration-300 ${isPending ? "bg-primary" : isActive ? "bg-primary" : ""}`
                            }}>Inicio
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to={`/bedrooms`} className={({ isActive, isPending }) => {
                                return `px-3 py-1 rounded-full text-sm transition-colors ease-in duration-300  ${isPending ? "bg-primary" : isActive ? "bg-primary" : ""}`
                            }}>Habitaciones</NavLink>
                        </li>
                        <li className="">
                            <NavLink to={`/location`} className={({ isActive, isPending }) => {
                                return `px-3 py-1 rounded-full text-sm transition-colors ease-in duration-300 ${isPending ? "bg-primary" : isActive ? "bg-primary" : ""}`
                            }}>¿Dónde estamos?</NavLink>
                        </li>

                    </ul>
                </div>

                {/* desktop */}
                <div className="hidden navbar-end lg:flex">
                    {
                        user.isAuth
                            ? <DropdownUser />
                            : <div className="lg:flex lg:items-center lg:gap-2">
                                <NavLink to={`/auth/register`} className="px-4 rounded-full btn btn-primary btn-sm">Registrarse</NavLink>
                                <NavLink to={`/auth/login`} className="px-4 rounded-full btn btn-secondary btn-sm">Iniciar Sesión</NavLink>
                            </div>

                    }


                </div>
            </div>
        </>
    )
}
