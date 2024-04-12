import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"
import { URL_API } from "../API"
import { useButtonPaypal } from "../hooks"
import { IconCheck } from "@tabler/icons-react"
import { NavLink } from "react-router-dom"

interface Props {
    amount_value: number,
    fn(): void
}
export const ButtonPaypal = ({ fn, amount_value }: Props) => {

    const { amountValueRef, modalPaymentSuccessRef } = useButtonPaypal({ amount_value })

    const urlAPI = URL_API
    const [{ isPending }] = usePayPalScriptReducer();

    return (


        <>
            {
                isPending ? <div className="text-center"><span className="loading loading-bars loading-md"></span></div> :
                    <>

                        <p className="text-xs text-center md:text-sm ">
                            Presiona el boton de <span className="font-bold text-primary">paypal</span> para realizar la <span className="font-bold text-primary">reservación</span>
                        </p>
                        <PayPalButtons

                            className="w-full root-btn-paypal"
                            createOrder={
                                async (data, actions) => {
                                    try {
                                        console.log({ data, actions });
                                        console.log(amountValueRef.current, `ButtonPaypal en createOrder`)
                                        const response = await fetch(`${urlAPI}/paypal/create_order`, {
                                            method: "post",
                                            headers: { "Content-Type": "application/json; charset=utf-8" },
                                            body: JSON.stringify({
                                                "intent": "capture",
                                                "amount_value": `${amountValueRef.current}`
                                            })
                                        });

                                        const order = await response.json();
                                        return order.id;
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }

                            }
                            onApprove={
                                async (data, actions) => {
                                    try {
                                        console.log({ data, actions });
                                        const order_id = data.orderID;
                                        const response = await fetch(`${urlAPI}/paypal/complete_order`, {
                                            method: "post",
                                            headers: { "Content-Type": "application/json; charset=utf-8" },
                                            body: JSON.stringify({
                                                "intent": "capture",
                                                "order_id": order_id
                                            })
                                        });

                                        await response.json();
                                        fn()
                                        modalPaymentSuccessRef.current?.showModal()


                                    } catch (error) {
                                        console.log(error);
                                    }
                                }
                            }

                            onCancel={(data, actions) => {
                                console.log({
                                    data,
                                    actions
                                })
                            }}
                            onError={(err) => {
                                console.log({ err })
                            }}
                            style={{

                                layout: "horizontal",

                                label: 'buynow',
                                shape: "rect",
                                tagline: false

                            }} />
                        <dialog className="modal" ref={modalPaymentSuccessRef}>
                            <div className="modal-box">

                                <div className="flex flex-col items-center space-y-2">
                                    <IconCheck className="mx-auto text-success size-16" />
                                    <h3 className="text-base font-bold text-center md:text-lg text-success">Pago realizado correctamente</h3>
                                    <NavLink to={`/`} className="btn bg-success hover:bg-green-800">continuar</NavLink>
                                </div>

                            </div>
                        </dialog>
                    </>

            }




        </>



    )
}
