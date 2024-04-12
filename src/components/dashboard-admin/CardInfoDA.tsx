import { IconDoor, IconDoorOff, IconHotelService } from "@tabler/icons-react"

type typeCardInfoDA = 'total' | 'busy' | 'available'

interface Props {
    num: number
    type: typeCardInfoDA
}

const getDescription = (type: typeCardInfoDA) => {
    switch (type) {
        case 'total':
            return `Total`
        case 'available':
            return `Disponibles`
        case 'busy':
            return `Ocupadas`
    }
}

const getIcon = (type: typeCardInfoDA) => {
    switch (type) {
        case 'total':
            return <IconDoor className="text-primary size-10" />
        case 'available':
            return <IconHotelService className="text-success size-10" />
        case 'busy':
            return <IconDoorOff className="text-error size-10 " />
    }
}

export const CardInfoDA = ({ num, type }: Props) => {
    return (


        <div className="max-w-sm p-6 bg-white border rounded-lg shadow-lg text-black-custom">
            {getIcon(type)}

            <h5 className="mb-2 text-2xl font-semibold tracking-tight ">
                {num}
            </h5>
            <p className="mb-3 font-normal ">{getDescription(type)}</p>

        </div>


    )
}
