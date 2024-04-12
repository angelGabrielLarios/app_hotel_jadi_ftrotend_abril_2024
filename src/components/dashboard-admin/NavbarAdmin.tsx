import { IconDotsCircleHorizontal, IconLogout, IconUser, IconUserShield } from "@tabler/icons-react"
import { useNavbarAdmin } from "../../hooks"

interface Props {
    openDrawer(): void
}
export const NavbarAdmin = ({ openDrawer }: Props) => {

    const { user, logout, navigate } = useNavbarAdmin()

    return (
        <>
            <nav className="col-span-6 px-10 navbar bg-base-100">
                <div className="flex-1">
                    {/* <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="btn drawer-button">
                            <IconDotsCircleHorizontal />
                        </label>
                    </div> */}

                    <button onClick={openDrawer}>
                        <IconDotsCircleHorizontal className="text-primary size-6" />
                    </button>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <IconUserShield className="text-primary" />

                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="capitalize">
                                    <IconUser className="text-primary" /> {`${user.firstName} ${user.lastName}`}
                                </a>
                            </li>
                            <li onClick={() => {
                                logout()
                                navigate('/')
                            }}>
                                <a className="text-error">
                                    <IconLogout />
                                    Cerrar Sesion
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
