import { MutableRefObject } from 'react'
import { TypesModal } from './types'
import { IconCheck, IconExclamationCircle } from '@tabler/icons-react'
interface Props {
    message: string
    modalRef: MutableRefObject<HTMLDialogElement | null>;
    type: TypesModal | null
}

const getTypeIcon = (type: TypesModal | null) => {
    switch (type) {
        case 'success': {
            return (
                <IconCheck className='text-success' />
            )
        }
        case 'error': {
            return (
                <IconExclamationCircle className='text-error' />
            )
        }
    }
}
export const Modal = ({ message, modalRef, type }: Props) => {

    return (
        <>
            <dialog
                ref={modalRef}
                className="bg-opacity-85 bg-slate-50 modal"

            >
                <section className="bg-white border rounded-md shadow-lg modal-box">
                    <article
                        className='flex items-center justify-center mb-4'
                    >
                        {getTypeIcon(type)}
                    </article>

                    <form method="dialog">
                        <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                    </form>

                    <h3 className={`font-bold text-center text-xs sm:text-sm md:text-base ${type === "error" ? 'text-error' : 'text-success'}`}>{message}</h3>

                </section>
            </dialog>
        </>
    )
}
