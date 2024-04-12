
import { IconBedFilled, IconDeviceTv, IconBath, IconBuildingSkyscraper } from '@tabler/icons-react';
import { convertToCurrency } from '../helpers';
import { Link } from 'react-router-dom';

import { useBedroomInfoPage } from '../hooks';


export const BedRoomInfoPage = () => {


    const { bedroom, isShowAlertError } = useBedroomInfoPage()


    return (
        <>
            <main className="min-h-screen bg-[#F6F7FB] pt-10">
                <section className="px-4 md:px-6 lg:px-8 ">
                    <article className='md:w-[40rem] mx-auto bg-white-custom shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-xl overflow-hidden mt-12'>
                        <img src="/public/images/bedroom_estandar.jpg" alt="" className="block object-cover w-full mx-auto h-52 " />

                        <article className='p-4 space-y-2 sm:p-5 md:p-6'>
                            <h1 className="text-2xl font-opens_sans_bold text-black-custom md:text-3xl lg:text-4xl">
                                Habitación {bedroom.type}
                            </h1>


                            {/* <div className='flex items-center gap-2'>
                                <div
                                    className='flex items-center gap-2 '
                                >
                                    {
                                        [1, 2, 3, 4, 5].map((index) => {
                                            return <IconStar
                                                key={index}
                                                className='fill-yellow-400 stroke-yellow-400' />
                                        })
                                    }
                                </div>
                                <p className='font-code_pro'>
                                    5.0
                                </p>
                            </div> */}


                            <h3 className='text-black-custom font-opens_sans_bold'>
                                La habitación ofrece
                            </h3>

                            <ul className='flex items-center gap-4'>
                                {
                                    bedroom.num_king_size_beds
                                        ? <li className='flex items-center gap-1 text-primary'>
                                            <IconBedFilled /> <span className='text-xs sm:text-sm md:text-base'>{bedroom.num_king_size_beds} cama(s) king size</span>
                                        </li> :
                                        null
                                }
                                {
                                    bedroom.num_single_beds
                                        ? <li className='flex items-center gap-1 text-primary'>
                                            <IconBedFilled /> <span className='text-xs sm:text-sm md:text-base'>{bedroom.num_single_beds} cama(s) individual</span>
                                        </li> :
                                        null
                                }
                                {
                                    bedroom.num_restroom
                                        ? <li className='flex items-center gap-1 text-primary'>
                                            <IconBath /> <span className='text-xs sm:text-sm md:text-base'>{bedroom.num_restroom} baño(s)</span>
                                        </li> :
                                        null
                                }

                                {
                                    bedroom.num_tv
                                        ? <li className='flex items-center gap-1 text-primary'>
                                            <IconDeviceTv /> <span className='text-xs sm:text-sm md:text-base'>{bedroom.num_tv} TV(s)</span>
                                        </li> :
                                        null
                                }

                            </ul>
                            <p className='text-black-custom'>
                                precio por 1 noche es <span className='text-2xl font-code_pro text-primary'>{convertToCurrency({ amount: bedroom.price_for_one_night, locales: 'en', currencyCode: 'MXN' })}</span>
                            </p>


                            {/* {
                                isActiveReservationGlobal
                                    ? <p>
                                        Ya cuenta con una reservacion activa, no puedes volver a reservar
                                    </p>
                                    : <div className='flex justify-center'>
                                        <Link
                                            to={`/reserve/${bedroom.type}`}
                                            className='btn btn-secondary'
                                            state={{ bedroom }}
                                        >
                                            reservar <IconBuildingSkyscraper />
                                        </Link>
                                    </div>
                            } */}
                            {
                                isShowAlertError

                                    ?
                                    <div role="alert" className="alert alert-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current shrink-0" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                        <span>Ya no existen habitaciones disponibles</span>
                                    </div>

                                    : <div className='flex justify-center'>
                                        <Link
                                            to={`/reserve/${bedroom.type}`}
                                            className='btn btn-secondary'
                                            state={{ bedroom }}
                                        >
                                            reservar <IconBuildingSkyscraper />
                                        </Link>
                                    </div>
                            }


                        </article>
                    </article>
                </section>

            </main>
        </>
    )
}
