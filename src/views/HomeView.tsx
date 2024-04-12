import { NavLink } from "react-router-dom"
import { useHomeViewt } from "../hooks"


export const HomeView = () => {

    const { isMobile } = useHomeViewt()
    return (
        <>
            <main
                className="relative min-h-screen bg-white-custom md:flex md:justify-center md:items-center"

            >
                {<img src="/images/wave_2.svg" alt="" className="block absolute top-0 object-cover h-[500px] md:h-[600px] m-0" />}

                <section className="px-4 md:px-6 lg:px-8 pt-14 md:pt-0 md:grid md:grid-cols-2">
                    <article className="space-y-4">
                        <h1 className=" text-2xl md:text-3xl lg:text-4xl uppercase font-bold text-black-custom relative animate-fade-left animate-duration-[2500ms]">
                            Reservar <br />
                            <span className="text-secondary ">Habitacion</span>
                        </h1>
                        <p className="text-black-custom relative text-xs sm:text-sm md:text-base animate-fade-left animate-duration-[2500ms]">
                            Bienvenido a nuestra aplicación web exclusiva para reservar habitaciones de hotel, donde la comodidad y la conveniencia se encuentran con la elegancia. Descubre una experiencia de reserva sin complicaciones que transforma tus planes de viaje en momentos inolvidables.
                        </p>
                        <NavLink
                            className={`btn  rounded-full${isMobile ? 'btn-sm' : ''} btn-secondary text-black-custom text-xs md:text-sm relative z-20`}
                            to={`/bedrooms`}

                        >Reservar ahora
                        </NavLink>
                    </article>

                    <img src="/images/hero_image.svg" alt="" className="relative animate-fade-right animate-duration-[2500ms]" />


                </section>

            </main>
        </>
    )
}
