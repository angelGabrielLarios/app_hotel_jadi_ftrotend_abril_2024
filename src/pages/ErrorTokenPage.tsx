import { NavLink } from "react-router-dom";
import errorsvg from "../../public/images/error_svg.svg";

export const ErrorTokenPage = () => {
    return (
        <>
            <main className="flex flex-col items-center justify-center min-h-screen ">

                <section className="container p-8 mx-auto rounded-lg shadow-lg">

                    <img src={errorsvg} alt="ilustracion de error" className="block mx-auto mb-4 w-36 md:w-80" />
                    <h1 className="mb-6 text-xl font-bold text-center text-error sm:text-2xl md:3xl lg:text-4xl ">
                        Error en el token de recuperación
                    </h1>

                    <p className="mb-4 text-center">
                        Asegurasé que el token es válido, sino vuelva a solicitar otro correo de recuperación
                    </p>
                    <p className="text-center">
                        <NavLink to={`/auth/recovery-password`} className={`btn btn-secondary `} >Solicitar otro correo de recuperación</NavLink>
                    </p>
                </section>
            </main>
        </>
    )
}
