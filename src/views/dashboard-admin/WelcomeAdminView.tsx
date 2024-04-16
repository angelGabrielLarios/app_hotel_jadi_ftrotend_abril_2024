import { IconDotsCircleHorizontal } from "@tabler/icons-react";
import dashboard from "../../../public/images/dashboard.svg";

export const WelcomeAdminView = () => {
    return (
        <article className="flex flex-col items-center justify-start min-h-screen">

            <img src={dashboard} alt="dashboard admin" className="w-full md:w-[44rem] mb-4" />
            <h1 className="py-3 mb-10 text-xl font-bold text-center capitalize text-primary sm:text-2xl md:3xl lg:text-4xl">
                ¡Bienvenido al panel de administrador!
            </h1>
            <p className="w-full text-sm text-center">
                Abre la opción <IconDotsCircleHorizontal className="inline text-primary" /> para ver las acciones que puedes hacer
            </p>
        </article>
    )
}
