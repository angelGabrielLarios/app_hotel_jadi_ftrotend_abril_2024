import { IconPhone, IconMapPinFilled, IconBrandWhatsapp } from "@tabler/icons-react"
import { useLocationView } from "../hooks"



export const LocationView = () => {

    const { loadMap } = useLocationView()
    return (
        <>
            <main className="bg-[#F6F7FB] min-h-screen">
                <section
                    className="p-4 md:p-6 lg:p-8 text-black-custom"
                >
                    <h1 className="font-agrandir text-2xl md:text-3xl lg:text-4xl uppercase font-bold text-black-custom relative animate-fade-left animate-duration-[2500ms] mb-4">
                        Contacto
                    </h1>

                    <article className="grid grid-cols-2 gap-4">


                        <iframe
                            className="block w-full rounded-xl"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.1542875425944!2d-98.66575892572921!3d20.663301080896147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d13ab5a44ad63d%3A0x298f067170ca6aa2!2sHotel%20Jadi!5e0!3m2!1ses-419!2smx!4v1706034365231!5m2!1ses-419!2smx" height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            onLoad={() => loadMap()}

                        />




                        <div>
                            <ul>
                                <li className="py-2 ">
                                    <a href="https://www.google.com.mx/maps/place/Hotel+Jadi/@20.6633061,-98.6680549,17z/data=!3m1!4b1!4m9!3m8!1s0x85d13ab5a44ad63d:0x298f067170ca6aa2!5m2!4m1!1i2!8m2!3d20.6633011!4d-98.663184!16s%2Fg%2F11cnb9l3hj?entry=ttu" className="flex items-center gap-1" target="_blank">
                                        <IconMapPinFilled className="size-5 fill-black-custom stroke-black-custom" />

                                        Tepeyac, 43203 Zacualtipán, Hgo.
                                    </a>
                                </li>
                                <li className="py-2">

                                    <a href="tel:+527747420973" className="flex items-center gap-1" target="_blank">
                                        <IconPhone /> 774 742 0973
                                    </a>
                                </li>

                                <li className="py-2 ">
                                    <a href="https://wa.me/527747420973" className="flex items-center gap-1" target="_blank">
                                        <IconBrandWhatsapp /> 774 742 0973
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </article>

                </section>
            </main>

        </>
    )
}
