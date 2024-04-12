import { NavLink } from "react-router-dom"
import { convertToCurrency } from "../helpers"
import { IBedroomResponse } from "../API"

interface Props extends IBedroomResponse { }
export const CardBedroom = ({ id, price_for_one_night, type, url_image }: Props) => {
    return (
        <>
            <div className="rounded-lg shadow-xl card text-black-custom animate-fade">
                <figure><img src="/images/bedroom_estandar.webp" alt="Shoes" className="" /></figure>
                <div className="card-body">
                    <header className="flex items-center justify-between">
                        <h2 className="font-extrabold capitalize card-title lg:text-xl">{type}</h2>

                        <p className="space-x-2 text-right text-primary ">
                            <span className="badge border-primary bg-white-custom text-black-custom">Precio por noche</span>
                            <span>{convertToCurrency({ amount: price_for_one_night, locales: 'en', currencyCode: 'MXN' })}</span>
                        </p>
                    </header>

                    <div className="flex items-center justify-end">
                        <NavLink
                            to={`/bedroom-info/${id}`}
                            className="rounded-full btn btn-primary text-white-custom font-code_pro"

                        >
                            Más Detalles
                        </NavLink>
                    </div>
                </div>

            </div>
        </>
    )
}
