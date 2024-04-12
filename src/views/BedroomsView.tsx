import { CardBedroom } from "../components"
import { useBedroomsView } from "../hooks"


export const BedroomsView = () => {

    const { bedrooms } = useBedroomsView()
    return (
        <main className="min-h-screen ">

            <section className="p-4 md:p-6 lg:p-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold text-black-custom relative animate-fade-left animate-duration-[2500ms]">
                    Habitaciones
                </h1>

                <article className="grid items-start gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 lg:p-8">
                    {
                        bedrooms.map((bedroom) => {
                            return (
                                <CardBedroom
                                    id={bedroom.id}
                                    key={bedroom.id}
                                    type={bedroom.type}
                                    price_for_one_night={bedroom.price_for_one_night}
                                    num_king_size_beds={bedroom.num_king_size_beds}
                                    num_restroom={bedroom.num_restroom}
                                    num_single_beds={bedroom.num_single_beds}
                                    num_tv={bedroom.num_tv}
                                    url_image={bedroom.url_image}

                                />
                            )
                        })
                    }
                </article>
            </section>

        </main >
    )
}
